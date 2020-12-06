import React, { Component } from 'react';
import lessons from '../js-lessons';
import Test1 from "../js-lessons/test1";
import './app.css';

export default class App extends Component {

  state = {
    components: []
  };

  _id = 100;

  componentDidMount() {
    this.setState({lessons});
  }

  render() {

    const { components } = this.state;
    // console.log(components);
    console.log(lessons);

    const lessonsList = lessons.map((lesson) => {
      return <li className="list-group-item">{lesson.props.children}</li>
    })
    return(
      <ul className="list-group">
        {/*<li className="list-group-item">Урок 1</li>*/}
        {/*<li className="list-group-item">Урок 2</li>*/}
        {/*<li className="list-group-item">Урок 3</li>*/}
        {/*<li className="list-group-item">Урок 4</li>*/}
        {lessonsList}
      </ul>
    )
  }
}