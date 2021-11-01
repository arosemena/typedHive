import { Role } from '../types/Role'
import { Creep } from '../types/Creep'
import { harvestSource, transferEnergy } from '../helpers/creep'
import { findSources } from '../helpers/find'
import { getSpawns } from '../helpers/game'

// A basic creep that feeds the spawn with energy
export const farmerRole: Role = {
  name: 'farmer',
  parts: ['carry', 'move', 'work'],
  work(creep: Creep): void {
    const spawn = getSpawns()[0]
    const sources = findSources(spawn.room)

    creep.store.getFreeCapacity() > 0
      ? harvestSource(creep, sources[0])
      : transferEnergy(creep, spawn)
  },
}