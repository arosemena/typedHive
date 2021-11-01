import { getCreeps, getSpawns } from './helpers/game'
import { getRole, work } from './work'
import { createCensus } from './helpers/census'
import { canSpawnCreep, spawnCreep } from './helpers/creep'
import { farmerRole } from './roles/farmer.role'
import { torchBringerRole } from './roles/torch-bringer.role'

const loop = () => {
  const census = createCensus()

  // Make all creeps work
  for (const creep of getCreeps()) {
    const role = getRole(creep)
    if (role) census[role] += 1
    work(creep)
  }

  // Spawn any missing creeps
  const spawn = getSpawns()[0]
  if (census.farmer < 2 && canSpawnCreep(spawn, farmerRole)) {
    console.log('only found ', census.farmer, ' farmers, spawning more')
    spawnCreep(spawn, farmerRole)
  }
  if (census.torchBringer < 1 && canSpawnCreep(spawn, torchBringerRole)) {
    console.log('only found ', census.torchBringer, ' torchBringer, spawning more')
    spawnCreep(spawn, torchBringerRole)
  }
}

export { loop }