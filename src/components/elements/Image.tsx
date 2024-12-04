import { useNode } from '@craftjs/core';
import { CraftComponent } from '../types';
import ImageSettings from './settings/ImageSettings';

interface ImageProps {
    source?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
}

export const Image: CraftComponent<ImageProps> = ({
    source = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
    alt = 'Placeholder Image',
    width = '150',
    height = '150',
}) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <img
            ref={(ref) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            src={source}
            alt={alt}
            style={{
                width,
                height,
                objectFit: 'cover',
                display: 'block',
            }}
        />
    );
};



// Craft.js settings for Image
Image.craft = {
    props: {
        source: 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        alt: 'Placeholder Image',
        width: '150',
        height: '150',
    },
    displayName: 'Image',
};

export default Image;

export const TextDefaultProps: ImageProps = {
    source: 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
    width: 200,
    height: 200
  };
  
  (Image as any).craft = {
    props: TextDefaultProps,
    related: {
      settings: ImageSettings,
    },
  };
  