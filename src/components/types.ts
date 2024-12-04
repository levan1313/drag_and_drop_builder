import { ReactNode } from 'react';

// Define a type that extends React.FC with a `craft` property
export type CraftComponent<P = {}> = React.FC<P> & {
    craft?: {
        props?: Partial<P>;
        displayName?: string;
    };
};
