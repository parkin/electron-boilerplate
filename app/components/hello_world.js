var React = require('react');
var os = require('os'); // window.env contains data from config/env_XXX.json file.

var envName = window.env.name;

var Machine = React.createClass({
    render: function () {
        return < p className = "subtitle" > Welcome to < a href = "http://electron.atom.io"
        className = "js-external-link" > Electron < /a> app running on this magnificent < strong  > {this.props.name} < /strong > machine. < /p>
  }
});

var Environment = React.createClass({
  render: function() {
    return <p className="subtitle"> You are in
            < strong  > {this.props.name} < /strong > environment. < /p>;
  }
});

export var Hello = React.createClass({
    render: function() {
        return (
          <div>
            <h1>Hello World!</h1 >
            <Machine name={os.platform()}/>
            <Environment name={envName}/>
          </div>
        );
    }
});
