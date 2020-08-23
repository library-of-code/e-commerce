var data = require('./data/shopItems.json')

export async function getShopItems() {
    console.log(data)
    return await data;
}