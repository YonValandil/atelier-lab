#include <stdlib.h>
#include <stdio.h>

int	addition(int nb1, int nb2)
{
	return (nb1 + nb2);
}

int	soustraction(int nb1, int nb2)
{
	return (nb1 - nb2);
}

int	calculer(int nb1, int nb2, int (*ptr_fonction)(int, int))
{
	return (ptr_fonction(nb1, nb2));
}

int	main(void)
{
	int ret, ret2, ret3;

	//----- 1 -----
	//declaration d'un ptr sur fnct et utilisation direct par assignation:
	//on peut creer un typedef du ptr sur fonction.
	int (*ptr_fonction)(int, int);

	ptr_fonction = &soustraction;
	ret = ptr_fonction(33, 12); //ret = (*ptr_fonction)(33, 12);
	printf("%d\n", ret);

	//----- 2 -----
	//en l'appelant depuis une autre fonction (fnct de callback):
	//fonction qui est appelée en argument d'une autre fonction,
	//permet dans la fnct d'utiliser le resultat d'une autre sans la
	//connaitre a l'avance.
	ret2 = calculer(33, 12, &addition);
	printf("%d\n", ret2);

	// ----- 3 -----
	//utilisation avec des tableaux:
	int (*ptr_fonction_tab[2])(int, int) = {&addition, &soustraction};
	
	//int (*ptr_fonction_tab[2])(int, int); //ou en asssignant apres
	//ptr_fonction_tab[0] = &addition;
	//ptr_fonction_tab[1] = &soustraction;
	
	//typedef int (*ptr_fonction)(int, int); //ou avec un typedef
	//ptr_fonction tab_ptr_fonction[2];
	//tab_ptr_fonction[0] = &addition;
	//tab_ptr_fonction[1] = &soustraction;

	ret3 = ptr_fonction_tab[1](54, 50);
	printf("%d\n", ret3);

	return EXIT_SUCCESS;
}
