'use strict';

var React = require('react/addons');
var _ = require('lodash');

var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/main.scss');

var Table = React.createClass({
  render: function() {
    return (
      <section className="table-wrapper">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Lorem ipsum</th>
              </tr>
            </thead>
            <tbody>
              {_.times(50, function(){
                return (
                  <tr>
                    <td>Tom</td>
                    <td>Zayan</td>
                    <td>@tzayan</td>
                    <td>Cool guy</td>
                    <td>Praesent id metus massa, ut blandit</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
});


var PanelScrollerApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <section className="graph-wrapper">Graph</section>
        <Table />
        <aside className="sidebar-wrapper">Sidebar</aside>
      </div>
    );
  }
});
React.render(<PanelScrollerApp />, document.getElementById('content')); // jshint ignore:line

module.exports = PanelScrollerApp;
