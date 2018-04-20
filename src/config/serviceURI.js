const mainURI = 'http://dafdocker.westeurope.cloudapp.azure.com'

export default {
  api_kataLOD: mainURI.concat(':7777/kb/api/v1'),
  // api_LodView: mainURI.concat(':8080/lodview'),
  api_LODE: mainURI.concat(':9090/lode/extract?url='),
  api_WebVOWL: mainURI.concat(':8080/webvowl/#iri=')
}
