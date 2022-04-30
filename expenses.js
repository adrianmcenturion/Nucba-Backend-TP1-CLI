const filesMethods = require('./filesMethods')

const addExpense = async (name, amount, category) => {
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    }
    try {
        const expensesList = await filesMethods.getExpenses()

        expensesList.push(newExpense)
        

        await filesMethods.saveExpenses(expensesList)
    }catch (err) {
        console.log('found : ' + err)
        throw err
    }

    return newExpense
}

const getTotalExpenses = async () => {

    try {

        const expensesList = await filesMethods.getExpenses()

        let totalExpenses = 0

        for(let i = 0; i < expensesList.length; i++) {
            totalExpenses += expensesList[i].amount
        }

        return totalExpenses

    }catch (err) {
        throw err

    }
}

const getExpenseByName = async (name) => {
    
    try {
        const expensesList = await filesMethods.getExpenses()
       

        let expensesFound = []

        for(let i = 0; i < expensesList.length; i++) {
            if((expensesList[i].name).includes(name)){

                expensesFound.push(expensesList[i])
            }
        }
       
        return expensesFound

    } catch (error) {
        throw error
        
    }
}

const getExpensesByCategory = async (category) => {

    try {
        const expensesList = await filesMethods.getExpenses()
       

        let expensesFound = []

        for(let i = 0; i < expensesList.length; i++) {
            if((expensesList[i].category).includes(category)){

                expensesFound.push(expensesList[i])
            }
        }   

        return expensesFound

    } catch (error) {
        throw error
        
    }
}

const deleteExpenses = async (name) => {
    try {
        const expensesList = await filesMethods.getExpenses()
        let notDeletedExpenses = []

        for(let i = 0; i < expensesList.length; i++){
            if(!expensesList[i].name.includes(name)){
                notDeletedExpenses.push(expensesList[i])
            }
        }
        await filesMethods.saveExpenses(notDeletedExpenses)

        return notDeletedExpenses

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addExpense,
    getExpenseByName,
    getTotalExpenses,
    getExpensesByCategory,
    deleteExpenses
}