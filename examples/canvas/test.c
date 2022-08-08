const unsigned int WIDTH = 600;
const unsigned int HEIGHT = 600;
unsigned int BUFFER[WIDTH * HEIGHT];

unsigned int colors[] = {
	0xff00ff00,
	0x00ff00ff,
	0xffff0000,
	0x0000ffff,
	0xffffffff,
	0x0001231e
};

unsigned int more_colors[6] = {
	0x123eebba,
	0xff000000,
	0x00ffaabb,
	0xff000000,
	0x56781232,
	0x66666666
};

void draw() {
	unsigned int screen[WIDTH][HEIGHT];
	for (int x = 0; x < WIDTH; x++) {
		for (int y = 0; y < HEIGHT; y++) {
			screen[x][y] = colors[x % 5];
			BUFFER[WIDTH * x + y] = screen[x][y];
		}
	}
}

void fuck_shit_up() {
	int *p;
	int pd = *p;
	unsigned int screen[WIDTH][HEIGHT];
	for (int x = 0; x < WIDTH; x++) {
		for (int y = 0; y < HEIGHT; y++) {
			screen[x][y] = more_colors[x % 5];
			BUFFER[WIDTH * x + y] = screen[x][y];
		}
	}
}