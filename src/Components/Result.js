import React from 'react'
import NumberFormat from 'react-number-format';
import './Result.css'

// Componente para renderizar el resultado de los datos ingresados

const Result = ({amount, dues}) => {

    const result = amount / dues;

    return ( 
        <section className="flex result">
            <h3>CUOTA FIJA POR MES</h3>
            <NumberFormat
                className="result_input"
                value={result} 
                displayType={'text'} 
                thousandSeparator={'.'} 
                decimalSeparator={','} 
                decimalScale={2}
                prefix={'$ '} />
        </section>
     );
}
 
export default Result;