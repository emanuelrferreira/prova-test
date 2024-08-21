// Seleciona todas as perguntas
const allQuestions = document.querySelectorAll(".answertop");

// Adiciona um evento de clique a cada pergunta
allQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Alterna entre mostrar e esconder a resposta
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
