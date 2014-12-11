var timeAccumulator = require("./index");
var test = require("tape");

test("accumulator with 1 returns function", function(t) {
	t.plan(1);
	t.equal(typeof timeAccumulator(1), "function");
});

test("returned accumulator with 1 calls callback", function(t) {
	t.plan(1);
	var accum = timeAccumulator(1);
	accum(1, function(time) {
		t.equal(1, time);
	});
});

test("returned accumulator with 2 calls callback twice", function(t) {
	t.plan(2);
	var accum = timeAccumulator(1);
	accum(2, function(time) {
		t.equal(1, time);
	});
});

test("returned accumulator with 0.5,0.5 calls callback once", function(t) {
	t.plan(1);
	var accum = timeAccumulator(1);
	accum(0.5, function(time) {
		t.fail("should not be called the first time");
	});
	accum(0.5, function(time) {
		t.equal(1, time);
	});
});
