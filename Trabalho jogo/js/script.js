document.addEventListener("DOMContentLoaded", function () {
    // Selecionar os elementos
    const quadrado = document.getElementById("quadrado");
    const areaJogo = document.getElementById("areaJogo");
    const pontuacaoTexto = document.getElementById("pontuacao");
    const tempoTexto = document.getElementById("tempo");
    const botaoIniciar = document.getElementById("botaoIniciar");
    const mensagemFinal = document.getElementById("mensagemFinal");
  
    // Variáveis do jogo
    let pontuacao = 0;
    let tempoRestante = 30;
    let temporizador;
  
    // Função para mover o quadrado para uma posição aleatória
    function moverQuadrado() {
      const larguraMax = areaJogo.clientWidth - quadrado.offsetWidth;
      const alturaMax = areaJogo.clientHeight - quadrado.offsetHeight;
  
      const posicaoX = Math.random() * larguraMax;
      const posicaoY = Math.random() * alturaMax;
  
      quadrado.style.left = `${posicaoX}px`;
      quadrado.style.top = `${posicaoY}px`;
    }
  
    // Função para iniciar o jogo
    function iniciarJogo() {
      // Reiniciar variáveis
      pontuacao = 0;
      tempoRestante = 30;
  
      // Atualizar a interface
      pontuacaoTexto.textContent = `Pontuação: ${pontuacao}`;
      tempoTexto.textContent = `Tempo restante: ${tempoRestante}s`;
      mensagemFinal.classList.add("d-none");
      areaJogo.classList.remove("d-none");
      botaoIniciar.classList.add("d-none");
  
      // Mostrar o quadrado e começar o cronômetro
      quadrado.style.display = "block";
      temporizador = setInterval(function () {
        tempoRestante--;
        tempoTexto.textContent = `Tempo restante: ${tempoRestante}s`;
  
        if (tempoRestante <= 0) {
          finalizarJogo();
        }
      }, 1000);
  
      // Mover o quadrado para iniciar
      moverQuadrado();
    }
  
    // Função para finalizar o jogo
    function finalizarJogo() {
      clearInterval(temporizador);
      quadrado.style.display = "none";
      areaJogo.classList.add("d-none");
      botaoIniciar.classList.remove("d-none");
  
      mensagemFinal.textContent = `Fim de jogo! Sua pontuação foi: ${pontuacao}`;
      mensagemFinal.classList.remove("d-none");
    }
  
    // Evento para aumentar a pontuação ao clicar no quadrado
    quadrado.addEventListener("click", function () {
      pontuacao++;
      pontuacaoTexto.textContent = `Pontuação: ${pontuacao}`;
      moverQuadrado();
    });
  
    // Evento para iniciar o jogo
    botaoIniciar.addEventListener("click", iniciarJogo);
  });