/** Chunk was on 80417 **/
/** chunk id: 214908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => r
}), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
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