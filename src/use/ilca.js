export const digits = "ABCEHKMOPTXY"
export const num = 12

export function numToLetters(n) {
	var s = '';

	while (n > 0) {
		s = digits.charAt((n - 1) % num) + s;
		n = Math.ceil(n / num) - 1;
	}
	return s;
};

export function lettersToNum(s) {
	var pow, n = 0, i = 0;
	while (i++ < s.length) {
		pow = Math.pow(num, s.length - i);
		n += (digits.indexOf(s.charAt(i - 1)) + 1) * pow;
	}
	return n;
};

export function cleanLetters(letters) {
	if (!letters) { return '' }
	letters = letters
		.toUpperCase()
		.replace(/[\s.:;,//]/g, '|')
		.replace(/[^ABCEHKMOPTXYАВЕКМНОРСТУХ|]*/g, '');
	const ru = { A: 'А', B: 'В', C: 'С', E: 'Е', H: 'Н', K: 'К', M: 'М', O: 'О', P: 'Р', T: 'Т', X: 'Х', Y: 'У' }
	for (let en in ru) {
		letters.replace(ru[en], en)
	}
	return letters;
}

export function colorize(lttrs, opacity) {
	if (lttrs) {
		var hue, sat, light, alpha, step, numOfSteps;
		var hsla = function (hue, sat, light, alpha) {
			return 'hsla(' + (hue || '0') + ',' + (sat || '100') + '%,' + (light || '50') + '%,' + (alpha || 1) + ')';
		};
		var lastLetters = lttrs.lastIndexOf('|');
		var lettersFull = lttrs.slice(lastLetters + 1);
		var letters = lettersFull.slice(0, 2);
		var residue = lettersFull.slice(2);
		residue = residue.split('');
		numOfSteps = Math.pow(12, letters.length);
		step = preset(letters.length).indexOf(letters.toUpperCase());
		hue = 360 * step / numOfSteps;
		if (residue.length > 0) {
			step = preset(1).indexOf(residue.shift().toUpperCase());
			light = 26 + 48 * (12 - step) / 12;
		}
		if (residue.length > 0) {
			step = preset(1).indexOf(residue.shift().toUpperCase());
			sat = 20 + 80 * (12 - step) / 12;
		}
		if (residue.length > 0) {
			step = preset(1).indexOf(residue.shift().toUpperCase());
			alpha = 0.3 + 0.7 * (12 - step) / 12;
		}
		if (opacity && opacity >= 0 && opacity <= 1) { alpha = opacity }
		return hsla(hue, sat, light, alpha);

	} else return '#fff'; // hsla(0,0%,50%,0.5)

}

function preset(bit) {
	var baseLetters = digits.split('')
	var current, count, result = baseLetters.concat(), order;
	if (typeof bit == "number" && bit > 0 && bit <= 12) { count = bit - 1 };
	for (var b = 0; b < count; b++) {
		current = result.slice(0);
		order = 0;
		for (var i = 0; i < current.length; i++) {

			for (var j = 0; j < 12; j++) {

				result[order++] = current[i] + baseLetters[j];
			}
		}
	}
	return result;
}