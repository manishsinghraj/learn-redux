import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, searchTodo } from "../redux/todo/actions"
import { Filter } from './Filter';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [newText, setNewText] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch()

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      console.log("first")
      dispatch(addTodo(newText.trim()));
      setNewText("");
    }
  }

  const handleSearchTodoClick = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    dispatch(searchTodo(e.target.value));
  }

  return (
    <>
      <div className='main-container'>
        <div className='input-container'>
          <input type='text' placeholder="Todo.." value={newText} onChange={(e) => setNewText(e.target.value)}></input>
          <button onClick={handleAddTodoClick}>ADD</button>
        </div>

        {/* search and filter */}
        <div className='search-filter-container'>
          <div className='filter-container'>
            <Filter />
          </div>

          <div className='search-container'>
            <input type='text' placeholder="search.." value={searchText} onChange={(e) => handleSearchTodoClick(e)}></input>

          </div>

        </div>
        <div className='todo-list'>
          <TodoList />
        </div>
      </div>
    </>
  )
}
