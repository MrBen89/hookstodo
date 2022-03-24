import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function Todo({ task, completed, id, removeTodo, toggleTodo }) {
    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText sx={{textDecoration: completed ? "line-through" : "none"}} > {task} </ListItemText>
            <ListItemSecondaryAction >
                <IconButton>
                    <EditIcon aria-label="Edit" />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default Todo;
