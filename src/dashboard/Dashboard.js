import React from 'react';
import { connect } from 'react-redux';

import Display from '../display/Display';
import Controls from '../controls/Controls';

import { toggleClosed, toggleLocked } from '../store/actions';

class Dashboard extends React.Component {

  render() {
    const { closed, locked } = this.props;

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.props.toggleLocked}
          toggleClosed={this.props.toggleClosed}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    locked: state.locked,
    closed: state.closed
  }
}

export default connect(mapStateToProps, { toggleClosed, toggleLocked })(Dashboard);