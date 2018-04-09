import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'

import LinkWrap from '../components/LinkWrap'

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <LinkWrap to="/ontologies">
              <Button color="primary" size="lg" block >
                Ontologie
              </Button>
            </LinkWrap>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <LinkWrap to="/vocabularies">
              <Button color="danger" size="lg" block >
                Vocabolari
              </Button>
            </LinkWrap>
          </Col>
        </Row>
      </Container>
    )
  }
}



export default withRouter(Home)
