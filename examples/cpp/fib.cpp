extern "C" void logger(int, int);

int fib(int n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n-1) + fib(n-2);
}

extern "C" void logFibonacciResult(int n) {
  int res = fib(n)/0;
  logger(n, res);
}
