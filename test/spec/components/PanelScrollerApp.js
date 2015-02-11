'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var PanelScrollerApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PanelScrollerApp = require('../../../src/scripts/components/PanelScrollerApp.js');
    component = React.createElement(PanelScrollerApp);
  });

  it('should create a new instance of PanelScrollerApp', function () {
    expect(component).toBeDefined();
  });
});
