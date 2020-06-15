import React, {useEffect} from 'react';
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
    padding: theme.spacing(1, 1, 1),
    maxWidth: 520,
    maxHeight: 550,
    overflowY: 'scroll'
  },
  rootForm: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: '25ch',
    },
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    data: {},
  });

  useEffect(() => {
    setState({
      data: props.data,
      isEdit: !!props.data.id
    });
  }, [props]);

  const changeField = (fieldName, value) => {
    setState({
      ...state,
      data: {
        ...state.data,
        [fieldName]: value
      }
    })
  }

  const {data, isEdit} = state
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
            {isEdit ? 'Chỉnh sửa' : 'Thêm mới'}
          </Typography>
          <form className={classes.rootForm} noValidate autoComplete="off">
            <div>
              <TextField
                id="id"
                label="Mã sản phẩm"
                variant="outlined"
                value={data && data.id || ''}
                disabled={isEdit}
                onChange={event => {
                  changeField('id', event.target.value)
                }}
              />
              <TextField onChange={event => {
                changeField('category', event.target.value)
              }} value={data && data.category || ''} label="Category" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('brand', event.target.value)
              }} value={data && data.brand || ''} label="Brand" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('loft', event.target.value)
              }} value={data && data.loft || ''} label="Loft" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('flex', event.target.value)
              }} value={data && data.flex || ''} label="Flex" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('gender', event.target.value)
              }} value={data && data.gender || ''} label="Player" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('hand', event.target.value)
              }} value={data && data.hand || ''} label="Hand" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('shaft', event.target.value)
              }} value={data && data.shaft || ''} label="Shaft" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('conditionRank', event.target.value)
              }} value={data && data.conditionRank || ''} label="Condition Rank" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('headcover', event.target.value)
              }} value={data && data.headcover || ''} label="Headcover" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('PLU', event.target.value)
              }} value={data && data.PLU || ''} label="PLU" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('price', event.target.value)
              }} value={data && data.price || ''} label="Giá" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('shop', event.target.value)
              }} value={data && data.shop || ''} label="shop" type="search" variant="outlined"/>
              <TextField onChange={event => {
                changeField('status', event.target.value)
              }} value={data && data.status || ''} label="tình trạng" type="search" variant="outlined"/>
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