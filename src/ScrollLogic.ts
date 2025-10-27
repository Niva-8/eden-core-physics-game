import { GameEngine } from './GameEngine'

export function activateScrollTrigger(game: GameEngine) {
  window.addEventListener('scroll', () => {
    game.triggerScrollEventEffect()
  })
}
