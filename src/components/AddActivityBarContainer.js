import { connect } from 'react-redux';

import { ACTIVITIES_ACTIONS } from '../reducers/activitiesReducer';
import AddActivityBar from './AddActivityBar';


const addActivity = activity => {
    return {
        type: ACTIVITIES_ACTIONS.ADD,
        activity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addActivity: activity => {
            dispatch(addActivity(activity));
        }
    };
};

const AddActivityBarContainer = connect(null, mapDispatchToProps)(AddActivityBar);

export default AddActivityBarContainer;
