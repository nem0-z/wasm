CC=clang++
LD=wasm-ld
PORT=8002

all: fib.wasm deploy

deploy:
	python3 -m http.server $(PORT)

fib.o: fib.cpp fib.html
	$(CC) -c --target=wasm32 -nostdlib fib.cpp

fib.wasm: fib.o
	$(LD) -allow-undefined-file wasm.syms --no-entry --export-all fib.o -o fib.wasm 

clean:
	rm fib.o fib.wasm
