/** Chunk was on web.js **/
/** chunk id: 214908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => a
}), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
let r = 2,
  i = 8;
async function a(e, t, n) {
  if (0 !== e) throw Error("unsupported fingerprint format version");
  if (0 === t.byteLength) throw Error("zero-length key");
  if (0 === n.length) throw Error("zero-length user ID");
  let a = BigInt(n);
  if (a < 0n || a >= 2n ** 64n) throw Error("user ID out of range");
  let o = new Uint8Array(r + t.byteLength + i);
  o.set(t, r);
  let s = new DataView(o.buffer);
  return s.setUint16(0, e), s.setBigUint64(r + t.byteLength, a), o
}