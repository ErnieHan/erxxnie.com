import { HOST_URL } from '../../constants'
import { myFetch } from '../../functions/myFetch'
import { getCustomerSession, getHistories, getPurchaseBags } from './get'
import {
    setDisplayPopupPriceDetails,
    setDisplayPopupBargain,
    setCheckInCustomerSessionError,
    setDisplayPopupCustomer
} from './set'
import {
    updateShoppingBags,
    updateCatalogItems,
    updateFindOne,
    updateSettleShoppingBags,
    updateHistories
} from './update'
import {
    setItemDiscountInfo,
    setCheckedItems,
    setDisplayPopupQrcode,
    setDisplayProductDetail,
    setCatalogItemsParams,
    setDisplayProductList,
    setLoadingDoneStatus,
    setCheckInDone,
    setChangeCheckInId,
    setDisplayPopupCustomerPreloading,
    setDisplayPopupSettlementCart,
    setIsScanningBarcode,
    setActiveContainer,
    setDisplayPopupConsentForm,
    setUploadedImgs,
    setDisplayPopupUploadIMG,
    setActiveTransactionStep,
    setActiveAuthenticationStep,
    setSignData,
    setCurrentFreebiesPopups
} from './set'
import isArray from '../../functions/isArray'

// 建立customerSession
export const postCustomerSession = data => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getCustomerSession())
            dispatch(getHistories())
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
        } else {
            throw new Error(`${response.status} POST_CUSTOMER_SESSION_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_CUSTOMER_SESSION'))
    }
}

// 客戶登入
export const postCheckInCustomerSession = (id, isCheckout) => async dispatch => {
    try {
        dispatch(setCheckInDone(false))
        dispatch(setChangeCheckInId(id))
        dispatch(setDisplayPopupCustomerPreloading(true))
        dispatch(updateHistories(null))
        dispatch(updateShoppingBags(null))
        dispatch(setCheckInCustomerSessionError(null))
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/${id}/checkIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getHistories())
            dispatch(getCustomerSession())
            dispatch(setCheckInDone(true))
            dispatch(setDisplayPopupCustomerPreloading(false))
            if (isCheckout) {
                const shoppingBagsData = {
                    firstAccessIndicator: true,
                    items: []
                }
                dispatch(postShoppingBags(shoppingBagsData))
            }
        } else {
            const error = await response.json()
            if (isArray(error?.errors)) {
                const errCodes = error.errors.map(el => el.errorCode)
                if (errCodes.includes('E18011')) {
                    dispatch(setCheckInCustomerSessionError('*該顧客已在其他裝置登入'))
                }
            }
            dispatch(getHistories())
            dispatch(getCustomerSession())
            dispatch(setCheckInDone(true))
            dispatch(setDisplayPopupCustomerPreloading(false))
            dispatch(setDisplayPopupCustomer(true))
            throw new Error(`${response.status} POST_CHECK_IN_CUSTOMER_SESSION_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_CHECK_IN_CUSTOMER_SESSION'))
    }
}

// 關閉(取消銷貨)客戶
export const postCloseCustomerSession = (id, nextCheckInId, isCheckout) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/${id}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            if (nextCheckInId) {
                dispatch(postCheckInCustomerSession(nextCheckInId, isCheckout))
            } else {
                const payload = { customerName: null }
                dispatch(postCustomerSession(payload))
            }
        } else {
            throw new Error(`${response.status} POST_CLOSE_CUSTOMER_SESSION_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_CLOSE_CUSTOMER_SESSION'))
    }
}

export const postCloneCustomerSession = id => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/${id}/clone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getCustomerSession())
            dispatch(getHistories())
            const payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(payload))
        } else {
            throw new Error(`${response.status} POST_CLONE_CUSTOMER_SESSION_FAILED`)
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_CLONE_CUSTOMER_SESSION'))
    }
}

// 試算shoppingBag
export const postShoppingBags =
    (data, _postSettleShoppingBags = false) =>
    async dispatch => {
        try {
            dispatch(setCurrentFreebiesPopups([]))
            const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/calculate`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const result = await response.json()
                dispatch(updateShoppingBags(result))
                //已勾選商品
                const _arr = []
                result.items.forEach(el => {
                    if (el.selectIndicator) {
                        _arr.push(el.itemId)
                    }
                })
                dispatch(setCheckedItems(_arr))
                //已選擇折扣
                const _discounts = result.items.map(el => {
                    const _currentDiscount = el.discountInfo.find(el => el.selectIndicator) || null
                    const _obj = {
                        itemId: el.itemId,
                        currentDiscount: _currentDiscount?.projectLineId || null
                    }
                    return _obj
                })
                dispatch(setItemDiscountInfo(_discounts))
                // 贈品
                if (isArray(result.gifts)) {
                    const _arr = []
                    result.gifts.forEach(el => {
                        if (el.shouldAddToShoppingBagItem) _arr.push(el.giftItemId)
                    })
                    dispatch(setCurrentFreebiesPopups(_arr))
                }
            } else {
                throw new Error(`${response.status} POST_SHOPPING_BAGS_FAILED`)
            }
        } catch (error) {
            dispatch(updateShoppingBags(null))
            console.error(`${error}, request:${JSON.stringify(data)}`)
        } finally {
            dispatch(setLoadingDoneStatus('POST_SHOPPING_BAGS'))
            if (_postSettleShoppingBags) {
                const _getPurchaseBags = true
                dispatch(postSettleShoppingBags(_getPurchaseBags))
            }
        }
    }

