/** Chunk was on 54809 **/
/** chunk id: 187282, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  w: () => o
});
var Chunk294946 = require("./294946.js"),
  Chunk15020 = require("./15020.js");
class n extends Chunk15020.Vw {
  constructor(t, e) {
    super(), this.finished = false, this.destroyed = false, (0, s.tW)(t);
    const r = (0, i.ZJ)(e);
    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const n = this.blockLen,
      o = new Uint8Array(n);
    o.set(r.length > n ? t.create().update(r).digest() : r);
    for (let t = 0; t < o.length; t++) o[t] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let t = 0; t < o.length; t++) o[t] ^= 106;
    this.oHash.update(o), o.fill(0)
  }
  update(t) {
    return (0, s.t2)(this), this.iHash.update(t), this
  }
  digestInto(t) {
    (0, s.t2)(this), (0, s.ee)(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
  }
  digest() {
    let t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    let {
      oHash: e,
      iHash: r,
      finished: s,
      destroyed: i,
      blockLen: n,
      outputLen: o
    } = this;
    return t.finished = s, t.destroyed = i, t.blockLen = n, t.outputLen = o, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy()
  }
}
let o = (t, e, r) => new n(t, e).update(r).digest();
o.create = (t, e) => new n(t, e)