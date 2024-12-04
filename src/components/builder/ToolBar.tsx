import React from 'react';
import { useEditor } from '@craftjs/core';

export const Toolbar = () => {
    const { actions } = useEditor();

    return (
        <div className="toolbar flex gap-2">
            <button className="bg-black text-white px-2 rounded-md" onClick={() => actions.history.undo()}>Undo</button>
            <button className="bg-black text-white px-2 rounded-md" onClick={() => actions.history.redo()}>Redo</button>
        </div>
    );
};
