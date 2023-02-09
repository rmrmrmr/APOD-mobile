import { getList } from '../redux/apod/getAPOD';

describe('fetch APOD test', () => {
  it('fetch APOD', () => {
    expect(typeof getList).toBe('function');
  });
});
