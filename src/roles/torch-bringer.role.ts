import { Role } from '../types/Role'
import { Creep } from '../types/Creep'
import { harvestSource, transferEnergy } from '../helpers/creep'
import { findSources } from '../helpers/find'
import { getSpawns } from '../helpers/game'

// A basic creep that feeds the spawn with energy
export const torchBringerRole: Role = {
  name: 'torchBringer',
  parts: ['carry', 'move', 'work'],
  work(creep: Creep): void {
    const spawn = getSpawns()[0]
    const sources = findSources(spawn.room)
    const controller = spawn.room.controller

    creep.store.getFreeCapacity() > 0
      ? harvestSource(creep, sources[0])
      : transferEnergy(creep, controller)
  },
}