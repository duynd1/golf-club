import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: 540,
    maxHeight: 500,
    overflowY: 'scroll'
  },
  rootForm: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  console.log('TransitionsModal.....', props.open)
  const {data} = props
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Chỉnh sửa
          </Typography>
          <form className={classes.rootForm} noValidate autoComplete="off">
            <div>
              <TextField
                disabled
                id="id"
                label="Mã sản phẩm"
                defaultValue="Hello World"
                variant="outlined"
                value={data && data.id || ''}
              />
              <TextField value={data && data.category | ''} label="Category" type="search" variant="outlined"/>
              <TextField value={data && data.brand || ''} label="Brand" type="search" variant="outlined"/>
              <TextField value={data && data.loft || ''} label="Loft" type="search" variant="outlined"/>
              <TextField value={data && data.flex || ''} label="Flex" type="search" variant="outlined"/>
              <TextField value={data && data.gender || ''} label="Player" type="search" variant="outlined"/>
              <TextField value={data && data.hand || ''} label="Hand" type="search" variant="outlined"/>
              <TextField value={data && data.shaft || ''} label="Shaft" type="search" variant="outlined"/>
              <TextField value={data && data.conditionRank || ''} label="Condition Rank" type="search"
                         variant="outlined"/>
              <TextField value={data && data.headcover || ''} label="Headcover" type="search" variant="outlined"/>
              <TextField value={data && data.PLU || ''} label="PLU" type="search" variant="outlined"/>
              <TextField value={data && data.price || ''} label="Giá" type="search" variant="outlined"/>
              <TextField value={data && data.shop || ''} label="shop" type="search" variant="outlined"/>
              <TextField value={data && data.status || ''} label="tình trạng" type="search" variant="outlined"/>
            </div>
          </form>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{marginLeft: 10, marginTop: 10}}
            className={classes.button}
            startIcon={<SaveIcon/>}
            onClick={props.handleClose}
          >
            Lưu
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}