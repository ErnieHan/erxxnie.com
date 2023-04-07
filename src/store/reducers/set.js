import { actionTypes } from '../actions/actionTypes'

const initialState = {
    language: 'tc',
    blueToothStatus: false,
    isScanningBarcode: false,
    loadingStatus: [],
    loadingDoneStatus: [],
    textSearch: '',
    activeContainer: 'viewed',
    activeTransactionStep: 'main',
    activeRepairStep: 'main',
    activeAuthenticationStep: null,
    activeQrcodeMode: 'fast',
    activeQrcodeContinuity: false,
    activeRfidMode: 'fast',
    activeRfidDevice: null,
    activeProduct: null,
    activeCartItem: null,
    activeBuyInMetal: 'main',
    displayProductDetail: false,
    displayProductList: false,
    displayMenu: false,
    displayPopupInventory: false,
    displayPopupPickupVerification: false,
    displayPopupRfid: false,
    displayPopupQrcode: false,
    displayPopupBargain: false,
    displayPopupCancelShoppingHistory: false,
    displayPopupAttritionRateGuide: false,
    displayPopupConsentForm: false,
    displayPopupRepairSign: false,
    displayPopupRepairDesc: false,
    displayPopupAttritionRateModify: false,
    displayPopupIncidentalItem: false,
    displayPopupPersonalization: false,
    displayPopupPriceDetails: false,
    displayPopupPrepayments: false,
    displayPopupEditProductSpecification: false,
    displayPopupExchangeDetails: false,
    displayPopupCustomer: false,
    displayPopupCustomerPreloading: false,
    displayPopupSettlementCart: false,
    displayPopupBookingUnitsFieldRules: false,
    displayPopupUploadIMG: false,
    displayPopupUpBuyInDetail: false,
    displayPopupSettlementMetal: false,
    displayPopupRemoteStock: false,
    displayPopupCustomizationSign: false,
    itemDiscountInfo: null,
    checkedItems: null,
    changeCheckInId: '',
    checkInDone: false,
    bookingUnitsFieldRules: null,
    bookingUnitsTempFieldRules: null,
    bookingUnitsGroup: null,
    rfidDevices: [],
    rfidIsHighFreq: false,
    tempRfidDevice: null,
    scannedBarcodes: [],
    scannedRfidTags: [],
    tempRefinements: [
        {
            refinementType: 'stock',
            value: ['Y']
        },
        {
            refinementType: 'currencyRegion',
            value: ['CHN']
        }
    ],
    catalogItemsParams: {
        page: 1,
        pageSize: 30,
        orderBy: 'count',
        sortDirection: 'desc'
    },
    bookingUnitsParams: {
        saleType: 'store',
        orderBy: 'itemNumber',
        sortDirection: 'desc'
    },
    signData: null,
    currentPurchaseItem: null,
    currentPurchaseBags: [],
    deleteMetalItem: null,
    uploadedImgs: [],
    metalItemError: [],
    settlementItemInfo: null,
    currentFreebiesPopups: [],
    checkInCustomerSessionError: null,
    productCustomization: {
        ringSize: 'default',
        engravingFont: 'times',
        engravingContent: '',
        chalcedonyQuantity: 0,
        chalcedonyComments: ''
    }
}

