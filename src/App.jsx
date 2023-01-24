import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotal } from "./helpers";

function App() {
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);

  useEffect(() => {
    const result = calculateTotal(amount, months);
    setTotal(result);
  }, [amount, months]);

  useEffect(() => {
    setPay(total / months);
  }, [total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  function handleChange(e) {
    // console.log(+e.target.value)
    setAmount(+e.target.value);
  }

  function handleCLickDecrement() {
    const value = amount - STEP;

    if (value < MIN) {
      alert("Invalid amount");
      return;
    }
    setAmount(value);
  }

  function handleCLickIncrement() {
    const value = amount + STEP;

    if (value > MAX) {
      alert("Invalid amount");
      return;
    }
    setAmount(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button symbol="-" fn={handleCLickDecrement} />
        <Button symbol="+" fn={handleCLickIncrement} />
      </div>
      <input
        type="range"
        className="w-full h-5 bg-blue-200 accent-blue-500 hover:accent-blue-700"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-green-500">
        {formatMoney(amount)}
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Escoge un <span className="text-green-500">plazo</span> a pagar
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center
      text-xl font-bold text-gray-500"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen de <span className="text-green-500">pagos</span>
        </h2>
        <div className="text-xl text-gray-500 text-center font-bold">
          {months} Meses
        </div>
        <div className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(total)} Total a pagar
        </div>
        <div className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(pay)} Mensuales
        </div>
      </div>
    </div>
  );
}

export default App;

//onChange={ e => console.log(e.target.value) }
//console.log(+e.target.value) || number(e.target.vlaue) para volver un numero entero
