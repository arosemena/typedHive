import { RoomObject } from './Room'

export type Source = RoomObject & {
  energy: number
  energyCapacity: number
  id: string
}