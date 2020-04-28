import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';


const styles = {
    timer: {
        margin: "20px"
    }
};

const Timer = ({ min, sec, classes }) => {
    return (
            <Typography variant="h1" className={classes.timer}>
                {min}:{sec}
            </Typography>
    );
};

export default withStyles(styles)(Timer);