import { FC } from 'react';
import { useNode } from '@craftjs/core';
import TextSettings from './settings/TextSettings';

export interface TextProps {
  text: string;
  fontSize: number;
  className?: string;
  userEditable?: boolean;
  color?: string; // Add color prop
}

const Text: FC<TextProps> = ({
  text = 'Hi',
  fontSize = 20,
  className = '',
  color = '#000000', // Add color default
}) => {
  const {
    connectors: { connect, drag },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <p
        className={className}
        style={{
          fontSize: `${fontSize}px`,
          color: color,
        }}
      >
        {text}
      </p>
    </div>
  );
};


export default Text;

export const TextDefaultProps: TextProps = {
  text: 'Hi',
  fontSize: 20,
  className: '',
  userEditable: true,
};

(Text as any).craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
