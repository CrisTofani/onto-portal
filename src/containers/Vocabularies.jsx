import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestVocList } from '../actions/vocabulariesActions'

import VocabulariesList from '../components/VocabulariesList'

const mapStateToProps = state =>
  state.vocabulariesList ||
  {
    isFetching: false,
    hasFetched: false,
    data: [],
    error: ''
  }

const mapDispatchToProps = dispatch =>
  ({ fetchVocList: () => dispatch(requestVocList()) })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VocabulariesList)
)
