let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
}

function draw() {
  cores()

  let texto = palavraParcial(0, width);
  text(texto, 200, 200)
}

function palavraAleatoria() {
  let palavras = ["Fortnite", "Anime", "Onichan", "Senpai"];
  return random(palavras);
}

function cores() {
  background("#0F4D92");
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(64);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial
}
