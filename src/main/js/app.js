const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
	render() {
		return <div id="app-container">
			<div id="content-container">
				<nav id="environment-settings-container"></nav>
				<div id="problem-statement-container">
					<div id="problem-category-container"></div>
					<div id="code-editor"></div>
				</div>
			</div>
		</div>
	}
}
ReactDOM.render(<App />, document.getElementById('react'));