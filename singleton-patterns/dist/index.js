"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const logger_1 = __importDefault(require("./logger"));
setInterval(() => {
    game_1.game.addGame(Math.random().toString());
    (0, logger_1.default)();
}, 1000);
