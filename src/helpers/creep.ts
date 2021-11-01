import { Creep } from '../types/Creep'
import { Source } from '../types/Source'
import { ERR_NOT_IN_RANGE } from './statuses'
import { Spawn } from '../types/Spawn'
import { Role } from '../types/Role'
import { Structure } from '../types/Structure'

export const harvestSource = (creep: Creep, source: Source) => {
  const harvest = creep.harvest(source)
  if (harvest === ERR_NOT_IN_RANGE) return creep.moveTo(source)
  creep.say('⛏')
}

export const transferEnergy = (creep: Creep, target: Creep | Structure) => {
  const transfer = creep.transfer(target, 'energy')
  if (transfer === ERR_NOT_IN_RANGE) return creep.moveTo(target)
  creep.say('🤲')
}

export const spawnCreep = (spawn: Spawn, role: Role) => {
  spawn.spawnCreep(
    role.parts,
    role.name + ' ' + (new Date().valueOf()),
    { memory: { role: role.name } },
  )
}