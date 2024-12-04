import React, { FC, useState } from 'react';
import Editor from '@monaco-editor/react';

interface MonacoCSSEditorProps {
  initialCSS: string;
  onStyleChange: (css: string) => void;
}

const MonacoCSSEditor: FC<MonacoCSSEditorProps> = ({
  initialCSS,
  onStyleChange,
}) => {
  const [cssCode, setCSSCode] = useState<string>(initialCSS);

  const handleEditorChange = (value?: string) => {
    const updatedCSS = value || '';
    setCSSCode(updatedCSS);
    onStyleChange(updatedCSS);
  };

  return (
    <div className="monaco-css-editor">
      <Editor
        height="200px"
        defaultLanguage="css"
        value={cssCode}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false }, // Disable minimap
          scrollBeyondLastLine: false,
          lineNumbers: "off", // Disable line numbers
        }}
      />
    </div>
  );
};

export default MonacoCSSEditor;
