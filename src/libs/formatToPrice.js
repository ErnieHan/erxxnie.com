export const formatToPrice = number => {
    let formattedNumber = ''
    const typeNumber = Number(number)
    if (number && !isNaN(typeNumber)) formattedNumber = Number(number).toLocaleString()
    return formattedNumber
}
