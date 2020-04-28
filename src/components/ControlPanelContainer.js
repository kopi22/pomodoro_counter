import { connect } from 'react-redux';

import { getCurrentActivity } from '../utils/processingActivities';
import ControlPanel from './ControlPanel';


const mapStateToProps = (state, ownProps) => {
    const activity = getCurrentActivity(state.activities.activities, state.activities.active);
    return {
        activity,
        running: state.timer.running,
        start: ownProps.start,
        stop: ownProps.stop
    };
}

const ControlPanelContainer = connect(mapStateToProps, null)(ControlPanel);

export default ControlPanelContainer;
