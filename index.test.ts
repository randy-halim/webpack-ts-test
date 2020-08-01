import index from './index';

describe('example suite', () => {
	test('returns \'bar\'', () => {
		const data = index;

		expect(data).toEqual('bar');
	});
});