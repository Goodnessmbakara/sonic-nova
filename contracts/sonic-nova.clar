;; Sonic Nova - High-Speed Stacks Gaming Hub
;; Powered by Clarity 4

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-not-authorized (err u100))
(define-constant err-invalid-streak (err u101))

;; Data Maps
(define-map user-streaks
  principal
  {
    current-streak: uint,
    total-actions: uint,
    last-action-block: uint,
    highest-streak: uint
  }
)

(define-map global-stats
  uint
  {
    total-nova-actions: uint,
    unique-players: uint
  }
)

;; Data Vars
(define-data-var total-players uint u0)

;; Public Functions

;; @desc Record a "Sonic Action" to build a streak
(define-public (sonic-action)
  (let
    (
      (user-data (default-to { current-streak: u0, total-actions: u0, last-action-block: u0, highest-streak: u0 } (map-get? user-streaks tx-sender)))
      (current-block block-height)
      (last-block (get last-action-block user-data))
      (is-consecutive (and (> last-block u0) (< (- current-block last-block) u144))) ;; Within ~24 hours for daily streak, or shorter for speed
      (new-streak (if is-consecutive (+ (get current-streak user-data) u1) u1))
      (new-highest (if (> new-streak (get highest-streak user-data)) new-streak (get highest-streak user-data)))
    )
    
    ;; Update user data
    (map-set user-streaks tx-sender
      {
        current-streak: new-streak,
        total-actions: (+ (get total-actions user-data) u1),
        last-action-block: current-block,
        highest-streak: new-highest
      }
    )
    
    ;; Update global stats
    (update-global-stats)
    
    (ok { streak: new-streak, total: (+ (get total-actions user-data) u1) })
  )
)

;; Private Functions

(define-private (update-global-stats)
  (let
    (
      (stats (default-to { total-nova-actions: u0, unique-players: u0 } (map-get? global-stats u0)))
    )
    (map-set global-stats u0
      {
        total-nova-actions: (+ (get total-nova-actions stats) u1),
        unique-players: (var-get total-players) ;; Simplified for MVP
      }
    )
  )
)

;; Read Only Functions

(define-read-only (get-user-data (user principal))
  (ok (map-get? user-streaks user))
)

(define-read-only (get-global-stats)
  (ok (map-get? global-stats u0))
)
