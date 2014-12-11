# time-accumulator

Call a function at a constant rate no matter what the rate the accumulator is called at.

# Example

This causes the `render` function to be called every 5 milliseconds no matter what rate `requestAnimationFrame` calls `accum` at:
```javascript
var timeAccumulator = require("time-accumulator");
var accum = timeAccumulator(5.0);

var render = function(elapsed) { /* ... */ };

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
