function tabela() {

    // Parte de adicionar as infos na tabela  

    const calculo = localStorage.getItem("calculo");
    const dataInput = document.getElementById("nascimento").value;
    const partes = dataInput.split("-");
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`
    document.getElementById("testeInput").textContent = dataFormatada;

    const corpoTabela = document.getElementById("corpoTabela");
    const linhas = document.createElement("tr");

    linhas.innerHTML = `
        <td>${dataFormatada}</td>
        <td>${calculo}</td>
        <td>
            <button>Excluir</button>
            <button>Atualizar</button>
        </td>
    
    `;

    corpoTabela.appendChild(linhas);

    ///////////////////////////////////////////////////////////////////////////////////////////////

   //// let linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas"))|| [];

    ///function salvar() {
        //localStorage.setItem("linhasSalvas", JSON.stringify(linhasSalvas));
    //}

    //const novaLinha = {
    ///    data: dataFormatada,
    //    calculo: calculo
    //};

    //linhasSalvas.push(novaLinha);
    //salvar();

    



    
}

