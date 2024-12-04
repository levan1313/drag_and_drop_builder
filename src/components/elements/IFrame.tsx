import { FC } from 'react';
import { useNode } from '@craftjs/core';
import IframeSettings from './settings/IframeSettings';

export interface IframeProps {
  src?: string;
  width?: string | number;
  height?: string | number;
}

export const Iframe: FC<IframeProps> = ({
  src = 'https://www.example.com',
  width = '300',
  height = '200',
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <iframe
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      src={src}
      style={{
        width,
        height,
        border: 'none',
      }}
    />
  );
};

export default Iframe;


  

  export const IframeDefaultProps: IframeProps = {
    src: 'https://www.example.com',
    width: 300,
    height: 200,
  };
  
  (Iframe as any).craft = {
    props: IframeDefaultProps,
    related: {
      settings: IframeSettings,
    },
  };
  