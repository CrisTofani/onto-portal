import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Collapsible from 'react-collapsible'

const isEmptyArray = array => array.length === 0

const genTreeview = hierarchy =>
  <ListGroup>{
    hierarchy.map((node, index) => {
      const listItem = props =>
        <ListGroupItem {...props}>{node.label}</ListGroupItem>
      return isEmptyArray(node.children)
        ? listItem({ key: index })
        : <Collapsible key={index} trigger={listItem()}>
          {genTreeview(node.children)}
        </Collapsible>
    })
  }</ListGroup>

export default props => props.hierarchy ? genTreeview(props.hierarchy) : null
