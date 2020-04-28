import React from 'react';
import CheckBox from '@material-ui/icons/CheckBoxRounded';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { withStyles } from '@material-ui/styles';
import './CycleCounter.css';

const styles = {
    icons: {
        color: "white",
        fontSize: 32,
        verticalAlign: "middle",
        margin: "0px 2px"
    },
    iconDisplay: {
        float: "right",
        margin: "0px 20px"
    }
}

class CycleCounter extends React.Component {
    
    render() {
        const { current, max, isBreak, classes } = this.props;

        if (max === 0) {
            return null;
        }
        const completed = new Array(current - 1).fill(0);
        const uncompleted = new Array(current < max ? max - current : 0).fill(0);

        return (
            <div className={classes.iconDisplay}>
                {completed.map((el, i) => <CheckBox className={classes.icons} key={i} />)}            
                {isBreak 
                    ? <CheckBox className={classes.icons} />
                    : (current <= max && <CheckBox className={`animate-flicker ${classes.icons}`} />)
                }
                {uncompleted.map((el, i) => <CheckBoxOutlineBlank className={classes.icons} key={i}/>)}
            </div>
        );
    }
};

export default withStyles(styles)(CycleCounter);