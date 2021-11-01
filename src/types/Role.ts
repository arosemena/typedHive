import { Creep, CreepPart } from './Creep'

export type RoleName =
  'farmer' |
  'torchBringer'

export type Role = {
  name: RoleName,
  work: (creep: Creep) => void
  parts: CreepPart[]
}
