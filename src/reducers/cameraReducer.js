/* eslint-disable */
// Imports

// Actions

const READY_RECORD = "READY_RECORD";
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators

function readyRecord() {
  return {
    type: READY_RECORD
  };
}

function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer

const TIMER_DURATION = 61;

const initialState = {
  isReady: false,
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

function cameraReducer(state = initialState, action) {
  switch (action.type) {
    case READY_RECORD:
      return applyReadyRecord(state, action);
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyReadyRecord(state, action) {
  return {
    ...state,
    isReady: !state.isReady
  };
}

function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;

  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Exports

const actionCreators = {
  readyRecord,
  startTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Default

export default cameraReducer;
