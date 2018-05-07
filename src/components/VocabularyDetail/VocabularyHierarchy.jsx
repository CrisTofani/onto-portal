import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Collapsible from 'react-collapsible'

import { isEmpty } from '../../util/commonUtils'
const genTreeview = hierarchy => (
  <ListGroup>
    {hierarchy.map((node, index) => {
      const listItem = props => (
        <ListGroupItem {...props}>{node.label}</ListGroupItem>
      )
      return isEmpty(node.children) ? (
        listItem({ key: index })
      ) : (
        <Collapsible key={index} trigger={listItem()}>
          {genTreeview(node.children)}
        </Collapsible>
      )
    })}
  </ListGroup>
)

export default props => (props.hierarchy ? genTreeview(props.hierarchy) : null)
