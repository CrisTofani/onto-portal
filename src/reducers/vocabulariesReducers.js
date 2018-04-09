const initialList = {
  isFetching: false,
  hasFetched: false,
  data: [],
  error: ''
}
const initialDetail = {
  isFetching: false,
  hasFetched: false,
  data: {},
  error: ''
}

export const vocListReducer = (state = initialList, action) => {
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

export const vocDetailReducer = (state = initialDetail, action) => {
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
