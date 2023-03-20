import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

type Props = {};

export default function Board({}: Props) {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon todo"></div>
          <h4 className="">To Do</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon doing"></div>
          <h4 className="">Doing</h4>
        </div>
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon done"></div>
          <h4 className="">Done</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
