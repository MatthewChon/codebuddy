import React from 'react';
import InterviewerPOV from './interviewer';
import IntervieweePOV from './interviewee';

const TitlePage = (props) => {
    function submitRole(role) {
        props.setRole(role);
    }
    return <div id="title-page-container">
        <div id="title-page-section-container">
            <div className="title-page-section"
             id="interviewer-section-container"
             onClick={() => submitRole(<InterviewerPOV />)}>
                <div className="title-page-content" id="interviewer-section">
                    <h1>Interviewer</h1>
                </div>
            </div>
            <div className="title-page-section"
             id="interviewee-section-container"
             onClick={() => submitRole(<IntervieweePOV />)}>
                <div className="title-page-content" id="interviewee-section">
                    <h1>Interviewee</h1>
                </div>
            </div>
        </div>
    </div>
}
export default TitlePage;