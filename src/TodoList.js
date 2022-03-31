import { useContext } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

function TodoList(){
    const {todos} = useContext(TodosContext);
    if(todos.length)
        return (
            <Paper>
                <List>
                    {todos.map(( todo, i ) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    )
                )}
                </List>
            </Paper>
        )
    return null;
};
export default TodoList;
