function pesquisar() { 
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Retorna se nada for digitado
    if(campoPesquisa == "") {
        section.innerHTML = "<p class='color-retorno-busca'> Nada foi encontrado! </p>"
        return;
}

    campoPesquisa = campoPesquisa.toLowerCase(); 

    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";


    for (let dados of esportes) {
        titulo = dados.titulo.toLowerCase();
        descricao = dados.descricao.toLowerCase();
        tag = dados.tag.toLowerCase();
    
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) { 
            resultados +=`
            <div class="item-resultado">
                <h2> ${dados.titulo} </h2>
                <p class="descricao-meta"> ${dados.descricao} </p>
                <a href="${dados.link_associacoes}"> Mais Informações </a>
            </div>
        `;
    }   
}

    if(!resultados){
        resultados = "<p class='color-retorno-busca'> Ocorreu um erro. Por favor, tente novamente! </p>"

    }
    section.innerHTML = resultados;
}




