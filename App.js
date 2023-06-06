import ExpenseItem from './Expenseitem.js';

function App() {
const expenses = [...Array(100)].map((_, i) => ({
id: `e${i + 1}`,
title: `Expense ${i + 1}`,
amount: Math.random() * 1000,
date: new Date(),
location: `Location ${i + 1}`,
}));

return (
<div>
<h2>Lets get started</h2>
{expenses.map((expense) => (
<ExpenseItem
key={expense.id}
title={expense.title}
amount={expense.amount}
date={expense.date}
location={expense.location}
></ExpenseItem>
))}
</div>
);
}

export default App;
