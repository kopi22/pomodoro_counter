import { connect } from 'react-redux';

import { TIMER_ACTIONS } from '../reducers/timerReducer';
import SettingsDialog from './SettingsDialog';

// TODO: UPDATE TIMER IF NOT RUNNING

const setDefaultTimes = (workTime, breakTime) => {
    return {
        type: TIMER_ACTIONS.SET_TIMES,
        workTime,
        breakTime
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setDefaultTimes: (workTime, breakTime) => {
            dispatch(setDefaultTimes(workTime, breakTime))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        workTime: state.timer.workTime,
        breakTime: state.timer.breakTime,
        longBreakTimePerCycle: state.timer.longBreakTimePerCycle,
    };
}

const SettingsDialogContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsDialog);

export default SettingsDialogContainer;
