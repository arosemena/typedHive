import { Room } from '../types/Room'
import { Source } from '../types/Source'
import { code } from '../constants'

export const findSources = (room: Room): Source[] => {
  return room.find(code.FIND_SOURCES)
}