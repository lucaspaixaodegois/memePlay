const player = {

  frase: document.querySelector(".frase"),
  artista: document.querySelector(".artista"),
  enviadoPor: document.querySelector(".enviadoPor"),
  audio: document.querySelector("audio"),
  audioList: audios,
  audioAtual: {},

  start() {

    this.audioAtual = this.audioList[1];
    this.artista.style.background = `url('${pathAImages(this.audioAtual.artista)}') no-repeat center center / this.cover`;
    this.enviadoPor.style.background = `url('${pathAImages(this.audioAtual.enviadoPor)}') no-repeat center this.center / cover`;
    this.frase.innerText = `"${this.audioAtual.frase}"`;
    this.audio.src = pathAudios(this.audioAtual.file);

  }
};
