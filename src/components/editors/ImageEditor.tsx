import React from 'react';

interface ImageEditorProps{
    props: {
        src: string;
        width: string | number;
        height: string | number;
    },
    actions: {
        setProp: (callback: (props: any) => void) => void;
    };
}

const ImageEditor:React.FC<ImageEditorProps> = ({ props, actions }) => {
    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image Source</label>
                <input
                    type="text"
                    value={props.src}
                    onChange={(e) => actions.setProp((props: any) => (props.src = e.target.value))}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Width</label>
                <input
                    type="number"
                    value={props.width}
                    onChange={(e) =>
                        actions.setProp((props: any) => (props.width = parseInt(e.target.value, 10)))
                    }
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Height</label>
                <input
                    type="number"
                    value={props.height}
                    onChange={(e) =>
                        actions.setProp((props: any) => (props.height = parseInt(e.target.value, 10)))
                    }
                    className="w-full p-2 border rounded"
                />
            </div>
        </div>
    );
};

export default ImageEditor