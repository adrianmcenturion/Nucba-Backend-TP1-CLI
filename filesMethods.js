const fs = require("fs");

const EXPENSES_PATH = "./data/expensesData.json"

const getExpenses = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(EXPENSES_PATH, 'utf8', (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(JSON.parse(result))
        })
    })
}

const saveExpenses = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(EXPENSES_PATH, JSON.stringify(data), (err, result) => {
            if (err) {
                reject(err);
            }
            resolve('Ok')
        })
    })

}

module.exports = {
    getExpenses,
    saveExpenses
}