/** Chunk was on web.js **/
/** chunk id: 206788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk549616 = require("./549616.js"),
  Chunk863611 = require("./863611.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static fromServer(e) {
    return new a(e)
  }
  constructor(e) {
    var t;
    o(this, "categories", true), o(this, "userDiscounts", true), this.categories = e.categories.map(e => r.Z.fromServer(e)), this.userDiscounts = null == (t = e.user_discounts) ? true : t.map(e => i.h.fromServer(e))
  }
}