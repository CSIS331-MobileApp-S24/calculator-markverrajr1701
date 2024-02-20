import React from 'react';
import './ButtonBox.css';
import Button from './Button';
 
const ButtonBox = ({ handleClick }) => {

    const btnValues = [["C", "+-", '%', '/'],
                       ["7", "8", "9", "X"], 
                       ["4", "5", "6", "-"],
                       ["1", "2", "3", "+"],
                       ["0", ".", "="]];
    return (
        <div className="buttonBox bg-dark-gray br3 pa2">
            {btnValues.flat().map((row, i) => {
                if (row !== "=") {
                    return (
                        <Button key={i} className={"button"} value={row} onClick={handleClick} />
                    )
                } else {
                    return (
                        <Button key={i} className={"equals"} value={row} onClick={handleClick} />
                    )
                }
            }
            )}
        </div>
    );
}

export default ButtonBox;