import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        mounted: false
    };
  }
  
  componentDidMount() {
    let self = this;
    
    setInterval(function(){
        self.setState({
            mounted: true
        });
    }, 2000);
  }

  render() {
    let class_name = '';
    
    if (!this.state.mounted) {
        class_name = styles.unmounted;
    } else {
        class_name = styles.mounted;
    }
  
    return (
      <div>
        <p className={class_name}>Hello, world</p>
        <img src={require('../public/images/placeholder.png')} />
      </div>
    );
  }
}