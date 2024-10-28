// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    //canvas.width = Math.round(canvas.width / 50)* 50; // Lo dividimos en porciones iguales para que el marco del juego no quede espacion en el tanque
    //canvas.height = Math.round(canvas.height / 50)* 50; // Lo mismo que arriba

    canvas.width = utilsObj.RoundTablero(canvas.width)
    canvas.height = utilsObj.RoundTablero(canvas.height)

    console.log('width', canvas.width)
    console.log('height', canvas.height)
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);
// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);
const enemyTank1 = new EnemyTank(100, 100, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(700, 200, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(500, 400, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(600, 100, 'down', 3, game.ancho, game.alto);



function drawEnemyTank(enemyTank) {
ctx.fillStyle = 'red';
// Representamos el tanque enemigo como un cuadrado
ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key) {
        // Las teclas de las flechas del teclado 
        case 'ArrowLeft':
             playerTank.moveLeft();
             break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown' :
            playerTank.moveDown();
            break;
        // Las teclas de las letras del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case 'd':
           playerTank.moveRight();
           break;
        case 'w':
           playerTank.moveUp();
           break;
        case 's' :
           playerTank.moveDown();
           break;

    }
}
);

//Anadir movimiento aleatorio al enemigo
function moveEnemyTankRandomly(enemyTank){
    const directions = ['left', 'right', 'up', 'down'];
    const randomDirection = directions[Math.floor(Math.random()* directions.length)];

    // Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
        }
}

// Hacemos que el tanque enemigo se mueva aleatoriamente cada 500ms
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
   
}, 300);

setInterval(() => {
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
}, 200);

const escenario = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const cellSize = 50; // Tamano de cada celda en pixeles

function drawEscenario(ctx, escenario) {
    for (let row = 0; row < escenario.length; row ++) {
        for (let col = 0; col < escenario[row].length; col++) {
            const cell = escenario[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch(cell) {
                case 0 :
                    ctx.fillRect = "orange";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1:
                    ctx.fillRect = "gray";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    // var wall = new Image();
                    // wall.src = "./ASSETS/pared.webp";
                    //ctx.drawImage(wall, x, y, cellSize, cellSize);
                    break;
                default:
                    break;
            }
        }
    }
}



// Lógica del juego (actualización de la pantalla)
function updateGame() {
// Limpiamos el canvas en cada frame
ctx.clearRect(0, 0, canvas.width, canvas.height);
playerTank.drawTank(ctx);

enemyTank1.drawEnemyTank(ctx); // Dibujamos el tanque enemigo
enemyTank2.drawEnemyTank(ctx);
enemyTank3.drawEnemyTank(ctx);
enemyTank4.drawEnemyTank(ctx);

// Refrescar los graficos
requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();

