/** Chunk was on 27978 **/
/** chunk id: 521379, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./35282.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk559786 = require("./559786.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class h extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    (0, Chunk108427.e)("account_revert")
  }
  render() {
    let {
      token: e
    } = this.props.match.params;
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      children: (0, Chunk54381.jsx)(Chunk559786.Z, function(e) {
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
        token: module
      }, this.props))
    })
  }
}
d(h, "defaultProps", {
  transitionTo: Chunk703656.uL,
  replaceWith: Chunk703656.dL
})