import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const {app: {hi}} = this.props;
    return (
      <div>
        {hi}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

export default connect(
  mapStateToProps
)(App);

