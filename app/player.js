const player = {

  frase: document.querySelector(".frase"),
  artista: document.querySelector(".artista"),
  enviadoPor: document.querySelector(".enviadoPor"),
  audio: document.querySelector("audio"),
  audioList: audios,
  audioAtual: {},

  start() {
    for (let i = 0; i < this.audioList.length; i++) {

      this.audioAtual = this.audioList[i];
      this.artista.style.background = `url('${pathAImages(this.audioAtual.artista)}') no-repeat center center / this.cover`;
      this.enviadoPor.style.background = `url('${pathAImages(this.audioAtual.enviadoPor)}') no-repeat center this.center / cover`;
      this.frase.innerText = `"${this.audioAtual.frase}"`;
      this.audio.src = pathAudios(this.audioAtual.file);
      console.log(this.audioAtual)
    }
  }
};
