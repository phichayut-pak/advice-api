const Card = (props) => {
  return (
    <div className={`relative flex flex-col justify-center items-center bg-dark-grayish-blue ${props.className}`}> 
      {props.children}
    </div>
  )
}

export default Card