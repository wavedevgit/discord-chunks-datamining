/** Chunk was on 57961 (5b7e5c99b45b3cba.js) **/
let n, r, a, s, h, o, l, c, u;
i.d(e, {
  Z: () => p,
  j: () => v
}), i(66153), i(970173), i(520712), i(268111), i(941497), i(32026), i(480839), i(744285), i(492257), i(873817), i(610885), i(126298), i(411104);
var m = i(512722),
  d = i.n(m);
let v = (0, i(170830).G)(async () => {
  let t = await Promise.all([i.e("49670"), i.e("43903")]).then(i.bind(i, 241441)),
    e = await t.default();
  a = e.cwrap("lottie_create", "number", ["string"]), s = e._lottie_destroy, h = e._lottie_draw_into_bgra, o = e._lottie_draw_into_rgba, l = e._lottie_frame_count, c = e._lottie_frame_rate, u = e._memory_create, n = e, r = u(409600)
});

function f(t, e) {
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
    return d()(e <= 320, "width exceeds static allocation."), d()(i <= 320, "height exceeds static allocation."), h(this.native, r, t, e, i), f(e, i)
  }
  get_rgba(t, e, i) {
    return d()(e <= 320, "width exceeds static allocation."), d()(i <= 320, "height exceeds static allocation."), o(this.native, r, t, e, i), f(e, i)
  }
  drop() {
    s(this.native)
  }
  constructor(t) {
    var e, i;
    if (i = void 0, (e = "native") in this ? Object.defineProperty(this, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : this[e] = i, this.native = a(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
  }
}