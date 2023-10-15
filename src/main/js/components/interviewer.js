/**********************************
 * TODO: finish working on filling in rating section
 **********************************/
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { languageId } from '../data';

const InterviewerPOV = (props) => {
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
						{Object.entries(languageId).map(([name, value]) => {
							return <option value={value} key={name}>
								{name}
							</option>
						})}
					</select>
				</div>
			</li>
		</nav>
		<div id="interviewer-structure-container">
			<div id="problem-statement-container">
				<div id="problem-category-container"></div>
				<div id="code-editor-container">
					<div id="code-editor" ref={editorRef}></div>
				</div>
			</div>
			<div id="interviewer-comments">
				<form id="code-rating" className="comment">
					<div className="rating-section">
						<label for="code-walkthrough-rating">Code Walkthrough</label>
						<select id="code-walkthrough-rating">
							<option hidden selected>Select rating</option>
							<option>Needs Improvement / Everything</option>
							<option>Needs Improvement / Explanation Vague</option>
							<option>Nedds Improvement / Hard to follow</option>
							<option>Satisfactory</option>
						</select>
					</div>
					<div className="rating-section">
					<label for="code-completeness-rating">Code Completeness</label>
					<select id="code-completeness-rating">
					</select>
					</div>
				</form>
				<input type="text" className="comment" />
				<input type="text" className="comment" />
			</div>
		</div>
		
	</>
}
export default InterviewerPOV;