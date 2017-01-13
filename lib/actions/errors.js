import { createAction } from 'redux-actions'

export const ERROR_ADD = 'ERROR_ADD'
export const ERROR_RESET = 'ERROR_RESET'
export const ERROR_REMOVE = 'ERROR_REMOVE'

/* ACTIONS
------------------------------------------------- */
export const add = createAction(ERROR_ADD)
export const remove = createAction(ERROR_REMOVE)
export const reset = createAction(ERROR_RESET)
