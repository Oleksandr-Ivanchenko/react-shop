import { 
  Routes,
  Route
} from 'react-router-dom';
import { NotFoundPage } from './componets/NotFoundPage';
import { GoodItem } from './componets/GoodItem';
import { Home } from './componets/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={(<Home />)} />
      <Route path='/good/:id' element={<GoodItem />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
