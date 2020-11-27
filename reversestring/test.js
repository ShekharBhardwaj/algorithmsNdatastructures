const {reverse} = require('./main');

test('Reverse function should exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
  