#include <stdio.h>
#include <wchar.h>

int		main(void)
{
	printf("char: %zu\nshort: %zu\nint: %zu\nlong: %zu\nlong long: %zu\nfloat: %zu\ndouble: %zu\nlong double: %zu\nwchar_t: %zu\n",
			sizeof(char), sizeof(short), sizeof(int), sizeof(long),
			sizeof(long long), sizeof(float), sizeof(double), sizeof(long double), sizeof(wchar_t));
	return (0);
}
