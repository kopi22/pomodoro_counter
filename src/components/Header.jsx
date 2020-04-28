import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import SettingsDialog from './SettingsDialogContainer';

import ActivityProgress from './ActivityProgress';

const styles = {
    text: {
        display: "inline-block",
        fontSize: 32,
        fontFamily: "Roboto",
        color: "white",
        margin: 0
    },
    dashboard: {
        backgroundColor: "red"
    }
};

const Header = ({ activity, classes }) => {
    return (
        <Grid item xs={12} style={{lineHeight: "70px"}}>
            <Paper className={classes.dashboard}>
                <SettingsDialog />
                <p className={classes.text}>Pomodoro Timer</p>          
                {activity != null && <ActivityProgress activity={activity}/>}
            </Paper>    
        </Grid>
    );
}

export default withStyles(styles)(Header);