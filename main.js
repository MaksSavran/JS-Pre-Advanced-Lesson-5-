import { addToCart, sale, showReceipt, showShopBalance } from './shop.js';

let addedToCart = addToCart();
let productsInCart = addedToCart('beer', 10);
productsInCart = addedToCart('vine', 5);
productsInCart = addedToCart('pepsy', 10);
//console.log(productsInCart);
let soldProducts = sale(productsInCart);
//console.log(soldProducts);
showReceipt(soldProducts);
showShopBalance();


let secondAddedToCart = addToCart();
productsInCart = secondAddedToCart('vine', 7);
soldProducts = sale(productsInCart);
showReceipt(soldProducts);
showShopBalance();


let thirdAddedToCart = addToCart();
productsInCart = thirdAddedToCart('beer', 5);
productsInCart = thirdAddedToCart('pepsy', 12);
soldProducts = sale(productsInCart);
showReceipt(soldProducts);
showShopBalance();