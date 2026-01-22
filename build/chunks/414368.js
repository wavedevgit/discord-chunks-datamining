/** Chunk was on 46875 **/
/** chunk id: 414368, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CV: () => d,
  IZ: () => m,
  JT: () => o,
  PL: () => s,
  iX: () => h,
  qf: () => c,
  tm: () => u
});
var l, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = ((l = {})[l.THREE_BY_TWO = 2 / 3] = "THREE_BY_TWO", l[l.SIXTEEN_BY_NINE = 9 / 16] = "SIXTEEN_BY_NINE", l);
let c = 12;
class o {
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
      l = this.gap * (n - 1);
    return {
      columns: n,
      columnWidth: (e - l) / n
    }
  }
  constructor({
    minWidth: e,
    maxWidth: t,
    gap: n
  }) {
    i(this, "minWidth", true), i(this, "maxWidth", true), i(this, "gap", true), a()(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = n
  }
}
let d = {
    columns: 1,
    columnWidth: 450
  },
  u = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.THREE_BY_TWO,
      n = e - 2,
      l = Math.ceil(n * t);
    return [n, l]
  },
  m = 12,
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.THREE_BY_TWO;
    return 60 + u(e - 2 * m, t)[1] + 24 + 3 * c
  }