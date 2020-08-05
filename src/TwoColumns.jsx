import React, { Component } from 'react'
import MicroFrontend from './MicroFrontend'
import './TwoColumns.css'

export default class TwoColumns extends Component {
  render() {
    const { rightComponent, leftComponent, path } = this.props;

    return (
      <div className='columns-container'>
        <div id={`${leftComponent}-column`}>
          <MicroFrontend componentName={leftComponent} path={path}/>
        </div>
        <div id={`${rightComponent}-container`}>
          <MicroFrontend componentName={rightComponent} path={path} />
        </div>
      </div>
    )
  }
}
