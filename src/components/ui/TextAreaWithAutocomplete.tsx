import React, { useState, useRef, ChangeEvent } from "react";

interface TextareaComponentProps {
  suggestions: string[];
}

const TextareaComponent: React.FC<TextareaComponentProps> = ({ suggestions }) => {
  const [text, setText] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    const lastTwoChars = value.slice(-2);
  
    // Check for opening sequence {{
    if (lastTwoChars === "{{") {
      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
      setCursorPosition(e.target.selectionStart);
      value += "}}";
  
      setTimeout(() => {
        // Move the cursor back by two positions
        if (textareaRef.current) {
          textareaRef.current.setSelectionRange(
            e.target.selectionStart - 2,
            e.target.selectionStart - 2
          );
          textareaRef.current.focus();
        }
      }, 0); // Delay to ensure the value is updated
    } else if (value.endsWith("}}")) {
      setShowSuggestions(false);
    }
    setText(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (cursorPosition === null || !textareaRef.current) return;
  
    const textBeforeCursor = text.slice(0, cursorPosition - 2); // Remove {{
    const textAfterCursor = text.slice(cursorPosition); // Everything after cursor
    const updatedText = `${textBeforeCursor}{{${suggestion}}}${textAfterCursor}`;
  
    setText(updatedText);
    setShowSuggestions(false);
  
    // Set cursor position to the middle, after {{ and before the suggestion
    const newCursorPosition = textBeforeCursor.length + 2; // Position right after {{
    textareaRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
    textareaRef.current.focus();
  };
  


  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100); // Delay to allow clicking on suggestions
  };

  return (
    <div style={{ position: "relative" }}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ width: "100%", height: "150px", padding: "10px", fontSize: "16px" }}
      ></textarea>
      {showSuggestions && (
        <div
          style={{
            position: "absolute",
            top: `${textareaRef.current?.offsetHeight}px`,
            left: "0",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0",
              }}
              onMouseDown={(e) => e.preventDefault()} // Prevent textarea blur
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextareaComponent;

