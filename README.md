# time-accumulator

Call a function at a constant rate no matter what the rate the accumulator is called at.

# Example

This causes the `render` function to be called every 5 milliseconds no matter what rate `requestAnimationFrame` calls `accum` at:
```javascript
var render = function(elapsed) { /* ... */ };

var accum = timeAccumulator(5.0);

window.requestAnimationFrame(function(elapsed) {
	accum(elapsed, render);
});
```

# Install

With [npm](https://www.npmjs.com/) do:

```
npm install time-accumulator
```

# License

MIT
