import { Name } from './types';

export const sayHello = (name: Name): void =>
	console.log(`Hello ${name.first} ${name.mid ? name.mid + ' ' : ''}${name.last}`);
