function calcularIdade() {
    const campo = document.getElementById('nascimento');
    const valor = campo.value;

    if (!valor) {
        document.getElementById('resultado').style.color = "#35605a";
        document.getElementById('resultado').textContent = "Por favor, insira uma data válida.";
        return;
    }

    const dataNascimento = new Date(valor);
    const hoje = new Date();

    if (dataNascimento > hoje) {
        document.getElementById('resultado').style.color = "#35605a";
        document.getElementById('resultado').textContent = "Erro, a data de nascimento não pode estar no futuro.";
        return;
    }

    let anos = hoje.getFullYear() - dataNascimento.getFullYear();
    let meses = hoje.getMonth() - dataNascimento.getMonth();
    let dias = hoje.getDate() - dataNascimento.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const totalMeses = anos * 12 + meses;

    document.getElementById('resultado').style.color = "black";
    document.getElementById('resultado').textContent = `Você tem aproximadamente ${totalMeses} meses (${anos} anos e ${meses} meses)`;
}