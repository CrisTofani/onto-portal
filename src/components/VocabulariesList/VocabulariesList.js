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

const vocabulariesError = 'Errore durante il caricamento dei vocabolari'

const mapVocabularies = vocabularies =>
  vocabularies.map(voc => (
    <LinkWrap key={voc.id} to={`/vocabularies/${voc.id}`} className="text-dark">
      <Card className="border-0">
        <CardBody>
          <CardTitle className="text-danger">{voc.titles[0].value}</CardTitle>
          <CardSubtitle>{voc.id}</CardSubtitle>
          <CardText>{voc.descriptions[0].value}</CardText>

          <Alert color="secondary" className="p-0 mb-0 border-0">
            <Badge color="danger" className="px-3 py-2">
              Vocabolario
            </Badge>
            <strong className="px-2">TAG: </strong>
            {voc.tags.map(tag => tag.value).join(' - ')}
          </Alert>
        </CardBody>
      </Card>
    </LinkWrap>
  ))

const createVocabularies = vocabularies => (
  <Row>
    <Col sm={2} />
    <Col sm={8}>{mapVocabularies(vocabularies)}</Col>
    <Col sm={2}>
      <div className="callout callout-danger">
        <small className="text-muted">Risultato della ricerca</small>
        <br />

        <strong className="h4">{vocabularies.length}</strong>
        <strong>
          {vocabularies.length > 1 ? 'vocabolari' : 'vocabolario'}
        </strong>
      </div>
    </Col>
  </Row>
)

export default class VocabulariesList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchVocList()
  }

  render() {
    return this.props.hasFetched ? (
      <Container fluid>{createVocabularies(this.props.data)}</Container>
    ) : this.props.error ? (
      <Error msg={vocabulariesError} />
    ) : null
  }
}
