import ErrorRepository from '../errorRepository';

test('translating error codes correctly', () => {
  const errorRepository = new ErrorRepository()
  expect(errorRepository.translate(300)).toBe('Multiple Choices');
  expect(errorRepository.translate(310)).toBe('Unknown error');  
});


