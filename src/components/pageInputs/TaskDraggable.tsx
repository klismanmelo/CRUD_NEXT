'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '@/components/ui/card';
import { Tarefa } from"@/types/tarefas"

export function TarefaDraggable({ id, input }: Tarefa) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move"
    >
      <Card className="p-4 text-gray-200 bg-transparent border border-gray-600 rounded-lg">
        {input}
      </Card>
    </li>
  );
}
