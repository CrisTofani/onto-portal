import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestVocDetail } from '../actions/vocabulariesActions'

import VocabularyDetail from '../components/VocabularyDetail'

const mapStateToProps = state =>
  state.vocabularyDetail ||
  {
    isFetching: false,
    hasFetched: false,
    data: {},
    error: ''
  }

const mapDispatchToProps = dispatch =>
  ({ fetchVocDetail: (vocID) => dispatch(requestVocDetail(vocID)) })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VocabularyDetail)
)
