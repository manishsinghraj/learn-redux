import { ADD_TODO, FILTER_TODO, MARK_COMPLETE_ALL_TODO, MARK_COMPLETE_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./types"

const initialState = {
    todos: [],
    search: "",
    filter: "ALL"
}


export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todos: [...state.todos, { text: action.payload, completed: false }],
            search: state.search,
            filter: state.filter
        }

        case SEARCH_TODO: return {
            ...state,
            todos: state.todos,
            filter: state.filter,
            search: action.payload
        }


        case FILTER_TODO: return {
            ...state,
            todos: state.todos,
            search: state.search,
            filter: action.payload
        }

        case TOGGLE_TODO: return {
            todos: state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
            filter: state.filter,
            search: state.search,
        };

        case REMOVE_TODO: return {
            todos: state.todos.filter((todo, index) => index !== action.payload),
            filter: state.filter,
            search: state.search,
        };

        case MARK_COMPLETE_TODO: return {
            ...state,
            todos: state.todos.map((todo, index) => index === action.payload ? { ...todo, completed: true } : todo),
            search: state.search,
            filter: state.filter
        }

        case MARK_INCOMPLETE_TODO: return {
            ...state,
            todos: state.todos.map((todo, index) => index === action.payload ? { ...todo, completed: false } : todo),
            search: state.search,
            filter: state.filter
        }

        case MARK_COMPLETE_ALL_TODO: return {
            ...state,
            todos: state.todos.map((todo) => ({ ...todo, completed: true })),
            search: state.search,
            filter: state.filter
        }

        default: return state
    }
}