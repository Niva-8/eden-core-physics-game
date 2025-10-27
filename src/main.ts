import { GameEngine } from './GameEngine'
import { activateScrollTrigger } from './ScrollLogic'
import { initCryptoGates } from './CryptoGate'

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
const game = new GameEngine(canvas)

game.start()
activateScrollTrigger(game)
initCryptoGates()
