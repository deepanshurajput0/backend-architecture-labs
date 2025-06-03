"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
// export const game:Game[] = []
class GameManager {
    constructor() {
        this.game = [];
        this.game = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addGame(gameId) {
        const gameData = {
            id: gameId,
            blackPlayer: 'Daniel',
            whitePlayer: 'Parkour',
            Move: [],
        };
        this.game.push(gameData);
    }
}
exports.game = GameManager.getInstance();
