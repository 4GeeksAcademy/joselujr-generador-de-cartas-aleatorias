import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]
  let palos = ["♦", "♥", "♠", "♣"]
  function nuevaCarta() {
    let numerosRandom = Math.floor(Math.random() * numeros.length);
    let palosRandom = Math.floor(Math.random() * palos.length);
    let resNumeros = numeros[numerosRandom];
    let resPalos = palos[palosRandom]
    if (resPalos === "♥" || resPalos === "♦") {
      document.getElementById("palo-superior").style.color = "red";
      document.getElementById("palo-inferior").style.color = "red";
    } else {
      document.getElementById("palo-superior").style.color = "black";
      document.getElementById("palo-inferior").style.color = "black";
    }
    document.getElementById("palo-superior").innerHTML = resPalos;
    document.getElementById("letra").innerHTML = resNumeros;
    document.getElementById("palo-inferior").innerHTML = resPalos;
  }
  nuevaCarta();
  let boton = document.getElementById("cambiarCarta");
  boton.addEventListener("click", nuevaCarta)
};
