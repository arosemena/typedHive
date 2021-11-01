import { RoomObject } from './Room'

export type StructureType =
  'spawn' | 'extension' | 'road' | 'constructedWall' | 'rampart' |
  'keeperLair' | 'portal' | 'controller' | 'link' | 'storage' |
  'tower' | 'observer' | 'powerBank' | 'powerSpawn' | 'extractor' |
  'lab' | 'terminal' | 'container' | 'nuker' | 'factory' | 'invaderCore'

export type Structure = RoomObject & {
  id: string
  hits: number
  hitsMax: number
  structureType: StructureType
  destroy: () => void
  isActive: () => boolean
}