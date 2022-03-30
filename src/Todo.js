import { useContext} from "react";
import ListItem from "@mui/material/ListItem";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { TodosContext } from "./contexts/todos.context";

function Todo({ task, completed, id }) {
    const { removeTodo, toggleTodo } = useContext(TodosContext);
    const [isEditing, toggle] = useToggleState();
    return(
        <ListItem style={{height: "64px", marginBottom: "1rem"}}>
        {isEditing ? <EditTodoForm id={id} task={ task } toggleEditForm={ toggle }/>:
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText sx={{textDecoration: completed ? "line-through" : "none"}} > {task} </ListItemText>
            <ListItemSecondaryAction >
                <IconButton aria-label="Edit" onClick={toggle}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
};

export default Todo;
