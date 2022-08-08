CC=clang
PORT=8002

test.wasm: test.c test.html
	$(CC) --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export-all -o canvas.wasm test.c

deploy: test.wasm
	python3 -m http.server $(PORT)