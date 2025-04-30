import { Tarefa } from "@/types/tarefas";

const API_URL = "http://127.0.0.1:8000/api/tarefa/";

export async function fetchTarefas(): Promise<Tarefa[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar tarefas");
  return res.json();
}

export async function criarTarefa(input: string): Promise<Tarefa> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });
  if (!res.ok) throw new Error("Erro ao criar tarefa");
  return res.json();
}
