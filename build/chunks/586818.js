/** Chunk was on 59732 **/
/** chunk id: 586818, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  GS: () => i,
  b0: () => s
}), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js");
let n = null;

function a(e, t, r) {
  let n = e._malloc(t);
  if (0 === n) throw Error("Failed to allocate ".concat(t, " bytes for ").concat(r, " - out of WASM memory"));
  return n
}
async function i() {
  if (null != n) return n;
  try {
    let e = (await require.e("35770").then(require.bind(require, 152989))).default;
    return n = await module({
      locateFile: e => e.endsWith(".wasm") ? new URL(r(432362), r.b).href : e
    })
  } catch (t) {
    let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
    throw module.cause = exports, module
  }
}
async function o(e) {
  if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
  if (0 === e.length) throw Error("webpData cannot be empty");
  let t = await i(),
    r = a(t, e.length, "WebP input data");
  t.HEAPU8.set(e, r);
  let n = t._malloc(8);
  if (0 === n) throw t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory");
  t.HEAPU32[n >> 2] = r, t.HEAPU32[(n >> 2) + 1] = e.length;
  let o = t._malloc(32);
  if (0 === o) throw t._free(r), t._free(n), Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory");
  t._WebPAnimDecoderOptionsInitInternal(o, 263);
  let s = t._WebPAnimDecoderNewInternal(n, o, 263);
  if (t._free(o), 0 === s) throw t._free(r), t._free(n), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP");
  try {
    let e = a(t, 32, "WebPAnimInfo");
    t._WebPAnimDecoderGetInfo(s, e);
    let r = t.HEAPU32[e >> 2],
      n = t.HEAPU32[(e >> 2) + 1],
      i = t.HEAPU32[(e >> 2) + 4];
    t._free(e);
    let o = [],
      l = r * n * 4;
    for (; 0 !== t._WebPAnimDecoderHasMoreFrames(s);) {
      let e = t._malloc(4);
      if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
      let a = t._malloc(4);
      if (0 === a) throw t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory");
      let i = t._WebPAnimDecoderGetNext(s, e, a);
      if (0 === i) {
        t._free(e), t._free(a);
        break
      }
      let c = t.HEAPU32[e >> 2],
        u = t.HEAP32[a >> 2],
        m = new Uint8Array(t.HEAPU8.buffer, c, l).slice();
      o.push({
        data: m,
        timestamp: u,
        width: r,
        height: n
      }), t._free(e), t._free(a)
    }
    return {
      frames: o,
      width: r,
      height: n,
      frameCount: i
    }
  } finally {
    t._WebPAnimDecoderDelete(s), t._free(r), t._free(n)
  }
}
async function s(e) {
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