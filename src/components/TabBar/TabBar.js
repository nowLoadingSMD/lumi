import React, { Component } from 'react';
import './TabBar.css';

import Header from '../Header/Header';
import Tabs from './Tabs/Tabs';
import NewEvent from '../NewEvent/NewEvent';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileTeacher: null,
      showModal: false
    };
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setState({ profileTeacher: this.props.profileTeacher });
  }

  handleModal = () => {
    this.setState({ showModal: true });
  };

  onChangeState = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="tabBar">
        <NewEvent
          show={this.state.showModal}
          onChangeState={this.onChangeState}
        />
        <div className="titleTabBar">
          <article>
            <img src={this.props.icon} />
          </article>
          <Header>{this.props.title}</Header>
        </div>
        {this.state.profileTeacher ? (
          <div className="tabTeacher">
            <Tabs tabs={this.props.tabs} onTabChange={this.props.onTabChange} />
            <button className="button buttonPrimary" onClick={this.handleModal}>Criar evento</button>
          </div>
        ) : (
            <Tabs tabs={this.props.tabs} onTabChange={this.props.onTabChange} />
          )}
      </div>
    );
  }
}

export default TabBar;
