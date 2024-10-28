// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

const string = "abcde";

if (string[1] === "b") {
  console.log("Так");
} else {
  console.log("Ні");
}

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

function formatMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const modHours = String(hours).padStart(2, "0");
  console.log(modHours);
  const modMinutes = String(minutes % 60).padStart(2, "0");
  return `${modHours} : ${modMinutes}`;
}

console.log(formatMinutesToTime(69));
console.log(formatMinutesToTime(19));
console.log(formatMinutesToTime(129));

1;
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice <= customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalValueOrder = quantity * pricePerDroid;
  const message =
    totalValueOrder > customerCredits
      ? `"Insufficient funds!"`
      : `"You ordered ${quantity} droids worth ${totalValueOrder} credits!"`;
  return message;
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

2;
function formatMessage(message, maxLength) {
  const massageLength = message.length;
  if (massageLength <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

function formatMessage(message, maxLength) {
  let display;
  if (message.length <= maxLength) {
    display = message;
  } else {
    display = message.slice(0, maxLength) + "...";
  }
  return display;
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

3;
function checkForSpam(message) {
  const spamMessage = "spam";
  const saleMessage = "sale";
  const lowerMessage = message.toLowerCase();
  if (
    lowerMessage.includes(spamMessage) ||
    lowerMessage.includes(saleMessage)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function checkForSpam(message) {
  const checkMessage =
    message.toLowerCase().includes(`spam`) ||
    message.toLowerCase().includes(`sale`);
  return checkMessage;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

4;
function getShippingCost(country) {
  switch (country) {
    case "China":
      return "Shipping to China will cost 100 credits";
    case "Chile":
      return "Shipping to Chile will cost 250 credits";
    case "Australia":
      return "Shipping to Australia will cost 170 credits";
    case "Jamaica":
      return "Shipping to Jamaica will cost 120 credits";
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;
  switch (country) {
    case `China`:
      message = "Shipping to China will cost 100 credits";
      break;
    case `Chile`:
      message = "Shipping to Chile will cost 250 credits";
      break;
    case `Australia`:
      message = "Shipping to Australia will cost 170 credits";
      break;
    case `Jamaica`:
      message = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
