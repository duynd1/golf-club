import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './styles.scss'
import Box from "@material-ui/core/Box";
import Logo from '../../components/Logo'
import Typography from "@material-ui/core/Typography";
import ball from '../../assets/images/ball.png'
import Copyright from "../../components/Copyright";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditModal: false,
      editData: {}
    }
  }

  onOpenEditModal = (data) => {
    this.setState({
      openEditModal: true,
      editData: data
    })
  }

  onOpenAddNewModal = () => {
    this.setState({
      openEditModal: true,
      editData: {}
    })
  }

  onCloseEditModal = () => {
    this.setState({openEditModal: false})
  }

  render() {

    return (
      <div className="img-background">
        <div className='img-background-container'>
          <Box style={{padding: 20}} display={'flex'} flexDirection="row" justifyContent={'space-between'}
               alignItems={'center'}>
            <Logo/>
            <Link to={'/login'} className={'btn-header'}>
              Đăng nhập
            </Link>
          </Box>
          <div className='intro-group-button'>
            <Link to={'/'} className='top-edge'>
              <img src={ball}/>
              <div className="intro-content effect-9 sub-a">
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={'intro-title'}
                >
                  TSURUYA
                </Typography>
                <div className={'image-marked'}/>
              </div>
            </Link>
            <Link to={'/'} className='top-left-edge'>
              <img src={ball}/>
              <div className="intro-content effect-9 sub-a">
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={'intro-title'}
                >
                  Gậy mới
                </Typography>
                <div className={'image-marked'}/>
              </div>
            </Link>
            <Link to={'/login'} className='top-right-edge'>
              <img
                src={ball}/>
              <div className="intro-content effect-9 sub-a">
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={'intro-title'}
                >
                  Gậy cũ
                </Typography>
                <div className={'image-marked'}/>
              </div>
            </Link>
            <Link to={'/'} href='#' className='bottom-left-edge'>
              <img
                src={ball}/>
              <div className="intro-content effect-9 sub-a">
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={'intro-title'}
                >
                  Phụ kiện
                </Typography>
                <div className={'image-marked'}/>
              </div>
            </Link>
            <Link to={'/'} href='#' className='bottom-right-edge'>
              <img
                src={ball}/>
              <div className="intro-content effect-9 sub-a">
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={'intro-title'}
                >
                  Dịch vụ khác
                </Typography>
                <div className={'image-marked'}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}