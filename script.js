// No.1
const s = 'NEGIE1';

const reverse = string => {
	const all = string.split('');
	const getChar = all.splice(all.length - 1, 1);
	return [...all.reverse(), getChar[0]].join('');
};

console.log(reverse(s));

// No.2
const sentence = 'Saya sangat senang soal algoritma';

const longest = sentence => {
	const words = sentence.split(' ');
	words.sort((a, b) => {
		return b.length - a.length;
	});
	return `${words[0]}: ${words[0].length} character`;
};

console.log(longest(sentence));

// No.3
let input = ['xc', 'dz', 'bbb', 'dz'];
let query = ['bbb', 'ac', 'dz'];

const counter = (input, query) => {
	let obj = {};
	input.map(i => {
		query.filter(q => {
			if (i === q) {
				obj[q] === undefined || obj[q] === 0 ? (obj[q] = 1) : obj[q]++;
			} else {
				if (obj[q] === undefined) {
					obj[q] = 0;
				}
			}
		});
	});
	return Object.values(obj);
};

console.log(counter(input, query));

// No.4
let matrix2 = [
	[1, 2],
	[4, 5],
];

let matrix3 = [
	[1, 2, 0],
	[4, 5, 6],
	[7, 8, 9],
];

let matrix4 = [
	[1, 2, 0, 4],
	[4, 5, 6, 5],
	[7, 8, 9, 1],
	[2, 1, 8, 9],
];

const count = arr => {
	let d1, d2;
	d1 = d2 = 0;
	for (let i = 0; i < arr.length; i++) {
		d1 += arr[i][i];
		d2 += arr[i][arr.length - (i + 1)];
	}
	return d1 - d2;
};

console.log(count(matrix4));
