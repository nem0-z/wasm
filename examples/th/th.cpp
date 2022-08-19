const int SIZE = 800 * 600 * 4;
char data[SIZE];

extern "C" void invert() {
	for (int i = 0; i < SIZE; i+=4) {
		data[i] = 255 - data[i];
		data[i+1] = 255 - data[i+1];
		data[i+2] = 255 - data[i+2];
	}
}

extern "C" void changeColorsTowardsGray() {
	for (int i = 0; i < SIZE; i+=4) {
		data[i] -= 5;
		data[i+1] -= 5;
		data[i+2] -= 5;
		data[i+3] -= 3;
	}
}

extern "C" void changeColorsTowardsRGB() {
	for (int i = 0; i < SIZE; i+=4) {
		data[i] += 5;
		data[i+1] += 5;
		data[i+2] += 5;
		data[i+3] += 3;
	}
}

extern "C" void turnOffEveryFifthPixel() {
	for (int i = 0; i < SIZE; i+= 5) {
		data[i] = 0;
	}
}

extern "C" char * getData() {
	return &data[0];
}