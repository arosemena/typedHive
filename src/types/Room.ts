import { Controller } from './Controller'

export type RoomPosition = {
  roomName: string
  x: number
  y: number
}

export type Room = {
  name: string
  energyAvailable: number
  energyCapacityAvailable: number
  controller: Controller
  find: (code: number) => any
}

export type RoomObject = {
  pos: RoomPosition
  room: Room
}