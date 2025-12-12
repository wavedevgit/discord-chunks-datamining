/** Chunk was on web.js **/
/** chunk id: 53281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk834427 = require("./834427.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
class l extends Chunk473749.Component {
  activateUploadDialogue() {
    if (null != this._ref) return this._ref.activateUploadDialogue()
  }
  setRef(e) {
    this._ref = e
  }
  render() {
    return (0, Chunk54381.jsx)(Chunk834427.S, s({
      ref: this.setRef
    }, this.props))
  }
  constructor(e) {
    super(e), a(this, "_ref", i.createRef()), this.setRef = this.setRef.bind(this)
  }
}
let c = l