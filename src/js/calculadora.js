function validar() {

    var entrada = $('#qtdOperacoes').val();
    if (entrada < 2) {
        return alert('Digite um Nº maior ou igual a 2')
    }

    for (let i = 0; i < entrada; i++) {
        $(".container").append($(`<p>Fator${i + 1}</p><input class="numeros" type='number' name='edit${i}' id='edit${i}' value='' />`));
    }
    $('#calcular').prop('disabled', false);
    $('#somar').prop('disabled', false);
    $('#subtrair').prop('disabled', false);
    $('#limpar').prop('disabled', false);
    document.getElementById('confirm').style.display = "none";
}

function calcular(operacao) {
    let total = 0
    $(".numeros").map(function (i, elemento) {
        const value = elemento.value == '' ? 0 : elemento.value;
        total = i == 0 ? value : eval(`${total}  ${operacao} ${value}`)
    });
    $(".resultado").empty().append($(`<p><b>Resultado: ${total}</b></p>`));

}
function limpar() {
    window.location.reload()

}  