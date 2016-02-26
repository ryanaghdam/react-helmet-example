import React from 'react';
import { State } from 'react-router';
import Helmet from 'react-helmet';

export default React.createClass({
    mixins: [State],

    getInitialState: function() {
      return {
        tInit: 74,
        tFinal: 30,
        pInit: 12.5
      };
    },

    // http://physics.bu.edu/~schmaltz/deflate.html
    updatePressure: function(e) {
      if (e && e.preventDefault) { e.preventDefault(); }

      const tInit = (Number(this.refs.tInit.getDOMNode().value) - 32) / 1.8 + 273.15;
      const tFinal = (Number(this.refs.tFinal.getDOMNode().value) - 32) / 1.8 + 273.15;
      const pInit = (Number(this.refs.pInit.getDOMNode().value) + 14.7);
      const pFinal = pInit * tFinal / tInit - 14.7;

      this.setState({
        pFinal: pFinal.toFixed(2)
      });
    },

    componentDidMount() {
      this.updatePressure();
    },

    getTitle() {
      return "Expected Pressure: " + this.state.pFinal;
    },

    render: function() {
        return (
            <div>
                <Helmet title={this.getTitle()} />
                <h1>Ideal Gas Law Calculator</h1>
                <form onSubmit={this.updatePressure}>
                  <div>
                    <label htmlFor="tInit">Initial Temperature (F):</label>
                    <input type="text" ref="tInit" defaultValue="74" />
                  </div>
                  <div>
                    <label htmlFor="tFinal">Final Temperature (F):</label>
                    <input type="text" ref="tFinal" defaultValue="32" />
                  </div>
                  <div>
                    <label htmlFor="tInit">Inital Pressure (PSI):</label>
                    <input type="text" ref="pInit" defaultValue="12.5" />
                  </div>
                  <div>
                    <label htmlFor="pFinal">Final Pressure (PSI):</label>
                    <input type="text" name="pFinal" value={this.state.pFinal} disabled />
                  </div>
                  <button type="submit">Recalculate</button>
                </form>
            </div>
        );
    }
});
