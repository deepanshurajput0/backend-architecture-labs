interface Game {
    id:string,
    blackPlayer:string,
    whitePlayer:string,
    Move:string[]
}



// export const game:Game[] = []

 class GameManager {
    game:Game[] = []
    constructor(){
     this.game = []
    }
    addGame (gameId:string){
        const gameData = {
            id: gameId,
            blackPlayer:'Daniel',
            whitePlayer:'Parkour',
            Move:[],
        }
        this.game.push(gameData)
    }
}

export const game = new GameManager()




