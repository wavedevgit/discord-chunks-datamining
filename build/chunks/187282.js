/** Chunk was on web.js **/
/** chunk id: 187282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
});
var Chunk294946 = require("./294946.js"),
  Chunk15020 = require("./15020.js");
class a extends Chunk15020.Vw {
  constructor(e, t) {
    super(), this.finished = false, this.destroyed = false, (0, r.tW)(e);
    const n = (0, i.ZJ)(t);
    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const a = this.blockLen,
      s = new Uint8Array(a);
    s.set(n.length > a ? e.create().update(n).digest() : n);
    for (let e = 0; e < s.length; e++) s[e] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let e = 0; e < s.length; e++) s[e] ^= 106;
    this.oHash.update(s), s.fill(0)
  }
  update(e) {
    return (0, r.t2)(this), this.iHash.update(e), this
  }
  digestInto(e) {
    (0, r.t2)(this), (0, r.ee)(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
  }
  digest() {
    let e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    let {
      oHash: t,
      iHash: n,
      finished: r,
      destroyed: i,
      blockLen: a,
      outputLen: s
    } = this;
    return e.finished = r, e.destroyed = i, e.blockLen = a, e.outputLen = s, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy()
  }
}
let s = (e, t, n) => new a(e, t).update(n).digest();
s.create = (e, t) => new a(e, t)