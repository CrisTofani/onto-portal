const mainURI = window.location.hostname === 'localhost' ?
  'http://localhost' : 'http://dafdocker.westeurope.cloudapp.azure.com'

export const urls = {
  api_kataLOD: `${mainURI}:7777/kb/api/v1`,
  // api_LodView: `${mainURI}:8080/lodview`,
  api_LODE: `${mainURI}:9090/lode/extract?url=`,
  api_WebVOWL: `${mainURI}:8080/webvowl/#iri=`,
}

export const jsonRequest = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }),
  mode: 'cors',
  cache: 'no-cache'
}
