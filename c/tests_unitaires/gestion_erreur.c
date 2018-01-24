#include <stdlib.h>
#include <stdio.h>
#include <string.h> //contient strerror
#include <errno.h>

//IMPORTANT: verifier le retour de toutes les fonctions qu'on utilise (de la stdlib)

int	main(void)
{
	int ret = 0;
	FILE *fic;

	//errno contient un code d'erreur, et l'os peut le traduire en msg d'erreur
	errno = 0; //on initialise errno	

	if((fic = fopen("test", "r")) == NULL){ //test sur un fichier qui n'existe pas avec perror
		perror("ERREUR");
		return EXIT_FAILURE;
	}
	fclose(fic);
	
	if((fic = fopen("test", "r")) == NULL){ //test sur un fichier qui n'existe pas avec strerror
		fprintf(stderr, "%s\n", strerror(errno));
		return EXIT_FAILURE;
	}
	fclose(fic); //normalement checker la value de retour ici aussi

	return EXIT_SUCCESS;
}
