
      const botao = document.getElementById("botaoMensagem");
      const mensagem = document.getElementById("mensagem");
      const figurinha = document.getElementById("figurinha");

      const versiculos = [
        "“O Senhor é o meu pastor; nada me faltará.” - Salmos 23:1",
        "“Tudo posso naquele que me fortalece.” - Filipenses 4:13",
        "“Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.” - Salmos 37:5",
        "“Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.” - 1 Tessalonicenses 5:18",
        "“O Senhor é bom, um refúgio em tempos de angústia.” - Naum 1:7",
      ];

      const gifs = [
        "https://usagif.com/wp-content/uploads/gify/8-jesus-the-girl-brings-food-usagif.gif", // GIF 1
        "https://usagif.com/wp-content/uploads/gify/33-jesus-ship-usagif.gif", // GIF 2
        "https://usagif.com/wp-content/uploads/gify/34-jesus-and-child-usagif.gif", // GIF 3
        "https://usagif.com/wp-content/uploads/gify/19-jesus-heals-the-leper-usagif.gif", // GIF 4
        "https://usagif.com/wp-content/uploads/gify/12-jesus-feeds-people-usagif.gif", // GIF 5
      ];

       let indice = 0;

        function escreverTexto(elemento, texto, velocidade, callback) {
            let i = 0;
            elemento.textContent = "";
            figurinha.style.opacity = 0;
            const intervalo = setInterval(() => {
                elemento.textContent += texto.charAt(i);
                i++;
                if (i === texto.length) {
                    clearInterval(intervalo);
                    if (callback) callback();
                }
            }, velocidade);
        }

        botao.addEventListener('click', () => {
            escreverTexto(mensagem, versiculos[indice], 50, () => {
                figurinha.src = gifs[indice];
                figurinha.style.opacity = 1;
            });
            indice = (indice + 1) % versiculos.length;
        });
      