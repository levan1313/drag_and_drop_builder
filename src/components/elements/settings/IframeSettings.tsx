import { useNode } from "@craftjs/core";
import { IframeProps } from "../IFrame";
import { FC } from "react";

const IframeSettings: FC = () => {
    const {
      actions: { setProp },
      src = '',
      width = 300,
      height = 200,
    } = useNode((node) => ({
      src: node.data.props.src,
      width: node.data.props.width,
      height: node.data.props.height,
    }));
  
    const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSrc = e.target.value;
      setProp((props: IframeProps) => {
        props.src = newSrc;
      });
    };
  
    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newWidth = parseInt(e.target.value, 10);
      setProp((props: IframeProps) => {
        props.width = newWidth;
      });
    };
  
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHeight = parseInt(e.target.value, 10);
      setProp((props: IframeProps) => {
        props.height = newHeight;
      });
    };
  
    return (
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Iframe Source</label>
          <input
            type="text"
            value={src || ''}
            onChange={handleSrcChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Width</label>
          <input
            type="number"
            value={width || 300}
            onChange={handleWidthChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Height</label>
          <input
            type="number"
            value={height || 200}
            onChange={handleHeightChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    );
  };

  export default IframeSettings;