programa
{
	
	funcao inicio()

	{
		cadeia ehTerrestre,usaCapacete,capacidadeVeicular,ehPesado, temPedal
		
		escreva("É terrestre?(Sim/Nao): ")
		leia(ehTerrestre)
		se(ehTerrestre =="Sim"){
			escreva("Usa capacete?(Sim/Nao)")
			leia(usaCapacete)
			se (usaCapacete == "Sim"){
				escreva("Então, o transporte escolhido foi um moto!")	
			}senao{
				escreva("Cabe apenas 1 pessoa?(Sim/Nao):")
				leia(capacidadeVeicular)
				se(capacidadeVeicular == "Sim"){
					escreva("É pesado?(Sim/Nao):")
					leia(ehPesado)
					se(ehPesado == "Sim"){
					escreva("Então, o transporte escolhido foi um trator!")
					}senao{
					escreva("Tem pedal?(Sim/Nao):")
					leia(temPedal)
						se(temPedal =="Sim"){
						escreva("Então, o transporte escolhido foi um bicicleta!")
						}
					}
				}
			}
		}
	}
}
					
			
			
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 805; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */