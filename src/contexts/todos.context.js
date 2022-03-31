import React, {createContext, useReducer} from "react";
import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos= [
    {id: "01", task: "Shave the cat", completed: false},
    {id: "02", task: "eat 7 bananas", completed: false}
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos, dispatch] = useReducer(todoReducer,defaultTodos);
    return(
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
