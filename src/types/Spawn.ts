import { CreepPart } from './Creep'
import { Structure } from './Structure'

export type SpawnOptions = {
  memory: Record<string, any>
}

export type Spawning = {
  name: string
  needTime: number
  remainingTime: number
  spawn: Spawn
  cancel: () => void
}

export type Spawn = Structure & {
  spawning: Spawning | null
  spawnCreep: (parts: CreepPart[], name: string, options?: SpawnOptions) => void
}