import {
  initialList as initialVocList,
  initialDetail as initialVocDetail,
  initialHierarchy as initialVocHierarchy
} from '../config/initialStates'

export const vocListReducer = (state = initialVocList, action) => {
  switch (action.type) {
    case 'REQUEST_VOC_LIST_PENDING':
      return {
        ...state,
        isFetching: true
      }

    case 'REQUEST_VOC_LIST_FULFILLED':
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        data: action.payload
      }

    case 'REQUEST_VOC_LIST_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default: return state
  }
}

export const vocDetailReducer = (state = initialVocDetail, action) => {
  switch (action.type) {
    case 'REQUEST_VOC_DETAIL_PENDING':
      return {
        ...state,
        isFetching: true
      }

    case 'REQUEST_VOC_DETAIL_FULFILLED':
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        data: action.payload
      }

    case 'REQUEST_VOC_DETAIL_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default: return state
  }
}

export const vocHierarchyReducer = (state = initialVocHierarchy, action) => {
  switch (action.type) {
    case 'REQUEST_VOC_HIERARCHY_PENDING':
      return {
        ...state,
        isFetching: true
      }

    case 'REQUEST_VOC_HIERARCHY_FULFILLED':
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        data: action.payload
      }

    case 'REQUEST_VOC_HIERARCHY_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default: return state
  }
}
