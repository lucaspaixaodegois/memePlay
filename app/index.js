const pathAudios = function (file) {
  return `data/audios/${file}`;
};

const pathAImages = function (artista) {
  return `data/images/${artista}`;
};

window.addEventListener("load", player.start());

//whatsapp

//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  //conteúdo que será compartilhado: Título da página + URL
  const title = encodeURIComponent(document.title); //título
  const url = encodeURIComponent(window.location.href); //url
  //  const conteudo = encodeURIComponent(this.data.frase + " " + this.data.file);
  //altera a URL do botão
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + title + url;
}, false);



//telegram

//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  var url = encodeURIComponent(window.location.href); //url
  var title = encodeURIComponent(document.title); //título
  //var conteudo = encodeURIComponent(data.frase + " " + data.file);// frase e audio
  const telegramLink = 'https://telegram.me/share/url?url=' + url + '&text=' + title;
  document.getElementById("telegram-share-btt").href = telegramLink;
}, false);


/*
document.addEventListener('input', event => {

  const inputValue = event.target.value;
  // const listCards = document.querySelectorall('.post')
});

let listEnd = document.getElementById('listEnd');
let divContent = document.getElementById('divContent');
let itemCount = 0;

window.addEventListener('DomContentLoader', load);

function load() {
  addItems();

}
function addItems() {

  for (let i = 0; i < 5; i++) {
    let item = generateDataBlock();
  }
}

function generateDataBlock() {
  let item = document.createElement('div');
  item.setAttribute('class', 'item');
  item.textContent = message;
  return item;
}*/