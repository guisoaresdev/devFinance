import React, { useState, useEffect } from "react";
import expense from "./assets/expense.svg";
import income from "./assets/income.svg";
import logo from "./assets/logo.svg";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";
import total from "./assets/total.svg";
import NewTransaction from "../form/new_transaction/NewTransaction";
import { Transaction } from "../../interfaces/transaction";
import { RootState } from "../../utils/redux/store";
import { useAppSelector, useAppDispatch } from "../../hooks/ReduxHooks";
import { toggleModal } from "../../utils/redux/slices/modalSlice";
import "./Expenses.css";
import Modal from "../../components/modal/Modal";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo Dev Finance" />
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <p>dev.finance$</p>
      </footer>
    </>
  );
}

function Main() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleModal());
  };

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/transaction");
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Erro ao buscar transações", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <main className="container">
      <section id="balance">
        <h2 className="sr-only">Balanço</h2>

        <div className="card">
          <h3>
            <span> Entradas </span>
            <img alt="Income" src={income} />
          </h3>
          <p id="incomeDisplay">R$ 0,00</p>
        </div>

        <div className="card">
          <h3>
            <span> Saídas </span>
            <img alt="Expense" src={expense} />
          </h3>
          <p id="expenseDisplay">R$ 0,00</p>
        </div>

        <div className="card total">
          <h3>
            <span> Total </span>
            <img alt="Total" src={total} />
          </h3>
          <p id="totalDisplay">R$ 0,00</p>
        </div>
      </section>

      <section id="transaction">
        <h2 className="sr-only">Transações</h2>
        <a onClick={toggle} className="button new">
          + Nova Transação
        </a>

        <table id="data-table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>
                  {/* Aqui você pode adicionar um botão de excluir se necessário */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

function Expenses() {
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpen);

  return (
    <>
      <Header />
      <Main />
      <Modal isOpen={isOpen}>
        <NewTransaction />
      </Modal>
      <Footer />
    </>
  );
}

export default Expenses;
