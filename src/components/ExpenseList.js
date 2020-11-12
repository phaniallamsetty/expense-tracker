import React from 'react';
import ExpenseCard from './ExpenseCard';

class ExpenseList extends React.Component {
    render() {
        return (
            <div>
                <ExpenseCard name="Weekly Groceries" location="Kroger" category="Groceries" cost="100.00"></ExpenseCard>
                <ExpenseCard name="Gas" location="Shell" category="Car" cost="30.00"></ExpenseCard>
                <ExpenseCard name="Advil" location="CVS" category="Medicine" cost="10.00"></ExpenseCard>
                <ExpenseCard name="Socks" location="Amazon" category="Clothing" cost="15.00"></ExpenseCard>
                <ExpenseCard name="Laptop" location="Best Buy" category="Electronics" cost="700.00"></ExpenseCard>
                <ExpenseCard name="Rent" location="Cincy Properties" category="Housing" cost="800.00"></ExpenseCard>
            </div>
        );
    }
}

export default ExpenseList;