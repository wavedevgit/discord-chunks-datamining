/** Chunk was on 35929 **/
/** chunk id: 100846, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  L_: () => i,
  Sf: () => l
}), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js");
let a = null;

function n(e, t, r) {
  let a = e._malloc(t);
  if (0 === a) throw Error("Failed to allocate ".concat(t, " bytes for ").concat(r, " - out of WASM memory"));
  return a
}
async function i() {
  if (null != a) return a;
  try {
    let e = (await r.e("37971").then(r.bind(r, 543198))).default;
    return a = await e({
      locateFile: e => e.endsWith(".wasm") ? new URL(r(14927), r.b).href : e
    })
  } catch (t) {
    let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
    throw e.cause = t, e
  }
}
async function o(e) {
  if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
  if (0 === e.length) throw Error("webpData cannot be empty");
  let t = await i(),
    r = n(t, e.length, "WebP input data");
  t.HEAPU8.set(e, r);
  let a = t._malloc(8);
  if (0 === a) throw t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory");
  t.HEAPU32[a >> 2] = r, t.HEAPU32[(a >> 2) + 1] = e.length;
  let o = t._malloc(32);
  if (0 === o) throw t._free(r), t._free(a), Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory");
  t._WebPAnimDecoderOptionsInitInternal(o, 263);
  let l = t._WebPAnimDecoderNewInternal(a, o, 263);
  if (t._free(o), 0 === l) throw t._free(r), t._free(a), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP");
  try {
    let e = n(t, 32, "WebPAnimInfo");
    t._WebPAnimDecoderGetInfo(l, e);
    let r = t.HEAPU32[e >> 2],
      a = t.HEAPU32[(e >> 2) + 1],
      i = t.HEAPU32[(e >> 2) + 4];
    t._free(e);
    let o = [],
      c = r * a * 4;
    for (; 0 !== t._WebPAnimDecoderHasMoreFrames(l);) {
      let e = t._malloc(4);
      if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
      let n = t._malloc(4);
      if (0 === n) throw t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory");
      let i = t._WebPAnimDecoderGetNext(l, e, n);
      if (0 === i) {
        t._free(e), t._free(n);
        break
      }
      let s = t.HEAPU32[e >> 2],
        u = t.HEAP32[n >> 2],
        f = new Uint8Array(t.HEAPU8.buffer, s, c).slice();
      o.push({
        data: f,
        timestamp: u,
        width: r,
        height: a
      }), t._free(e), t._free(n)
    }
    return {
      frames: o,
      width: r,
      height: a,
      frameCount: i
    }
  } finally {
    t._WebPAnimDecoderDelete(l), t._free(r), t._free(a)
  }
}
async function l(e) {
  if (!(e instanceof Uint8Array) || 0 === e.length) returnfalse;
  try {
    let {
      frameCount: t
    } = await o(e);
    return t > 1
  } catch (e) {
    returnfalse
  }
}