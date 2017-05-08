import React, { Component } from 'react'
import {
  // HashRouter as Router,
  Route,
} from 'react-router-dom'

import decoratorLayout from './decoratorLayout'

const Test = props => {
  return <div>
    <h1>
      {props.match.path}
    </h1>
    <h1>
      {props.match.path}
    </h1>
    <h1>
      {props.match.path}
    </h1>
    <h1>
      {props.match.path}
    </h1>
  </div>
}

const myRoute = props => <div>
  <Route path="/" exact component={Test} />
  <Route path="/index" exact component={Test} />
  <Route path="/one" exact component={Test} />
</div>

export default decoratorLayout(myRoute)
