import { useState, useEffect } from "react";
import { Tarefa } from "@/types/tarefas";
import { fetchTarefas, criarTarefa } from "@/services/tarefaService";

export function useTasks() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    fetchTarefas()
      .then(setTarefas)
      .finally(() => setCarregando(false));
  }, []);

  async function adicionarTarefa(input: string) {
    const novaTarefa = await criarTarefa(input);
    setTarefas((prev) => [...prev, novaTarefa]);
  }

  return { tarefas, adicionarTarefa, carregando };
}