const set = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.lang
            }

        case actionTypes.SET_BLUE_TOOTH_STATUS:
            return {
                ...state,
                blueToothStatus: action.bool
            }

        case actionTypes.SET_IS_SCANNING_BARCODE:
            return {
                ...state,
                isScanningBarcode: action.bool
            }

        case actionTypes.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.data
            }

        case actionTypes.SET_LOADING_DONE_STATUS:
            return {
                ...state,
                loadingDoneStatus: [...state.loadingDoneStatus, action.data]
            }

        case actionTypes.SET_LOADING_STATUS_CLEAR:
            return {
                ...state,
                loadingStatus: [],
                loadingDoneStatus: []
            }

        case actionTypes.SET_TEXT_SEARCH:
            return {
                ...state,
                textSearch: action.data
            }

        case actionTypes.SET_ACTIVE_CONTAINER:
            return {
                ...state,
                activeContainer: action.data
            }

        case actionTypes.SET_ACTIVE_TRANSACTION_STEP:
            return {
                ...state,
                activeTransactionStep: action.data
            }

        case actionTypes.SET_ACTIVE_AUTHENTICATION_STEP:
            return {
                ...state,
                activeAuthenticationStep: action.data
            }

        case actionTypes.SET_ACTIVE_REPAIR_STEP:
            return {
                ...state,
                activeRepairStep: action.data
            }

        case actionTypes.SET_ACTIVE_QRCODE_MODE:
            return {
                ...state,
                activeQrcodeMode: action.data
            }

        case actionTypes.SET_ACTIVE_QRCODE_CONTINUITY:
            return {
                ...state,
                activeQrcodeContinuity: action.bool
            }

        case actionTypes.SET_ACTIVE_RFID_MODE:
            return {
                ...state,
                activeRfidMode: action.data
            }

        case actionTypes.SET_ACTIVE_RFID_DEVICE:
            return {
                ...state,
                activeRfidDevice: action.data
            }

        case actionTypes.SET_ACTIVE_PRODUCT:
            return {
                ...state,
                activeProduct: action.data
            }

        case actionTypes.SET_ACTIVE_CART_ITEM:
            return {
                ...state,
                activeCartItem: action.data
            }

        case actionTypes.SET_ACTIVE_BUY_IN_METAL_STEP:
            return {
                ...state,
                activeBuyInMetal: action.data
            }

        case actionTypes.SET_DISPLAY_PRODUCT_DETAIL:
            return {
                ...state,
                displayProductDetail: action.bool
            }

        case actionTypes.SET_DISPLAY_PRODUCT_LIST:
            return {
                ...state,
                displayProductList: action.bool
            }

        case actionTypes.SET_DISPLAY_MENU:
            return {
                ...state,
                displayMenu: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_INVENTORY:
            return {
                ...state,
                displayPopupInventory: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_PICKUP_VERIFICATION:
            return {
                ...state,
                displayPopupPickupVerification: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_RFID:
            return {
                ...state,
                displayPopupRfid: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_QRCODE:
            return {
                ...state,
                displayPopupQrcode: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_BARGAIN:
            return {
                ...state,
                displayPopupBargain: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_PERSONALIZATION:
            return {
                ...state,
                displayPopupPersonalization: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_SHOPPING_HISTORY:
            return {
                ...state,
                displayPopupCancelShoppingHistory: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_ATTRITION_RATE_GUIDE:
            return {
                ...state,
                displayPopupAttritionRateGuide: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_ATTRITION_RATE_MODIFY:
            return {
                ...state,
                displayPopupAttritionRateModify: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_CONSENT_FORM:
            return {
                ...state,
                displayPopupConsentForm: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_REPAIR_SIGN:
            return {
                ...state,
                displayPopupRepairSign: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_REPAIR_DESC:
            return {
                ...state,
                displayPopupRepairDesc: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_INCIDENTAL_ITEM:
            return {
                ...state,
                displayPopupIncidentalItem: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_PRICE_DETAILS:
            return {
                ...state,
                displayPopupPriceDetails: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_PREPAYMENTS:
            return {
                ...state,
                displayPopupPrepayments: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_EDIT_PRODUCT_SPECIFICATION:
            return {
                ...state,
                displayPopupEditProductSpecification: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_EXCHANGE_DETAILS:
            return {
                ...state,
                displayPopupExchangeDetails: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_CUSTOMER:
            return {
                ...state,
                displayPopupCustomer: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_CUSTOMER_PRELOADING:
            return {
                ...state,
                displayPopupCustomerPreloading: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_SETTLEMENT_CART:
            return {
                ...state,
                displayPopupSettlementCart: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_BOOKING_UNITS_FIELD_RULES:
            return {
                ...state,
                displayPopupBookingUnitsFieldRules: action.bool
            }
        case actionTypes.SET_DISPLAY_POPUP_UPLOAD_IMG:
            return {
                ...state,
                displayPopupUploadIMG: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_UP_BUY_IN_DETAIL:
            return {
                ...state,
                displayPopupUpBuyInDetail: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_SETTLEMENT_METAL:
            return {
                ...state,
                displayPopupSettlementMetal: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_REMOTE_STOCK:
            return {
                ...state,
                displayPopupRemoteStock: action.bool
            }

        case actionTypes.SET_DISPLAY_POPUP_CUSTOMIZATION_SIGN:
            return {
                ...state,
                displayPopupCustomizationSign: action.bool
            }

        case actionTypes.SET_CHANGE_CHECK_IN_ID:
            return {
                ...state,
                changeCheckInId: action.data
            }

        case actionTypes.SET_ITEM_DISCOUNT_INFO:
            return {
                ...state,
                itemDiscountInfo: action.data
            }

        case actionTypes.SET_CHECKED_ITEMS:
            return {
                ...state,
                checkedItems: action.data
            }

        case actionTypes.SET_CHECK_IN_DONE:
            return {
                ...state,
                checkInDone: action.bool
            }

        case actionTypes.SET_CATALOG_ITEMS_PARAMS:
            return {
                ...state,
                catalogItemsParams: {
                    ...state.catalogItemsParams,
                    ...action.data
                }
            }

        case actionTypes.SET_BOOKING_UNITS_PARAMS:
            return {
                ...state,
                bookingUnitsParams: {
                    ...state.bookingUnits,
                    ...action.data
                }
            }

        case actionTypes.SET_BOOKING_UNITS_FIELD_RULES:
            return {
                ...state,
                bookingUnitsFieldRules: action.data
            }

        case actionTypes.SET_BOOKING_UNITS_TEMP_FIELD_RULES:
            return {
                ...state,
                bookingUnitsTempFieldRules: action.data
            }

        case actionTypes.SET_BOOKING_UNITS_GROUP:
            return {
                ...state,
                bookingUnitsGroup: action.data
            }

        case actionTypes.SET_RFID_DEVICES:
            return {
                ...state,
                rfidDevices: action.data
            }

        case actionTypes.SET_RFID_IS_HIGH_FREQ:
            return {
                ...state,
                rfidIsHighFreq: action.bool
            }

        case actionTypes.SET_TEMP_RFID_DEVICE:
            return {
                ...state,
                tempRfidDevice: action.data
            }

        case actionTypes.SET_SCANNED_BARCODES:
            return {
                ...state,
                scannedBarcodes: action.data
            }

        case actionTypes.SET_SCANNED_RFID_TAGS:
            return {
                ...state,
                scannedRfidTags: action.data
            }

        case actionTypes.SET_TEMP_REFINEMENTS:
            return {
                ...state,
                tempRefinements: action.data
            }

        case actionTypes.SET_SIGN_DATA:
            return {
                ...state,
                signData: action.data
            }

        case actionTypes.SET_CURRENT_PURCHASE_ITEM:
            return {
                ...state,
                currentPurchaseItem: action.data
            }

        case actionTypes.SET_CURRENT_PURCHASE_BAGS:
            return {
                ...state,
                currentPurchaseBags: action.data
            }

        case actionTypes.SET_DELETE_METAL_ITEM:
            return {
                ...state,
                deleteMetalItem: action.data
            }

        case actionTypes.SET_UPLOADED_IMGS:
            return {
                ...state,
                uploadedImgs: action.data
            }

        case actionTypes.SET_METAL_ITEM_ERROR:
            return {
                ...state,
                metalItemError: action.data
            }

        case actionTypes.SET_SETTLEMENT_METAL_ITEM_INFO:
            return {
                ...state,
                settlementItemInfo: action.data
            }

        case actionTypes.SET_CURRENT_FREEBIES_POPUPS:
            return {
                ...state,
                currentFreebiesPopups: action.data
            }

        case actionTypes.SET_CHECK_IN_CUSTOMER_SESSION_ERROR:
            return {
                ...state,
                checkInCustomerSessionError: action.data
            }

        case actionTypes.SET_PRODUCT_CUSTOMIZATION:
            return {
                ...state,
                productCustomization: action.data
            }

        default:
            return state
    }
}

export default set
