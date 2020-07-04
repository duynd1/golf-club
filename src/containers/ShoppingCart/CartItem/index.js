import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    marginTop: 60,
    padding: 50
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Box display={'flex'} justifyContent="space-between" flexDirection="row" flexWrap="wrap">
            <Box display={'flex'} flexDirection="row" flexWrap="wrap">
              <div>
                <Checkbox
                  className={classes.checkboxIcon}
                  checked={false}
                  classes={{
                    root: classes.checkbox,
                    checked: classes.checked,
                  }}
                />
              </div>
              <img style={{width: 180, height: 180}}
                   src={'https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-7.png?v=1573617877677'}/>
              <div>
                <Link to={'/product-details'}>
                  <div style={{color: '#0066c0', fontSize: 17, textDecoration: 'none'}}>GẬY GOLF
                    DUNLOP - D619066-XX
                  </div>
                </Link>
                <div style={{marginBottom: 5, marginTop: 10}}>Mã SP: D619066-XX</div>
                <div style={{marginBottom: 5, marginTop: 10}}>Nhà sản xuất: DUNLOP</div>
                <TextField
                  id="outlined-number"
                  label="Số lượng"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{width: 80, marginTop: 10, marginBottom: 10}}
                  value={1}
                  variant="outlined"
                />
                <div>
                  <a href={'#'} style={{color: 'rgb(27, 168, 255)', fontSize: 13}}>Xoá</a>
                </div>
              </div>
            </Box>
            <div style={{
              color: 'rgb(36, 36, 36)',
              fontSize: 15,
              fontWeight: '500',
            }}>
              3,600,000₫
            </div>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
}
