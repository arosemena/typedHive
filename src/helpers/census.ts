import { RoleName } from '../types/Role'

export const createCensus = (): Record<RoleName, number> => {
  return {
    farmer: 0,
    torchBringer: 0,
  }
}