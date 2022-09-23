export default class Product{
    static total = 0;
    constructor(prodId,prodName, category, price=0,totalBuy=1, subTotal=0){
        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
        this.subTotal = subTotal
        Product.total++
    }

    // setPrice(price){
     
    // }

    // setTotalBuy(total){
       
    // }

    toString(){
        return `Product Id : ${this.prodId} \nProduct Name : ${this.prodName} \nCategory : ${this.category} \nPrice : ${this.price} \nTotal Buy : ${this.totalBuy} \nSub Total :  ${this.subTotal} `
    }

}
