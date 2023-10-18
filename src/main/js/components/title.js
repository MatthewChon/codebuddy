import React, { useState, useEffect } from 'react';
import InterviewerPOV, { InterviewerConnect } from './interviewer';
import IntervieweePOV, { IntervieweeConnect } from './interviewee';

const TitlePage = (props) => {
    const [view, setView] = useState("interviewer");
    const [preview, setPreview] = useState(view);
    useEffect(() => {
        let selection_id = `${preview}-selection`;
        document.getElementById(selection_id).classList.remove('selected');
        
        selection_id = `${view}-selection`;
        document.getElementById(selection_id).classList.add('selected');

        setPreview(view);
    }, [view]);
    function submitRole(role) {
        props.setRole(role);
    }
    return <div id="title-page-container">
        <div id="title-page-selection-section">
            <h1 id="app-title" className="title">Code Buddy</h1>
            <span id="interviewer-selection"
             className="title title-selection button"
             onClick={() => setView('interviewer')}>
                Interviewer
            </span>
            <span id="interviewee-selection"
             className="title title-selection button"
             onClick={() => setView('interviewee')}>
                Interviewee
            </span>
        </div>
        <span id="title-page-divider" />
        <div id="title-page-configuration-setting">
            {view == "interviewer" ? <InterviewerConnect connect={props.setRole}/> : <IntervieweeConnect connect={props.setRole}/>}
        </div>
    </div>
}
export default TitlePage;