function Button({children, disabled}) { 
    return (
        <button disabled={disabled} className="bg-yellow-300 py-3 px-3 my-4 font-semibold uppercase inline-block  tracking-wide text-stone-900 rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed">
      {children}
      </button>
    )
}

export default Button; 
