/** Chunk was on web.js **/
/** chunk id: 922347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s,
  Z: () => l
});
var Chunk979554 = require("./979554.js"),
  Chunk656698 = require("./656698.js");

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
class l extends Chunk656698.Z {
  static fromServer(e) {
    return new l(o({}, super.fromServer(e), e))
  }
  constructor(e) {
    super(e), a(this, "asset", true), a(this, "label", true), this.type = r.Z.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
  }
}