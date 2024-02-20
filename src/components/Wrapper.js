import React, { useState } from 'react';
import './Wrapper.css';
import Screen from './Screen';
import ButtonBox from './ButtonBox';


const Wrapper = () => {
    let [num, setNum] = useState(0);

    
    function onButtonClick(event) {
        //console.log(event.target.innerHTML);
        
        let clickedBtn = event.target.innerHTML;

        switch (clickedBtn) {
            case 'C':
                resetClickHandler(clickedBtn);
                break;

            case '+-':
                invertClickHandler(clickedBtn);
                break;

            case '%':
                percentClickHandler(clickedBtn);
                break;
            
            case '+':
            case '-':
            case 'X':
            case '/':
                operClickHandler(clickedBtn);
                break;

            case '=':
                equalClickHandler(clickedBtn);
                break;

            case '.':
                decClickHandler(clickedBtn);
                break;

            default:
                numClickHandler(clickedBtn);
                break;
        }
    }

    const resetClickHandler = (btn) => {
        console.log("in resetClickHandler");
        console.log(btn);
    }


    const invertClickHandler = (btn) => {
        console.log(" in invertClickHandler");
        console.log(btn);
    }
  

    const percentClickHandler = (btn) => {
        console.log(" in percentClickHandler");
        console.log(btn);
    }
  

    const operClickHandler = (btn) => {
        console.log(" in operClickHandler");
        console.log(btn);
    }


    const equalClickHandler = (btn) => {
        console.log(" in equalClickHandler");
        console.log(btn);
    }


    const decClickHandler = (btn) => {
        console.log(" in decClickHandler");
        console.log(btn);
    }


    const numClickHandler = (btn) => {
        console.log(" in numClickHandler");
        console.log(btn);
        console.log(Number(btn));
        let numDigits = num.toString().length;
        if(numDigits < 13) setNum(Number(num.toString() + Number(btn).toString()));
        
    }

    return (
        <div className="wrapper bg-dark-gray br5 pa2">
            <Screen value={num}/>
            <ButtonBox handleClick = {onButtonClick} />
        </div>
    );
    };

export default Wrapper;