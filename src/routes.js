import React from 'react'

import Home from './containers/Home.jsx'
import Ontologies from './containers/Ontologies.jsx'
import Ontology from './containers/Ontology.jsx'
import Vocabularies from './containers/Vocabularies.jsx'
import Vocabulary from './containers/Vocabulary.jsx'

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },{
    component: Ontologies,
    path: '/ontologies',
    exact: true
  },{
    component: Ontology,
    path: '/ontologies/:filter?',
    exact: false
  },{
    component: Vocabularies,
    path: '/vocabularies',
    exact: true
  },{
    component: Vocabulary,
    path: '/vocabularies/:filter?',
    exact: false
  }
]
