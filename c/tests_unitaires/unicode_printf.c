#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
#include <locale.h>

int		main(void) {
	setlocale(LC_ALL, "");
	int i;
	wchar_t test = L'\u3042';
	wchar_t test2 = L'\x00E9';
	i = printf("test: %C, %lc", test, test2);
	printf(" %d\ntest: %C, %lc\n",i, L'\x3042', L'\x00E9');

	return EXIT_SUCCESS;
}
