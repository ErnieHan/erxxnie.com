import { actionTypes } from '../actions/actionTypes'

const initialState = {
    employees: null,
    customerSession: null,
    shoppingBags: null,
    histories: null,
    catalogItems: null,
    findOne: null,
    bookingUnits: null,
    settleShoppingBags: null,
    inventory: null,
    inventoryInProductDetail: null,
    purchaseRules: null,
    purchaseBags: null,
    businessDate: null
}

const update = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_EMPLOYEES:
            return {
                ...state,
                employees: action.data
            }

        case actionTypes.UPDATE_CUSTOMER_SESSION:
            return {
                ...state,
                customerSession: action.data
            }

        case actionTypes.UPDATE_SHOPPING_BAGS:
            return {
                ...state,
                shoppingBags: action.data
            }

        case actionTypes.UPDATE_HISTORIES:
            return {
                ...state,
                histories: action.data
            }

        case actionTypes.UPDATE_CATALOG_ITEMS:
            return {
                ...state,
                catalogItems: action.data
            }

        case actionTypes.UPDATE_FIND_ONE:
            return {
                ...state,
                findOne: action.data
            }

        case actionTypes.UPDATE_BOOKING_UNITS:
            return {
                ...state,
                bookingUnits: action.data
            }

        case actionTypes.UPDATE_SETTLE_SHOPPING_BAGS:
            return {
                ...state,
                settleShoppingBags: action.data
            }

        case actionTypes.UPDATE_INVENTORY:
            return {
                ...state,
                inventory: action.data
            }

        case actionTypes.UPDATE_INVENTORY_IN_PRODUCT_DETAIL:
            return {
                ...state,
                inventoryInProductDetail: action.data
            }

        case actionTypes.UPDATE_PURCHASE_RULES:
            return {
                ...state,
                purchaseRules: action.data
            }

        case actionTypes.UPDATE_PURCHASE_BAGS:
            return {
                ...state,
                purchaseBags: action.data
            }

        case actionTypes.UPDATE_BUSINESS_DATE:
            return {
                ...state,
                businessDate: action.data
            }

        default:
            return state
    }
}

export default update
