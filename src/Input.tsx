import React from "react";

interface IInputProps {
    value: string,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void; //이런식으로 타입지정을 함수로 할 수도 있다. 매개변수에 있는 event의 타입은 HTMLInputElement이라고 해놨다. 여기서는 함수의 리턴값으로 void를 해서 아무것도 리턴하지 않게 하고 있다.
} 

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => (
    <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
    onFormSubmit: (event:React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSubmit }) => (//기본적으로 모든 React Component는 children이라고 하는 props을 가질 수 있다. 근데 이렇게 children이라는 props를 갖을려면 React Component의 타입을 : React.FunctionComponent이렇게 지정해야 한다.
    <form onSubmit={onFormSubmit}>{children}</form>
);