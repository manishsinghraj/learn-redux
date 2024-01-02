import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markCompleteAllTodo } from '../redux/todo/actions';

export const Filter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (e) => {
        console.log(e.target.value)
        dispatch(filterTodo(e.target.value));
    }

    return (
        <>
            <select value={currentFilter} onChange={(e) => handleFilter(e)}>
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
            <button onClick={() => dispatch(markCompleteAllTodo())}>Mark All Completed</button>
        </>
    )
}
