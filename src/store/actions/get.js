import { updateEmployees } from './update'
import { setLoadingDoneStatus } from './set'

const HOST_URL = 'http://localhost:3001'

// 取得員工資訊
export const getEmployees = () => async dispatch => {
    try {
        const response = await fetch(`http://localhost:3101/rest/pcms3/v1/refinements/search`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            const result = await response.json()
            dispatch(updateEmployees(result))
        } else {
            throw new Error(`${response.status} GET_EMPLOYEES_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('GET_EMPLOYEES'))
    }
}

// 取得員工資訊
export const getEmployees2 = () => async dispatch => {
    try {
        const response = await fetch(`${HOST_URL}/poss/v1/employees2`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            const result = await response.json()
            dispatch(updateEmployees(result))
        } else {
            throw new Error(`${response.status} GET_EMPLOYEES_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('GET_EMPLOYEES'))
    }
}
