import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Todo from "./Todo";

function TodoList(props){
    if(props.todos.length)
        return (
            <Paper>
                <List>
                    {props.todos.map(( todo, i ) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                            />
                            {i < props.todos.length - 1 && <Divider />}
                        </>
                    )
                )}
                </List>
            </Paper>
        )
    return null;
};
export default TodoList;
