import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { getQueuedActivities } from '../utils/processingActivities';
import ActivitiesList from './ActivitiesList';

const mapStateToProps = (state) => {
    return {activities: getQueuedActivities(state.activities.activities, state.activities.active)};
};

const QueuedActivitiesList = connect(mapStateToProps, null)(withStyles(null)(ActivitiesList));

export default QueuedActivitiesList;