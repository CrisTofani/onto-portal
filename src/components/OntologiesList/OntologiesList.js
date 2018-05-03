import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Alert,
  Badge
} from 'reactstrap'

import LinkWrap from '../LinkWrap'
import Error from '../Error'

const ontologiesError = 'Errore durante il caricamento delle ontologie'

const mapOntologies = ontologies =>
  ontologies.map(ont => (
    <LinkWrap key={ont.id} to={`/ontologies/${ont.id}`} className="text-dark">
      <Card className="border-0">
        <CardBody>
          <CardTitle className="text-primary">{ont.titles[0].value}</CardTitle>
          <CardSubtitle>{ont.id}</CardSubtitle>
          <CardText>{ont.descriptions[0].value}</CardText>

          <Alert color="secondary" className="p-0 mb-0 border-0">
            <Badge color="primary" className="px-3 py-2">
              Ontologia
            </Badge>
            <strong className="px-2">TAG: </strong>
            {ont.tags.map(tag => tag.value).join(' - ')}
          </Alert>
        </CardBody>
      </Card>
    </LinkWrap>
  ))

const createOntologies = ontologies => {
  return (
    <Row>
      <Col sm={2} />
      <Col sm={8}>{mapOntologies(ontologies)}</Col>
      <Col sm={2}>
        <div className="callout callout-primary">
          <small className="text-muted">Risultato della ricerca</small>
          <br />

          <strong className="h4">{ontologies.length}</strong>
          <strong>{ontologies.length > 1 ? 'ontologie' : 'ontologia'}</strong>
        </div>
      </Col>
    </Row>
  )
}

export default class OntologiesList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchOntList()
  }

  render() {
    return this.props.hasFetched ? (
      <Container fluid>{createOntologies(this.props.data)}</Container>
    ) : this.props.error ? (
      <Error msg={ontologiesError} />
    ) : null
  }
}
