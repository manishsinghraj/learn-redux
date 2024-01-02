import React from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/todo/actions';

export const TodoItem = ({ todo, index }) => {


    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(index));
    }

    const handleDelete = () => {
        dispatch(removeTodo(index))
    }

    return (
        <li className='list'>
            <div className='itemList'>
                <span className='list-index'>{index + 1}.</span>
                <span className={todo.completed ? "to-do-completed" : ""}>{todo.text}</span>
            </div>
            <div>
                {todo.completed ? <FaToggleOn onClick={handleToggle} /> : <FaToggleOff className='toggle-off' onClick={handleToggle} />}
                <MdDeleteForever onClick={handleDelete}/>
            </div>
        </li>
    );
};
