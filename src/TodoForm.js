import { useContext } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function TodoForm(props){
    const [value, handleChange, reset] = useInputState("");
    const { dispatch } = useContext(TodosContext);
    return (
        <Paper sx={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", task: value});
                reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add new Item"
                    fullWidth
                />
            </form>
        </Paper>
    );
}
export default TodoForm;
