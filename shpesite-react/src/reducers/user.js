import { USER_LOGGGED_IN } from '../types'

export default function user(state = {}, action = {}) {
  switch(action.type) {
    case USER_LOGGGED_IN:
      return action.user;
    default:
      return state;
  }
}
