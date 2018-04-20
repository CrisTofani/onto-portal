import { combineReducers } from 'redux'
import { ontListReducer, ontDetailReducer } from './ontologiesReducers'
import { vocListReducer, vocDetailReducer, vocHierarchyReducer } from './vocabulariesReducers'

export default combineReducers({
  ontologiesList: ontListReducer,
  ontologyDetail: ontDetailReducer,
  vocabulariesList: vocListReducer,
  vocabularyDetail: vocDetailReducer,
  vocabularyHierarchy: vocHierarchyReducer
})
