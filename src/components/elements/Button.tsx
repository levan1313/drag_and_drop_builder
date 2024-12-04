import { FC } from 'react';
import { useNode } from '@craftjs/core';
import ButtonSettings from './settings/ButtonSettings';

export interface ButtonProps {
  text: string;
  fontSize: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  text = 'Click Me',
  fontSize = 16,
  color = '#FFFFFF',
  backgroundColor = '#007BFF',
  className = '',
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <button
        className={className}
        style={{
          fontSize: `${fontSize}px`,
          color: color,
          backgroundColor: backgroundColor,
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {text}
      </button>
    </div>
  );
};

  

export default Button;

export const ButtonDefaultProps: ButtonProps = {
    text: 'Click Me',
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#007BFF',
    className: '',
  };
  
  (Button as any).craft = {
    props: ButtonDefaultProps,
    related: {
      settings: ButtonSettings,
    },
  };