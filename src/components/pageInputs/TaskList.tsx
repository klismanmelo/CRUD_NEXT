'use client';

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';
import { Tarefa } from '@/types/tarefas';
import { TarefaDraggable } from '@/components/pageInputs/TaskDraggable';
import { useState } from 'react';

interface TaskListProps {
  tarefas: Tarefa[];
}

export function TaskList({ tarefas }: TaskListProps) {
  const [lista, setLista] = useState(tarefas);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = lista.findIndex((t) => t.id === active.id);
      const newIndex = lista.findIndex((t) => t.id === over.id);
      const novaLista = arrayMove(lista, oldIndex, newIndex);
      setLista(novaLista);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={lista.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <ul className="space-y-3">
          {lista.map((tarefa) => (
            <TarefaDraggable key={tarefa.id} id={tarefa.id} input={tarefa.input} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
