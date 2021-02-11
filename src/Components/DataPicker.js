import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './DataPicker.css'

//Componente para la selección de valores

const DataPicker = ({actualValue, finalValue, min, max, step, title, type}) => {

    const [currentValue, setCurentValue] = useState({
        value: actualValue
    })

      // Input toma valor de Slider
      const onSliderChange = value => {
        setCurentValue({value: value});
        type === "amount"
        ? finalValue({amount: value})
        : finalValue({dues: value})
    }

    // Slider toma valor de Input
    const onInputChange = e => {
        setCurentValue({value: parseInt(e.target.value)});
        type === "amount"
        ? finalValue({amount: parseInt(e.target.value)})
        : finalValue({dues: parseInt(e.target.value)});     
      };

    // Validación de cambios en Input
    const manualInput = e => {
        if (e.target.value < min || e.target.value > max || isNaN(e.target.value) ){
            return (
                setCurentValue({value: min}),
                type === "amount"
                ? finalValue({amount: min})
                : finalValue({dues: min})
                );
        }
        return;
    }


    return (  
    <section className="container">  
    <div className="flex">
        <h3>{title}</h3>
         <input type="number" value={currentValue.value}  
        onChange={onInputChange} 
        onBlur={manualInput}  
        />
    </div>
    <Slider 
    className="slider"
    value={currentValue.value}
    min={min}
    max={max}
    step={step}
    onChange={onSliderChange}
    railStyle={{height: "10px", borderRadius: "0px"}}
    trackStyle={{height: "10px", borderRadius: "0px"}}
    handleStyle={{
    border: 'none',
    width: "18px",
    height: "18px"
    }}
    />
    <div className="flex content"> 
        <NumberFormat value={min} displayType={'text'} 
        thousandSeparator={'.'} 
        decimalSeparator={','} 
        prefix={'$ '} />
        <NumberFormat value={max} displayType={'text'} 
        thousandSeparator={'.'} 
        decimalSeparator={','} 
        prefix={'$ '} />
    </div>
</section> );
}
 
export default DataPicker;