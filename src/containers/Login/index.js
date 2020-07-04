import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './styles.scss'
import {observer, inject} from 'mobx-react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {withStyles} from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Logo from '../../components/Logo'
import Copyright from '../../components/Copyright'
import Container from '@material-ui/core/Container';

const cusStyles = theme => ({
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '20%',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  avatar: {
    backgroundColor: '#3F51B5'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {},
});

@inject((store) => store)
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleLogin = () => {

  }

  onChangeField = (value, fieldName) => {
    this.setState({
      [fieldName]: value
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div className="img-background">
        <div className='img-background-container'>
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.logo}>
              <Logo/>
            </div>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
              </Avatar>
              <Typography component="h1" variant="h5" style={{color: 'white'}}>
                Đăng nhập
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Username"
                  onChange={(event) => this.onChangeField(event.target.value, 'username')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputLabelProps={{
                    style: {
                      color: 'white'
                    }
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  onChange={(event) => this.onChangeField(event.target.value, 'password')}
                  autoComplete="current-password"
                  InputLabelProps={{
                    style: {
                      color: 'white'
                    }
                  }}
                />
                <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onPress
                  >
                    Sign In
                  </Button>
                </Link>
              </form>
            </div>
          </Container>
          <Copyright/>
        </div>
      </div>
    );
  }
}

export default withStyles(cusStyles)(Login)