// Função para buscar resultados com base no estado e no tipo de pesquisa
function pesquisar(tipoPesquisa) {
  // Obtemos o valor do estado selecionado no dropdown
  const estadoSelecionado = document.getElementById("estado").value;

  // Seleciona o banco de dados com base no tipo de pesquisa
  let bancoDados;
  if (tipoPesquisa === "pet") {
      bancoDados = bancoDadosApenasPET;
  } else if (tipoPesquisa === "petHumano") {
      bancoDados = bancoDadosPETMaisHumano;
  } else {
      bancoDados = {};
  }

  // Obtém os resultados para o estado selecionado
  const resultados = bancoDados[estadoSelecionado] || [];

  // Exibe os resultados
  mostrarResultados(resultados, estadoSelecionado);
}

// Função para mostrar resultados na tela
function mostrarResultados(resultados, estadoSelecionado) {
  const resultadosDiv = document.getElementById("resultados-pesquisa");
  resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

  if (resultados.length > 0) {
      resultados.forEach(item => {
          const resultadoDiv = document.createElement("div");
          resultadoDiv.className = "resultado-item";

          // Estado
          const estadoP = document.createElement("p");
          estadoP.textContent = `Estado: ${estadoSelecionado}`;

          // Cidade
          const cidadeP = document.createElement("p");
          cidadeP.textContent = `Cidade: ${item.cidade}`;

          // Nome
          const nomeP = document.createElement("p");
          nomeP.textContent = `Nome: ${item.nome}`;

          // Nota do Google
          const notaGoogleP = document.createElement("p");
          notaGoogleP.textContent = `Nota do Google: ${item.notaGoogle}`;

          // Link
          const linkA = document.createElement("a");
          linkA.href = item.link;
          linkA.textContent = "Mais informações";
          linkA.target = "_blank"; // Abre o link em uma nova aba

          // Adiciona os elementos ao resultado
          resultadoDiv.appendChild(estadoP);
          resultadoDiv.appendChild(cidadeP);
          resultadoDiv.appendChild(nomeP);
          resultadoDiv.appendChild(notaGoogleP);
          resultadoDiv.appendChild(linkA);

          // Adiciona o resultado à div de resultados
          resultadosDiv.appendChild(resultadoDiv);
      });
  } else {
      resultadosDiv.textContent = "Nenhum resultado encontrado.";
  }
}
