import { List, ListItem } from "./styles";
import type { ToDoListProps } from "./types";

function ToDoList({ tasks }: ToDoListProps) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>{task}</ListItem>
      ))}
    </List>
  );
}

export default ToDoList;
