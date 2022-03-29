import { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";


function TodoApp(){
    const initialTodos = [{ id: "01", task: "Create a task", completed: false}]
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);


    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);



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
        <Grid container justifyContent="center" sx={{marginTop: "1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo} />
                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
                </Grid>
        </Grid>
        </Paper>
    )
}
export default TodoApp;
