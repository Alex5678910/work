export interface ITodos{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: ITodos[];
    loading: boolean;
    error: null | string;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    REMOVE_TODO = "REMOVE_TODO"
}
interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface RemoveTodo {
    type: TodoActionTypes.REMOVE_TODO;
    payload: number;
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoErrorAction
    | FetchTodoSuccessAction
| RemoveTodo