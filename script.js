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

// Seleciona os elementos
const showImage = document.querySelector('.show-image');
const imageModal = document.getElementById('imageModal');

// Mostra a imagem e aplica o fundo desfocado
showImage.addEventListener('click', () => {
    imageModal.style.display = 'flex';
});

// Esconde a imagem ao clicar fora dela
imageModal.addEventListener('click', (event) => {
    // Verifica se o clique foi fora da imagem
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
