/** Chunk was on web.js **/
/** chunk id: 837015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  F: () => s
});
var Chunk575593 = require("./575593.js"),
  Chunk149807 = require("./149807.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
let s = e => e instanceof l;
class l extends Chunk149807.A {
  static fromServer(e) {
    return new l(o({}, super.fromServer(e), e))
  }
  constructor(e) {
    super(e), a(this, "asset", true), a(this, "label", true), a(this, "palette", true), this.type = r.R.NAMEPLATE, this.asset = e.asset, this.label = e.label, this.palette = e.palette
  }
}