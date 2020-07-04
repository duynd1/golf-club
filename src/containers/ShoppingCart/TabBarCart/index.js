import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import CartItem from "../CartItem";
import Button from "@material-ui/core/Button";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PaymentIcon from '@material-ui/icons/Payment';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  summaryWrapper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Giỏ hàng" {...a11yProps(0)} />
          <Tab label="Đang đặt chỗ" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3} justify="flex-end">
          <Grid item md={12}>
            <CartItem/>
          </Grid>
          <Grid item md={12}>
            <CartItem/>
          </Grid>
          <Grid item md={12}>
            <CartItem/>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper className={classes.summaryWrapper}>
              <Box display={'flex'} justifyContent="space-between" alignItems={'center'} flexDirection="row"
                   flexWrap="wrap">
                <div style={{fontWeight: '500'}}>Thành tiền</div>
                <div style={{
                  color: 'rgb(255, 66, 78)',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                  23,200,000₫
                </div>
              </Box>
              <Box display={'flex'} justifyContent="flex-end" flexDirection="row"
              >
                <Button
                  startIcon={<AssignmentTurnedInIcon/>}
                  style={{marginTop: 20, marginRight: 20}}
                  variant="contained" color="default"
                >
                  Đặt chỗ
                </Button>
                <Button
                  startIcon={<PaymentIcon/>}
                  style={{marginTop: 20}}
                  variant="contained"
                  color="default"
                >
                  Thanh toán
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} justify="flex-end">
          <Grid item md={12}>
            <CartItem/>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper className={classes.summaryWrapper}>
              <Box display={'flex'} justifyContent="space-between" alignItems={'center'} flexDirection="row"
                   flexWrap="wrap">
                <div style={{fontWeight: '500'}}>Thành tiền</div>
                <div style={{
                  color: 'rgb(255, 66, 78)',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                  23,200,000₫
                </div>
              </Box>
              <Box display={'flex'} justifyContent="flex-end" flexDirection="row"
              >
                <Button
                  startIcon={<PaymentIcon/>}
                  style={{marginTop: 20}}
                  variant="contained"
                  color="default"
                >
                  Thanh toán
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
}
