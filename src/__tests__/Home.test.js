import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Logo';

it('renders correctly', () => {
  const home = renderer
    .create(<Router><Home /></Router>)
    .toJSON();
  expect(home).toMatchSnapshot();
});
