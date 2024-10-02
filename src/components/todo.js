import React, { useState } from 'react';
import { TextField, Button, Box, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const inputChange = (event) => {
        setTask(event.target.value);
    };

    const addTask = () => {
        if (!task) return;
        setTasks([...tasks, task]);
        setTask('');
    };

    const delTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 14 }}>
            <TextField
                label="Новая задача"
                variant="outlined"
                value={task}
                onChange={inputChange}
                fullWidth
            />
            <Button
                variant="contained"
                color="primary"
                onClick={addTask}
                sx={{ mt: 2 }}
            >
                Добавить задачу
            </Button>
            <List sx={{ mt: 3 }}>
                {tasks.map((task, index) => (
                    <ListItem key={index} component={Card} sx={{ mb: 1 }}>
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ListItemText primary={task} />
                            <IconButton edge="end" aria-label="delete" onClick={() => delTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;