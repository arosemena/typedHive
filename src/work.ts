import { Creep } from './types/Creep'
import { farmerRole } from './roles/farmer.role'
import { Role, RoleName } from './types/Role'
import { torchBringerRole } from './roles/torch-bringer.role'


const roles: Record<RoleName, Role> = {
  farmer: farmerRole,
  torchBringer: torchBringerRole,
}

export const getRole = (creep: Creep): RoleName | null => {
  return creep.memory.role || null
}

export const work = (creep: Creep) => {
  const role = getRole(creep)
  if (!role) return creep.suicide()
  roles[role].work(creep)
}

export default {}