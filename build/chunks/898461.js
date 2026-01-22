/** Chunk was on web.js **/
/** chunk id: 898461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  T: () => o
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
let o = e => e instanceof l;
class l extends Chunk149807.A {
  static fromServer(e) {
    return new l(s({}, super.fromServer(e), e))
  }
  constructor(e) {
    super(e), a(this, "asset", true), a(this, "label", true), this.type = r.R.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
  }
}