import { Creep } from './Creep'
import { Spawn } from './Spawn'

export type Game = {
  creeps: Record<string, Creep>
  spawns: Record<string, Spawn>
}