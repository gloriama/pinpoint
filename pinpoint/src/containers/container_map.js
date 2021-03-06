import { Component } from 'react-native';
import { connect } from 'react-redux';
import Map from '../components/map';
import updateStats from '../actions/action_update_stats';
import setTag from '../actions/action_set_tag';

function mapStateToProps({ user, socket, settings, markers, hotspots, tag }) {
  return { user, socket, settings, markers, hotspots, tag };
}

export default connect(mapStateToProps, { updateStats, setTag })(Map);






