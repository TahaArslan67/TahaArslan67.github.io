#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
setlocale(LC_ALL,"Turkish");
int sayi;
int birinci;
int ikinci;
int toplam;
while(1){
    printf("Lütfen iki basamakli bir sayi giriniz...\n");
menu:scanf("%d",&sayi);
if(sayi>9 && sayi <100){

    birinci = sayi/10;
    ikinci = sayi%10;
    toplam = birinci+ikinci;
    printf("%d\n",toplam);


}

else{
    printf("Lütfen 10-100 arasýnda bir sayý giriniz..\n");
    goto menu;
}
}
      return 0;
}