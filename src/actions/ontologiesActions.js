import { urls, jsonRequest } from '../config/serviceURI'
import { mapLangProps, mapLangPropsArr } from '../util/mapLangProps'

const ontologiesURL = `${urls.api_kataLOD}/ontologies`

const requestOntListPending = response => ({
  type: 'REQUEST_ONT_LIST_PENDING'
})
const requestOntListFulfilled = response => ({
  type: 'REQUEST_ONT_LIST_FULFILLED',
  payload: response
})
const requestOntListRejected = error => ({
  type: 'REQUEST_ONT_LIST_REJECTED',
  payload: error
})

const requestOntDetailPending = response => ({
  type: 'REQUEST_ONT_DETAIL_PENDING'
})
const requestOntDetailFulfilled = response => ({
  type: 'REQUEST_ONT_DETAIL_FULFILLED',
  payload: response
})
const requestOntDetailRejected = error => ({
  type: 'REQUEST_ONT_DETAIL_REJECTED',
  payload: error
})

export const requestOntList = () => dispatch =>
  new Promise(() => dispatch(requestOntListPending()))
    .then(
      fetch(ontologiesURL, jsonRequest)
        .then(
          response => response.ok
            ? response
              .json()
              .then(
                data => dispatch(
                  requestOntListFulfilled(mapLangPropsArr(data, 'it'))
                )
              )
            : dispatch(requestOntListRejected(response.statusText))
        )
        .catch(error => dispatch(requestOntListRejected(error)))
    )

export const requestOntDetail = ontID => dispatch =>
  new Promise(() => dispatch(requestOntDetailPending()))
    .then(
      fetch(`${ontologiesURL}/${ontID}`, jsonRequest)
        .then(
          response => response.ok
            ? response
              .json()
              .then(
                data => dispatch(
                  requestOntDetailFulfilled(mapLangProps(data, 'it'))
                )
              )
            : dispatch(requestOntDetailRejected(response.statusText))
        )
        .catch(error => dispatch(requestOntDetailRejected(error)))
    )
