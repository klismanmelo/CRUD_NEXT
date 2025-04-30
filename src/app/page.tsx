"use client";

import { useTasks } from "@/hooks/useTasks";
import { TaskInput } from "@/components/pageInputs/TaskInput";
import { TaskList } from "@/components/pageInputs/TaskList";

export default function Home() {
  const { tarefas, adicionarTarefa, carregando } = useTasks();

  return (
    <div className="flex flex-col items-center pt-10 w-full bg-gray-900 text-white h-screen">
      <TaskInput onAdd={adicionarTarefa} />
      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : (
        <div className="mt-5 w-3/4 max-w-lg">
          <TaskList tarefas={tarefas} />
        </div>
      )}
    </div>
  );
}
