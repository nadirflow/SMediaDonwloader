import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  renderToolbar() {
    return (
      <Toolbar style={{backgroundColor: '#0054AC'}}>
        <div className="center" style={{color:'#fff'}}>Social Media Downloader</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar} style={{backgroundColor: '#000'}}>
        <p>Hello</p>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}