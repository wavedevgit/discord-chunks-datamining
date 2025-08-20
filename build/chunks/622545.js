/** Chunk was on web.js **/
/** chunk id: 622545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk388032 = require("./388032.jsx");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = ["a", "b", "c", "d"],
  o = e => e;

function s(e, t) {
  let n = {},
    r = Math.min(e.length, a.length);
  for (let i = 0; i < r; ++i) n[a[i]] = (n, r) => t(e[i], r);
  return n
}
class l {
  asString() {
    return this.transformed(o)
  }
  isEmpty() {
    return 0 === this.items.length
  }
  transformed(e) {
    switch (this.items.length) {
      case 0:
        return "";
      case 1:
        return e(this.items[0], "");
      case 2:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, s(this.items, e));
      case 3:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, s(this.items, e));
      default:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, s(this.items, e))
    }
  }
  constructor(e) {
    i(this, "items", true), this.items = e
  }
}