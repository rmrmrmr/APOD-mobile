import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Searchbar';

it('renders correctly', () => {
  const details = renderer
    .create(<Router><Details /></Router>)
    .toJSON();
  expect(details).toMatchSnapshot();
});
