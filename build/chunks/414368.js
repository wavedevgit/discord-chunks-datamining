/** Chunk was on 46875 **/
/** chunk id: 414368, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CV: () => d,
  IZ: () => m,
  JT: () => c,
  PL: () => s,
  iX: () => h,
  qf: () => o,
  tm: () => u
});
var r, Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = ((r = {})[r.THREE_BY_TWO = 2 / 3] = "THREE_BY_TWO", r[r.SIXTEEN_BY_NINE = 9 / 16] = "SIXTEEN_BY_NINE", r);
let o = 12;
class c {
  getWidth(e) {
    return this.getRenderOptions(e).columnWidth
  }
  getRenderOptions(e) {
    if (e <= this.minWidth) return {
      columns: 1,
      columnWidth: this.minWidth
    };
    let t = e / this.maxWidth,
      n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
      r = this.gap * (n - 1);
    return {
      columns: n,
      columnWidth: (e - r) / n
    }
  }
  constructor({
    minWidth: e,
    maxWidth: t,
    gap: n
  }) {
    a(this, "minWidth", true), a(this, "maxWidth", true), a(this, "gap", true), i()(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = n
  }
}
let d = {
    columns: 1,
    columnWidth: 450
  },
  u = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.THREE_BY_TWO,
      n = e - 2,
      r = Math.ceil(n * t);
    return [n, r]
  },
  m = 12,
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.THREE_BY_TWO;
    return 60 + u(e - 2 * m, t)[1] + 24 + 3 * o
  }