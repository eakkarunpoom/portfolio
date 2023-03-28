const prompt = require('prompt-sync')({sigint: true});
const clearScreen = require("clear-screen");

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let positionX = 0;
let positionY = 0;

class field {
    constructor(field){
        this.field = field
        this.gameover = false;
        this.gameLoop();
    }
    static generateField(){
        return [
            ['*', '░', 'O'],
            ['░', 'O', '░'],
            ['░', '^', '░'],
        ];
    }


    print(){
        clearScreen()
        console.log(this.field.map(e => e.join("")).join("\n"));
    }

    gameLoop(){
        while(!this.gameover){
            this.print();
            this.userMove();
        }
    }

    userMove(){
        const move = prompt("Whichway: ");
        switch (move){
            case 'w':
                this.moveup();
                break;
            case 's':
                this.movedown();
                break;
            case 'a':
                this.moveleft();
                break;
            case 'd':
                this.moveright();
                break;
        }
        this.checkstar();
        this.pathmove() 
    }

    moveup(){
        positionX--;
        console.log(positionX,positionY);      
    }

    movedown(){
        positionX++;
        console.log(positionX,positionY);     
    }

    moveleft(){
        positionY--;
        console.log(positionX,positionY);  
    }

    moveright(){
        positionY++;
        console.log(positionX,positionY);  
    }

    pathmove(){
        this.field[positionX][positionY] = pathCharacter
    }

    checkstar(){
        const currentposition = this.field[positionX][positionY];
        if (positionX < 0 || positionX >= 3 || positionY < 0 || positionY >= 3){
            this.gameover = true;
            console.log('Game Over');
        }
        else if (currentposition === hole) {
            this.gameover = true;
            console.log('Game Over');
        }
        else if (currentposition === hat) { 
            this.gameover = true;
            console.log('You win')
        }
    }


}
new field(field.generateField());
