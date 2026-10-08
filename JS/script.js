//Captura o botão "proximo" e "anterior"
let btnProximo = document.getElementById("proximo");
let btnAnterior = document.getElementById("anterior");
//Cria o album e guarda as fotos
let Quadroimagem = document.getElementById("imagem");
let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
]
//Quando o botão próximo for clicado,
//executará a função mostrar proximo

btnProximo.addEventListener("click", mostrarProximo);
btnAnterior.addEventListener("click", mostrarAnterior);


//Define a posição incial da fotografia do album
let foto = 0;

//Função responsável por mostrar a proximo fotografia
function mostrarProximo() {
    foto = foto + 1;
    
    if(foto >= album.length){
        foto=0
    }

    Quadroimagem.src = album[foto];
}

function mostrarAnterior() {
    foto = foto - 1;
    if(foto < 0){
        foto= album.length -1
    }

    Quadroimagem.src = album[foto];
}