/** Chunk was on 14006 **/
/** chunk id: 741605, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk134994 = require("./134994.js"),
  Chunk8170 = require("./8170.js"),
  Chunk492733 = require("./492733.js");

function o(t, e, n, o) {
  var h;
  let a, {
      c: f,
      dkLen: c,
      DK: l,
      PRF: u,
      PRFSalt: d
    } = function(t, e, n, o) {
      (0, r.vp)(t);
      let {
        c: h,
        dkLen: a,
        asyncTick: f
      } = (0, s.U5)({
        dkLen: 32,
        asyncTick: 10
      }, o);
      if ((0, r.Rx)(h), (0, r.Rx)(a), (0, r.Rx)(f), h < 1) throw Error("PBKDF2: iterations (c) should be >= 1");
      let c = (0, s.O0)(e),
        l = (0, s.O0)(n),
        u = new Uint8Array(a),
        d = i.b.create(t, c),
        x = d._cloneInto().update(l);
      return {
        c: h,
        dkLen: a,
        asyncTick: f,
        DK: u,
        PRF: d,
        PRFSalt: x
      }
    }(t, e, n, o),
    x = new Uint8Array(4),
    p = (0, s.GL)(x),
    b = new Uint8Array(u.outputLen);
  for (let t = 1, e = 0; e < c; t++, e += u.outputLen) {
    let n = l.subarray(e, e + u.outputLen);
    p.setInt32(0, t, false), (a = d._cloneInto(a)).update(x).digestInto(b), n.set(b.subarray(0, n.length));
    for (let t = 1; t < f; t++) {
      u._cloneInto(a).update(b).digestInto(b);
      for (let t = 0; t < n.length; t++) n[t] ^= b[t]
    }
  }
  return h = a, u.destroy(), d.destroy(), h && h.destroy(), b.fill(0), l
}