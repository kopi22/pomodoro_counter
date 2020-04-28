import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';

const styles = {
  icons: {
    fontSize: 32,
    margin: "0px 20px",
  },
  vertical: {
    verticalAlign: "middle",
    display: "inline-block",
    padding: 0,
    float: "left", 
    width: "49%"
  }
}

class AddActivityBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: null,
      noCycles: 4,
      description: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = event => {
    if (event.target.textContent === "Add") {
      this.props.addActivity({
        name: this.state.name, 
        description: this.state.description, 
        cycles: this.state.noCycles,
      });
    }
    this.setState({
      open: false,
      name: null,
      noCycles: 4,
      description: null,
    });
  };

  handleChange = (name, isNumerical = false) => event => {
    const input = event.target.value;
    if (isNumerical) {
      if (/^[1-4]$/.test(input)) {
        let update = {};
        update[name] = parseInt(input);
        this.setState(update);
      }
    } else {
      let update = {};
      update[name] = input;
      this.setState(update);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.vertical}>
        <IconButton aria-label="Add" className={classes.icons} onClick={this.handleClickOpen}>
          <AddIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Activity</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Editing these fields will change the timer settings for ongoing and future activities. Defaults are 25 min and 5 min for work and break time respectively.
            </DialogContentText> */}
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="cycles"
                  label="Number of Cycles"
                  value={this.state.noCycles}
                  onChange={this.handleChange('noCycles', true)}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  label="Description"
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  type="text"
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
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddActivityBar);