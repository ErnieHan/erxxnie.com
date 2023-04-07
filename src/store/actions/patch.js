import { HOST_URL } from '../../constants'
import { myFetch } from '../../functions/myFetch'
import { getCustomerSession, getPurchaseBags } from './get'
import { postShoppingBags } from './post'
import { setLoadingDoneStatus, setDisplayPopupAttritionRateModify, setDisplayPopupConsentForm } from './set'

// 更新customerSession客戶姓名
export const patchCustomerName = (data, id) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/${id}/customerName`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getCustomerSession())
        } else {
            throw new Error(`${response.status} PATCH_CUSTOMER_NAME_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('PATCH_CUSTOMER_NAME'))
    }
}

// 更新purchaseBag
export const patchPurchaseItems = data => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/purchaseBags`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getPurchaseBags())
            dispatch(setDisplayPopupConsentForm(true))
        } else {
            throw new Error(`${response.status} PATCH_PURCHASE_ITEMS_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('PATCH_PURCHASE_ITEMS'))
    }
}

// 更新購入item
export const patchPurchaseItem =
    (data, itemId, _postShoppingBags = false) =>
    async dispatch => {
        try {
            const response = await myFetch(
                `${HOST_URL}/poss/v1/customerSessions/purchaseBags/purchaseItems/${itemId}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (response.ok) {
                dispatch(getPurchaseBags())
                dispatch(setDisplayPopupAttritionRateModify(false))
                if (_postShoppingBags) {
                    const _payload = {
                        firstAccessIndicator: true,
                        items: []
                    }
                    dispatch(postShoppingBags(_payload))
                }
            } else {
                throw new Error(`${response.status} PATCH_PURCHASE_ITEM_FAILED`)
            }
        } catch (error) {
            console.error(`${error}`)
        } finally {
            dispatch(setLoadingDoneStatus('PATCH_PURCHASE_ITEM'))
        }
    }
