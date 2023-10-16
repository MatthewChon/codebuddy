import React from 'react';
import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { languageId } from '../data';

const InterviewerPOV = (props) => {
	const [language, setLanguage] = useState("python");
	const [start, setStart] = useState(false);
	const [timer, setTimer] = useState(0);
	const tick = useRef();

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
	useEffect(() => {
		if (start) {
			tick.current = setInterval(() => {
				setTimer((timer) => timer + 1);
			}, 1000);
		} else {
			clearInterval(tick.current);
		}
		return () => clearInterval(tick.current);
	})
	const timeFormat = (seconds) => {
		const hour = Math.floor(seconds / 3600);
		seconds = seconds % 3600;
		const min = Math.floor(seconds / 60);
		const sec = seconds % 60;
		return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
	}
	const toggleStart = () => {
		setStart(!start);
	}
	const resetTimer = () => {
		setStart(false);
		setTimer(0);
	}
	return <>
		<nav id="environment-settings-container">
			<li>
				<div id="problem-section-container">
					<div id="timer-section">
						<p>{timeFormat(timer)}</p>
						<div id="timer-controller">
							<button onClick={toggleStart}>{!start ? "START": "STOP"}</button>
							<button onClick={resetTimer}>RESET</button>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div id="code-editor-section-container">
					<div id="language-dropdown-container">
						<select id="language-dropdown" onChange={(e) => {setLanguage(e.currentTarget.value)}}>
							{Object.entries(languageId).map(([name, value]) => {
								return <option value={value} key={name}>
									{name}
								</option>
							})}
						</select>
					</div>
				</div>
			</li>
		</nav>
		<div id="interviewer-structure-container">
			<div id="problem-statement-container">
				<div id="problem-category-container">
					<textarea id="problem-statement" />
				</div>
				<div id="code-editor-container">
					<div id="code-editor" ref={editorRef}></div>
				</div>
			</div>
			<div id="interviewer-comments">
				<form id="code-rating" className="comment response-section">
					<div className="rating-section">
						<label for="algorithm-rating">Algorithm</label>
						<select id="algorithm-rating">
							<option hidden selected>Select rating</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
						

					</div>
					<div className="rating-section">
						<label for="coding-rating">Coding</label>
						<select id="coding-rating">
							<option hidden selected>Select rating</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
					<div className="rating-section">
						<label for="communication-rating">Communication</label>
						<select id="communication-rating">
							<option hidden selected>Select rating</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
					<div className="rating-section">
						<label for="problem-solving-rating">Problem Solving</label>
						<select id="problem-solving-rating">
							<option hidden selected>Select rating</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
				</form>
				<div className="comment-section response-section">
					<label for="compliment-comment">Excelled In:</label>
					<textarea id="compliment-comment" className="comment"/>
				</div>
				
				<div className="comment-section response-section">
					<label for="improvement-comment">Needs Improvement On:</label>
					<textarea className="comment" />
				</div>
			</div>
		</div>
		
	</>
}
export default InterviewerPOV;