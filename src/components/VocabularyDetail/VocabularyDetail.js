import React from 'react'
import {
  Container, Row, Col,
  Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter,
  Alert, Badge
} from 'reactstrap'

import Error from '../Error'

const vocabularyError = 'Errore durante il caricamento del vocabolario'

const createVocabulary = (vocabulary) => {
  const voc = vocabulary
  return (
    <Row>
      <Col sm={2}></Col>
      <Col sm={8}>
        <Card className="border-0">

          <CardHeader className="bg-danger text-white border-0">
            <strong>{voc.titles.map(title => title.value)}</strong>
          </CardHeader>
          <CardBody>

            <CardTitle className="text-danger">{voc.id}</CardTitle>

            <CardText>{voc.descriptions.map(desc => desc.value)}</CardText>

            <CardText className="text-muted"><strong>Pubblicato da: </strong>
              {voc.publishedBy}
            </CardText>

            <CardText className="text-muted"><strong>Titolare: </strong>
              {voc.owner}
            </CardText>

            <CardText className="text-muted"><strong>Creato da: </strong>
              {voc.creators.map(creator => creator.value).join(' - ')}
            </CardText>

            <CardText className="text-muted"><strong>Lingue: </strong>
              {voc.langs.join(' - ')}
            </CardText>

            <CardText className="text-muted"><strong>Data ultima modifica: </strong>
              {voc.lastEditDate}
            </CardText>

            <CardText className="text-muted"><strong>Licenza: </strong>
              {voc.licenses.map(license => license.value).join(' ')}
            </CardText>

            <Alert color="secondary" className="p-0 mb-0 border-0">
              <Badge color="danger" className="px-3 py-2">Vocabolario</Badge>
              <strong className="px-2">
                TAG: {voc.tags.map(tag => tag.value).join(' - ')}
              </strong>
            </Alert>

          </CardBody>
        </Card>
      </Col>
      <Col sm={2}></Col>
    </Row>
  )
}

export default class VocabularyDetail extends React.Component {
  constructor(props) { super(props) }
  componentWillMount() { this.props.fetchVocDetail(this.props.match.params.filter) }

  render() {
    return this.props.hasFetched
      ? (<Container fluid>{ createVocabulary(this.props.data) }</Container>)
      : this.props.error ? <Error msg={vocabularyError} /> : null
  }
}
