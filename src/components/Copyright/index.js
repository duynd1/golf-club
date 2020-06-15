import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  copyright: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});

function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.copyright}>
      <Typography variant="body2"
                  color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Golf Shop
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>

  );
}

export default Copyright