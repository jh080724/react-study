import React, { useState } from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expense/Expenses';
//import NoName from './NoName';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expense/ExpenseFilter';

//리엑트 진입점
function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2022, 5, 20) },
    { id: 3, title: '도미노피자', price: 35000, date: new Date(2021, 2, 21) },
    { id: 4, title: '마라탕후루', price: 18000, date: new Date(2024, 11, 13) },
  ];

  // 지출 객체 배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newEx) => {
    const modifyEx = {
      ...newEx,
      id: expenseList[expenseList.length - 1].id + 1,
    };

    setExpenseList([...expenseList, modifyEx]);
    console.log(expenseList);
  };

  return (
    // React.Fragment 생략가능 -> <> 닫는 tag 반드시 있어야 함. </>
    <>
      <ExpenseFilter />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseList} />
    </>
  );
}

export default App;
