CC=clang++
LD=wasm-ld
PORT=8002

all: th.wasm th.html deploy

deploy:
	python3 -m http.server $(PORT)

th.o: th.cpp
	$(CC) -c --target=wasm32 -nostdlib th.cpp

th.wasm: th.o
	$(LD) --no-entry --export-all th.o -o th.wasm 

clean:
	rm th.o th.wasm
