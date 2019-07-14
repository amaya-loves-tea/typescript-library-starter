import { greeter } from './';

describe('greeter', () => {
  it('returns a message with the name parameter', () => {
    expect(greeter('User')).toBe(`Hello User, what can I do for you?`);
  });
});
