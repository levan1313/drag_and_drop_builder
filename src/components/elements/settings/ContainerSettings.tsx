import { useNode } from "@craftjs/core";
import { FC, useState, useEffect } from "react";
import MonacoCSSEditor from "../../builder/RightSideBar/CssEditor";
import { ContainerProps, getInitialCSS } from "../Container";

interface ContainerSettingsProps {
    id: string; // Accept the `id` as a prop
  }
  

const generateCSSString = (styles: React.CSSProperties): string => {
  return Object.entries(styles)
    .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
    .join('\n');
};



const ContainerSettings: FC<ContainerSettingsProps> = ({ id }) => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
    console.log("this is id", id)
    const [cssCode, setCSSCode] = useState<string>('');
  
    useEffect(() => {
      const initialCSS = `#${id} {\n${generateCSSString(getInitialCSS(props))}\n}`;
      setCSSCode(initialCSS);
    }, [props, id]);
  
    const handleCSSChange = (newCSS: string) => {
        console.log("shemovida")
        setCSSCode(newCSS);
  

      const styleTag = document.getElementById(`style-${id}`);
      console.log(styleTag);
      if (styleTag) {
        styleTag.innerHTML = newCSS;
      } else {
        const newStyleTag = document.createElement('style');
        newStyleTag.id = `style-${id}`;
        newStyleTag.innerHTML = newCSS;
        document.head.appendChild(newStyleTag);
      }
    };
  
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">CSS Editor</h3>
        {cssCode && <MonacoCSSEditor
          initialCSS={cssCode}
          onStyleChange={handleCSSChange}
        />}
      </div>
    );
  };
  

  export default ContainerSettings;