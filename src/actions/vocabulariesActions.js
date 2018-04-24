import { urls, jsonRequest } from '../config/serviceURI'
import { mapLangProps, mapLangPropsArr } from '../util/mapLangProps'

const vocabulariesURL = `${urls.api_kataLOD}/vocabularies`

const requestVocListPending = response => ({
  type: 'REQUEST_VOC_LIST_PENDING'
})
const requestVocListFulfilled = response => ({
  type: 'REQUEST_VOC_LIST_FULFILLED',
  payload: response
})
const requestVocListRejected = error => ({
  type: 'REQUEST_VOC_LIST_REJECTED',
  payload: error
})

const requestVocDetailPending = response => ({
  type: 'REQUEST_VOC_DETAIL_PENDING'
})
const requestVocDetailFulfilled = response => ({
  type: 'REQUEST_VOC_DETAIL_FULFILLED',
  payload: response
})
const requestVocDetailRejected = error => ({
  type: 'REQUEST_VOC_DETAIL_REJECTED',
  payload: error
})

const requestVocHierarchyPending = response => ({
  type: 'REQUEST_VOC_HIERARCHY_PENDING'
})
const requestVocHierarchyFulfilled = response => ({
  type: 'REQUEST_VOC_HIERARCHY_FULFILLED',
  payload: response
})
const requestVocHierarchyRejected = error => ({
  type: 'REQUEST_VOC_HIERARCHY_REJECTED',
  payload: error
})

export const requestVocList = () => dispatch =>
  new Promise(() => dispatch(requestVocListPending()))
    .then(
      fetch(vocabulariesURL, jsonRequest)
        .then(
          response => response.ok
            ? response
              .json()
              .then(
                data => dispatch(
                  requestVocListFulfilled(mapLangPropsArr(data, 'it'))
                )
              )
            : dispatch(requestVocListRejected(response.statusText))
        )
        .catch(error => dispatch(requestVocListRejected(error)))
    )

export const requestVocDetail = vocID => dispatch =>
  new Promise(() => dispatch(requestVocDetailPending()))
    .then(
      fetch(`${vocabulariesURL}/${vocID}`, jsonRequest)
        .then(
          response => response.ok
            ? response
              .json()
              .then(
                data => dispatch(
                  requestVocDetailFulfilled(mapLangProps(data, 'it'))
                )
              )
            : dispatch(requestVocDetailRejected(response.statusText))
        )
        .catch(error => dispatch(requestVocDetailRejected(error)))
    )


export const requestVocHierarchy = vocID => dispatch =>
  new Promise(() => dispatch(requestVocHierarchyPending()))
    .then(
      fetch(`${vocabulariesURL}/hierarchy/${vocID}?lang${'it'}`, jsonRequest)
        .then(
          response => response.ok
            ? response
              .json()
              .then(
                data => dispatch(
                  requestVocHierarchyFulfilled(data)
                )
              )
            : dispatch(requestVocHierarchyRejected(response.statusText))
        )
        .catch(error => dispatch(requestVocHierarchyRejected(error)))
    )
