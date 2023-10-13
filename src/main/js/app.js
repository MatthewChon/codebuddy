import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
const React = require('react');
const ReactDOM = require('react-dom');

const App = (props) => {
	const [language, setLanguage] = useState("typescript");
	let editor = monaco.editor.IStandaloneCodeEditor;
	const editorRef = useRef(null);
	let editor_configuration =  {
		value: "// Enter code here",
		language: language,
		contextmenu: false,
		minimap: { enabled: false },
		scrollbar: {
			vertical: false,
			horizontal: 'hidden',
			useShadows: false
		},
	}

	useEffect(() => {
		if (editorRef.current) {
			editor = monaco.editor.create(editorRef.current, editor_configuration);
		}
		return () => {
			editor.dispose();
		};
	}, [editorRef.current]);

	return <div id="app-container">
		<div id="content-container">
			<nav id="environment-settings-container">
				{/* TODO: create options */}
			</nav>
			<div id="problem-statement-container">
				<div id="problem-category-container"></div>
				<div id="code-editor-container">
					<div id="code-editor" ref={editorRef}></div>
				</div>
			</div>
		</div>
	</div>
}
ReactDOM.render(<App />, document.getElementById('react'));