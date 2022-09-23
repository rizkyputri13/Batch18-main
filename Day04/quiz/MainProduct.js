import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3, 7500000);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2, 15700000);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1, 3500000);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2, 12000000);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4, 26000000 );

let listCart = [prod1, prod2, prod3, prod4, prod5];

//console.log(listCart.toString());


const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal, 0)

console.log(`Total Tagihan = Rp.${totalTagihan}`);//Total Tagihan =64700000

const totalTagihanDiscount = (discount) => {
    return totalTagihan - totalTagihan*(discount/100)
    
}

console.log(`Total Tagihan discount = Rp.${totalTagihanDiscount(10)}`);//Total Tagihan discount=58230000