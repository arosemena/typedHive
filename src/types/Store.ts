
export type Resource = 'energy' | 'power'

export type Store = {
  energy: number
  power: number
  getCapacity: (resource?: Resource) => number
  getFreeCapacity: (resource?: Resource) => number
}