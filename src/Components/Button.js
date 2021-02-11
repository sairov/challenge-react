import React from 'react'
import './Button.css';

// Botones para sumit de datos

const Button = ({styleOfButton, text}) => {
    return ( 
        <button type="submit" className={styleOfButton}>{text}</button>
     );
}
 
export default Button;