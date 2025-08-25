/** Chunk was on web.js **/
/** chunk id: 8170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a
});
var Chunk134994 = require("./134994.js"),
  Chunk492733 = require("./492733.js");
class o extends Chunk492733.kb {
  constructor(e, t) {
    super(), this.finished = false, this.destroyed = false, (0, r.vp)(e);
    let n = (0, i.O0)(t);
    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    let o = this.blockLen,
      a = new Uint8Array(o);
    a.set(n.length > o ? e.create().update(n).digest() : n);
    for (let e = 0; e < a.length; e++) a[e] ^= 54;
    this.iHash.update(a), this.oHash = e.create();
    for (let e = 0; e < a.length; e++) a[e] ^= 106;
    this.oHash.update(a), a.fill(0)
  }
  update(e) {
    return (0, r.Gg)(this), this.iHash.update(e), this
  }
  digestInto(e) {
    (0, r.Gg)(this), (0, r.aI)(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
  }
  digest() {
    let e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(module), module
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    let {
      oHash: t,
      iHash: n,
      finished: r,
      destroyed: i,
      blockLen: o,
      outputLen: a
    } = this;
    return e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy()
  }
}
let a = (e, t, n) => new o(e, t).update(n).digest();
a.create = (e, t) => new o(e, t)