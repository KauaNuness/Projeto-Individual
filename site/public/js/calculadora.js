var itens = [];

        function calcularOrcamento() {
            var nome = document.getElementById('nome').value;
            var quantidade = document.getElementById('quantidade').value;
            var preco = document.getElementById('preco').value;

            if (nome === '' || quantidade === '' || preco === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Converter para números
            quantidade = parseInt(quantidade);
            preco = parseFloat(preco);

            // Adicionar item à lista
            itens.push({ nome: nome, quantidade: quantidade, preco: preco });

            // Atualizar a lista de itens
            atualizarListaItens();

            // Calcular e exibir o total do orçamento
            calcularTotalOrcamento();
        }

        function atualizarListaItens() {
            var listaItens = document.getElementById('listaItens');
            listaItens.innerHTML = '';

            for (var i = 0; i < itens.length; i++) {
                var item = itens[i];
                var li = document.createElement('li');
                li.innerText = item.nome + ': ' + item.quantidade + ' x R$ ' + item.preco.toFixed(2) + ' = R$ ' + (item.quantidade * item.preco).toFixed(2);
                listaItens.appendChild(li);
            }
        }

        function calcularTotalOrcamento() {
            var total = 0;

            for (var i = 0; i < itens.length; i++) {
                var item = itens[i];
                total += item.quantidade * item.preco;
            }

            // Exibir o total do orçamento
            document.getElementById('totalOrcamento').innerText = 'R$ ' + total.toFixed(2);
        }