// 查詢商品列表
export const postCatalogItems =
    (data, blurKeyboard = false) =>
    async dispatch => {
        try {
            // 收下鍵盤事件
            if (blurKeyboard) {
                const searchBar = document.getElementById('searchBar')
                searchBar.blur()
            }
            const params = {
                page: data.page,
                pageSize: data.pageSize,
                orderBy: data.orderBy,
                sortDirection: data.sortDirection
            }
            dispatch(setCatalogItemsParams(params))
            const response = await myFetch(`${HOST_URL}/poss/v1/catalogItems/search`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const result = await response.json()
                dispatch(updateCatalogItems(result))
                dispatch(setDisplayProductList(true))
                dispatch(setDisplayProductDetail(false))
                dispatch(setDisplayPopupQrcode(false))
                const wrapper = document.getElementById('pdt_listing_wrap')
                if (wrapper) {
                    wrapper.scrollTo({ top: 0 })
                }
            } else {
                throw new Error(`${response.status} POST_CATALOG_ITEMS_FAILED`)
            }
        } catch (error) {
            console.error(`${error}, request:${JSON.stringify(data)}`)
        } finally {
            dispatch(setLoadingDoneStatus('POST_CATALOG_ITEMS'))
        }
    }

// 查詢商品明細
export const postFindOne = data => async dispatch => {
    try {
        dispatch(updateFindOne(null))
        const response = await myFetch(`${HOST_URL}/poss/v1/catalogItems/findOne`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const result = await response.json()
            dispatch(updateFindOne(result))
            dispatch(setDisplayProductDetail(true))
        } else {
            throw new Error(`${response.status} POST_FIND_ONE_FAILED`)
        }
    } catch (error) {
        console.error(`${error}, request:${JSON.stringify(data)}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_FIND_ONE'))
    }
}

// 將history加入shoppingBag
export const postAddToBag = data => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/items`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getHistories())
        } else {
            throw new Error(`${response.status} POST_ADD_TO_BAG_FAILED`)
        }
    } catch (error) {
        console.error(`${error}, request:${JSON.stringify(data)}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_ADD_TO_BAG'))
    }
}

// 將O2O商品加入shoppingBag
export const postAddToBagO2O = (data, isCheckout) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/o2o`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getHistories())
            if (isCheckout) {
                const _payload = {
                    firstAccessIndicator: true,
                    items: []
                }
                dispatch(postShoppingBags(_payload))
            }
        } else {
            throw new Error(`${response.status} POST_ADD_TO_BAG_O2O_FAILED`)
        }
    } catch (error) {
        console.error(`${error}, request:${JSON.stringify(data)}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_ADD_TO_BAG_O2O'))
    }
}

// qrcode掃描商品
export const postQrcodeScan = (data, isContinuity) => async dispatch => {
    try {
        window.nativeCloseBarcodeCamera()
        dispatch(setIsScanningBarcode(true))
        if (!isContinuity) {
            dispatch(setDisplayPopupQrcode(false))
        }
        const response = await myFetch(`${HOST_URL}/poss/v1/inventories/qrCode/scan`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            dispatch(getHistories())
        } else {
            throw new Error(`${response.status} POST_QRCODE_SCAN_FAILED`)
        }
    } catch (error) {
        console.error(`${error}, request:${JSON.stringify(data)}`)
    } finally {
        if (isContinuity) {
            window.nativeOpenBarcodeCamera('qrcodeCamera')
        }
        dispatch(setIsScanningBarcode(false))
        dispatch(setLoadingDoneStatus('POST_QRCODE_SCAN'))
    }
}

// scan rfid
export const postRfidScan = data => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/inventories/rfid/scan`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response) return console.log('postRfidScan response is undefined')
        if (response.ok || response.status === 409) {
            dispatch(getHistories())
            if (data.addToShoppingBag) {
                const _payload = {
                    firstAccessIndicator: true,
                    items: []
                }
                dispatch(postShoppingBags(_payload))
            }
            // 快速模式: 返回購物車
            // 瀏覽模式: 返回雲客盤
            const _container = data.addToShoppingBag ? 'checkout' : 'viewed'
            dispatch(setActiveContainer(_container))
        } else {
            throw new Error(`${response.status} POST_RFID_SCAN_FAILED`)
        }
    } catch (error) {
        console.error(`${error}, request:${JSON.stringify(data)}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_RFID_SCAN'))
    }
}

// 結算shoppingBag
export const postSettleShoppingBags =
    (_getPurchaseBags = false) =>
    async dispatch => {
        try {
            const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/settle`, {
                method: 'POST',
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const result = await response.json()
                dispatch(updateSettleShoppingBags(result))
                dispatch(setDisplayPopupSettlementCart(true))
            } else {
                const error = await response.json()
                if (isArray(error?.errors)) {
                    const errCodes = error.errors.map(el => el.errorCode)
                    if (errCodes.includes('E00001')) {
                        alert('購物車尚無商品，請先將商品加入購物車後，再進行結算')
                    }
                }
                throw new Error('POST_SETTLE_SHOPPING_BAGS_FAILED')
            }
        } catch (error) {
            console.error(`${error}`)
        } finally {
            dispatch(setLoadingDoneStatus('POST_SETTLE_SHOPPING_BAGS'))
            if (_getPurchaseBags) {
                dispatch(getPurchaseBags())
            }
        }
    }

