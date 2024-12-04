import React from 'react';
import { TextProps } from '../elements/Text';
import { useEditor } from '@craftjs/core';

interface TextEditorProps{
    props: {
        text: string;
        width: string | number;
        height: string | number;
        fontSize: number;
        color: string;
    },
    actions: {
        setProp: (callback: (props: any) => void) => void;
    };
}

const TextEditor: React.FC<TextEditorProps> = ({ props, actions }) => {
    if (!props) {
      console.error("Node does not exist or props are undefined.");
      return null;
    }
    const { selected } = useEditor((state) => ({
        selected: state.events.selected,
      }));
      
      if (!selected) {
        console.error("No node selected.");
        return null;
      }
    return (
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Text</label>
          <input
            type="text"
            value={props.text || ""}
            onChange={(e) =>
              actions.setProp((props: any) => {
                props.text = e.target.value;
              })
            }
            className="w-full p-2 bg-red-400 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <input
            type="number"
            value={props.fontSize || 20}
            onChange={(e) =>
              actions.setProp((props: any) => {
                props.fontSize = parseInt(e.target.value, 10);
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    );
  };
  export default TextEditor;
  