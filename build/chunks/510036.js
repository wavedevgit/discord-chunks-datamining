/** Chunk was on web.js **/
/** chunk id: 510036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => a
}), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
let r = 2,
  i = 8;
async function a(e, t, n) {
  if (0 !== e) throw Error("unsupported fingerprint format version");
  if (0 === t.byteLength) throw Error("zero-length key");
  if (0 === n.length) throw Error("zero-length user ID");
  let a = BigInt(n);
  if (a < 0n || a >= 2n ** 64n) throw Error("user ID out of range");
  let s = new Uint8Array(r + t.byteLength + i);
  s.set(t, r);
  let o = new DataView(s.buffer);
  return o.setUint16(0, e), o.setBigUint64(r + t.byteLength, a), s
}