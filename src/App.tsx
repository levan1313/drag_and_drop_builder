import { Canvas } from './components';
import LeftSideBar from './components/builder/LeftSideBar';
import RightSidebar from './components/builder/RightSideBar/RightSidebar';
import TextareaComponent from './components/ui/TextAreaWithAutocomplete';
import { EditorProvider } from './providers/EditorProvider';
import ErrorBoundary from './providers/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <h1 className="text-center text-lg font-bold">
        this is builder with craft js
      </h1>
      {/* <TextareaComponent suggestions={['sdasd', "asdasds", "asdasdad"]}/> */}
      <EditorProvider>
        <div className="flex h-screen">
          <LeftSideBar />
          <div className="flex-1 bg-gray-50 p-4">
            <Canvas />
          </div>
          <RightSidebar/>
        </div>
      </EditorProvider>
    </ErrorBoundary>
  );
}

export default App;
