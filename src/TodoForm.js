import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm(props){
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                props.addTodo(value);
                reset();
                }}
            >
                <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    );
}
export default TodoForm;
