function Button({children, disabled, type, onClick}) { 

  const base = "bg-yellow-500  text-sm my-4  font-semibold uppercase inline-block  tracking-wide text-stone-900 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed"; 
  const styles = {
    primary : base + 'py-3 px-3 md:px-6 md:py-4 ',
    small : base + ' py-1 px-1 md:px-3 md:py-3 text-xs'
  }

  if(onClick) return    (
    <button disabled={disabled} className={styles[type]}  onClick={onClick}>
  {children}
  </button>
)


    return (
        <button disabled={disabled} className={styles[type]} >
      {children}
      </button>
    )
}

export default Button; 
