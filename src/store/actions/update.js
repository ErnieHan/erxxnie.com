import { actionTypes } from './actionTypes'

export const updateEmployees = data => {
    return { type: actionTypes.UPDATE_EMPLOYEES, data }
}

export const updateCustomerSession = data => {
    return { type: actionTypes.UPDATE_CUSTOMER_SESSION, data }
}

export const updateShoppingBags = data => {
    return { type: actionTypes.UPDATE_SHOPPING_BAGS, data }
}

export const updateHistories = data => {
    return { type: actionTypes.UPDATE_HISTORIES, data }
}

export const updateCatalogItems = data => {
    return { type: actionTypes.UPDATE_CATALOG_ITEMS, data }
}

export const updateFindOne = data => {
    return { type: actionTypes.UPDATE_FIND_ONE, data }
}

export const updateBookingUnits = data => {
    return { type: actionTypes.UPDATE_BOOKING_UNITS, data }
}

export const updateSettleShoppingBags = data => {
    return { type: actionTypes.UPDATE_SETTLE_SHOPPING_BAGS, data }
}

export const updateInventory = data => {
    return { type: actionTypes.UPDATE_INVENTORY, data }
}

export const updateInventoryInProductDetail = data => {
    return { type: actionTypes.UPDATE_INVENTORY_IN_PRODUCT_DETAIL, data }
}

export const updatePurchaseRules = data => {
    return { type: actionTypes.UPDATE_PURCHASE_RULES, data }
}

export const updatePurchaseBags = data => {
    return { type: actionTypes.UPDATE_PURCHASE_BAGS, data }
}

export const updateBusinessDate = data => {
    return { type: actionTypes.UPDATE_BUSINESS_DATE, data }
}
