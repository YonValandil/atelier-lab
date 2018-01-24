#include "libft.h"
#include "stdio.h"

void	me_put_int(int i)
{
	write(1, &i, 1);
}

void	str_int(int str[])
{
	while(*str != 0)
	{
		me_put_int(*str);
		str++;
	}
}

void	t_int(int *traitement)
{
	static int test = '1';
	int *ptr_A;

	ptr_A = &test;
	
	me_put_int(*ptr_A);
	ft_putchar('\n');

	*ptr_A += 1;
	*traitement += 1;
}

int	main(void)
{
	int A;
	int *ptr_A;
	char str[7] = {'H', 'e', 'l', 'l', 'o', '!', '\0'};
	char str2[] = "coucou2"; //precision de la taille possible (dans ce cas prevoir \0)
	char *str3 = "coucou3"; //const
	char *test;
	char *test2;
	int tab[10] = {65, 50};

	//str2[] = "coucou222"; pas de modif depuis un tableau ?
	str3 = "coucou333"; //reecriture (parce que no const)
	*test = 42;
	//*test2 = 21;

	A = 65;
	ptr_A = &A;

	me_put_int(*ptr_A);
	ft_putchar('\n');
	
	t_int(ptr_A);

	me_put_int(*ptr_A);
	ft_putchar('\n');
	
	t_int(ptr_A);

	me_put_int(*ptr_A);
	ft_putchar('\n');
	
	ft_putchar('\n');
	ft_putstr(str);

	ft_putchar('\n');
	ft_putstr(str2);
	
	ft_putchar('\n');
	ft_putstr(str3);
	
	ft_putchar('\n');
	ft_putchar(str[4]);
	ft_putchar(*(str + 4));
	
	ft_putchar('\n');
	ft_putchar(*test);
	ft_putchar('\n');
	ft_putstr(test);
	//ft_putchar(*test2);

	ft_putchar('\n');
	printf("val tab : %d\n", tab[2]);
	str_int(tab);
	ft_putchar('\n');
	
	return (0);
}
