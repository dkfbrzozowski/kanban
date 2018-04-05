import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';

import styles from './Lane.css';

const Lane = (props) => {
  const { lane, laneNotes, updateLane, addNote, deleteLane } = props;
  const laneId = lane.id;

  return (
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneAddNote}>
          <button onClick={() => addNote({ task: "New note"}, laneId)}>Add Note</button>
        </div>
        <h4>
          <Edit
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}

            onUpdate={name => updateLane({ ...lane, name, editing: false })}
          />
        </h4>
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
        </div>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
};

export default Lane;
