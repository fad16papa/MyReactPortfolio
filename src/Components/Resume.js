import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var educationImage = this.props.data.education.image;
      var educationSchool = this.props.data.education.school;
      console.log(educationImage, educationSchool);
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <img
              className={"school"}
              alt={education.school}
              src={education.image}
            />
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <img className={"school"} alt={work.company} src={work.image} />
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
            <p>{work.secondDescription}</p>
          </div>
        );
      });
      var skills1 = this.props.data.skills1.map(function (skills) {
        return (
          <div className={"columns feature-item"}>
            <img className={"skill"} alt={skills.name} src={skills.image} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>My Tech StackS</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p className={"lead center"}>{skillmessage}</p>
          </div>

          <div>
            <ul className={"bgrid-quarters s-bgrid-thirds cf"}>{skills1}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
