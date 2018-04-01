/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './modules/App/components/DevTools';
import rootReducer from './reducers';

// const initStore = {
//   lanes: [{
//       id: 'lane-1',
//       name: 'todo',
//       notes: ['note-1']
//     }, {
//       id: 'lane-2',
//       name: 'doing',
//       notes: []
//     }, {
//       id: 'lane-3',
//       name: 'done',
//       notes: ['note-2']
//     }],
//   notes: [{
//       id: 'note-1',
//       task: 'pierwsza notka'
//     }, {
//       id: 'note-2',
//       task: 'druga notka'
//     }]
// };

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
  ];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
