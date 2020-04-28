import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { getFinishedActivities } from '../utils/processingActivities';
import ActivitiesList from './ActivitiesList';


const mapStateToProps = (state) => {
    return {activities: getFinishedActivities(state.activities.activities, state.activities.active)};
};

const styles = {
    row: {
        backgroundColor: "#fcfcfc"
    }
};

const FinishedActivitiesList = connect(mapStateToProps, null)(withStyles(styles)(ActivitiesList));

export default FinishedActivitiesList;