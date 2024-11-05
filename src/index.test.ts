import { sayHello } from '.';

describe('sayHello', () => {
	it('works with first', () => {
		sayHello({ first: 'Cristian', last: 'Moreno' });
	});
});
