// -----------------------------------------------------
// Here is the starting point for your own code.
// All stuff below is just to show you how it works.
// -----------------------------------------------------

// Node modules are required the same way as always.
var os = require('os');
var React = require('react')

// Browser modules are imported through new ES6 syntax.
import { Hello } from './components/hello_world';

React.render(<Hello />, document.getElementById('greet'));
