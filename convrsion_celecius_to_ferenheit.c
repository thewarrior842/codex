#include<stdio.h>
int main(){
  /*the formula of convertion is(C/5)=((F-32)/9)
  then for inputting the celecius temperature reading we should devolop the formula
  that should be F=C*((9/5)+32)*/
 float C,F;
 printf("Enter the temperature at degree celcius: ");
 scanf("%f",&C);
 F = (C*(9.0/5.0))+32;
 printf("THE TEMPERATURE IN FERENHITE IS: %f" , F);
 return 0;
}