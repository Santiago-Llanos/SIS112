class EnemyTank{
    posX;
    posY;
    direccionDisparo;
    Vidas;
    velocidad;
    anchoMapa;
    altoMapa;

    constructor(_posX, _PosY, _direccionDisparo, _Vidas, _anchoMapa, _altoMapa){
        this.posX = _posX;
        this.posY = _PosY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _Vidas;
        this.velocidad = 50; //Velocidad de movimiento del tanque
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }
    moveLeft() {
        if (this.posX - this.velocidad >= 0) {
            this.posX -= this.velocidad;
        }
    }

    moveRight() {
        if (this.posX + this.velocidad <= this.anchoMapa - 50) {
            this.posX = this.posX + this.velocidad;
        }

    }

    moveUp() {
        if (this.posY - this.velocidad >= 0) {
            this.posY -= this.velocidad;
        }

    }

    moveDown() {
        if (this.posY + this.velocidad <= this.altoMapa - 50) {
            this.posY = this.posY + this.velocidad;
        }

    }

    rotarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo;
    }

    drawEnemyTank(ctx) {
        ctx.fillStyle = 'red';
        // Representamos el tanque como un cuadrado
        ctx.fillRect(this.posX,this.posY, 50, 50);
    }

}