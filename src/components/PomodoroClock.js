import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import ClockDashboardContainer from './ClockDashboardContainer';
import ActivitiesPanel from './ActivitiesPanel';

class PomodoroClock extends React.Component {
    render () {
        return (
            <Grid container spacing={16}>
                <ClockDashboardContainer />
                <ActivitiesPanel />
            </Grid>
        );
    }
}

export default PomodoroClock;