import React, {createContext} from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos= [
    {id: "01", task: "Shave the cat", completed: false},
    {id: "02", task: "eat 7 bananas", completed: false}
];
export const TodosContext = createContext();

export function TodosProvider(props){
    const todosStuff = useTodoState(defaultTodos);
    return(
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}
