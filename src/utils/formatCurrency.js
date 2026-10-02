/**
 * MediCare+ Currency Formatter Utility
 * 
 * Formats numerical amounts into Indian Rupee (INR) representation
 * using the en-IN locale standard.
 * 
 * Examples:
 *   formatCurrencyINR(120) => "₹120"
 *   formatCurrencyINR(249) => "₹249"
 *   formatCurrencyINR(1250) => "₹1,250"
 * 
 * @param {number|string} amount - Numeric price value
 * @returns {string} Formatted Indian Rupee currency string
 */
export function formatCurrencyINR(amount) {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return '₹0';
  }

  const numeric = Number(amount);
  const hasDecimals = numeric % 1 !== 0;

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(numeric);
}
