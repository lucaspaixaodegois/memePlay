const frase = document.querySelector(".frase");
const artista = document.querySelector(".artista");
const enviadoPor = document.querySelector(".enviadoPor");
const audio = document.querySelector("audio");

const data = {

    artista: "files/givaldo-avatar.png",
    enviadoPor: "files/lucas-avatar.png",
    frase: "Trate as coisas serias felá da puta.",
    file: "files/trate-as-coisas-serias-filho-da-puta.mpeg"
};
artista.style.background = `url('${data.artista}') no-repeat center center / cover`;
enviadoPor.style.background = `url('${data.enviadoPor}') no-repeat center center / cover`;

frase.innerText = data.frase;
audio.src = data.file;

//whatsapp

//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent(data.frase + " " + data.file);
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);



//telegram

//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    var url = encodeURIComponent(window.location.href); //url
    var title = encodeURIComponent(document.title); //título
    var conteudo = encodeURIComponent(data.frase + " " + data.file);// frase e audio
    var telegramLink = 'https://telegram.me/share/url?url=' + url + '&text=' + title + conteudo;
    document.getElementById("telegram-share-btt").href = telegramLink;
}, false);

//teste commit