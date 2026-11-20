document.addEventListener('DOMContentLoaded', () => {
  const quiz = document.querySelector('#quiz');
  const resultado = document.querySelector('#resultado');

  if (!quiz || !resultado) return;

  quiz.addEventListener('submit', (event) => {
    event.preventDefault();

    const respostasCorretas = {
      q1: 'a',
      q2: 'b',
      q3: 'a'
    };

    let acertos = 0;
    let respondidas = 0;

    Object.entries(respostasCorretas).forEach(([pergunta, respostaCorreta]) => {
      const selecionada = quiz.querySelector(`input[name="${pergunta}"]:checked`);
      if (selecionada) {
        respondidas += 1;
        if (selecionada.value === respostaCorreta) acertos += 1;
      }
    });

    if (respondidas < Object.keys(respostasCorretas).length) {
      resultado.textContent = 'Responda todas as perguntas antes de ver o resultado.';
      resultado.className = 'resultado-quiz mt-3 resultado-alerta';
      return;
    }

    resultado.textContent = `Você acertou ${acertos} de ${Object.keys(respostasCorretas).length} questões.`;
    resultado.className = `resultado-quiz mt-3 ${acertos === 3 ? 'resultado-sucesso' : 'resultado-alerta'}`;
  });
});
