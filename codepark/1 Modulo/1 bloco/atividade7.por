/* Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.*/

programa 
{
	funcao inicio() 
	{
		inteiro numero, resultado, contador
		
		escreva("Informe um número para ver sua tabuada: ")
		leia(numero)

		limpa()
		
		para (contador = 1; contador <= 10; contador++) 
		{
			resultado = numero * contador 
			escreva (numero, " X ", contador, " = ", resultado , "\n")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1173; 
 * @DOBRAMENTO-CODIGO = [1];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */