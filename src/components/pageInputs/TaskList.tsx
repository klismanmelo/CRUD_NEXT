import { Tarefa } from "@/types/tarefas";

interface TaskListProps {
  tarefas: Tarefa[];
}

export function TaskList({ tarefas }: TaskListProps) {
  return (
    <ul className="space-y-3">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="text-gray-200 border border-gray-600 p-3 rounded-lg">
          {tarefa.input}
        </li>
      ))}
    </ul>
  );
}
