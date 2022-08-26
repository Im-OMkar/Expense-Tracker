import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [show, setShow] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        };
        props.onAddExpense(expenseData);
    };

    const onClickButtonHandler = () => {
        console.log("IShikaaaaaaaaaaa")
        setShow(true);
    };

    return (
        <div className="new-expense">
            {!show && <button onClick={onClickButtonHandler}>Add new expense</button>}
            {show && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;
