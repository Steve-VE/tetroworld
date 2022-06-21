const config = new Config();
const tileSize = 38;
const gridSize = new Vector(10, 20);
const gridWidth = tileSize * gridSize.x;
const gridHeight = tileSize * gridSize.y;

let canvas;
let context;
let gameContainer;
let spriteTile;

window.onload = function mainScript() {
    const fontSize = 24;
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    // context.font = `${fontSize}px Titillium Web`;
    context.font = `${fontSize}px monospace`;
    spriteTile = new SpriteSheet('assets/img/tile.png', 2, 4);
    spriteTile.loaded.then(() => {
        gameContainer = new GameContainer();
    });
};
