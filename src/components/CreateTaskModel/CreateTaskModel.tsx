import React, { useState } from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";

type props = {
    toggleShowCreateTask: () => void;
};

export default function CreateTaskModel({ toggleShowCreateTask }: props) {
    const [subtasks, setSubtasks] = useState([""]);

    return (
        <div className="model-container">
            <div className="model-card">
                <div
                    className="model-close"
                    onClick={() => toggleShowCreateTask()}
                >
                    <X />
                </div>

                <h3 className="model-title">Create new ticket</h3>

                <label htmlFor="Title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="This is a title..."
                />

                <label htmlFor="description">Description</label>
                <textarea id="title" placeholder="This is a description..." />

                <label>Subtasks</label>
                {subtasks.map((task, index) => (
                    <div className="subtask-container">
                        <input type="text" placeholder="This is a subtask..." />
                        <X
                            onClick={() => {
                                subtasks.splice(index, 1);
                                setSubtasks([...subtasks]);
                            }}
                        />
                    </div>
                ))}
                <button
                    className="btn"
                    onClick={() => setSubtasks([...subtasks, ""])}
                >
                    Add Subtask
                </button>
                <button className="btn">Create Ticket</button>
            </div>
        </div>
    );
}
