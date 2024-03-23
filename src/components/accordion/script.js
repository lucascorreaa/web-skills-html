// Espera que o DOM (estrutura do documento HTML) esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos com a classe "question-panel"
    var acc = document.getElementsByClassName("question-panel");
    var i;
  
    // Itera sobre todos os elementos com a classe "question-panel"
    for (i = 0; i < acc.length; i++) {
        // Adiciona um evento de clique a cada elemento "question-panel"
        acc[i].addEventListener("click", function() {
            // Alterna a classe "active" para o elemento clicado
            this.classList.toggle("active");
            // Seleciona o próximo elemento irmão, que é o painel de resposta
            var panel = this.nextElementSibling;
            // Verifica se o painel de resposta está expandido ou não
            if (panel.style.maxHeight) {
                // Se estiver expandido, define a altura máxima como nula para esconder o conteúdo
                panel.style.maxHeight = null;
            } else {
                // Se estiver oculto, define a altura máxima como a altura total do conteúdo para mostrá-lo
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
