function FiltrarAssuntos(materia){
  if (materia == "matematica"){
    let assuntoOutro = document.getElementById("assuntos_portugues");
    let assuntoOutro2 = document.getElementById("assuntos_literatura");

    // Verifica se o assuntoOutro é diferente de null ou undefined
    const ocultar = assuntoOutro !== null && assuntoOutro !== undefined;
    const ocultar2 = assuntoOutro2 !== null && assuntoOutro2 !== undefined;

    // Se o assuntoOutro for diferente de null ou undefined, oculte-o
    if (ocultar){
      assuntoOutro.style.display = "none";
    }
    if (ocultar2){
      assuntoOutro2.style.display = "none";
    }

    return document.getElementById("assuntos_matematica");
  }else if (materia == "portugues"){
    let assuntoOutro = document.getElementById("assuntos_matematica");
    let assuntoOutro2 = document.getElementById("assuntos_literatura");

    // Verifica se o assuntoOutro é diferente de null ou undefined
    const ocultar = assuntoOutro !== null && assuntoOutro !== undefined;
    const ocultar2 = assuntoOutro2 !== null && assuntoOutro2 !== undefined;

    // Se o assuntoOutro for diferente de null ou undefined, oculte-o
    if (ocultar){
      assuntoOutro.style.display = "none";
    }
    if (ocultar2){
      assuntoOutro2.style.display = "none";
    }

    return document.getElementById("assuntos_portugues");
  }else if (materia == "literatura"){
    let assuntoOutro = document.getElementById("assuntos_matematica");
    let assuntoOutro2 = document.getElementById("assuntos_portugues");

    // Verifica se o assuntoOutro é diferente de null ou undefined
    const ocultar = assuntoOutro !== null && assuntoOutro !== undefined;
    const ocultar2 = assuntoOutro2 !== null && assuntoOutro2 !== undefined;

    // Se o assuntoOutro for diferente de null ou undefined, oculte-o
    if (ocultar){
      assuntoOutro.style.display = "none";
    }
    if (ocultar2){
      assuntoOutro2.style.display = "none";
    }

    return document.getElementById("assuntos_literatura");
  }
}

var pagina = window.location.pathname;
var amount = 3;
var assunto = "marcelo_marmelo_martelo";
var assuntoNome = "Marcelo, Marmelo, Martelo";
var materia = "literatura";
var nivel = "Fácil";
var pontos = 0;

console.log("JavaScript Carregado.");

