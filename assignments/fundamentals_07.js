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

// CLOCK HAND ANGLES, REVISTED

// Return to your previous clockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands.

// copied from last algo practice
function clockHandAngles(secondsTotal) {
  let secondsinHour = 3600;
  let degreesinHour = 360 / 12;

  let hourHand = ((secondsTotal / secondsinHour) % 12) * degreesinHour;
  // rounding to the nearest integer
  hourHand = Math.floor(hourHand);

  let secondsInMinute = 60;
  let degreesInMinute = 360 / 60;

  let minuteHand = ((secondsTotal / secondsInMinute) % 60) * degreesInMinute;
  // rounding to the nearest integer
  minuteHand = Math.floor(minuteHand);

  let degreeInSecond = 360 / 60;

  let secondHand = (secondsTotal % 60) * degreeInSecond;
  // rounding to the nearest integer
  secondHand = Math.floor(secondHand);

  return `Hours: ${hourHand} degs. Minutes: ${minuteHand} degs. Seconds: ${secondHand} degs.`;
}
console.log(clockHandAngles(119730));
