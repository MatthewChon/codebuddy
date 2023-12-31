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
			vertical:"hidden",
			horizontal: "hidden",
		},
		overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
		overviewRulerBorder: false,
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
					<div id="language-dropdown-container">
						<select id="language-dropdown" onChange={(e) => {setLanguage(e.currentTarget.value)}}>
							{Object.entries(languageId).map(([languageName, languageValue]) => {
								return <option value={languageValue} key={languageName}>
									{languageName}
								</option>
							})}
						</select>
					</div>
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
export const IntervieweeConnect = (props) => {
	return <div id="interviewee-connect-container" className="connect-tab">
		<span id="interviewer-connect-button"
		 className="title connect-button button"
		 onClick={() => props.connect(<IntervieweePOV />)}>Connect</span>
	</div>
}
export default IntervieweePOV;
