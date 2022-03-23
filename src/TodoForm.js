import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm(props){
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper sx={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                props.addTodo(value);
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
