/** Chunk was on web.js **/
/** chunk id: 206788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o
});
var Chunk549616 = require("./549616.js"),
  Chunk863611 = require("./863611.js");

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
    a(this, "categories", true), a(this, "userDiscounts", true), this.categories = e.categories.map(e => r.Z.fromServer(e)), this.userDiscounts = null == (t = e.user_discounts) ? true : t.map(e => i.h.fromServer(e))
  }
}