import React, { useRef } from "react";
import "./styles.css";

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                className="input__box"
                placeholder="Enter a task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input__submit">Go</button>
        </form>
    );
};

export default InputField;
