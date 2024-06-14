const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que voce entra em uma farmacia, qual o shampoo voce escolheria para o seu cabelo?",
        alternativas: [
            {
                texto: "Wella!",
                afirmacao: "Deixa seu cabelo mais brilhoso, e mais cheiroso"
            },
            {
                texto: "Pantene!",
                afirmacao: "Cabe em qualquer bolso, e deixa o cabelo macio"
            }
        ]
    },
    {
        enunciado: "Qual esmalte sera mais leve para ser passado com pressa?",
        alternativas: [
            {
                texto: "Colorama.",
                afirmacao: "Poucos tons de esmaltes, mas possui um pincel fininho e a cobertura mais leve"
            },
            {
                texto: "Anita.",
                afirmacao: "Esta a pouco tempo no mercado, mas ja possui diversas coloraçoes de esmaltes diferentes, e possui um pincel mais larguinho e a cobertura mais grossa"
            }
        ]
    },
    {
        enunciado: "Na escolha de um creme bom para a sua pele qual voce escolheria?",
        alternativas: [
            {
                texto: "Nivia.",
                afirmacao: "Esta a tempos no mercado porem nao possui cremes para alguns tipos de pele."
            },
            {
                texto: "Oboticario.",
                afirmacao: "Esta a tempos no mercado de trabalho, e possui diversos tipos de cremes e de fragrancias em cremes"
            }
        ]
    },
    {
        enunciado: "Qual body splash sera melhor para voce?",
        alternativas: [
            {
                texto: "Oboticario.",
                afirmacao: "Esta a tempos no mercado, possui kits com os cremes da mesma fragrancia"
            },
            {
                texto: "We pink.",
                afirmacao: "Esta a pouco tempo no mercado de trabalho mas ja possui diversas fragrancias"
            }
        ]
    },
    {
        enunciado: "Qual sabonete facial sera melhor para voce? ",
        alternativas: [
            {
                texto: "Acnezil.",
                afirmacao: "Um sabonete especifico para oleosidade e manchinhas"
            },
            {
                texto: "Sabonete em barra comum.",
                afirmacao: "Lava normalmente, mas nao tem para tipos de pele."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

