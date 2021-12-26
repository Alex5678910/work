import {Dispatch} from "redux";
import axios from "axios";
import {FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_SUCCESS, ITodos, REMOVE_TODO, TodoAction} from "../../types/types";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: FETCH_TODOS})
            const response = await axios.get<Array<ITodos>>('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch(setFetchSuccess(response.data))
            }, 500)
        } catch (e) {
            dispatch({
                type: FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка Alex'
            })
        }
    }
}

export interface FetchTodos {
    type: FETCH_TODOS;
}

export interface FetchTodoErrorAction {
    type: FETCH_TODOS_ERROR;
    payload: string;
}

export interface SetTodosSuccess {
    type: FETCH_TODOS_SUCCESS;
    payload: Array<ITodos>;
}

export const setFetchSuccess = (data: Array<ITodos>): SetTodosSuccess => ({
    type: FETCH_TODOS_SUCCESS,
    payload: data
});

export interface RemoveTodo {
    type: REMOVE_TODO;
    payload: number;
}

export const removeTodoItem = (id: number): RemoveTodo => ({
    type: REMOVE_TODO,
    payload: id
});
