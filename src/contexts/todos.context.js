import React, {createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos= [
    {id: "01", task: "Shave the cat", completed: false},
    {id: "02", task: "eat 7 bananas", completed: false}
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return(
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
