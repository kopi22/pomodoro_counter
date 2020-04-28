import { connect } from 'react-redux';

import { TIMER_ACTIONS } from '../reducers/timerReducer';
import { ACTIVITIES_ACTIONS } from '../reducers/activitiesReducer';
import { getCurrentActivity } from '../utils/processingActivities';
import ClockDashboard from './ClockDashboard';

const setRemainingTime = remainingTime => {
    return { type: TIMER_ACTIONS.SET, remainingTime };
}

const updateCounter = (time) => {
    return { type: TIMER_ACTIONS.UPDATE, time };
}

const startCounter = () => {
    return { type: TIMER_ACTIONS.START };
}

const stopCounter = () => {
    return { type: TIMER_ACTIONS.STOP };
}

const resetCounter = () => {
    return { type: TIMER_ACTIONS.RESET };
}

const incrementCycle = () => {
    return { type: TIMER_ACTIONS.INC_CYCLE };
}

const changePhase = (time) => {
    return { 
        type: TIMER_ACTIONS.CHANGE_PHASE,
        time
    };
}

const nextActivity = () => {
    return { type: ACTIVITIES_ACTIONS.NEXT };
}
  
const mapDispatchToProps = dispatch => {
    return {
        setRemainingTime: remainingTime => {
            dispatch(setRemainingTime(remainingTime));
        },
        updateCounter: time => {
            dispatch(updateCounter(time));
        },
        startCounter: () => {
            dispatch(startCounter());
        },
        stopCounter: () => {
            dispatch(stopCounter());
        },
        resetCounter: () => {
            dispatch(resetCounter());
        },
        incrementCycle: () => {
            dispatch(incrementCycle());
        },
        changePhase: time => {
            dispatch(changePhase(time));
        },
        nextActivity: () => {
            dispatch(nextActivity());
        }
    };
}

const mapStateToProps = (state) => {
    const activity = getCurrentActivity(state.activities.activities, state.activities.active);
    if (activity === null) {
        return {
            timer: state.timer,
            description: "Add a Activity to Start the Timer",
            noCycles: 0
        };
    }
    return {
        timer: state.timer,
        description: activity.description,
        noCycles: activity.cycles
    };
};

const ClockDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(ClockDashboard);

export default ClockDashboardContainer;