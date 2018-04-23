const mainURI = window.location.hostname === 'localhost' ?
  'http://localhost' : 'http://dafdocker.westeurope.cloudapp.azure.com'

export default {
  api_kataLOD: `${mainURI}:7777/kb/api/v1`,
  // api_LodView: `${mainURI}:8080/lodview`,
  api_LODE: `${mainURI}:9090/lode/extract?url=`,
  api_WebVOWL: `${mainURI}:8080/webvowl/#iri=`,
}
