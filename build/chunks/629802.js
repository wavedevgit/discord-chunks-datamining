/** Chunk was on 70959 **/
/** chunk id: 629802, original params: t,e,i (module,exports,require) **/
let n, r, a, s, h, o, l, c, u;
require.d(exports, {
  A: () => p,
  n: () => f
}), require("./927092.js"), require("./212978.js"), require("./597227.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  d = require.n(Chunk284009);
let f = (0, require("./795521.js").u)(async () => {
  let t = await Promise.all([i.e("16203"), i.e("45082")]).then(i.bind(i, 145025)),
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