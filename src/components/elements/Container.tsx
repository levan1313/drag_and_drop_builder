import React, { FC, ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import ContainerSettings from './settings/ContainerSettings';




export interface ContainerProps extends React.CSSProperties {
    children?: ReactNode;
  }
const Container: FC<ContainerProps> = ({
    children,
    ...restProps
  }) => {
    const {
      connectors: { connect, drag },
    } = useNode();
  
    console.log(getInitialCSS(restProps))
    const styles = getInitialCSS(restProps);
    return (
      <div
        ref={(ref) => ref && connect(drag(ref))}
        style={styles}
      >
        {children}
      </div>
    );
  };



export default Container;


  const ContainerDefaultProps = {
    // backgroundColor: 'green', // Default background color
    padding: '10px',           // Default padding
    width: '100%',             // Default width
    flexDirection: 'row',      // Default flex direction
    justifyContent: 'flex-start', // Default justify-content
    alignItems: 'stretch',     // Default align-items
  };

  (Container as any).craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
      },
    displayName: 'Container',
    rules: {
        canMoveIn: () => true, // Allow any element to be dropped inside
      },
    canvas: true, 
};



export const getInitialCSS = (props: ContainerProps): React.CSSProperties => {
  return {
    display: 'flex',
    flexDirection: props.flexDirection || 'row',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'stretch',
    backgroundColor: props.backgroundColor || 'transparent',
    width: props.width || 'auto',
    height: props.height || 'auto',
    padding: props.padding || '0px',
  };
};