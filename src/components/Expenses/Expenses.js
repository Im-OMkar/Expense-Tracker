import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter value={filterYear} onFilterChange={filterChangeHandler} />
      {
        props.items.map((expense)=>(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        ))
      }
    </Card>
  );
}

export default Expenses;
