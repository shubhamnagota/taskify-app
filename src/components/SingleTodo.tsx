import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../model";
import "./styles.css";

interface TodoProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<TodoProps> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.title);

    const handleDone = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleEdit = (id: number) => {
        if (!edit && !todo.isDone) {
            setEdit(!edit);
        }
    };

    return (
        <form className="todos__single">
            {todo.isDone ? (
                <s className="todo__single-text">{todo.title}</s>
            ) : (
                <span className="todo__single-text">{todo.title}</span>
            )}

            <div>
                <span className="icon" onClick={() => handleEdit(todo.id)}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
