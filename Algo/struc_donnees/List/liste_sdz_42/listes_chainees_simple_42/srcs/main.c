#include "liste.h"
#include <stdio.h>

void	ft_lstdisp(t_list *list, t_list *current)
{
	if(list)
  {
  	while (current != NULL)
  	{
  		printf("\ncurrent->content = %s\n", (char*)current->content);
  		current = current->next;
  	}
  	printf("\nNULL\n");
  }
}

int		main(void)
{
  char *content = "yoyo du poney !";
  char *content2 = "nouveau maillon";
  char *content3 = "dernier test";

  t_list *list;
  t_list *list2;
  t_list *list3;
  t_list *current;

  list = ft_lstnew(content, sizeof(char) * (ft_strlen(content) + 1));
  list2 = ft_lstnew(content2, sizeof(char) * (ft_strlen(content2) + 1));
  list3 = ft_lstnew(content3, sizeof(char) * (ft_strlen(content3) + 1));
  current = list;

  ft_lstadd(&list3, list2);
  ft_lstadd(&list2, list);

  ft_lstdisp(list, current);

   return (0);
}
