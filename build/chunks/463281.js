/** Chunk was on 47674 **/
/** chunk id: 463281, original params: e,n,t (module,exports,require) **/
let r;

function _(e) {
  r = e
}
require.d(exports, {
  OB: () => l,
  hM: () => d,
  oT: () => _,
  xQ: () => u
});
let f = null;

function i() {
  return (null === f || 0 === f.byteLength) && (f = new Uint8Array(r.memory.buffer)), f
}
let a = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
});
a.decode();
let o = 0,
  c = 0;

function d(e, n, t, _, f, a, o, d) {
  let l = function(e, n) {
      let t = n(+e.length, 1) >>> 0;
      return i().set(e, t / 1), c = e.length, t
    }(e, r.__wbindgen_malloc),
    u = c,
    s = r.crop_and_rotate_gif(l, u, n, t, _, f, a, null == o ? 0xffffff : o, null == d ? 0xffffff : d);
  if (s[3]) throw function(e) {
    let n = r.__wbindgen_externrefs.get(e);
    return r.__externref_table_dealloc(e), n
  }(s[2]);
  var b, g, w = (b = s[0], g = s[1], b >>>= 0, i().subarray(b / 1, b / 1 + g)).slice();
  return r.__wbindgen_free(s[0], +s[1], 1), w
}

function l(e, n) {
  var t, r;
  return t = e >>> 0, (o += r = n) >= 0x7ff00000 && ((a = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  })).decode(), o = r), a.decode(i().subarray(t, t + r))
}

function u() {
  let e = r.__wbindgen_externrefs,
    n = module.grow(4);
  module.set(0, true), module.set(exports + 0, true), module.set(exports + 1, null), module.set(exports + 2, true), module.set(exports + 3, false)
}