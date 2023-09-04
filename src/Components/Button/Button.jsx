import './Button.css';

const Button = (props) => {

  console.log(props.label);

  return (
    <button className="buttonColor" >Click me!</button>
  )
}

export default Button;