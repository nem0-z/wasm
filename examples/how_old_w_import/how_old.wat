(module
  (func $log (import "imports" "log_func") (param i32))

  (func $log_how_old (param $year_now i32) (param $year_born i32)
    get_local $year_now
    get_local $year_born
    i32.sub
    call $log)

  (export "log_how_old" (func $log_how_old))
)
