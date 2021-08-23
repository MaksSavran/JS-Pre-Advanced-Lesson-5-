let bank = 1000;
const beerPrice = 30;
const vinePrice = 150;
const pepsyPrice = 20;
let beerInStorage = 100;
let vineInStorage = 50;
let pepsyInStorage = 80;

function addToCart() {
    let beerCount = 0;
    let vineCount = 0;
    let pepsyCount = 0;
    return function (productType, count) {
        if (productType == 'beer') {
            if (count <= beerInStorage) {
                beerCount = count;
            } else {
                alert(`Вибачте але на складі залишилось пива ${beerInStorage} штук.`);
            }
        } else if (productType == 'vine') {
            if (count <= vineInStorage) {
                vineCount = count;
            } else {
                alert(`Вибачте але на складі залишилось вина ${vineInStorage} штук.`);
            }
        } else if (productType == 'pepsy') {
            if (count <= pepsyInStorage) {
                pepsyCount = count;
            } else {
                alert(`Вибачте але на складі залишилось пепсі ${pepsyInStorage} штук.`);
            }
        }
        return {
            beer: beerCount,
            vine: vineCount,
            pepsy: pepsyCount
        }
    }
}
function sale(productsInCartObject) {
    let totalPrice = productsInCartObject.beer * beerPrice + productsInCartObject.vine * vinePrice + productsInCartObject.pepsy * pepsyPrice;
    beerInStorage -= productsInCartObject.beer;
    vineInStorage -= productsInCartObject.vine;
    pepsyInStorage -= productsInCartObject.pepsy;
    bank += totalPrice;
    return {
        soldBeer: productsInCartObject.beer,
        soldVine: productsInCartObject.vine,
        soldPepsy: productsInCartObject.pepsy,
        totalPrice: totalPrice
    }
}
function showReceipt(soldProductsObject) {
    console.log(`
    Пиво: ${soldProductsObject.soldBeer} шт.
    Пепсі: ${soldProductsObject.soldPepsy} шт.
    Вино: ${soldProductsObject.soldVine} шт.
    Всього: ${soldProductsObject.totalPrice} гривень
    `)
}
function showShopBalance() {
    console.log(`
    Баланс: ${bank} грн
    Пиво: ${beerInStorage} шт.
    Вино: ${vineInStorage} шт.
    Пепсі: ${pepsyInStorage} шт.
    `)
}

export { addToCart, sale, showReceipt, showShopBalance };



