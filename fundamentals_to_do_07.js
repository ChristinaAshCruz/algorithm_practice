// ROCKIN' THE DOJO SWEATSHIRT
// cost: $20
// Josh's discount: 9% if you buy 2, 19% if you buy 3, 35% if you buy 4+
// only accepts cash + does NOT have coins (round up to nearest dollar)

//  Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

function sweatshirtPricing(num) {
  let originalPrice = 20;
  let totalCost = 0;
  let discount = 0;

  //   if (num < 1) {
  //     return "You need to purchase at least 1 sweatshirt in order for us to return your total cost.";
  //   }

  switch (true) {
    case num === 1:
      totalCost = 20;
      break;
    case num === 2:
      discount = 0.9;
      break;
    case num === 3:
      discount = 0.19;
      break;
    case num >= 4:
      discount = 0.35;
      break;
    default:
      return "Invalid quantity. Try again.";
  }

  let discoutAmount = (discount / 100) * originalPrice;
  totalCost = originalPrice * num - discoutAmount;
  totalCost = Math.ceil(totalCost);

  return `Your total cost for ${num} sweatshirts is $${totalCost}`;
}

console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(5));
console.log(sweatshirtPricing(0));
