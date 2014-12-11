module.exports = function(rate) {
	var accum = 0;
	return function(time, callback) {
		accum += time;
		while (accum >= rate) {
			accum -= rate;
			callback(rate);
		}
	};
};
