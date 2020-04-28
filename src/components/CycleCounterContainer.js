import { connect } from 'react-redux';

import { getCurrentActivity } from '../utils/processingActivities';
import { TIMER_PHASES, TIMER_ACTIONS } from '../reducers/timerReducer';
import CycleCounter from './CycleCounter';

const resetCounter = () => {
    return { type: TIMER_ACTIONS.RESET };
};

const mapDispatchToProps = dispatch => {
    return {
        resetCounter: () => {
            dispatch(resetCounter());
        }
    };
};

const mapStateToProps = state => {
    const currentActivity = getCurrentActivity(state.activities.activities, state.activities.active);
    if (currentActivity === null) {
        return {
            max: 0
        };
    }
    return {
        max: currentActivity.cycles,
        current: state.timer.currentCycle,
        isBreak: state.timer.phase === TIMER_PHASES.BREAK
    };
}

const CycleCounterContainer = connect(mapStateToProps, mapDispatchToProps)(CycleCounter);

export default CycleCounterContainer;
