function pesquisar() {
    // Função responsável por pesquisar na base de dados (neste caso, no array `dados`) e exibir os resultados na seção com o ID "resultados-pesquisa".
  
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos.
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada elemento (dado) dentro do array `dados`.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados do objeto `dado`.
            resultados += `
            <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p>${dado.descricao}</p>
            <a href=${dado.link}>Mais informações</a>
            </div>
            `;
        }
    }

    if(!resultados) {
        section.innerHTML = "<p>Não foi encontrado resultados para esta pesquisa.</p>"
        return
    }
  
    // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }