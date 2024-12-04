import { useNode } from "@craftjs/core";
import { FC } from "react";
import { ButtonProps } from "../Button";

const ButtonSettings: FC = () => {
    const {
      actions: { setProp },
      text = 'Click Me',
      fontSize = 16,
      color = '#FFFFFF',
      backgroundColor = '#007BFF',
    } = useNode((node) => ({
      text: node.data.props.text,
      fontSize: node.data.props.fontSize,
      color: node.data.props.color,
      backgroundColor: node.data.props.backgroundColor,
    }));
  
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      setProp((props: ButtonProps) => {
        props.text = newText;
      });
    };
  
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFontSize = parseInt(e.target.value, 10);
      setProp((props: ButtonProps) => {
        props.fontSize = newFontSize;
      });
    };
  
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value;
      setProp((props: ButtonProps) => {
        props.color = newColor;
      });
    };
  
    const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newBgColor = e.target.value;
      setProp((props: ButtonProps) => {
        props.backgroundColor = newBgColor;
      });
    };
  
    return (
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Button Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Text Color</label>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    );
  };

  export default ButtonSettings;