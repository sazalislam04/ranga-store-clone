const textElement = (id) => {
  const text = document.getElementById(id);
  const textString = text.innerText;
  const textValue = parseInt(textString);
  return textValue;
};

let count = 0;
const addToCart = (id, price) => {
  count = count + 1;
  updatePrice("price", price);
  updateTaxAndCharge();
  totalCost();
  document.getElementById("counter").innerText = count;
  document.getElementById("total-product").innerText = count;
};

const updatePrice = (id, value) => {
  const elmPrice = textElement(id);
  const proPrice = parseInt(value);
  const totalPrice = elmPrice + proPrice;
  document.getElementById(id).innerText = Math.round(totalPrice);
};

const setInnerText = (id, value) => {
  document.getElementById(id).innerText = value;
};

const updateTaxAndCharge = () => {
  const price = textElement("price");
  console.log(price);
  if (price >= 500) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", (price * 0.01).toFixed(2));
  } else if (price >= 400) {
    setInnerText("delivery-charge", 30);
    setInnerText("total-tax", (price * 0.01).toFixed(2));
  } else if (price >= 200) {
    setInnerText("delivery-charge", 20);
    setInnerText("total-tax", (price * 0.01).toFixed(2));
  } else {
    setInnerText("delivery-charge", 10);
  }
};

const totalCost = () => {
  const price = textElement("price");
  const deliveryCharge = textElement("delivery-charge");
  const totalTax = textElement("total-tax");
  const totalCost = price + deliveryCharge + totalTax;
  document.getElementById("grand-total").innerText = totalCost;
};
