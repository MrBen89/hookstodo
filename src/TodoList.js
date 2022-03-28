import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Todo from "./Todo";

function TodoList(props){
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            removeTodo={props.removeTodo}
                            toggleTodo={props.toggleTodo}
                            editTodo={props.editTodo}
                        />
                        <Divider />
                    </>
                )
            )}
            </List>
        </Paper>
    )
};
export default TodoList;
