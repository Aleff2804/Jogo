document.addEventListener("DOMContentLoaded", function () {

    const quadrado = document.getElementById("quadrado");
    const areaJogo = document.getElementById("areaJogo");
    const pontuacaoTexto = document.getElementById("pontuacao");
    const tempoTexto = document.getElementById("tempo");
    const botaoIniciar = document.getElementById("botaoIniciar");
    const mensagemFinal = document.getElementById("mensagemFinal");
  
    let pontuacao = 0;
    let tempoRestante = 30;
    let temporizador;
  
    function moverQuadrado() {
      const larguraMax = areaJogo.clientWidth - quadrado.offsetWidth;
      const alturaMax = areaJogo.clientHeight - quadrado.offsetHeight;
  
      const posicaoX = Math.random() * larguraMax;
      const posicaoY = Math.random() * alturaMax;
  
      quadrado.style.left = `${posicaoX}px`;
      quadrado.style.top = `${posicaoY}px`;
    }
  
    function iniciarJogo() {

      pontuacao = 0;
      tempoRestante = 30;
  
      pontuacaoTexto.textContent = `Pontuação: ${pontuacao}`;
      tempoTexto.textContent = `Tempo restante: ${tempoRestante}s`;
      mensagemFinal.classList.add("d-none");
      areaJogo.classList.remove("d-none");
      botaoIniciar.classList.add("d-none");
  
      quadrado.style.display = "block";
      temporizador = setInterval(function () {
        tempoRestante--;
        tempoTexto.textContent = `Tempo restante: ${tempoRestante}s`;
  
        if (tempoRestante <= 0) {
          finalizarJogo();
        }
      }, 1000);
  
      moverQuadrado();
    }
  
    function finalizarJogo() {
      clearInterval(temporizador);
      quadrado.style.display = "none";
      areaJogo.classList.add("d-none");
      botaoIniciar.classList.remove("d-none");
  
      mensagemFinal.textContent = `Fim de jogo! Sua pontuação foi: ${pontuacao}`;
      mensagemFinal.classList.remove("d-none");
    }
  
    quadrado.addEventListener("click", function () {
      pontuacao++;
      pontuacaoTexto.textContent = `Pontuação: ${pontuacao}`;
      moverQuadrado();
    });
  
    botaoIniciar.addEventListener("click", iniciarJogo);
  });
