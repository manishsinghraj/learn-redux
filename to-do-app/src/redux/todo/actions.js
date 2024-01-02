import { ADD_TODO, FILTER_TODO, MARK_COMPLETE_ALL_TODO, MARK_COMPLETE_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, SLELECT_ALL, SLELECT_COMPLETE, SLELECT_INCOMPLETE, TOGGLE_TODO, UPDATE_TODO } from "./types"



export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
};

export const searchTodo = (search) => {
    return {
        type: SEARCH_TODO,
        payload: search
    }
}

// export const updateTodo = (updatedText) => {
//     return {
//         type: UPDATE_TODO,
//         payload: updatedText
//     }
// }

export const filterTodo = (filter) => {
    return {
        type: FILTER_TODO,
        payload: filter
    }
}


// export const selectComplete = (id) => {
//     return {
//         type: SLELECT_COMPLETE,
//         payload: id
//     }
// }


// export const selectIncomplete = (id) => {
//     return {
//         type: SLELECT_INCOMPLETE,
//         payload: id
//     }
// }


// export const selectAll = (id) => {
//     return {
//         type: SLELECT_ALL,
//         payload: id
//     }
// }

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const markCompleteTodo = (id) => {
    return {
        type: MARK_COMPLETE_TODO,
        payload: id
    }
}

export const markIncompleteTodo = (id) => {
    return {
        type: MARK_INCOMPLETE_TODO,
        payload: id
    }
}

export const markCompleteAllTodo = () => {
    return {
        type: MARK_COMPLETE_ALL_TODO,
    }
}