import React, { useEffect, useState } from 'react';
import cardf from '../images/card-logo.svg';
import InputMask from 'react-input-mask';
import './Addcard.css';
import { useNavigate } from 'react-router-dom';

const Addcard = () => {
    let nav = useNavigate();
    const initvalue = {
        cardname:"",
        cardnumber:"",
        month:"",
        y1:"",
        cv:""
    };

    const [formValues, setFormValues] = useState(initvalue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setisSubmit(true)
    };

    useEffect(() => {
        console.log(formErrors);
        setFormValues(initvalue);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            (nav('/success', {state: formValues}))
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formErrors])

    const myf = JSON.stringify(formValues.cardnumber);
    const myf1 = JSON.stringify(formValues.cardname).toUpperCase();
    const myf2 = JSON.stringify(formValues.month);
    const myf3 = JSON.stringify(formValues.y1);
    const myf4 = JSON.stringify(formValues.cv);

    const validate = (values) => {
        const errors = {};
        if (!values.cardname){
            errors.cardname = "CardHolder Name is required!";
        }
        if (!values.cardnumber){
            errors.cardnumber = "Card number is required!";
        }
        if (!values.month || !values.y1){
            errors.month = "Can't be blank";
        }else if (values.month > 12 || values.month < 1){
            errors.month = "enter a valid month"
        }else if (values.y1 < 0){
            errors.month = "enter a valid year"
        }
        if (!values.cv){
            errors.cv = "Can't be blank";
        }else if (values.cv < 1){
            errors.cv = "enter a valid cvc"
        }
        return errors;
    }

  return (
    <div className='a'>
    <div className="bar"></div>
    <div className="wrapper">
        <div className="left">
            <div className="cf">
                <img src={cardf} alt="" className="logo" />
                <input
                type="text"
                placeholder="0000 0000 0000 0000"
                value={JSON.parse(myf)}
                className="putt"
                />
                <div className='wrapper1'>
                 <input
                type="text"
                placeholder="JANE APPLESEED"
                value={JSON.parse(myf1)}
                className="putt1"
                />
                 <input
                type="text"
                placeholder="00"
                value={JSON.parse(myf2)}
                className="putt2"
                />
                <b className='slash'>/</b>
                 <input
                type="text"
                placeholder="00"
                value={JSON.parse(myf3)}
                className="putt3"
                />
                </div>
            </div>
            <div className="cb">
            <input
                type="text"
                placeholder="000"
                value={JSON.parse(myf4)}
                className="putt4"
                />    
            </div>    
        </div>
        <div className="right">
            <form onSubmit={handleSubmit}>
                <div className="forma">
                    <label>CARDHOLDER NAME</label>
                    <input 
                    type="text" 
                    name="cardname" 
                    className='sma1'
                    maxLength="20"
                    placeholder="e.g. Jane Apleseed" 
                    value={ formValues.cardname} 
                    onChange={handleChange}
                    style={{ border: formErrors.cardname ? '1px solid red' : ''}}
                    />
                    <p className='erre'>{formErrors.cardname}</p>
                </div>
                <div className="forma">
                    <label>CARD NUMBER</label>
                    <InputMask
                    type="tel" 
                    name="cardnumber" 
                    className='sma1' 
                    mask='9999 9999 9999 9999'
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={ formValues.cardnumber} 
                    onChange={handleChange}
                    style={{ border: formErrors.cardnumber ? '1px solid red' :''}}
                    />
                    <p className='erre1'>{formErrors.cardnumber}</p>
                </div>
                <div className="forma1">
                <div className="forma2">
                    <label>EXP. DATE [MM/YY] </label>
                    <div className="forma3">
                    <input 
                    type="tel"
                    inputMode="number"
                    pattern="[0-9]*"
                    name="month"
                    maxLength="2"
                    placeholder="MM" 
                    className='sma'
                    value={ formValues.month}
                    onChange={handleChange}
                    style={{ border: formErrors.month ? '1px solid red' : ''}}
                    />
                    <input 
                    type="text" 
                    name ="y1"
                    maxLength="2"
                    placeholder="YY" 
                    className='sma4'
                    value={ formValues.y1}
                    onChange={handleChange}
                    style={{ border: formErrors.month ? '1px solid red' : ''}}
                    />
                    </div>
                    <p className='erre1'>{formErrors.month}</p>
                </div>
                <div className="forma">
                    <label>CVC</label>
                    <input 
                    type="tel" 
                    name="cv" 
                    maxLength="3"
                    placeholder="e.g. 123" 
                    className='sma2'
                    value={ formValues.cv}
                    onChange={handleChange}
                    style={{ border: formErrors.cv ? '1px solid red' : ''}}
                    />
                    <p className='erre1'>{formErrors.cv}</p>
                </div>
                </div>

                <div className="forma">
                 <button className='butt'> Confirm</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Addcard;