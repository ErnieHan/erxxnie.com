import { HOST_URL } from '../../constants'
import { myFetch } from '../../functions/myFetch'
import {
    setLoadingDoneStatus,
    setActiveContainer,
    setActiveBuyInMetal,
    setDisplayPopupCancelShoppingHistory,
    setScannedRfidTags
} from './set'
import { postShoppingBags } from './post'
import { getPurchaseBags } from './get'

//刪除shoppingBag item
export const deleteShoppingBagItem = (itemId, shoppingBags, itemDiscountInfo, checkedItems) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/items/${itemId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
            // 清空已掃描的RFID
            dispatch(setScannedRfidTags([]))
        } else {
            throw new Error(`${response.status} DELETE_SHOPPING_BAG_ITEM_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('DELETE_SHOPPING_BAG_ITEM'))
    }
}

//將購入item移除
export const deletePurchaseBagsItem =
    (itemId, backToBuyIn = false, _getPurchaseBags = true, _postShoppingBags = false) =>
    async dispatch => {
        try {
            const response = await myFetch(
                `${HOST_URL}/poss/v1/customerSessions/purchaseBags/purchaseItems/${itemId}`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            )
            if (response.ok) {
                if (_getPurchaseBags) {
                    dispatch(getPurchaseBags())
                }
                if (backToBuyIn) {
                    setTimeout(() => {
                        dispatch(setActiveContainer('buyIn'))
                        dispatch(setActiveBuyInMetal('main'))
                    }, 250)
                }
                if (_postShoppingBags) {
                    const _payload = {
                        firstAccessIndicator: true,
                        items: []
                    }
                    dispatch(postShoppingBags(_payload))
                }

                dispatch(setDisplayPopupCancelShoppingHistory(false))
            } else {
                throw new Error(`${response.status} DELETE_PURCHASE_BAGS_ITEM_FAILED`)
            }
        } catch (error) {
            console.error(`${error}`)
        } finally {
            dispatch(setLoadingDoneStatus('DELETE_PURCHASE_BAGS_ITEM'))
        }
    }

//將全部購入item移除
export const deletePurchaseBagsAll =
    (backToBuyIn = false, _getPurchaseBags = true) =>
    async dispatch => {
        try {
            const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/purchaseBags/purchaseItems`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (response.ok) {
                if (_getPurchaseBags) {
                    dispatch(getPurchaseBags())
                }
                if (backToBuyIn) {
                    setTimeout(() => {
                        dispatch(setActiveContainer('buyIn'))
                        dispatch(setActiveBuyInMetal('main'))
                    }, 250)
                }
            } else {
                throw new Error(`${response.status} DELETE_PURCHASE_BAGS_ALL`)
            }
        } catch (error) {
            console.error(`${error}`)
        } finally {
            dispatch(setLoadingDoneStatus('DELETE_PURCHASE_BAGS_ALL'))
        }
    }
