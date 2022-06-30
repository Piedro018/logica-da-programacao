

/*

if(operacao >= 1 && operacao <=4)
{

    let num1 =Number (prompt(`Digite o primeiro valor da operação`))
    let num2 =Number (prompt(`Digite o primeiro valor da operação`))
    let resultado

    if(operacao == 1)
    {
    resultado = num1 + num2 
    }else{
        if(operacao == 2){
        resultado = num1 - num2 
        }else{
            if(operacao == 3) {
            resultado = num1 * num2 
            }else{
                if(operacao == 4){
                resultado = num1 / num2 
                }
            }
        
        }
    
    }
    
    alert(`Resultado da operação: ${resultado}`)

}else{
    alert(`Digite um valor entre 1 e 4! `)
}
*/



    let soma      = (num1, num2) => num1 + num2
    let subtracao = (num1, num2) => num1 - num2
    let multi     = (num1, num2) => num1 * num2
    let divisao   = (num1, num2) => num1 / num2

    let cont = 1

while( cont ==1){
  
  let operacao = prompt(`Digite a operção, 1-soma, 2-subtração, 3-multiplição, 4-divisão`)
  let num1 =Number (prompt(`Digite o primeiro valor da operação`))
  let num2 =Number (prompt(`Digite o primeiro valor da operação`))
    
 
    switch (operacao) {
        case '1':
            alert(`Resultado da operação: ${soma(num1,num2)}`)
            break;
        case '2':
            alert(`Resultado da operação: ${subtracao(num1,num2)}`) 
            break;
        case '3':
            alert(`Resultado da operação: ${multi(num1,num2)}`)
            break;
        case '4':
            alert(`Resultado da operação: ${divisao(num1,num2)}`) 
            break;
        default:
            alert(`Digite um valor entre 1 e 4! `)
            break;
            
        }

    cont = prompt (`Escreva 1- Para continuar ou 2- Para parar`)

}
        

   