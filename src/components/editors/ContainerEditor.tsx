import React from 'react';

interface ContainerEditorProps {
    props: {
        flexDirection?: 'row' | 'column';
        justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
        alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    };
    actions: {
        setProp: (callback: (props: any) => void) => void;
    };
}

const ContainerEditor: React.FC<ContainerEditorProps> = ({ props, actions }) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Flex Properties</h3>

            {/* Flex Direction */}
            <div>
                <h4 className="text-md font-medium mb-2">Flex Direction</h4>
                <div className="flex gap-4">
                    {['row', 'column'].map((direction) => (
                        <label key={direction} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="flexDirection"
                                value={direction}
                                checked={props.flexDirection === direction}
                                onChange={() =>
                                    actions.setProp((props: any) => {
                                        props.flexDirection = direction;
                                    })
                                }
                            />
                            <span>{direction}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Justify Content */}
            <div>
                <h4 className="text-md font-medium mb-2">Justify Content</h4>
                <div className="flex flex-wrap gap-4">
                    {[
                        'flex-start',
                        'center',
                        'flex-end',
                        'space-between',
                        'space-around',
                    ].map((justify) => (
                        <label key={justify} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="justifyContent"
                                value={justify}
                                checked={props.justifyContent === justify}
                                onChange={() =>
                                    actions.setProp((props: any) => {
                                        props.justifyContent = justify;
                                    })
                                }
                            />
                            <span>{justify}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Align Items */}
            <div>
                <h4 className="text-md font-medium mb-2">Align Items</h4>
                <div className="flex flex-wrap gap-4">
                    {['flex-start', 'center', 'flex-end', 'stretch'].map((align) => (
                        <label key={align} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="alignItems"
                                value={align}
                                checked={props.alignItems === align}
                                onChange={() =>
                                    actions.setProp((props: any) => {
                                        props.alignItems = align;
                                    })
                                }
                            />
                            <span>{align}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContainerEditor;