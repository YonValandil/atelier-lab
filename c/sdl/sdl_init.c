#include <SDL.h>
#include <stdio.h>

void 	version(void){
	SDL_version ver;
	SDL_VERSION(&ver);

	printf("SDL version: %d.%d.%d\n", ver.major, ver.minor, ver.patch);
}

int		main(int argc, char **argv){
	SDL_Window *window = NULL;

	if(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_EVENTS) != 0) { // SDL_Init return 0 quand reussis
		SDL_Log("Erreur init: > %s\n", SDL_GetError());
		exit(EXIT_FAILURE);
	}
	window = SDL_CreateWindow("titre de la fenetre",		//creation d'une fenetre
								SDL_WINDOWPOS_CENTERED,		//pour x, valeur fixe ou flag
								SDL_WINDOWPOS_CENTERED,		//pour y, fixe ou flag
								400,						//la largeur
								600,						//la hauteur
								SDL_WINDOW_RESIZABLE);		//mode d'affichage (0 par defaut)
	if (window == NULL){ //verifier l'allocation de la var window
		SDL_Log("Erreur crea fenetre: > %s\n", SDL_GetError());
		exit(EXIT_FAILURE);
	}

	SDL_Delay(5000); //met en pause (en ms)
	SDL_Quit(); //quitte la sdl (free etc..)
	return (0);
}

//compilation command: gcc sdl_init.c -o prog $(sdl2-config --cflags --libs)
