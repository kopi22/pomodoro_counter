import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { getCurrentActivity } from '../utils/processingActivities';
import Activity from './Activity';

const mapStateToProps = (state) => {
    return {
        current: true, 
        activity: getCurrentActivity(state.activities.activities, state.activities.active),
        currentCycle: state.timer.currentCycle,
        timeRemaining: state.timer.timeRemaining,
        workTime: state.timer.workTime,
        phase: state.timer.phase
    };
};

const styles = {
    row: {
        backgroundColor: "#ffe3dd",
        boxShadow: "0px -0px 3px #aa8585"
    },
    cell: {
        fontWeight: "bold"
    }
};

const CurrentActivity = connect(mapStateToProps, null)(withStyles(styles)(Activity));

export default CurrentActivity;