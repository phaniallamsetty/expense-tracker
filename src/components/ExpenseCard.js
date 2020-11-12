import React from 'react';

class ExpenseCard extends React.Component {
    render() {
        return (
            <div className="expense-card">
                <div className="left-items">
                    <div className="expense-card-name">
                        <span>{this.props.name}</span>
                    </div>
                    <div className="expense-card-left-item">
                        <span>{this.props.location}</span>
                    </div>
                    <div className="expense-card-left-item">
                        <span>{this.props.category}</span>
                    </div>
                </div>
                <div className="right-items">
                    <div className="expense-card-right-item">
                        <p>{this.props.cost}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpenseCard;