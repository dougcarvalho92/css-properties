import React, { InputHTMLAttributes } from 'react';

// import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
}


const Input: React.FC<InputProps> = ({ name, type, ...props }) => {
    return <div className="form-group">
        <label label-for="border-radius-top">{name}</label>
        <input name={name} type={type} {...props} />
    </div>;
}

export default Input;