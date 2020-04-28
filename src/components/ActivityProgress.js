import React from 'react';

import { withStyles } from '@material-ui/styles';

import CycleCounter from './CycleCounterContainer';

const styles = {
    activity: {
        float: "right",
    },
    text: {
        display: "inline-block",
        fontSize: 32,
        fontFamily: "Roboto",
        color: "white",
        margin: 0
    }
};

const ActivityProgress = ({ activity, classes }) => (
    <React.Fragment>
        <CycleCounter />
        <p className={`${classes.activity} ${classes.text}`}>
            {activity.name}
        </p>
    </React.Fragment>
);

export default withStyles(styles)(ActivityProgress);
