#include <stdlib.h>
#include <stdio.h>

/*
** LA PRECISION:
**
** fonctionnement normal
**
**  INT: si > ajoute des 0(a gauche meme avec flag -), si < affiche le chiffre(0 compris)
**  STR: si > ajoute des espaces(a droite avec flag -), si < cut la chaine(0 compris)
**
** GENERAL
**  un . seul sans 0 apres = .0
**  un .- la precision n'a jamais existe
**  par defaut pour un int, precision = 1
**
** cas indetermine
**
**  precision negative
**   INT:
**   STR:
**   avec une lettre random:
**   avec un modifieur:
**   avec un specifieur:
**
** OCTAL
**
** =OSEF
**/


int	main(void){
	printf("fonctionnement normal:\n");

	printf("flag = %%.0d: aa|%.0d|aa\n", 53); //le 0 ou pas change rien pour int
	printf("flag = %%.d: aa|%.d|aa\n", 53);
	printf("\n");
	printf("flag = %%.1d: aa|%.1d|aa\n", 53); //test avec int quand > < avec flag -
	printf("arg(533), flag = %%.2d: aa|%.2d|aa\n", 533);
	printf("flag = %%.4d: aa|%.4d|aa\n", 53);
	printf("flag = %%-.4d: aa|%-.4d|aa\n", 53);
	printf("\n");
	printf("flag = %%.0s: aa|%.0s|aa\n", "hasard"); //le 0 ou pas change rien pour str
	printf("flag = %%.s: aa|%.s|aa\n", "hasard");
	printf("\n");
	printf("flag = %%.1s: aa|%.1s|aa\n", "hasard"); //test avec str quand > < avec flag -
	printf("flag = %%.10s: aa|%.10s|aa\n", "hasard");
	printf("flag = %%-.10s: aa|%-.10s|aa\n", "hasard");
	printf("\n");

	printf("\ncas indetermine\n");

	printf("flag = %%.-d: aa|%.-d|aa\n", 53); //negatif sur int
	printf("flag = %%.-s: aa|%.-s|aa\n", "soja"); //negatif sur str
	printf("\n");
	printf("flag = %%7.-d: aa|%7.-d|aa\n", 53); //negatif avec largeur de champ sur int
	printf("flag = %%7.-s: aa|%7.-s|aa\n", "soja"); //negatif avec largeur de champ sur str
	printf("\n");
	printf("flag = %%.w: aa|%.w|aa\n"); //avec une lettre random
	printf("flag = %%.h: aa|%.h|aa\n"); //avec un modifieur
	printf("flag = %%.d: aa|%.d|aa\n", 53); //avec un specifieur
	printf("\n");

	return EXIT_SUCCESS;
}
