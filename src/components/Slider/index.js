import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Slider, Rail, Handles, Tracks, Ticks} from 'react-compound-slider'
import {withStyles} from '@material-ui/core/styles'
import {SliderRail, Handle, Track, Tick} from './components' // example render components - source below

const style = () => ({
  root: {
    width: '90%',
    justifyContent: 'center'
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
})

const domain = [0, 5000000]
const defaultValues = [0, 5000000]

class Example extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice(),
  }

  onUpdate = update => {
    this.setState({update})
  }

  onChange = values => {
    this.setState({values})
  }

  render() {
    const {
      props: {classes},
      state: {values, update},
    } = this

    return (
      <div className={classes.root}>
        <Slider
          mode={2}
          step={100000}
          domain={domain}
          className={classes.slider}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({getRailProps}) => <SliderRail getRailProps={getRailProps}/>}
          </Rail>
          <Handles>
            {({activeHandleID, handles, getHandleProps}) => (
              <div>
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    activeHandleID={activeHandleID}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({tracks, getTrackProps}) => (
              <div>
                {tracks.map(({id, source, target}) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={1}>
            {({ticks}) => (
              <div>
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length}/>
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    )
  }
}

Example.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(Example)