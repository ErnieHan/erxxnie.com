import { actionTypes } from '../actions/actionTypes'

export const setLanguage = lang => {
    return { type: actionTypes.SET_LANGUAGE, lang }
}

export const setBlueToothStatus = bool => {
    return { type: actionTypes.SET_BLUE_TOOTH_STATUS, bool }
}

export const setIsScanningBarcode = bool => {
    return { type: actionTypes.SET_IS_SCANNING_BARCODE, bool }
}

export const setLoadingStatus = data => {
    return { type: actionTypes.SET_LOADING_STATUS, data }
}

export const setLoadingDoneStatus = data => {
    return { type: actionTypes.SET_LOADING_DONE_STATUS, data }
}

export const setLoadingStatusClear = () => {
    return { type: actionTypes.SET_LOADING_STATUS_CLEAR }
}

export const setTextSearch = data => {
    return { type: actionTypes.SET_TEXT_SEARCH, data }
}

export const setActiveContainer = data => {
    window.screenPage(data)
    return { type: actionTypes.SET_ACTIVE_CONTAINER, data }
}

export const setActiveTransactionStep = data => {
    return { type: actionTypes.SET_ACTIVE_TRANSACTION_STEP, data }
}

export const setActiveRepairStep = data => {
    return { type: actionTypes.SET_ACTIVE_REPAIR_STEP, data }
}

export const setActiveBuyInMetal = data => {
    return { type: actionTypes.SET_ACTIVE_BUY_IN_METAL_STEP, data }
}

export const setActiveQrcodeMode = data => {
    return { type: actionTypes.SET_ACTIVE_QRCODE_MODE, data }
}

export const setActiveQrcodeContinuity = bool => {
    return { type: actionTypes.SET_ACTIVE_QRCODE_CONTINUITY, bool }
}

export const setActiveRfidMode = data => {
    return { type: actionTypes.SET_ACTIVE_RFID_MODE, data }
}

export const setActiveRfidDevice = data => {
    return { type: actionTypes.SET_ACTIVE_RFID_DEVICE, data }
}

export const setActiveProduct = data => {
    return { type: actionTypes.SET_ACTIVE_PRODUCT, data }
}

export const setActiveCartItem = data => {
    return { type: actionTypes.SET_ACTIVE_CART_ITEM, data }
}

export const setActiveAuthenticationStep = data => {
    return { type: actionTypes.SET_ACTIVE_AUTHENTICATION_STEP, data }
}

export const setChangeCheckInId = data => {
    return { type: actionTypes.SET_CHANGE_CHECK_IN_ID, data }
}

export const setDisplayProductDetail = bool => {
    if (bool) {
        window.qrcodeReset()
        window.screenPage('productDetail')
    }
    return { type: actionTypes.SET_DISPLAY_PRODUCT_DETAIL, bool }
}

export const setDisplayProductList = bool => {
    if (bool) {
        window.qrcodeReset()
        window.screenPage('productList')
    }
    return { type: actionTypes.SET_DISPLAY_PRODUCT_LIST, bool }
}

export const setDisplayMenu = bool => {
    if (bool) {
        window.nativeSearchRfidDevice()
    } else {
        window.nativeStopSearchRfidDevice()
    }
    return { type: actionTypes.SET_DISPLAY_MENU, bool }
}

export const setDisplayPopupInventory = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_INVENTORY, bool }
}

export const setDisplayPopupPickupVerification = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_PICKUP_VERIFICATION, bool }
}

export const setDisplayPopupRfid = bool => {
    if (bool) {
        window.screenPage('rfid')
    }
    return { type: actionTypes.SET_DISPLAY_POPUP_RFID, bool }
}

export const setDisplayPopupQrcode = bool => {
    if (bool) {
        window.rfidReset()
        window.nativeOpenBarcodeCamera('qrcodeCamera')
        window.screenPage('qrCode')
    } else {
        window.nativeCloseBarcodeCamera()
    }
    return { type: actionTypes.SET_DISPLAY_POPUP_QRCODE, bool }
}

export const setDisplayPopupPersonalization = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_PERSONALIZATION, bool }
}

export const setDisplayPopupBargain = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_BARGAIN, bool }
}

export const setDisplayPopupCancelShoppingHistory = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_SHOPPING_HISTORY, bool }
}

export const setDisplayPopupAttritionRateGuide = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_ATTRITION_RATE_GUIDE, bool }
}

export const setDisplayPopupAttritionRateModify = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_ATTRITION_RATE_MODIFY, bool }
}

export const setDisplayPopupConsentForm = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_CONSENT_FORM, bool }
}

export const setDisplayPopupRepairSign = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_REPAIR_SIGN, bool }
}

export const setDisplayPopupRepairDesc = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_REPAIR_DESC, bool }
}

