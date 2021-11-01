import { Role } from '../types/Role'
import { Creep } from '../types/Creep'
import { harvestSource, upgradeController } from '../helpers/creep'
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
    const isFull = creep.store.getFreeCapacity() === 0
    let state = creep.memory.state || 'collect'

    // Check if state can change
    if (state === 'upgrade' && creep.store.energy === 0) state = 'collect'
    if (state === 'collect' && isFull) state = 'upgrade'

    // Apply state
    if (state === 'collect') harvestSource(creep, sources[0])
    if (state === 'upgrade') upgradeController(creep, controller)

    // Persist state
    creep.memory.state = state
  },
}