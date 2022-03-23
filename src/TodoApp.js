import { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp(){
    const initialTodos = [
        { id: 1, task: "Clean Fish tank", completed: false },
        { id: 2, task: "Wash car", completed: true },
        { id: 3, task: "Grow beard", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id:4, task: newTodoText, completed: false}]);
    }
    return (
        <Paper sx={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
        <AppBar color="primary" position="static" sx={{height: "64px"}}>
            <Toolbar>
                <Typography color="inherit"> Hooks Todo </Typography>
            </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
        </Paper>
    )
}
export default TodoApp;
