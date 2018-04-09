import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestOntList } from '../actions/ontologiesActions'

import OntologiesList from '../components/OntologiesList'

const mapStateToProps = state =>
  state.ontologiesList ||
  {
    isFetching: false,
    hasFetched: false,
    data: [],
    error: ''
  }

const mapDispatchToProps = dispatch =>
  ({ fetchOntList: () => dispatch(requestOntList()) })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OntologiesList)
)
