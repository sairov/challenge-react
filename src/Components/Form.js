import React, { useState } from 'react'
import Result from './Result';
import Button from './Button';
import DataPicker from './DataPicker';

import {
    MIN_AMOUNT,
    MAX_AMOUNT,
    MIN_DUES,
    MAX_DUES,
    SOFT_STEPS,
    LARGES_STEPS
} from '../config';
import './Form.css';

// Componente de Formulario para la carga de información 
const Form = () => {

    const [currentAmount, setCurrentAmount] = useState({amount: MIN_AMOUNT});
    const [quantityDues, setQuantityDues] = useState({dues: MIN_DUES});


    return ( 
        <main>
            <form method="POST" action="#">
                <DataPicker 
                    actualValue={currentAmount.amount}
                    finalValue={setCurrentAmount}
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={LARGES_STEPS}
                    title={"Monto Solicitado"}
                    type={"amount"}
                />
                <DataPicker 
                    actualValue={quantityDues.dues}
                    finalValue={setQuantityDues}
                    min={MIN_DUES}
                    max={MAX_DUES}
                    step={SOFT_STEPS}
                    title={"Plazo"}
                    type={"dues"}
                />
                <Result 
                    amount={currentAmount.amount}
                    dues={quantityDues.dues}
                />
                <div className="flex buttons">
                    <Button 
                        text={"OBTENER CRÉDITO"}
                        styleOfButton={"agree"}
                        onSubmit={e => {e.preventDefault()}}
                    />
                    <Button 
                        text={"VER DETALLE DE LAS CUOTAS"}
                        styleOfButton={"seeFull"}
                        onSubmit={e => {e.preventDefault()}}
                    />
                </div>
            </form>
        </main>
     );
}
 
export default Form;