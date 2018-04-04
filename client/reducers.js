/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  lanes,
  notes,
  intl,
 });
