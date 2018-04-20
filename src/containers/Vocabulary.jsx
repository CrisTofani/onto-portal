import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestVocDetail, requestVocHierarchy } from '../actions/vocabulariesActions'

import VocabularyDetail from '../components/VocabularyDetail'

const initialDetail = {
  isFetching: false,
  hasFetched: false,
  data: {},
  error: ''
}

const initialHierarchy = {
  isFetching: false,
  hasFetched: false,
  data: [],
  error: ''
}

const mapStateToProps = state => ({
  vocabularyDetail: state.vocabularyDetail || initialDetail,
  vocabularyHierarchy: state.vocabularyHierarchy || initialHierarchy
})

const mapDispatchToProps = dispatch => ({
  fetchVocDetail: (vocID) => dispatch(requestVocDetail(vocID)),
  fetchVocHierarchy: (vocID) => dispatch(requestVocHierarchy(vocID))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VocabularyDetail)
)
