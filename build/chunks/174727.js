/** Chunk was on 56035 **/
/** chunk id: 174727, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  MN: () => s,
  XG: () => d,
  ao: () => i,
  kD: () => u,
  lj: () => c,
  my: () => r,
  pN: () => o
}), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk943351 = require("./943351.js"),
  Chunk388032 = require("./388032.jsx");
let i = (e, n, t) => false === e ? 0 : e - n * e / t;

function r(e) {
  return e / 1e3
}
let s = (e, n, t) => false === e ? t : e + n * (t - e) / t,
  o = (e, n, t, l) => (n >= 0 && t > 0 ? (e - (n - t * n / l)) * 100 / t : 100 * e / l).toFixed(4),
  u = (e, n, t, l) => (n >= 0 && t > 0 ? -((e - (n + t * (l - n) / l)) * 100) / t : -(100 * e * 1) / l + 100).toFixed(4);
async function c(e) {
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !l.bp.has(e.type)) throw Error(a.intl.formatToPlainString(a.t["2y3xGU"], {
    fileType: e.type
  }));
  let n = new Audio(URL.createObjectURL(e));
  return await new Promise(e => {
    let t = () => {
      e(), n.removeEventListener("canplaythrough", t)
    };
    n.addEventListener("canplaythrough", t), n.load()
  }), n
}
async function d(e, n) {
  let t = await fetch(e);
  return new File([await t.blob()], n, {
    type: "audio/mp3"
  })
}