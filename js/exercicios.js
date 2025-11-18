const perguntas = [
    {
        pergunta: "1. A Educação Física estuda principalmente:",
        alternativas: ["Movimento humano", "Matemática aplicada", "Geopolítica", "Botânica"],
        correta: 0
    },
    {
        pergunta: "2. O aquecimento antes do exercício serve para:",
        alternativas: [
            "Aumentar risco de lesão",
            "Preparar o corpo para esforço",
            "Reduzir temperatura corporal",
            "Evitar transpiração"
        ],
        correta: 1
    },
    {
        pergunta: "3. A Fisiologia do Exercício estuda:",
        alternativas: [
            "Reações químicas do corpo durante atividade física",
            "Somente anatomia muscular",
            "Apenas alongamentos",
            "Nenhuma das anteriores"
        ],
        correta: 0
    }
];

function carregarQuiz() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";

    perguntas.forEach((p, i) => {
        const bloco = document.createElement("div");
        bloco.classList.add("pergunta");

        let html = `<h3>${p.pergunta}</h3>`;

        p.alternativas.forEach((alt, j) => {
            html += `
                <label>
                    <input type="radio" name="p${i}" value="${j}"> ${alt}
                </label><br>
            `;
        });

        bloco.innerHTML = html;
        quiz.appendChild(bloco);
    });
}

function finalizarQuiz() {
    let acertos = 0;

    perguntas.forEach((p, i) => {
        const marcada = document.querySelector(`input[name='p${i}']:checked`);
        if (marcada && Number(marcada.value) === p.correta) acertos++;
    });

    document.getElementById("resultado").innerHTML =
        `Você acertou <b>${acertos}</b> de <b>${perguntas.length}</b> perguntas!`;
}

function refazerQuiz() {
    carregarQuiz();
    document.getElementById("resultado").innerHTML = "";
}

carregarQuiz();
