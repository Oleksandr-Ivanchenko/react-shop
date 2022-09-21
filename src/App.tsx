import { Provider } from 'react-redux';
import { store } from './store';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { NotFoundPage } from './componets/NotFoundPage/NotFoundPage';
import { GoodItem } from './componets/GoodItem';
import { Home } from './componets/Home';

function App() {
  return (
      <Provider store={store}>
        <Routes>
          <Route path='/good/:id' element={<GoodItem />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Provider>
  );
}

export default App;
