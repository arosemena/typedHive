import { Store } from './Store'
import { Source } from './Source'
import { RoomObject } from './Room'
import { Structure } from './Structure'


export type CreepPart =
  'move' | 'work' | 'carry' | 'attack' |
  'ranged_attack' | 'tough' | 'heal' | 'claim'

export type Creep = {
  store: Store
  memory: Record<string, any>
  transfer: (target: Creep | Structure, resource: 'energy') => number
  harvest: (target: Source) => number
  moveTo: (target: RoomObject | Creep) => number
  say: (what: string) => void
  suicide: () => void // Goodbye cruel world!
}