import {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("");

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    const displayExpense = () => {
        return(
            filteredExpenses.length === 0 ? <p> No Expenses Found</p> :
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
        )
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onFilterChange={filterChangeHandler}
            />
            {
                displayExpense()
            }
        </Card>
    );
}

export default Expenses;
