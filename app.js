let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("Campo em branco digite um nome para adcionar um amigo");
    } else if (amigos.includes(amigo)) {
        alert("Este amigo ja está na lista de sorteio, adcione outro nome");
    } else {
        amigos.push(amigo);
        amigo = "";
    }
    atualizaLista();

}
function atualizaLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {

    let amigoSorteado;

    if (amigos.length > 0) {

        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        

        let posicaoSorteada = parseInt(Math.random() * amigos.length);
        amigoSorteado = amigos[posicaoSorteada];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    }

}
