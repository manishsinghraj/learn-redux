import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const search = state.search || ''; 

        return todos.filter((todo) => {
            const matchFilter =
                (filter === 'COMPLETED' && todo.completed) ||
                (filter === 'INCOMPLETE' && !todo.completed) ||
                filter === 'ALL';

            const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase()); 

            return matchFilter && matchSearch;
        });
    });

    return (
        <div>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </div>
    );
};