// 上傳購入item圖片
export const postPurchaseItemImages = (itemId, formData) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/purchaseBags/purchaseItems/${itemId}`, {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            dispatch(getPurchaseBags())
            dispatch(setUploadedImgs([]))
            dispatch(setDisplayPopupUploadIMG(false))
        } else {
            throw new Error('POST_PURCHASE_ITEM_IMAGES_FAILED')
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_PURCHASE_ITEM_IMAGES'))
    }
}

// 上傳簽署購入圖片
export const postPurchaseBagsSignature =
    (data, _postShoppingBags = false) =>
    async dispatch => {
        try {
            const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/purchaseBags/sign`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                dispatch(setDisplayPopupConsentForm(false))
                dispatch(setActiveContainer('transactionInquiry'))
                dispatch(setActiveTransactionStep('confirmBuyInMetal'))
                const addDefaultItem = false
                dispatch(getPurchaseBags(addDefaultItem, _postShoppingBags))
                dispatch(setSignData(null))

            } else {
                throw new Error('POST_PURCHASE_BAGS_SIGNATURE_FAILED')
            }
        } catch (error) {
            console.error(`${error}`)
        } finally {
            dispatch(setLoadingDoneStatus('POST_PURCHASE_BAGS_SIGNATURE'))
        }
    }

// 加入贈品到shoppingBag item
export const postGiftItem = data => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/items/addGift`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
        } else {
            throw new Error('POST_GIFT_ITEM_FAILED')
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_GIFT_ITEM'))
    }
}

// 放棄shoppingBags贈品
export const postGiveUp = id => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/gifts/items/${id}/giveUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
        } else {
            throw new Error('POST_GIVE_UP_FAILED')
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_GIVE_UP'))
    }
}

// 議價shoppingBags item
export const postBargain = (itemId, data) => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/items/${itemId}/bargain`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
            // dispatch(setDisplayPopupPriceDetails(false))
            // dispatch(setDisplayPopupBargain(true))
        } else {
            throw new Error('POST_BARGAIN_FAILED')
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_BARGAIN'))
    }
}

// 審核議價shoppingBags
export const postBargainApprove = () => async dispatch => {
    try {
        const response = await myFetch(`${HOST_URL}/poss/v1/customerSessions/shoppingBags/bargain/approve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const _payload = {
                firstAccessIndicator: true,
                items: []
            }
            dispatch(postShoppingBags(_payload))
        } else {
            throw new Error('POST_BARGAIN_APPROVE_FAILED')
        }
    } catch (error) {
        console.error(`${error}`)
    } finally {
        dispatch(setLoadingDoneStatus('POST_BARGAIN_APPROVE'))
    }
}
