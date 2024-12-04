import React, { ReactNode } from 'react';
import { Editor } from '@craftjs/core';
import { Image } from '../components/elements/Image';
import { Container, Text } from '../components';
import Button from '../components/elements/Button';
import Iframe from '../components/elements/IFrame';

interface EditorProviderProps {
    children: ReactNode;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
    return (
        <Editor
            resolver={{
                Container,
                Text,
                Image,
                Button,
                Iframe
            }}
        >
            {children}
        </Editor>
    );
};
