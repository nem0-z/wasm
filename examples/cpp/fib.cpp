#include <iostream>

int fib(int n) {
  std::cout << n << std::endl;
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n-1) + fib(n-2);
}
