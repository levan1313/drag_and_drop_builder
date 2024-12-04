import React from 'react';
import { Element, useEditor } from '@craftjs/core';
import { Image } from '../elements/Image';
import Text from '../elements/Text';
import Container from '../elements/Container';
import Button from '../elements/Button';
import getRandomColor from '../../utils/getRandomColor';
import Iframe from '../elements/IFrame';

const LeftSideBar: React.FC = () => {
    const { connectors } = useEditor();

    return (
        <div className="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold text-center mb-4">Components</h3>

            <div
                ref={(ref) =>
                    ref && connectors.create(ref, <Text text="New Text 2" fontSize={16} className={''} userEditable={true} />)
                }
                className="p-2 bg-white rounded-lg shadow-md text-center cursor-grab mb-4 hover:bg-gray-50"
            >
                Text
            </div>

            <div
                ref={(ref) =>
                    ref && connectors.create(ref, <Image source="/images/default_image.png" width={300} height={300} />)
                }
                className="p-2 bg-white rounded-lg shadow-md text-center cursor-grab mb-4 hover:bg-gray-50"
            >
                Image
            </div>

            <div
                ref={(ref) => {
                    const bgColor = getRandomColor();
                    ref &&
                        connectors.create(
                            ref,
                            <Element
                                canvas
                                is={Container}
                                backgroundColor={bgColor}
                                height="300px"
                                width="300px"
                            ></Element>
                        );
                }}
                className="p-2 bg-white rounded-lg shadow-md text-center cursor-grab mb-4 hover:bg-gray-50"
            >
                Container
            </div>

            <div
                ref={(ref) =>
                    ref && connectors.create(ref, <Button text="New Button" fontSize={16} />)
                }
                className="p-2 bg-white rounded-lg shadow-md text-center cursor-grab mb-4 hover:bg-gray-50"
            >
                Button
            </div>

            <div
                ref={(ref) =>
                    ref && connectors.create(ref, <Iframe src="https://www.example.com" width={300} height={200} />)
                }
                className="p-2 bg-white rounded-lg shadow-md text-center cursor-grab mb-4 hover:bg-gray-50"
            >
                Iframe
            </div>
        </div>
    );
};

export default LeftSideBar;
