import { Component, ErrorInfo, ReactNode } from 'react';

// Define the state type
interface ErrorBoundaryState {
    hasError: boolean;
}

// Define the props type
interface ErrorBoundaryProps {
    children: ReactNode; // The components wrapped by the ErrorBoundary
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        // Log the error or send it to an external logging service
        console.error('Error Boundary Caught:', error, info);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // Fallback UI when an error occurs
            return <div>Something went wrong. Please try refreshing the page.</div>;
        }

        // Render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;
