import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestOntDetail } from '../actions/ontologiesActions'

import OntologyDetail from '../components/OntologyDetail'

const mapStateToProps = state =>
  state.ontologyDetail ||
  {
    isFetching: false,
    hasFetched: false,
    data: {},
    error: ''
  }

const mapDispatchToProps = dispatch =>
  ({ fetchOntDetail: (ontID) => dispatch(requestOntDetail(ontID)) })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OntologyDetail)
)
