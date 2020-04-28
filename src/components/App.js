import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import PomodoroClock from './PomodoroClock';

class App extends React.Component {
  render() {
    const rootStyles = {
      width: "720px",
      margin: "20px auto"
    };

    return  (
      <React.Fragment>
        <CssBaseline />
          <div className="root" style={rootStyles}>
            <Grid container>
              <Grid item xs={12}>
                <PomodoroClock />
              </Grid>
            </Grid>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
