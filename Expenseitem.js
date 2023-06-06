import './ExpenseItem.css';
function ExpenseItem(props) {
    const expenseDate = new Date(2021,2,8);
    const expenseTitle ='car Insurance';
    const expenseAmount = 294.67;
    return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item_description'>
       <h2>{props.title}</h2>
       <div className="expense-item_price">${expenseAmount}</div>
      </div>
      </div>
      );
}
export default ExpenseItem;
