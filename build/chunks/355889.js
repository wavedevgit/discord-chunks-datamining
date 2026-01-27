/** Chunk was on web.js **/
/** chunk id: 355889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk510801 = require("./510801.js"),
  Chunk419709 = require("./419709.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  static fromServer(e) {
    return new o(e)
  }
  constructor(e) {
    var t;
    a(this, "categories", true), a(this, "userDiscounts", true), this.categories = e.categories.map(e => r.A.fromServer(e)), this.userDiscounts = null == (t = e.user_discounts) ? true : t.map(e => i.T.fromServer(e))
  }
}