/** Chunk was on web.js **/
/** chunk id: 805739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk985018 = require("./985018.jsx");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = ["a", "b", "c", "d"],
  s = e => e;

function o(e, t) {
  let n = {},
    r = Math.min(e.length, a.length);
  for (let i = 0; i < r; ++i) n[a[i]] = (n, r) => t(e[i], r);
  return n
}
class l {
  asString() {
    return this.transformed(s)
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
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, o(this.items, e));
      case 3:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, o(this.items, e));
      default:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, o(this.items, e))
    }
  }
  constructor(e) {
    i(this, "items", true), this.items = e
  }
}