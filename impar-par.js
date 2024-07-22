const listaDaSequenciaNumerica = [];  // Array da sequência númerica.

const imparOuPar = prompt("Qual sequência numérica é a desejada? Digite Ímpar ou Par."); /* Atribuição através do prompt, será 
digitado qual é a sequência escolhida. */
// Variáveis declaradas, mas não atribuídas para que todos os escopos possam acessar.
let numeroMinimo; 

let numeroMaximo; 

function escolhendoASequencia() {  // Escopo de função.

    if (imparOuPar.toLowerCase() === "ímpar" || imparOuPar.toLowerCase() === "par") {  /* Se a variável estiver atribuída com
        ímpar ou par, então: */

            // Atribuição das variáveis globais numeroMinimo e numeroMaximo, onde será por meio do prompt digitado os limites da sequência.
            numeroMinimo = parseInt(prompt(`Qual é o número mínimo da sequência ${imparOuPar}?`)); 

            numeroMaximo = parseInt(prompt(`Qual é o número máximo da sequência ${imparOuPar}?`));

            sequenciaImparOuPar(); // Será chamada a função.

    } else { // Se não atender a condição, irá aparecer na tela:

            alert("Sequência númerica não disponível, tente novamente!");
    }
}

escolhendoASequencia(); // chamada de função.

function sequenciaImparOuPar() { // Escopo de função.

    let contador = numeroMinimo; // Declaração e atribuição do valor da variável numeroMinimo.

    while (contador <= numeroMaximo) { // Equanto contador menor iguaal a numeroMaximo, faça:

        let resto = contador % 2; // Operação para descobrir o resto da divisão.

        if (imparOuPar.toLowerCase() === "par" && resto === 0) {  /* Se a variável imparOuPar for igual a par e a variável
            resto estiver atribuído zero, então:*/

                listaDaSequenciaNumerica.push(contador); /* O método push, empurra o valor do contador para o array
                listaDaSequenciaNumerica. */

        } else { // senão faça:

            if (imparOuPar.toLowerCase() === "ímpar" && resto > 0) {  /* Se a variável imparOuPar for igual a ímpar e a variável
                resto estiver atribuído um valor maior que zero, então: */

                    listaDaSequenciaNumerica.push(contador) /* O método push, empurra o valor do contador para o array
                    listaDaSequenciaNumerica. */
            }
        }

        contador++ // A variável contador recebe ele mesmo e mais 1.
    }

     // Com o while finalizado, aparecerá a sequência numérica desejada em um alert.
    alert(`A sequência ${imparOuPar} entre os números ${numeroMinimo} e ${numeroMaximo} é: \n ${listaDaSequenciaNumerica}.`);
}