if (pagina == "/Ficio/materias.html"){
  var mater = document.getElementById("materis");
  var level = document.getElementById("nivels");
  // Salva a Materia
  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage[mater.id]) { // if job is set
      mater.value = localStorage[mater.id]; // set the value
    }
    mater.onchange = async function () {
      localStorage[mater.id] = this.value; // change localStorage on change
      materia = this.value;
      localStorage.setItem('materia', materia);
      console.log("Materia selecionado: " + materia);
    }
  });
  // Salva o Nivel
  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage[level.id]) { // if job is set
      level.value = localStorage[level.id]; // set the value
    }
    level.onchange = async function () {
      localStorage[level.id] = this.value; // change localStorage on change
      nivel = this.value;
      localStorage.setItem('nivel', nivel);
      console.log("Nivel selecionado: " + nivel);
    }
  });

  var button = document.getElementById("butt");
  // Salva a Materia e o Nivel antes de ir para a proxima pagina
  button.addEventListener("click", function (){
    localStorage.setItem('materia', mater.value);
    localStorage.setItem('nivel', level.value);
  });

}else if (pagina == "/Ficio/assunto.html") {
  // Recarrega a Materia e o Nivel selecionado anteriormente
  const materia = localStorage.getItem('materia');
  const nivel = localStorage.getItem('nivel');
  // Printa os valores para garantir que tudo ta certo
  console.log("Materia Selecionada: " + materia);
  console.log("Nivel Selecionada: " + nivel);

  // Baseado na materia, filtra os assuntos
  var selector = FiltrarAssuntos(materia);

  // Guarda o Assunto
  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage[selector.id]) { // if job is set
      selector.value = localStorage[selector.id]; // set the value
    }
    selector.onchange = async function () {
      localStorage[selector.id] = this.value; // change localStorage on change
      assunto = this.value;
      assuntoNome = document.getElementById(assunto).innerHTML;
      localStorage.setItem('assunto', assunto);
      localStorage.setItem('assuntoNome', assuntoNome);
      console.log("Assunto selecionado: " + assunto);
      console.log("Nome do Assunto selecionado: " + assuntoNome);
    }
  });

  // Guarda a Quantidade de Questões
  document.addEventListener('DOMContentLoaded', function () {
    const quantityDropdown = document.getElementById('quantity');
    
    if (localStorage[quantityDropdown.id]) { // if job is set
      quantityDropdown.value = localStorage[quantityDropdown.id]; // set the value
    }
    quantityDropdown.onchange = async function () {
      localStorage[quantityDropdown.id] = this.value; // change localStorage on change
      amount = +this.value;
      localStorage.setItem('amount', amount);
      console.log("Valor selecionado: " + amount);
    }
  });
  var button = document.getElementById("butt");
  // Salva o Assunto e a Quantidade de Questões antes de ir para a proxima pagina
  button.addEventListener("click", function (){
    localStorage.setItem('assunto', selector.value);
    localStorage.setItem('amount', quantityDropdown.value);
  });
}else if (pagina == "/Ficio/questao.html") {

  // Recarrega o Assunto, a Quantidade e o Nivel das Questões
  const assunto = localStorage.getItem('assunto');
  const assuntoNome = localStorage.getItem('assuntoNome');
  const amount = +localStorage.getItem('amount');
  const nivel = localStorage.getItem('nivel');

  // Printa para garantir que ta tudo certo denovo
  console.log("Assunto Selecionada: " + assunto);
  console.log("Quantia Selecionada: " + amount);
  console.log("Nivel Selecionada: " + nivel);

  // As questões em si
  const Questions = [
    {
      s: "numeros",
      l: "Fácil",
      q: "Quais os numeros faltando na sequencia: \"1 _ 3 4 _ 6 7 _ 9 10\"",
      a: [
        { text: "12 - 8 - 2", isCorrect: false },
        { text: "8 - 2 - 5", isCorrect: false },
        { text: "2 - 5 - 8", isCorrect: true },
        { text: "5 - 8 - 2", isCorrect: false },
      ],
    },
    {
      s: "numeros",
      l: "Fácil",
      q: "Quais os numeros faltando na sequencia: \"10 _ _ 13 14 _ 16 17 18 _ 20\"",
      a: [
        { text: "10 - 21 - 5 - 6", isCorrect: false },
        { text: "1 - 2 - 7 - 14", isCorrect: false },
        { text: "11 - 12 - 15 - 19", isCorrect: true },
        { text: "5 - 10 - 1 - 2", isCorrect: false },
      ],
    },
    {
      s: "numeros",
      l: "Fácil",
      q: "Quais os numeros faltando na sequencia: \"20 _ 22 23 _ _ 26 _ 28 _ 30\"",
      a: [
        { text: "10 - 11 - 20 - 42 - 2", isCorrect: false },
        { text: "5 - 21 - 24 - 10 - 11", isCorrect: false },
        { text: "21 - 24 - 25 - 27 - 29", isCorrect: true },
        { text: "12 - 54 - 23 - 68 - 13", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 10 + 6 ?",
      a: [
        { text: "26", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "16", isCorrect: true },
        { text: "61", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 5 + 4 ?",
      a: [
        { text: "3", isCorrect: false },
        { text: "12", isCorrect: false },
        { text: "9", isCorrect: true },
        { text: "54", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 3 + 9 ?",
      a: [
        { text: "10", isCorrect: false },
        { text: "7", isCorrect: false },
        { text: "12", isCorrect: true },
        { text: "1", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 10 - 6 ?",
      a: [
        { text: "7", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "0", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 5 - 4 ?",
      a: [
        { text: "4", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "1", isCorrect: true },
        { text: "3", isCorrect: false },
      ],
    },
    {
      s: "operações",
      l: "Fácil",
      q: "Quanto é 9 - 3 ?",
      a: [
        { text: "2", isCorrect: false },
        { text: "7", isCorrect: false },
        { text: "6", isCorrect: true },
        { text: "3", isCorrect: false },
      ],
    },
    {
      s: "recife",
      l: "Fácil",
      q: "O Recife é conhecido por seus canais e rios. Qual é o rio mais famoso que corta a cidade?",
      a: [
        { text: "Afogados", isCorrect: false },
        { text: "Bacia molhada", isCorrect: false },
        { text: "Rio Capibaribe", isCorrect: true },
        { text: "Largo dona regina", isCorrect: false },
      ],
    },
    {
      s: "recife",
      l: "Fácil",
      q: "Em que estado brasileiro o Recife está localizado?",
      a: [
        { text: "Nova Descoberta", isCorrect: false },
        { text: "São Paulo", isCorrect: false },
        { text: "Pernambuco", isCorrect: true },
        { text: "Rio de Janeiro", isCorrect: false },
      ],
    },
    {
      s: "recife",
      l: "Fácil",
      q: "Qual é o bairro histórico do Recife conhecido por suas ruas estreitas e casarões antigos?",
      a: [
        { text: "Recife Passado", isCorrect: false },
        { text: "Recife Velho", isCorrect: false },
        { text: "Recife Antigo", isCorrect: true },
        { text: "Novo Recife", isCorrect: false },
      ],
    },
    {
      s: "recife",
      l: "Fácil",
      q: "Qual é a capital de Pernambuco?",
      a: [
        { text: "Boa Viagem", isCorrect: false },
        { text: "Olinda", isCorrect: false },
        { text: "Recife", isCorrect: true },
        { text: "Porto de Galinhas", isCorrect: false },
      ],
    },
    {
      "s": "pedrinho_pintor",
      "l": "Fácil",
      "q": "Na História \"Pedrinho Pintor\", o que Pedrinho fazia quando estava triste?",
      "a": [
        { text: "Brincava", "isCorrect": false },
        { text: "Pulava", "isCorrect": false },
        { text: "Pintava", "isCorrect": true },
        { text: "Corria", "isCorrect": false }
      ]
    },
    {
      "s": "pedrinho_pintor",
      "l": "Fácil",
      "q": "Na História \"Pedrinho Pintor\", qual o nome do coelho pintor?",
      "a": [
        { text: "João", "isCorrect": false },
        { text: "Robson", "isCorrect": false },
        { text: "Pedrinho", "isCorrect": true },
        { text: "Carlos", "isCorrect": false }
      ]
    },
    {
      "s": "pedrinho_pintor",
      "l": "Fácil",
      "q": "Na História \"Pedrinho Pintor\", o que Pedrinho pintava?",
      "a": [
        { text: "Carros", "isCorrect": false },
        { text: "Casas", "isCorrect": false },
        { text: "Quadros", "isCorrect": true },
        { text: "Muros", "isCorrect": false }
      ]
    },
    {
      "s": "pedrinho_pintor",
      "l": "Fácil",
      "q": "Quais animais aparecem na história do \"Pedrinho Pintor\"?",
      "a": [
        { text: "Coelho, Tatu e Gato", "isCorrect": false },
        { text: "Cachorro, Gato e Papagaio", "isCorrect": false },
        { text: "Coelho, Arara e Tucano", "isCorrect": true },
        { text: "Arara, Tucano e Papagaio", "isCorrect": false }
      ]
    },
    {
      "s": "pedrinho_pintor",
      "l": "Fácil",
      "q": "Qual era o sonho de Pedrinho na história \"Pedrinho Pintor\"?",
      "a": [
        { text: "Jogar no Vasco", "isCorrect": false },
        { text: "Ganhar o prêmio de pintor", "isCorrect": false },
        { text: "Trabalhar na fábrica de ovos", "isCorrect": true },
        { text: "Ganhar na mega-sena", "isCorrect": false }
      ]
    },    
    { 
      s: "silabas", 
      l: "fácil",
      q: "Separe as sílabas da palavra \"Bolo\"", 
      a: [ 
        { text: "B - o - lo", isCorrect: false }, 
        { text: "B - o - l - o", isCorrect: false }, 
        { text: "Bo - lo", isCorrect: true }, 
        { text: "Bo - l - o", isCorrect: false }, 
      ], 
    }, 
    { 
      s: "silabas", 
      l: "fácil",
      q: "Separe as sílabas da palavra \"Carta\"", 
      a: [ 
        { text: "C - ar - ta", isCorrect: false }, 
        { text: "C - a - r - t - a", isCorrect: false }, 
        { text: "Car - ta", isCorrect: true }, 
        { text: "Ca - r - ta", isCorrect: false }, 
      ], 
    }, 
    { 
      s: "silabas", 
      l: "fácil",
      q: "Separe as sílabas da palavra \"Macaco\"", 
      a: [ 
        { text: "Ma - caco", isCorrect: false }, 
        { text: "M - a - c - a - c - o", isCorrect: false }, 
        { text: "Ma - ca - co", isCorrect: true }, 
        { text: "Maca - co", isCorrect: false }, 
      ], 
    }, 
    { 
      s: "silabas", 
      l: "fácil",
      q: "Separe as sílabas da palavra \"Louco\"", 
      a: [ 
        { text: "Lo - uco", isCorrect: false }, 
        { text: "L - o - u - c - o", isCorrect: false }, 
        { text: "Lou - co", isCorrect: true }, 
        { text: "Lo - u - co", isCorrect: false }, 
      ], 
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "Qual é a cor do Flicts?",
      "a": [
        { text: "Vermelho", "isCorrect": false },
        { text: "Azul", "isCorrect": false },
        { text: "Amarelo", "isCorrect": false },
        { text: "Nenhuma cor específica", "isCorrect": true }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "No Livro \"Flicts\", o que as cores faziam com Flicts?",
      "a": [
        { text: "O acolhiam", "isCorrect": false },
        { text: "Faziam Bullying", "isCorrect": true },
        { text: "Deixavam Feliz", "isCorrect": false },
        { text: "Deixavam Sozinho", "isCorrect": false }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "No Livro \"Flicts\", onde todas as cores são acolhidas?",
      "a": [
        { text: "Na Lua", "isCorrect": true },
        { text: "No Arco-Íris", "isCorrect": false },
        { text: "Na Terra", "isCorrect": false },
        { text: "No Chão", "isCorrect": false }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "No Livro \"Flicts\", como Flicts se sentia?",
      "a": [
        { text: "Excluído", "isCorrect": true },
        { text: "Amado", "isCorrect": false },
        { text: "Pobre", "isCorrect": false },
        { text: "Feliz", "isCorrect": false }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "No Livro \"Flicts\", quem era a Lua na história?",
      "a": [
        { text: "A cor vermelha", "isCorrect": false },
        { text: "A cor azul", "isCorrect": false },
        { text: "O Flicts", "isCorrect": true },
        { text: "A cor rosa", "isCorrect": false }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "O que Flicts representa simbolicamente na história?",
      "a": [
        { text: "A diversidade", "isCorrect": true },
        { text: "A tristeza", "isCorrect": false },
        { text: "A solidão", "isCorrect": false },
        { text: "A busca por identidade", "isCorrect": false }
      ]
    },
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "Como Flicts se sente no início da história?",
      "a": [
        { text: "Feliz e aceito", "isCorrect": false },
        { text: "Excluído e triste", "isCorrect": true },
        { text: "Confuso e perdido", "isCorrect": false },
        { text: "Animado e curioso", "isCorrect": false }
      ]
    },
    
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "Quem é o autor de \"Flicts\"?",
      "a": [
        { text: "Monteiro Lobato", "isCorrect": false },
        { text: "Ziraldo", "isCorrect": true },
        { text: "Machado de Asis", "isCorrect": false },
        { text: "Cecília Meireles", "isCorrect": false }
      ]
    },        
    {
      "s": "flicts",
      "l": "Fácil",
      "q": "No Livro \"Flicts\", por que as cores rejeitaram Flicts?",
      "a": [
        { text: "Por ser diferente", "isCorrect": true },
        { text: "Por ser bonito", "isCorrect": false },
        { text: "Por ser alto", "isCorrect": false },
        { text: "Por ser baixo", "isCorrect": false }
      ]
    },
    {
      "s": "maluquinho",
      "l": "Médio",
      "q": "Na História \"O Menino Maluquinho\", qual foi a má notícia que o menino maluquinho levou para casa?",
      "a": [
        { text: "Seu boletim com zero de comportamento", "isCorrect": true },
        { text: "Ele perdeu seu estojo", "isCorrect": false },
        { text: "Seu livro havia rasgado", "isCorrect": false },
        { text: "Ele perdeu sua bolsa", "isCorrect": false }
      ]
    },
    {
      "s": "maluquinho",
      "l": "Médio",
      "q": "Na História \"O Menino Maluquinho\", por que o menino maluquinho não conseguiu segurar o tempo?",
      "a": [
        { text: "Porque o tempo não passou por ele", "isCorrect": false },
        { text: "Porque ele cresceu", "isCorrect": true },
        { text: "Porque o tempo fugiu", "isCorrect": false },
        { text: "Porque o tempo caiu", "isCorrect": false }
      ]
    },
    {
      "s": "maluquinho",
      "l": "Médio",
      "q": "Na História \"O Menino Maluquinho\", por que a turma ficava esperando o menino maluquinho para começar o jogo?",
      "a": [
        { text: "Porque ele era o goleiro", "isCorrect": true },
        { text: "Porque a bola era dele", "isCorrect": false },
        { text: "Porque ele chorava", "isCorrect": false },
        { text: "Porque ele era dono do campo", "isCorrect": false }
      ]
    },
    {
      "s": "maluquinho",
      "l": "Médio",
      "q": "Na História \"O Menino Maluquinho\", como era o caderno do menino maluquinho?",
      "a": [
        { text: "Ele escrevia uma lição e um versinho", "isCorrect": true },
        { text: "Não costumava desenhar no caderno", "isCorrect": false },
        { text: "Sem folhas", "isCorrect": false },
        { text: "Ele não fazia as lições", "isCorrect": false }
      ]
    },
    {
      "s": "maluquinho",
      "l": "Médio",
      "q": "Na História \"O Menino Maluquinho\", de que o menino maluquinho trabalhava quando ficava trancado no quarto?",
      "a": [
        { text: "De batalhas e de corrida", "isCorrect": true },
        { text: "De Videogame", "isCorrect": false },
        { text: "De bola e carrinho", "isCorrect": false },
        { text: "De corrida e batalhas", "isCorrect": false }
      ]
    },
    {
      "s": "principe",
      "l": "Médio",
      "q": "No Livro \"O Pequeno Príncipe\", na história, o personagem principal é um piloto, mas quando criança queria ser um desenhista. Quais foram seus primeiros desenhos?",
      "a": [
        { text: "Uma jiboia digerindo um elefante e seu interior", "isCorrect": true },
        { text: "Uma ovelha e um macaco", "isCorrect": false },
        { text: "Uma flor e uma raposa", "isCorrect": false },
        { text: "Uma faca e um pão", "isCorrect": false }
      ]
    },
    {
      "s": "principe",
      "l": "Médio",
      "q": "No Livro \"O Pequeno Príncipe\", como o aviador conheceu o pequeno príncipe?",
      "a": [
        { text: "Quando seu avião sofreu uma pane, muito distante de qualquer outro lugar", "isCorrect": true },
        { text: "Quando seu avião caiu próximo de uma comunidade abandonada", "isCorrect": false },
        { text: "Lendo uma história de um outro aviador", "isCorrect": false },
        { text: "Correndo no parque", "isCorrect": false }
      ]
    },
    {
      "s": "principe",
      "l": "Médio",
      "q": "No Livro \"O Pequeno Príncipe\", qual o tipo de planta má nascia no planeta do pequeno príncipe?",
      "a": [
        { text: "Roseiras", "isCorrect": true },
        { text: "Baobás", "isCorrect": false },
        { text: "Cogumelos", "isCorrect": false },
        { text: "Cactos", "isCorrect": false }
      ]
    },
    {
      "s": "principe",
      "l": "Médio",
      "q": "No Livro \"O Pequeno Príncipe\", no primeiro planeta que o principezinho visitou era habitado por um rei. O que o rei costumava dizer?",
      "a": [
        { text: "Se eu ordenar ao meu que voe de flor em flor, e ele não obedecer, a culpa não seria dele, seria minha.", "isCorrect": true },
        { text: "Quanto mais trabalhas, mais perfeito és.", "isCorrect": false },
        { text: "Não há porque insistir em algo que tu não consegues realizar.", "isCorrect": false },
        { text: "Quanto mais perfeito, mais trabalhoso és.", "isCorrect": false }
      ]
    },
    {
      "s": "principe",
      "l": "Médio",
      "q": "No Livro \"O Pequeno Príncipe\", o empresário, do quarto planeta, se dizia dono de quê?",
      "a": [
        { text: "Das estrelas", "isCorrect": true },
        { text: "Das Flores", "isCorrect": false },
        { text: "Dos planetas", "isCorrect": false },
        { text: "Do Universo", "isCorrect": false }
      ]
    },
    
    {
      "s": "cubas",
      "l": "Difícil",
      "q": "No Livro \"Memórias Póstumas De Brás Cubas\", pode-se afirmar, com base nas ideias do autor-personagem, que se trata?",
      "a": [
        { text: "De um texto jornalístico", "isCorrect": false },
        { text: "De um texto religioso", "isCorrect": false },
        { text: "De um texto autobiográfico", "isCorrect": true },
        { text: "De um texto pessoal", "isCorrect": false }
      ]
    },
    {
      "s": "cubas",
      "l": "Difícil",
      "q": "No Livro \"Memórias Póstumas De Brás Cubas\", para o autor-personagem, o que é menos comum?",
      "a": [
        { text: "Começar um livro por sua morte", "isCorrect": true },
        { text: "Começar um livro por seu nascimento", "isCorrect": false },
        { text: "Começar um livro ao mesmo tempo pela sua morte e seu nascimento", "isCorrect": false },
        { text: "Começar um livro pelo final", "isCorrect": false }
      ]
    },
    {
      "s": "cubas",
      "l": "Difícil",
      "q": "No Livro \"Memórias Póstumas De Brás Cubas\", deduz-se do texto que o autor-personagem já está...",
      "a": [
        { text: "Morrendo", "isCorrect": false },
        { text: "Renascido", "isCorrect": false },
        { text: "Morto", "isCorrect": true },
        { text: "Vivo", "isCorrect": false }
      ]
    },
    {
      "s": "cubas",
      "l": "Difícil",
      "q": "No Livro \"Memórias Póstumas De Brás Cubas\", deduz-se pelo livro, o que sobre o Pentateuco?",
      "a": [
        { text: "Serviu de modelo para o livro", "isCorrect": false },
        { text: "Não foi lido pelo autor", "isCorrect": false },
        { text: "Foi escrito por Moisés", "isCorrect": true },
        { text: "Não foi lido pelo autor", "isCorrect": false }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que o autor destaca, afirmando ser um defunto autor?",
      "a": [
        { text: "Afirmando sua atividade apesar de estar morto", "isCorrect": true },
        { text: "Conformismo diante da morte", "isCorrect": false },
        { text: "Tristeza por se sentir morto", "isCorrect": false }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que seria um solário?",
      "a": [
        { text: "Seria a lua", "isCorrect": false },
        { text: "Uma cabeceira", "isCorrect": false },
        { text: "O sol", "isCorrect": true },
        { text: "Casinha de cachorro", "isCorrect": false }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que seria um lunário?",
      "a": [
        { text: "Casa de cachorro", "isCorrect": false },
        { text: "O sol", "isCorrect": false },
        { text: "Uma colher de cozinha", "isCorrect": false },
        { text: "A lua", "isCorrect": true }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que seria uma moradeira?",
      "a": [
        { text: "Uma cadeira", "isCorrect": false },
        { text: "Casinha de cachorro", "isCorrect": true },
        { text: "Uma jarra de leite", "isCorrect": false },
        { text: "Colher de cozinha", "isCorrect": false }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que seria um cabeceiro?",
      "a": [
        { text: "A lua", "isCorrect": false },
        { text: "Casinha de cachorro", "isCorrect": false },
        { text: "Dois travesseiros juntos", "isCorrect": true },
        { text: "Colher de cozinha", "isCorrect": false }
      ]
    },
    {
      "s": "marcelo_marmelo_martelo",
      "l": "Fácil",
      "q": "No livro \"Marcelo, marmelo, martelo\", o que seria um suco de vaca?",
      "a": [
        { text: "A lua", "isCorrect": false },
        { text: "O sol", "isCorrect": false },
        { text: "Casinha de cachorro", "isCorrect": false },
        { text: "Jarra de leite", "isCorrect": true }
      ]
    },
    {
      "s": "macunaima",
      "l": "Difícil",
      "q": "No Livro \"Macunaíma\", qual o nome do cineasta de Macunaíma?",
      "a": [
        { text: "Glauber Rocha", "isCorrect": false },
        { text: "Ana Lucia Lucas Martins", "isCorrect": false },
        { text: "Joao Pedro Andrade", "isCorrect": true },
        { text: "Mario de Andrade", "isCorrect": false }
      ]
    },
    {
      "s": "macunaima",
      "l": "Difícil",
      "q": "Em Macunaíma, o índio se faz refletir sobre?",
      "a": [
        { text: "O que é ser brasileiro", "isCorrect": true },
        { text: "Como é a vida na Amazônia", "isCorrect": true },
        { text: "A diferença na sociedade", "isCorrect": false },
        { text: "O mundo é cruel", "isCorrect": false }
      ]
    },
    {
      "s": "macunaima",
      "l": "Difícil",
      "q": "No Livro \"Macunaíma\", na terceira fase do cinema novo, os filmes eram?",
      "a": [
        { text: "Feitos de imagens contemporâneas", "isCorrect": false },
        { text: "Tecnicamente melhor acabados", "isCorrect": true },
        { text: "Didáticos", "isCorrect": false },
        { text: "Linhas pouco claras", "isCorrect": false }
      ]
    },
    {
      "s": "macunaima",
      "l": "Difícil",
      "q": "No Livro \"Macunaíma\", qual a característica mais forte?",
      "a": [
        { text: "Preguiça", "isCorrect": true },
        { text: "Narração", "isCorrect": false },
        { text: "Brincadeira", "isCorrect": false },
        { text: "Drama", "isCorrect": false }
      ]
    },
    {
      "s": "macunaima",
      "l": "Difícil",
      "q": "No Livro \"Macunaíma\", com quem o protagonista teve relações sexuais precocemente?",
      "a": [
        { text: "Marta", "isCorrect": false },
        { text: "Facineia", "isCorrect": false },
        { text: "Sofará", "isCorrect": true },
        { text: "Maria", "isCorrect": false }
      ]
    },
    {
      "s": "menina_bonita_do_laco_de_fita",
      "l": "Fácil",
      "q": "No Livro \"Menina bonita do laço de fita\", quais são os personagens principais no livro?",
      "a": [
        { text: "O coelho e a menina", "isCorrect": true },
        { text: "A menina e o café", "isCorrect": false },
        { text: "A menina e o laço", "isCorrect": false },
        { text: "O café e o coelho", "isCorrect": false }
      ]
    },
    {
      "s": "menina_bonita_do_laco_de_fita",
      "l": "Fácil",
      "q": "No Livro \"Menina bonita do laço de fita\", ao que os olhos da menina são comparados?",
      "a": [
        { text: "Ovos", "isCorrect": true },
        { text: "Grãos de café", "isCorrect": false },
        { text: "Uvas", "isCorrect": false },
        { text: "Azeitonas", "isCorrect": false }
      ]
    },
    {
      "s": "menina_bonita_do_laco_de_fita",
      "l": "Fácil",
      "q": "No Livro \"Menina bonita do laço de fita\", de onde vem o tom de pele da menina?",
      "a": [
        { text: "Do café que ela tomava", "isCorrect": false },
        { text: "De uma lata de tinta", "isCorrect": false },
        { text: "Do tom de pele da avó dela", "isCorrect": true },
        { text: "Da jabuticaba que comia", "isCorrect": false }
      ]
    },
    {
      "s": "menina_bonita_do_laco_de_fita",
      "l": "Fácil",
      "q": "No Livro \"Menina bonita do laço de fita\", por que o coelho indagava a menina?",
      "a": [
        { text: "Porque queria elogiar a menina", "isCorrect": false },
        { text: "Porque queria comida", "isCorrect": false },
        { text: "Porque queria ter uma filha pretinha e linda como ela", "isCorrect": true },
        { text: "Porque queria achar uma coelha", "isCorrect": false }
      ]
    },
    {
      "s": "menina_bonita_do_laco_de_fita",
      "l": "Fácil",
      "q": "No Livro \"Menina bonita do laço de fita\", ao que os cabelos da menina são comparados?",
      "a": [
        { text: "Uma feijoada", "isCorrect": false },
        { text: "Azeitonas", "isCorrect": false },
        { text: "Jabuticabas", "isCorrect": false },
        { text: "A noite", "isCorrect": true }
      ]
    },
    {
      "s": "o_alienista",
      "l": "Difícil",
      "q": "No Livro \"O Alienista\", quem é o alienista?",
      "a": [
        { text: "Médico especialista em doenças mentais", "isCorrect": true },
        { text: "Médico Alien", "isCorrect": false },
        { text: "Médico Cirurgião", "isCorrect": false }
      ]
    },
    {
      "s": "o_alienista",
      "l": "Difícil",
      "q": "No Livro \"O Alienista\", onde se passa a história?",
      "a": [
        { text: "Itaguaí", "isCorrect": true },
        { text: "Itandora", "isCorrect": false },
        { text: "Vila Esperança", "isCorrect": false }
      ]
    },
    {
      "s": "o_alienista",
      "l": "Difícil",
      "q": "No Livro \"O Alienista\", por que aconteceu a rebelião?",
      "a": [
        { text: "Porque o Simão Bacamarte estava louco e queriam interná-lo", "isCorrect": false },
        { text: "Porque o Simão Bacamarte estava internando todos na casa verde", "isCorrect": true },
        { text: "Porque o Simão Bacamarte estava prendendo os animais da cidade", "isCorrect": false }
      ]
    },
    {
      "s": "o_alienista",
      "l": "Difícil",
      "q": "No Livro \"O Alienista\", no final todos foram liberados, o que aconteceu com Simão Bacamarte?",
      "a": [
        { text: "Descobriram que ele estava louco, por isso liberaram os pacientes", "isCorrect": true },
        { text: "Ele morreu e ressuscitou", "isCorrect": false },
        { text: "Ele permaneceu na casa verde", "isCorrect": false }
      ]
    },
    {
      "s": "o_alienista",
      "l": "Difícil",
      "q": "No Livro \"O Alienista\", quem escreveu o livro?",
      "a": [
        { text: "Machado De Assis", "isCorrect": true },
        { text: "Carlos Drummond De Andrade", "isCorrect": false },
        { text: "Manuel Bandeira", "isCorrect": false }
      ]
    },
    {
      "s": "o_cortiço",
      "l": "Difícil",
      "q": "No Livro \"O Cortiço\", qual o nome do autor do livro cortiço",
      "a": [
        { text: "Ariano Suassuna", "isCorrect": false },
        { text: "Aluísio Azevedo", "isCorrect": true },
        { text: "Manuel Bandeira", "isCorrect": false },
        { text: "Rogerio ceni", "isCorrect": false }
      ]
    },
    {
      "s": "o_cortiço",
      "l": "Difícil",
      "q": "No Livro \"O Cortiço\", podemos afirmar que o cortiço é um romance",
      "a": [
        { text: "Naturalista", "isCorrect": true },
        { text: "Barroco", "isCorrect": false },
        { text: "Romântico", "isCorrect": false },
        { text: "Medieval", "isCorrect": false }
      ]
    },
    {
      "s": "o_cortiço",
      "l": "Difícil",
      "q": "No Livro \"O Cortiço\", O romance, o cortiço, foi publicado em que ano?",
      "a": [
        { text: "2021", "isCorrect": false },
        { text: "1950", "isCorrect": false },
        { text: "1890", "isCorrect": true },
        { text: "2001", "isCorrect": false }
      ]
    },
    {
      "s": "o_cortiço",
      "l": "Difícil",
      "q": "No Livro \"O Cortiço\", do que trata esse romance?",
      "a": [
        { text: "Retrata a vida dos imigrantes vindo da Europa", "isCorrect": false },
        { text: "Ele retrata e critica os costumes da sociedade brasileira durante o século XIX", "isCorrect": true },
        { text: "Trata dos amores do cortiço", "isCorrect": false },
        { text: "Venera o governo da época", "isCorrect": false }
      ]
    },
    {
      "s": "o_cortiço",
      "l": "Difícil",
      "q": "No Livro \"O Cortiço\", sobre o personagem João Romão, podemos afirmar que o nome dele era... Explique",
      "a": [
        { text: "Ambicioso", "isCorrect": true },
        { text: "Solidário", "isCorrect": false },
        { text: "Elegante", "isCorrect": false },
        { text: "Atraente", "isCorrect": false }
      ]
    }
    
  ];


  // Loop para contar quantas questões do assunto X e do nivel Y existem
  var qtd = 0;
  for (var i = 0; i < Questions.length; i++) {
    if (Questions[i].s === assunto && Questions[i].l === nivel && qtd < amount) {
      console.log("Questão de posição " + i + " possue o assunto " + assunto + " e a dificuldade " + nivel);
      qtd++;
    }else if (qtd >= amount){
      break;
    };
  }


  let currQuestion = 0;
  let score = 0;

  // Função que filtra as questões do assunto X com dificuldade Y
  function filterQuestionsBySubjectAndLevel(subject,level) {
    return Questions.filter((question) => question.s === subject && question.l === level);
  }
  
  // Função que carrega as questões
  function loadQues(subject,level) {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    document.getElementById("question-num").innerHTML = currQuestion+1;
  
    const subjectQuestions = filterQuestionsBySubjectAndLevel(subject,level);
  
    if (currQuestion < subjectQuestions.length) {
  
      question.textContent = subjectQuestions[currQuestion].q;
      opt.innerHTML = "";
  
      for (let i = 0; i < subjectQuestions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
  
        document.getElementById("subject").innerHTML = assuntoNome;
  
        choicesdiv.classList.add("choice-container");
  
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
  
        choiceLabel.textContent = subjectQuestions[currQuestion].a[i].text;
  
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
      }
    } else {
      document.getElementById("opt").style.display = "none";
      document.getElementById("ques").style.display = "none";
      document.getElementById("btn").style.display = "none";
      loadScore();
    }
  }

  loadQues(assunto,nivel);
  
  // Função que carrega o score final
  function loadScore() {
    const totalScore = document.getElementById("score");
    const percCorrect = (score / qtd) * 100.0;
    totalScore.textContent = `${percCorrect.toFixed(0)}% de acerto\n${score} de ${qtd} questões certas`;
    var voltar = document.getElementById("volta");
    voltar.style.display = "block";
    var denovo = document.getElementById("denovo");
    denovo.style.display = "block";
  }
  
  // Função para ir para a proxima pergunta
  function nextQuestion() {
    if (currQuestion < qtd-1) {
      currQuestion ++;
      loadQues(assunto,nivel);
    } else {
      document.getElementById("opt").style.display = "none";
      document.getElementById("ques").style.display = "none";
      document.getElementById("btn").style.display = "none";
      loadScore();
    }
  }

  // Adiciona o Evento de clicar no botão
  const butno = document.getElementById("btn");
  butno.addEventListener("click", function() {
    const selectedAns = +document.querySelector('input[name="answer"]:checked').value;
  
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
      score++;
      console.log("Correct");
    }
    nextQuestion();
  });
}
