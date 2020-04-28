import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
    cp: {
        margin: "30px 0px"
    },
    btn: {
        margin: "0px 5px"
    }
};

class ControlPanel extends React.Component {

    render() {
        const { activity, classes, running, start, stop, skip } = this.props;

        if (activity === null) {
            return (
                <div className={classes.cp}>
                    <Button className={classes.btn} variant="outlined" disabled>Start</Button>
                    <Button className={classes.btn} onClick={stop} color="primary" variant="outlined" disabled>Stop</Button>
                    <Button className={classes.btn} onClick={skip} color="secondary" variant="outlined" disabled>Skip</Button>
                </div>
            );
        }
        if (running) {
            return (
                <div className={classes.cp}>
                    <Button className={classes.btn} variant="outlined" disabled>Start</Button>
                    <Button className={classes.btn} onClick={stop} color="primary" variant="outlined">Stop</Button>
                    <Button className={classes.btn} onClick={skip} color="secondary" variant="outlined">Skip</Button>
                </div>
            );
        } else {
            return (
                <div className={classes.cp}>
                    <Button className={classes.btn} onClick={start} color="primary" variant="outlined">Start</Button>
                    <Button className={classes.btn} variant="outlined" disabled>Stop</Button>
                    <Button className={classes.btn} onClick={skip} color="secondary" variant="outlined">Skip</Button>
                </div>
            );
        }
    }
}

export default withStyles(styles)(ControlPanel);