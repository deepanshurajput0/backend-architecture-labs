interface Game {
    id:string,
    blackPlayer:string,
    whitePlayer:string,
    Move:string[]
}



// export const game:Game[] = []

 class GameManager {
    game:Game[] = []
    private static instance: GameManager
    private constructor(){
     this.game = []
    }
    static getInstance(){
       if(GameManager.instance){
         return GameManager.instance
       }
        GameManager.instance = new GameManager()
        return GameManager.instance
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

export const game = GameManager.getInstance()




