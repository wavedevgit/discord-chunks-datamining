/** Chunk was on web.js **/
/** chunk id: 449908, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = 0x811c9dc5,
    r = e.length;
  n ^= t;
  for (var i = 0; i < r; i++) n = Math.imul(n ^ e.charCodeAt(i), 0x1000193);
  return n >>> 0
}

function o(e, t, n, r) {
  for (let o = 0; o < t; ++o) r[o] = i(e, n[o])
}

function a(e) {
  return e <= 0 ? 1 : (e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e)
}
require.d(exports, {
  t: () => s
}), require("./415506.js"), require("./259475.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
class s {
  static createEstimate(e, t) {
    if (e <= 0 || e >= 1 || t <= 0 || t >= 1) throw Error("Epsilon and delta must be between 0 and 1 (exclusive)");
    return new s(a(Math.ceil(Math.E / e)), Math.ceil(Math.log(1 / t)))
  }
  update(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
    if (t <= 0) return;
    o(e, this.depth, this.seeds, this.scratchHashes);
    let n = this.width,
      r = n - 1,
      i = this.scratchHashes;
    if (5 === this.depth) this.table[(i[0] & r) + 0 * n] += t, this.table[(i[1] & r) + +n] += t, this.table[(i[2] & r) + 2 * n] += t, this.table[(i[3] & r) + 3 * n] += t, this.table[(i[4] & r) + 4 * n] += t;
    else
      for (let e = 0; e < this.depth; ++e) {
        let o = (i[e] & r) + e * n;
        this.table[o] += t
      }
  }
  query(e) {
    o(e, this.depth, this.seeds, this.scratchHashes);
    let t = 1 / 0,
      n = this.width,
      r = n - 1,
      i = this.scratchHashes;
    if (5 === this.depth) t = Math.min(t = Math.min(t = Math.min(t = Math.min(t = Math.min(t, this.table[(i[0] & r) + 0 * n]), this.table[(i[1] & r) + +n]), this.table[(i[2] & r) + 2 * n]), this.table[(i[3] & r) + 3 * n]), this.table[(i[4] & r) + 4 * n]);
    else
      for (let e = 0; e < this.depth; ++e) {
        let o = (i[e] & r) + e * n;
        t = Math.min(t, this.table[o])
      }
    return t
  }
  merge(e) {
    if (this.width !== e.width || this.depth !== e.depth) throw Error("Cannot merge sketches with different dimensions");
    for (let t = 0; t < this.table.length; t++) this.table[t] += e.table[t]
  }
  clear() {
    this.table.fill(0)
  }
  toJSON() {
    return {
      width: this.width,
      depth: this.depth,
      table: Array.from(this.table)
    }
  }
  static fromJSON(e) {
    if (!e || "object" != typeof e || !e.width || !e.depth || !Array.isArray(e.table)) throw Error("Invalid data format for CountMinSketch reconstruction");
    let t = new s(e.width, e.depth);
    if (t.table.length !== e.table.length) throw Error("Table length mismatch: expected ".concat(t.table.length, ", got ").concat(e.table.length));
    return t.table.set(e.table), t
  }
  constructor(e, t) {
    if (r(this, "width", true), r(this, "depth", true), r(this, "table", true), r(this, "seeds", true), r(this, "scratchHashes", true), e <= 0 || t <= 0) throw Error("Width and depth must be positive integers");
    this.width = a(0 | e), this.depth = 0 | t, this.table = new Uint32Array(this.width * this.depth), this.scratchHashes = new Uint32Array(this.depth), this.seeds = Array(this.depth);
    for (let e = 0; e < this.depth; e++) this.seeds[e] = e
  }
}