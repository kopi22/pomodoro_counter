import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Settings from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const styles = {
  icons: {
    color: "white",
    fontSize: 32,
    margin: "0px 20px"
  },
  vertical: {
    verticalAlign: "middle",
    display: "inline-block",
    padding: 0
  }
}

class SettingsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      workTime: props.workTime / 1000 / 60,
      breakTime: props.breakTime / 1000 / 60,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = event => {
    if (event.target.textContent === "Save") {
      this.props.setDefaultTimes(this.state.workTime * 1000 * 60, this.state.breakTime * 1000 * 60);
    } else {
      this.setState({
        workTime: this.props.workTime / 1000 / 60,
        breakTime: this.props.breakTime / 1000 / 60
      })
    }
    this.setState({ open: false });
  };

  handleChange = name => event => {
    const input = event.target.value;
    if (/^[1-9]\d*$/.test(input) && parseInt(input) < 60) { 
      let update = {};
      update[name] = parseInt(input);
      this.setState(update);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.vertical}>
        <Button className={classes.vertical} onClick={this.handleClickOpen}>
          <Settings className={classes.icons}/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Pomodoro Timer Settings</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Editing these fields will change the timer settings for ongoing and future activities. Defaults are 25 min and 5 min for work and break time respectively.
            </DialogContentText>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <TextField
                  id="work"
                  label="Work Time"
                  value={this.state.workTime}
                  onChange={this.handleChange('workTime')}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="break"
                  label="Break Time"
                  value={this.state.breakTime}
                  onChange={this.handleChange('breakTime')}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SettingsDialog);