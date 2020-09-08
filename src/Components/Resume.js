import React, { Component } from "react";
import GridItem from "./GridItem";
import GridContainer from "./GridContainer";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
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
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills1 = this.props.data.skills1.map(function (skills) {
        return (
          // <ul className={"bgrid-quarters s-bgrid-thirds cf"}>
          <div className={"columns feature-item"}>
            <img className="skill" alt={skills.name} src={skills.image} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </div>
          // </ul>
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
            <p>{skillmessage}</p>
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