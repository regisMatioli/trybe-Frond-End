import { nanoid } from "nanoid";

const senhaBtn = document.querySelector('button');
const displaySenha = document.querySelector('h2');

senhaBtn.addEventListener('click', () => {
  displaySenha.innerHTML = nanoid()
})