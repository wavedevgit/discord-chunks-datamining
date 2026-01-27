/** Chunk was on 97283 **/
/** chunk id: 510036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => r
}), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
async function r(e, t, n) {
  if (0 !== e) throw Error("unsupported fingerprint format version");
  if (0 === t.byteLength) throw Error("zero-length key");
  if (0 === n.length) throw Error("zero-length user ID");
  let r = BigInt(n);
  if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
  let i = new Uint8Array(2 + t.byteLength + 8);
  i.set(t, 2);
  let a = new DataView(i.buffer);
  return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, r), i
}