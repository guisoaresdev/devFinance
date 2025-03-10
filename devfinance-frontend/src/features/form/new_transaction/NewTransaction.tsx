import React, { useState } from "react";
import { toggleModal } from "../../../utils/redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/ReduxHooks";
import { Transaction } from "../../../interfaces/transaction";
import "./NewTransaction.css";

function NewTransaction() {
  const [inputs, setInputs] = useState<Transaction>({
    description: "",
    amount: 0,
    date: "",
  });
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleModal());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      description: inputs.description,
      amount: parseFloat(inputs.amount.toString()),
      date: inputs.date,
    };
    const serializedBody = JSON.stringify(transaction);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: serializedBody,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/transaction",
        fetchOptions,
      );

      if (!response.ok) {
        throw new Error("Erro ao salvar transação");
      }
      console.log("Transação salva com sucesso");
      toggle();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="form">
        <h2>Nova Transação</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="sr-only" htmlFor="description">
              Descrição
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="description"
              name="description"
              placeholder="Descrição"
            />
          </div>

          <div className="input-group">
            <label className="sr-only" htmlFor="amount">
              Valor
            </label>
            <input
              onChange={handleChange}
              type="number"
              step="0.01"
              id="amount"
              name="amount"
              placeholder="0,00"
            />
            <small className="help">
              Use o sinal - (negativo) para despesas e , (vírgula) para casas
              decimais
            </small>
          </div>

          <div className="input-group">
            <label className="sr-only" htmlFor="date">
              Data
            </label>
            <input type="date" id="date" name="date" onChange={handleChange} />
          </div>

          <div className="input-group actions">
            <a onClick={toggle} href="#" className="button cancel">
              Cancelar
            </a>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default NewTransaction;
