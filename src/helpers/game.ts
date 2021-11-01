import { Game } from '../types/Game'
import { Creep } from '../types/Creep'
import { Spawn } from '../types/Spawn'

declare const Game: Game

export const getCreeps: () => Creep[] = () => {
  return Object.values(Game.creeps)
}

export const getSpawns: () => Spawn[] = () => {
  return Object.values(Game.spawns)
}
