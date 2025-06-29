function tabela() {

    // Parte de adicionar as infos na tabela  

    //peguei o cálculo de idade do outro arquivo, que guardei em "calc"
    const calculo = localStorage.getItem("calc");
    const dataInput = document.getElementById("nascimento").value;

    // separação dos dias, meses e anos para a formatação em dd/mm/aaaa 
    const partes = dataInput.split("-");

    // ${x} = x é a parte, começa no 0
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`
   

    const corpoTabela = document.getElementById("corpoTabela");
    const linhas = document.createElement("tr");


    //coloca o que vai ter dentro de "tr"
    linhas.innerHTML = `
        <td>${dataFormatada}</td>
        <td>${calculo}</td>
        <td>
            <button onClick="excluir(this)">Excluir</button>
        </td>
    
    `;

    // coloca linhas como filho de corpoTabela, no HTML
    corpoTabela.appendChild(linhas);

    ///////////////////////////////////////////////////////////////////////////////////////////////


    // usamos aqui para guardar os dados no localStorage, faz um objeto
    const novaLinha = {
        data: dataFormatada,
        calculo: calculo
    };

    // "deixe linhasSalvas salvar a conversão de string para objeto ou, se der null e false, salve a array vazia"
    //parse = converter texto em estrutura de dados
    let linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];

    //.push = método para colocar novaLinha no array linhasSalvas
    linhasSalvas.push(novaLinha);

    // colocar a versão string de linhaSalvas em "linhasSalvas"
    localStorage.setItem("linhasSalvas", JSON.stringify(linhasSalvas));

}

function carregarLinhasSalvas() {
    const corpoTabela = document.getElementById("corpoTabela");
    const linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];

    // para cada linha, faça o innerHTML e coloque novaLinhaElemento dentro de corpoTabela
    linhasSalvas.forEach((linha) => {
        const novaLinhaElemento = document.createElement("tr");
        novaLinhaElemento.innerHTML = `
            <td>${linha.data}</td>
            <td>${linha.calculo}</td>
            <td>
                <button onclick="excluir(this)">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(novaLinhaElemento);
    });
}

carregarLinhasSalvas(); 

function excluir(botao) {
    const linha = botao.closest("tr");

    const data = linha.cells[0].textContent;
    const calculo = linha.cells[1].textContent;

    linha.remove();

    let linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];

    linhasSalvas = linhasSalvas.filter(item => !(item.data === data && item.calculo === calculo));

    localStorage.setItem("linhasSalvas", JSON.stringify(linhasSalvas));
}
