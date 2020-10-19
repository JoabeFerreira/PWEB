function retornaMaior(num1, num2, num3){
    var maior;
    maior=num1; 
    if(maior<=num2){
        maior=num2;
    }
    if(maior<=num3){
        maior=num3;
    }
    return maior;
}
n1=prompt("Digite o Primeiro numero: ");
n2=prompt("Digite o Segundo numero: ");
n3=prompt("Digite o Terceiro numero: ");

alert("Os numeros digitados foram: "+" "+n1+" "+n2+" "+n3+"\nO maior eh: "+retornaMaior(n1,n2,n3))