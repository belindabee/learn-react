export const CURRENCY_CHANGED = 'CURRENCY_CHANGED'

const currencyChanged = (currency) => ({
    type: CURRENCY_CHANGED,
    currency,
})