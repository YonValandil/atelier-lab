# include <stdio.h>
# include <stdlib.h> /*to endure the exit syscall*/

int     main(void)
{
			    printf("test: %hhu\n", 255);
				   printf("test: %hhd\n", 255);
				      printf("test: %hhu\n", -1);
					     printf("test: %hhu\n", -2);
						    printf("test: %hhu\n", -3);
							   printf("test: %hhu\n", -4);
							      printf("test: %hhd\n", -127);

								  return EXIT_SUCCESS;
}
