import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id}</span>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque aliquid ullam impedit nesciunt, esse doloremque fugit, corporis adipisci culpa, dignissimos magnam dolor laborum aliquam cumque modi rem architecto. Provident!</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                  <div>Posted by My Manz Jordan</div>
                  <div>15th May, 10am</div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectDetails
// the props parameter gives the router details about the particular router inside app.js
// const id is storing the value props.match.params.id this will give you the a dynamic id