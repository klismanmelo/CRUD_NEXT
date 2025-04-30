"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TaskInputProps {
  onAdd: (input: string) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [texto, setTexto] = useState("");

  const handleSubmit = () => {
    if (texto.trim()) {
      onAdd(texto);
      setTexto("");
    }
  };

  return (
    <div className="flex gap-3 mb-5">
      <Input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo"
        className="w-64 bg-gray-800 text-white placeholder-gray-400 border-gray-600"
      />
      <Button onClick={handleSubmit} className="bg-blue-600 text-white">
        Enviar
      </Button>
    </div>
  );
}
