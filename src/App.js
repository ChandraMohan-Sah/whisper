import './App.css';
import { Section3SelectionProvider } from './context/Section3SelectionContext';
import { PageHome } from './pages';

function App() {
  return (
    <Section3SelectionProvider> {/* Wrap with context provider */}
      <div className="App">
        <PageHome />
      </div>
    </Section3SelectionProvider>
  );
}

export default App;
