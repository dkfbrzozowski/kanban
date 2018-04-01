import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest } from '../Lane/LaneActions';

import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })}
    >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
)

const mapStateToProps = (state) => ({
  lanes: Object.values(state.lanes),
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
