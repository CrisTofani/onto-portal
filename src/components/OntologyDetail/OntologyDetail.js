import React from 'react'
import {
  Container, Row, Col,
  Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter,
  Alert, Badge
} from 'reactstrap'

import Error from '../Error'

const ontologyError = 'Errore durante il caricamento dell\'ontologia'

const createOntology = (ontology) => {
  const ont = ontology
  return (
    <Row>
      <Col sm={2}></Col>
      <Col sm={8}>
        <Card className="border-0">

          <CardHeader className="bg-primary text-white border-0">
            <strong>{ont.titles.map(title => title.value)}</strong>
          </CardHeader>
          <CardBody>

            <CardTitle className="text-primary">{ont.id}</CardTitle>

            <CardText>{ont.descriptions.map(desc => desc.value)}</CardText>

            <CardText className="text-muted"><strong>Pubblicato da: </strong>
              {ont.publishedBy}
            </CardText>

            <CardText className="text-muted"><strong>Titolare: </strong>
              {ont.owner}
            </CardText>

            <CardText className="text-muted"><strong>Creato da: </strong>
              {ont.creators.map(creator => creator.value).join(' - ')}
            </CardText>

            <CardText className="text-muted"><strong>Lingue: </strong>
              {ont.langs.join(' - ')}
            </CardText>

            <CardText className="text-muted"><strong>Data ultima modifica: </strong>
              {ont.lastEditDate}
            </CardText>

            <CardText className="text-muted"><strong>Licenza: </strong>
              {ont.licenses.map(license => license.value).join(' ')}
            </CardText>

            <CardText className="text-muted"><strong>Versioni: </strong>
              {ont.versions.map(version => version.number).join(' - ')}
            </CardText>

            <Alert color="secondary" className="p-0 mb-0 border-0">
              <Badge color="primary" className="px-3 py-2">Ontologia</Badge>
              <strong className="px-2">
                TAG: {ont.tags.map(tag => tag.value).join(' - ')}
              </strong>
            </Alert>

          </CardBody>
        </Card>
      </Col>
      <Col sm={2}></Col>
    </Row>
  )
}

export default class OntologyDetail extends React.Component {
  constructor(props) { super(props) }
  componentWillMount() {
    this.props.fetchOntDetail(this.props.match.params.filter)
  }

  render() {
    return this.props.hasFetched
      ? (<Container fluid>{ createOntology(this.props.data) }</Container>)
      : this.props.error ? <Error msg={ontologyError} /> : null
  }
}
