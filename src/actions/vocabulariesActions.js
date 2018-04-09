import serviceURI from '../config/serviceURI'
import { mapLangProps, mapLangPropsArr } from '../util/mapLangProps'

const vocListURI = serviceURI.api_kataLOD.concat('/vocabularies')
const init = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }),
  mode: 'cors',
  cache: 'no-cache'
}

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

export const requestVocList = () => dispatch =>
  new Promise(() => dispatch(requestVocListPending()))
    .then(fetch(vocListURI, init)
      .then(response => response.ok
        ? response.json()
          .then(data =>
            dispatch(requestVocListFulfilled(mapLangPropsArr(data, 'it'))))

        : dispatch(requestVocListRejected(response.statusText)))

      .catch(error => dispatch(requestVocListRejected(error))))

export const requestVocDetail = vocID => dispatch =>
  new Promise(() => dispatch(requestVocDetailPending()))
    .then(fetch(vocListURI.concat('/', vocID), init)
      .then(response => response.ok
        ? response.json()
          .then(data =>
            dispatch(requestVocDetailFulfilled(mapLangProps(data, 'it'))))

        : dispatch(requestVocDetailRejected(response.statusText)))

      .catch(error => dispatch(requestVocDetailRejected(error))))
