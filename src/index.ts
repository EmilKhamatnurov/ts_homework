import { totalPrice } from './app/totalPrice';

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });

const node = document.querySelector("#app");
if (node) node.innerHTML = `<p>Цена: ${price}</p>`;
