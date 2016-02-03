import { Component } from 'react-native';
import { connect } from 'react-redux';
import MapView from '../components/mapView.js';


function mapStateToProps({ user, socket, allUsers }) {
  return { user, socket, allUsers };
}

export default connect(mapStateToProps)(MapView);





