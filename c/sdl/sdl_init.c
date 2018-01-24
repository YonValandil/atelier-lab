#include <SDL.h>
#include <stdio.h>

int	main(int argc, char **argv){
	SDL_version ver;
	SDL_VERSION(&ver);

	printf("SDL version: %d.%d.%d\n", ver.major, ver.minor, ver.patch);
	return (0);
}

//compilation command: gcc sdl_init.c -o prog $(sdl2-config --cflags --libs) 
