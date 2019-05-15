// this is a functional component that comes via props and we don't need state
// react re-renders by calling thi.setState to reload and refresh or update data
// react is modular meaning that it more strict about creating pieces of code so its not scrambled
import React from 'react'

const ProjectSummary = () => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title</span>
                <p>Posted by Jordan B.</p>
                <p className="grey-text">14th May, 4:420pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary