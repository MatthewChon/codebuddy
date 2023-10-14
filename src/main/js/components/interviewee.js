import React from 'react';
import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { languageId } from '../data';

const IntervieweePOV = (props) => {
	const [language, setLanguage] = useState("python");
	let codeEditor = monaco.editor.IStandaloneCodeEditor;
	const editorRef = useRef(null);
	/*======= Editor Configuration =======*/
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
	/*--- End Editor Configuration ---*/
	useEffect(() => {
		if (editorRef.current) {
			codeEditor = monaco.editor.create(editorRef.current, editor_configuration);
		}
		return () => {
			codeEditor.dispose();
		};
	}, [editorRef.current, language]);
	return <>
		<nav id="environment-settings-container">
			<li>
				<div id="problem-section-container">

				</div>
			</li>
			<li>
				<div id="code-editor-section-container">
					<select id="language-dropdown" onChange={(e) => {setLanguage(e.currentTarget.value)}}>
						{Object.entries(languageId).map(([languageName, languageValue]) => {
							return <option value={languageValue} key={languageName}>
								{languageName}
							</option>
						})}
					</select>
				</div>
			</li>
		</nav>
		<div id="problem-statement-container">
			<div id="problem-category-container"></div>
			<div id="code-editor-container">
				<div id="code-editor" ref={editorRef}></div>
			</div>
		</div>
	</>
}
export default IntervieweePOV;
