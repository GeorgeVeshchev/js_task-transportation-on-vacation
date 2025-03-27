/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  const totalAmount = oneDay * days;

  if (days >= 7) {
    return totalAmount - 50;
  } else if (days >= 3) {
    return totalAmount - 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
