import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import AddedActivitiesList from './AddedActivitiesList';

class ActivitiesPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            active: 1
        };
    }
    
    render () {
        return (
            <Grid item xs={12}>
                <Paper>
                    <AddedActivitiesList />
                </Paper>
            </Grid>
        );
    }
}

export default ActivitiesPanel;