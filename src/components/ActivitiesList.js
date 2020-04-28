import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activity';

// NEEDS:
// CYCLE AND BREAK TIME

class ActivitiesList extends React.Component {

    render() {
        const { activities, current, classes } = this.props;

        return (
            <React.Fragment>
                {activities.map((activity, i) => (
                    <Activity expanded={current === undefined ? false : current} activity={activity} classes={classes} key={i}/>
                ))}
            </React.Fragment>
        );
    }
}

ActivitiesList.propTypes = {
    activities: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        cycles: PropTypes.number
    })).isRequired
};

export default ActivitiesList;