import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
const React = require('react');
const ReactDOM = require('react-dom');

const App = (props) => {
	let editor = monaco.editor.IStandaloneCodeEditor;
	const editorRef = useRef(null);

	useEffect(() => {
		if (editorRef.current) {
			editor = monaco.editor.create(editorRef.current, {
				
			});
		}
		return () => {
			editor.dispose();
		};
	}, [editorRef.current]);

	return <div id="app-container">
		<div id="content-container">
			<nav id="environment-settings-container"></nav>
			<div id="problem-statement-container">
				<div id="problem-category-container"></div>
				<div id="code-editor" ref={editorRef}></div>
			</div>
		</div>
	</div>
}
ReactDOM.render(<App />, document.getElementById('react'));