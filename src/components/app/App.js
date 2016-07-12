import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <p>Hi, React just appended me to the page.</p>
      </div>
    );
  }
}