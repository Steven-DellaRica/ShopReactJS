import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import { ContextProductsProvider } from './ContextProducts';


function App() {

  return (
    <div className="App">
      <ContextProductsProvider>

        <NavBar />

        <header className="App-header">
          <Routes>
            <Route exact path='/' element={<ProductList />} />
            <Route exact path='/:id' element={<ProductPage />} />
          </Routes>
        </header>

      </ContextProductsProvider>

    </div>
  );
}

export default App;
