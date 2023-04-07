import { combineReducers } from 'redux'
import update from './update'
import set from './set'

const reducers = combineReducers({
    update,
    set
})

export default reducers
