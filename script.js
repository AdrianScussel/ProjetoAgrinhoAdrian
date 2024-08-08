const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se sim, o emprego que conseguiu era o que queria?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Mas com o avanço da tecnologia, isso está mudando!!"
            },
            {
                texto: "Não",
                afirmacao: "está mudando vidas"
            }
        ]
    },
    {
        enunciado: "Isso é mais comum do que imaginamos, milhares de jovens passam pela mesma situação. Mas com o avanço da tecnologia no campo está disponibilizando outras oportunidades para os jovens!!Você já ouviu falar em IA?",
        alternativas: [
            {
                texto: "Sim, inclusive utilizo no dia a dia",
                afirmacao: "Veja mais !!"
            },
            {
                texto: "Não, isso é bobagem!!",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Embora ainda muitas pessoas tenham receio conhecer algo novo, como as IAS, ela já tem ajudado em muito as pessoas e as empresas que utilizam dela. Posso citar alguns exemplos, quer saber mais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Não",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Em uma empresa por exemplo, podem utilizar para atender clientes na discagem rápida, e as pessoas no cotidiano podem utilizar para tirar dúvidas. Isso ajudou a ter mais clareza do que as IAS podem fazer?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Espero que tenha ajudado a mudar sua ideia sobre as inteligências artificiais, e mostrado que elas vieram para facilitar as nossas tarefaz diarias, e não prejudicar e roubar o espaço das pessoas!! Qualquer dúvida a respeito fico feliz em ajudar até mais",
        alternativas: [
            {
                texto: "Obrigado, isso realmente mudou minha visão ",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Isso deixou ainda mais claro minha visão sobre as IAS, obrigado",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Obrigado pela atenção, até mas!!";
    textoResultado.textContent = ":)";
    caixaAlternativas.textContent = "";
}

mostraPergunta();