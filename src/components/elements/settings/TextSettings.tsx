import { useNode } from "@craftjs/core";
import { FC } from "react";
import { TextProps } from "../Text";

const TextSettings: FC = () => {
    const {
      actions: { setProp },
      fontSize,
      text = 'hello',
      additionalCss = '',
    } = useNode((node) => ({
      text: node.data.props.text,
      fontSize: node.data.props.fontSize,
      additionalCss: node.data.props.additionalCss,
    }));
  
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFontSize = parseInt(e.target.value, 10);
      setProp((props: TextProps) => {
        props.fontSize = newFontSize;
      });
    };
  
    const handleTextChange = (e: string) => {
      setProp((props: TextProps) => {
        props.text = e;
      });
    };
  
  
    return (
      <>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Text</label>
            <textarea
              value={text || ''}
              onChange={(e) => handleTextChange(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <input
              type="number"
              value={fontSize || 20}
              onChange={handleFontSizeChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </>
    );
  };
  

  export default TextSettings;