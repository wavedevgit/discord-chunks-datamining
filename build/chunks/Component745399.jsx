/** Chunk was on 86142 **/
/** chunk id: 745399, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk58013 = require("./58013.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
class h extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    (0, c.d)("account_revert")
  }
  render() {
    let {
      token: e
    } = this.props.match.params;
    return (0, i.jsx)(a.Ay, {
      style: {
        padding: 0
      },
      children: (0, i.jsx)(u.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            d(e, t, n[t])
          })
        }
        return e
      }({
        width: 464,
        token: e
      }, this.props))
    })
  }
}
d(h, "defaultProps", {
  transitionTo: Chunk976860.pX,
  replaceWith: Chunk976860.bG
})