CC=clang++
PORT=8002

all: th.wasm
	python3 -m http.server $(PORT)

deploy: th.wasm
	python3 -m http.server $(PORT)

th.o: th.cpp th.html
	$(CC) -c --target=wasm32 -nostdlib th.cpp

th.wasm: th.o
	wasm-ld --no-entry --export-all th.o -o th.wasm 

clean:
	rm th.o th.wasm
