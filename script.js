
 const numeroWhatsApp = "5592986021680"; // Altere para o número da lanchonete

    const produtos = [
      { nome: "Hambúrguer", preco: 15.90, img: "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ3VlfGVufDB8fDB8fHww" },
      { nome: "Batata Frita", preco: 8.50, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" },
      { nome: "Refrigerante", preco: 6.00, img: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVmcmlnZXJhbnRlfGVufDB8fDB8fHww" },
      { nome: "Pizza", preco: 29.90, img: "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=rG2MCcNGu7Q5sDFWRB53TqEa5rbl16mBLyghV_6UzP8=" },
    ];

    const cardapio = document.getElementById("cardapio");
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalElement = document.getElementById("total");
    let carrinho = [];

    // Mostrar produtos
    produtos.forEach((produto, index) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarCarrinho(${index})">Adicionar</button>
      `;
      cardapio.appendChild(item);
    });

    // Adicionar ao carrinho
    function adicionarCarrinho(index) {
      carrinho.push(produtos[index]);
      atualizarCarrinho();
    }

    function removerItem(i) {
      carrinho.splice(i, 1);
      atualizarCarrinho();
    }

    // Atualizar carrinho
    function atualizarCarrinho() {
      listaCarrinho.innerHTML = "";
      let total = 0;
      carrinho.forEach((item, i) => {
        total += item.preco;
        const li = document.createElement("li");
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} 
          <button onclick="removerItem(${i})" style="color:red; border:none; background:none; cursor:pointer;">X</button>`;
        listaCarrinho.appendChild(li);
      });
      totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // Horário permitido (10h às 23h)
    function horarioValido() {
      const hora = new Date().getHours();
      return (hora >= 10 && hora <= 23);
    }

    // Enviar pedido via WhatsApp
    document.getElementById("form-pedido").addEventListener("submit", function(e) {
      e.preventDefault();
      if (!horarioValido()) {
        alert("Pedidos só são aceitos das 10h às 23h.");
        return;
      }
      if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
      }

      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      const endereco = document.getElementById("endereco").value;

      let mensagem = `*Novo Pedido!*%0A`;
      mensagem += `Nome: ${nome}%0A`;
      mensagem += `Telefone: ${telefone}%0A`;
      mensagem += `Endereço: ${endereco}%0A%0A`;
      mensagem += `*Itens:*%0A`;
      let total = 0;
      carrinho.forEach(item => {
        mensagem += `- ${item.nome} R$ ${item.preco.toFixed(2)}%0A`;
        total += item.preco;
      });
      mensagem += `%0A*Total: R$ ${total.toFixed(2)}*`;

      const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
      window.open(url, "_blank");

      carrinho = [];
      atualizarCarrinho();
      this.reset();
    });