export const setDisplayPopupIncidentalItem = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_INCIDENTAL_ITEM, bool }
}

export const setDisplayPopupPriceDetails = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_PRICE_DETAILS, bool }
}

export const setDisplayPopupPrepayments = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_PREPAYMENTS, bool }
}

export const setDisplayPopupEditProductSpecification = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_EDIT_PRODUCT_SPECIFICATION, bool }
}

export const setDisplayPopupExchangeDetails = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_EXCHANGE_DETAILS, bool }
}

export const setDisplayPopupCustomer = bool => {
    if (bool) {
        window.screenPage('customerSession')
    }
    return { type: actionTypes.SET_DISPLAY_POPUP_CUSTOMER, bool }
}

export const setDisplayPopupCustomerPreloading = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_CUSTOMER_PRELOADING, bool }
}

export const setDisplayPopupSettlementCart = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_SETTLEMENT_CART, bool }
}

export const setDisplayPopupBookingUnitsFieldRules = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_BOOKING_UNITS_FIELD_RULES, bool }
}

export const setDisplayPopupUploadIMG = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_UPLOAD_IMG, bool }
}

export const setDisplayPopupUpBuyInDetail = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_UP_BUY_IN_DETAIL, bool }
}

export const setDisplayPopupSettlementMetal = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_SETTLEMENT_METAL, bool }
}

export const setDisplayPopupRemoteStock = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_REMOTE_STOCK, bool }
}

export const setDisplayPopupCustomizationSign = bool => {
    return { type: actionTypes.SET_DISPLAY_POPUP_CUSTOMIZATION_SIGN, bool }
}

export const setItemDiscountInfo = data => {
    return { type: actionTypes.SET_ITEM_DISCOUNT_INFO, data }
}

export const setCheckedItems = data => {
    return { type: actionTypes.SET_CHECKED_ITEMS, data }
}

export const setCheckInDone = bool => {
    return { type: actionTypes.SET_CHECK_IN_DONE, bool }
}

export const setCatalogItemsParams = data => {
    return { type: actionTypes.SET_CATALOG_ITEMS_PARAMS, data }
}

export const setBookingUnitsParams = data => {
    return { type: actionTypes.SET_BOOKING_UNITS_PARAMS, data }
}

export const setBookingUnitsFieldRules = data => {
    return { type: actionTypes.SET_BOOKING_UNITS_FIELD_RULES, data }
}

export const setBookingUnitsTempFieldRules = data => {
    return { type: actionTypes.SET_BOOKING_UNITS_TEMP_FIELD_RULES, data }
}

export const setBookingUnitsGroup = data => {
    return { type: actionTypes.SET_BOOKING_UNITS_GROUP, data }
}

export const setRfidDevices = data => {
    return { type: actionTypes.SET_RFID_DEVICES, data }
}

export const setTempRfidDevice = data => {
    return { type: actionTypes.SET_TEMP_RFID_DEVICE, data }
}

export const setRfidIsHighFref = bool => {
    return { type: actionTypes.SET_RFID_IS_HIGH_FREQ, bool }
}

export const setScannedBarcodes = data => {
    return { type: actionTypes.SET_SCANNED_BARCODES, data }
}

export const setScannedRfidTags = data => {
    return { type: actionTypes.SET_SCANNED_RFID_TAGS, data }
}

export const setTempRefinements = data => {
    return { type: actionTypes.SET_TEMP_REFINEMENTS, data }
}

export const setSignData = data => {
    return { type: actionTypes.SET_SIGN_DATA, data }
}

export const setCurrentPurchaseItem = data => {
    return { type: actionTypes.SET_CURRENT_PURCHASE_ITEM, data }
}

export const setCurrentPurchaseBags = data => {
    return { type: actionTypes.SET_CURRENT_PURCHASE_BAGS, data }
}

export const setDeleteMetalItem = data => {
    return { type: actionTypes.SET_DELETE_METAL_ITEM, data }
}

export const setUploadedImgs = data => {
    return { type: actionTypes.SET_UPLOADED_IMGS, data }
}

export const setMetalItemError = data => {
    return { type: actionTypes.SET_METAL_ITEM_ERROR, data }
}

export const setSettlementItemInfo = data => {
    return { type: actionTypes.SET_SETTLEMENT_METAL_ITEM_INFO, data }
}

export const setCurrentFreebiesPopups = data => {
    return { type: actionTypes.SET_CURRENT_FREEBIES_POPUPS, data }
}

export const setCheckInCustomerSessionError = data => {
    return { type: actionTypes.SET_CHECK_IN_CUSTOMER_SESSION_ERROR, data }
}

export const setProductCustomization = data => {
    return { type: actionTypes.SET_PRODUCT_CUSTOMIZATION, data }
}
