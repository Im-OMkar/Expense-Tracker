import {useState} from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
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

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
