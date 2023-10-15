import { useRef, useState, useEffect } from 'react';
import TitlePage from './components/title';
import IntervieweePOV from './components/interviewee';
import InterviewerPOV from './components/interviewer';
const React = require('react');
const ReactDOM = require('react-dom');

const App = (props) => {
	const [role, setRole] = useState(<TitlePage setRole={(userSelection) => setRole(userSelection)} />);
	return <div id="app-container">
		<div id="content-container">
			{role}
		</div>
	</div>
}
ReactDOM.render(<App />, document.getElementById('react'));