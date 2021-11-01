import { Creep, CreepPart } from '../types/Creep'
import { Source } from '../types/Source'
import { ERR_NOT_IN_RANGE } from './statuses'
import { Spawn } from '../types/Spawn'
import { Role } from '../types/Role'
import { Structure } from '../types/Structure'
import { code } from '../constants'
import { Controller } from '../types/Controller'

export const harvestSource = (creep: Creep, source: Source) => {
  const harvest = creep.harvest(source)
  if (harvest === ERR_NOT_IN_RANGE) return creep.moveTo(source)
  creep.say('⛏')
}

export const upgradeController = (creep: Creep, target: Controller) => {
  const transfer = creep.upgradeController(target)
  if (transfer === ERR_NOT_IN_RANGE) return creep.moveTo(target)
  creep.say('🤲')
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

export const creepCost = (parts: CreepPart[]) => {
  let cost = 0
  for (const part of parts) cost += code.BODYPART_COST[part]
  return cost
}

export const canSpawnCreep = (spawn: Spawn, role: Role): boolean => {
  // Check if it's not spawning something already
  if (spawn.spawning) return false
  // Check part requirements
  if (spawn.store.energy < creepCost(role.parts)) return false
  return true
}