import React from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Ticket as TicketType } from "../../context/projects-data";
import "./Ticket.scss";

type Props = {
    ticket: TicketType;
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
};

export default function Ticket({ ticket, provided, snapshot }: Props) {
    return (
        <div
            className="ticket"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // @ts-ignore
            active={snapshot.isDragging.toString()}
        >
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>{ticket.tasks.length + " Subtasks"}</p>
        </div>
    );
}
