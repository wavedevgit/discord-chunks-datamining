/** Chunk was on 57961 **/
/** chunk id: 86104, original params: t,e,i (module,exports,require) **/
let n, r, a, s, h, o, l, c, u;
require.d(exports, {
  Z: () => p,
  j: () => f
}), require("./559231.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722);
let f = (0, require("./170830.js").G)(async () => {
  let t = await Promise.all([i.e("11237"), i.e("43903")]).then(i.bind(i, 241441)),
    e = await t.default();
  a = e.cwrap("lottie_create", "number", ["string"]), s = e._lottie_destroy, h = e._lottie_draw_into_bgra, o = e._lottie_draw_into_rgba, l = e._lottie_frame_count, c = e._lottie_frame_rate, u = e._memory_create, n = e, r = u(409600)
});

function v(t, e) {
  return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4)
}
class p {
  get fps() {
    return c(this.native)
  }
  get frames() {
    return l(this.native)
  }
  get_bgra(t, e, i) {
    return d()(e <= 320, "width exceeds static allocation."), d()(i <= 320, "height exceeds static allocation."), h(this.native, r, t, e, i), v(e, i)
  }
  get_rgba(t, e, i) {
    return d()(e <= 320, "width exceeds static allocation."), d()(i <= 320, "height exceeds static allocation."), o(this.native, r, t, e, i), v(e, i)
  }
  drop() {
    s(this.native)
  }
  constructor(t) {
    if (! function(t, e, i) {
        e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = i
      }(this, "native", true), this.native = a(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
  }
}