const expenses = require('./expenses')

const run = async () => {
    const args = process.argv.slice(2)

    switch (args[0]) {
        case 'addExpense':

            try {
                const newExpenses = await expenses.addExpense(args[1], Number(args[2]), args[3])
                console.log('Expense added: ', JSON.stringify(newExpenses))

            } catch (error) {
                console.log('Error creating expense: ' + error)
                
            }
            
            break;
        case 'getTotalExpenses':

        try {
            const newTotalExpenses = await expenses.getTotalExpenses()
            console.log('Total: $', JSON.stringify(newTotalExpenses))
            
        } catch (error) {
            console.log(error)
        }

            break;
        case 'getExpensesByName':

        try {
            const expensesFound = await expenses.getExpenseByName(args[1])
            expensesFound.length < 1 ? console.log(`No results found for ${args[1]}`) : console.log('Expenses found: '+ JSON.stringify(expensesFound))
            
        } catch (error) {
            console.log(error)
        }

            break;
        case 'getExpensesByCategory':

        try {
            const expensesFound = await expenses.getExpensesByCategory(args[1])
            expensesFound.length < 1 ? console.log(`No results found for ${args[1]}`) : console.log('Expenses found: '+ JSON.stringify(expensesFound))
            
        } catch (error) {
            console.log(error)
        }

            break;
        case 'deleteExpenses':
            try {
                const expensesFound = await expenses.deleteExpenses(args[1])
                expensesFound.length < 1 ? console.log('No expenses found') : console.log(args[1] +  ' was deleted,', 'Updated list: ' + JSON.stringify(expensesFound))
                
                
            } catch (error) {
                console.log(error)
                
            }

            break;
    
        default:
            console.log('default case')
            break;
    }

}

run()