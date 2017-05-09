'use strict'
import React from 'react'

import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Transition extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='animate'
        transitionAppear
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false} >
        this.props.content
      </ReactCSSTransitionGroup>
    )
  }
}
module.exports = Transition
