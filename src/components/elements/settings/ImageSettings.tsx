import { useNode } from "@craftjs/core";
import { FC } from "react";

const ImageSettings: FC = () => {
    const {
      actions: { setProp },
      source = '',
      width = 200,
      height = 200,
    } = useNode((node) => ({
      source: node.data.props.source,
      width: node.data.props.width,
      height: node.data.props.height,
    }));
  
    const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSource = e.target.value;
      setProp((props: any) => {
        props.source = newSource;
      });
    };
  
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          setProp((props: any) => {
            props.source = imageUrl;
          });
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newWidth = parseInt(e.target.value, 10);
      setProp((props: any) => {
        props.width = newWidth;
      });
    };
  
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHeight = parseInt(e.target.value, 10);
      setProp((props: any) => {
        props.height = newHeight;
      });
    };
  
    return (
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image Source</label>
          <input
            type="text"
            value={source || ''}
            onChange={handleSourceChange}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Width</label>
          <input
            type="number"
            value={width || 200}
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
  

  export default ImageSettings;