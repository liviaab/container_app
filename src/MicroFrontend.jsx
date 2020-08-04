import React, { Component } from 'react';

const microFrontendsMap = {
  "Detail": "http://localhost:8082/dist/detail-component.js",
  "List": "http://localhost:8080/dist/list-component.js"
}

export default class MicroFrontend extends Component {
  componentDidMount() {
    const { componentName } = this.props;
    const scriptId = `micro-frontend-script-${componentName}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = microFrontendsMap[componentName];
    script.onload = this.renderMicroFrontend;
    document.head.appendChild(script);
  }

  renderMicroFrontend = () => {
    const { componentName, path } = this.props;

    window[`render${componentName}`](`${componentName}-container`, path);
  };

  render() {
    return <main id={`${this.props.componentName}-container`} />;
  }
}
