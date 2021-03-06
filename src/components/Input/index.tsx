import React, { InputHTMLAttributes } from "react";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    name: string;
}

const Input: React.FC<InputProps> = ({label, name, placeholder, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} placeholder={placeholder} {...rest} />
        </div>
    );
}

export default Input;