import { HOST_URL } from '../../constants'
import { myFetch } from '../../functions/myFetch'
import { setLoadingDoneStatus, setDisplayPopupCustomizationSign, setSignData } from './set'
import { postShoppingBags } from './post'

export const putShoppingBagsCustomization = (itemId, data) => async dispatch => {
    try {
        const response = await myFetch(
            `${HOST_URL}/poss/v1/customerSessions/shoppingBags/items/${itemId}/customization`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (response.ok) {
            dispatch(setDisplayPopupCustomizationSign(false))
            dispatch(setSignData(null))
            const payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(payload))
        } else {
            throw new Error(`${response.status} PUT_SHOPPING_BAGS_CUSTOMIZATION_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('PUT_SHOPPING_BAGS_CUSTOMIZATION'))
    }
}
