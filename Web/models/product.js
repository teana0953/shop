const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getAllProductsFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                resolve([]);
                return;
            }
            resolve(JSON.parse(fileContent));
            return;
        });
    });
}

module.exports = class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    save() {
        return new Promise((resolve, reject) => {
            getAllProductsFromFile().then((products) => {
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(this);
                    }
                });
            });
        });
    }

    static fetchAll() {
        return getAllProductsFromFile();
    }
} 