"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Tarefa {
  id: string;
  input: string;
  created_at: string;
}

export default function Home() {
  const [response, setResponse] = useState<string>("");
  const [items, setItems] = useState<Tarefa[]>([]);
  // Função para enviar dados via POST
  function escrito(resposta: string) {
    console.log(resposta);
    fetch("http://127.0.0.1:8000/api/tarefa/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: resposta }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // A resposta que você recebe do backend
        setItems((prevItems) => [...prevItems, data]); // Adicionando o objeto completo na lista
        setResponse(""); // Limpando o campo de input
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  }
  

  // Função para buscar dados via GET
  function fetchData() {
    fetch("http://127.0.0.1:8000/api/tarefa/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setItems(data);  // Atualiza os itens com os dados recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }

  // Carrega os dados ao iniciar o componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center pt-10 w-full bg-gray-900 text-white h-screen">
      <div className="flex gap-3 justify-center items-center mb-5">
        <Input
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-64 bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Digite algo aqui dentro"
        />
        <Button 
          onClick={() => escrito(response)} 
          className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
        >
          Enviar
        </Button>
      </div>

      {/* Exibindo a lista de itens */}
      <div className="mt-5 w-3/4 max-w-lg">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="text-gray-200 border border-gray-600 rounded-lg p-3 hover:bg-gray-700 transition-all duration-300">
              {/* Acessando a propriedade 'input' de cada item */}
              {item.input} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}