function Button({ symbol, fn }) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-white
      text-2xl bg-blue-500 rounded-full hover:outline-none hover:ring-2 "
      onClick={fn}
    >
      {symbol}
    </button>
  );
}

export default Button;
