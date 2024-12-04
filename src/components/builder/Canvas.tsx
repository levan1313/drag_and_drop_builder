import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Image } from '../elements/Image';
import Container from '../elements/Container';
import Text from '../elements/Text';
import { Toolbar } from './ToolBar';
import Button from '../elements/Button';
import Iframe from '../elements/IFrame';

const Canvas: React.FC = () => {
    return (
        <div className="canvas-container">
            
                <Toolbar />
                <div className="canvas">
                    <Frame>
                        <Element is={Container} canvas backgroundColor="gray" padding="20px">
                            <Text text="Drag and drop elements here!" fontSize={23} color='#ff22f4' className={''} userEditable={true} />
                            <Image
                                source="/images/default_image.png"
                                alt="Sample Image"
                                width="300"
                                height="200"
                            />
                            <Button text={'button'} fontSize={15} />
                            <Iframe />
                        </Element>
                    </Frame>
                </div>
        </div>
    );
};

export default Canvas;
