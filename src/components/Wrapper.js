import React from 'react';
import './Wrapper.css';
import Screen from './Screen';
import ButtonBox from './ButtonBox';

const Wrapper = () => {
    return (
        <div className="wrapper bg-dark-gray br5 pa2">
            <Screen value={0}/>
            <ButtonBox />
        </div>
    );
};

export default Wrapper;