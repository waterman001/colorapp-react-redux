import * as CONSTANTS from '../constants'

export const addColor = (color) => {
  return({
    type: CONSTANTS.ADD_COLOR,
    payload: color
  })
}