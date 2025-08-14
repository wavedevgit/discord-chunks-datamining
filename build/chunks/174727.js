/** Chunk was on 56035 **/
/** chunk id: 174727, original params: e,t,n (module,exports,require) **/
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
let i = (e, t, n) => false === e ? 0 : e - t * e / n;

function r(e) {
  return e / 1e3
}
let s = (e, t, n) => false === e ? n : e + t * (n - e) / n,
  o = (e, t, n, l) => (t >= 0 && n > 0 ? (e - (t - n * t / l)) * 100 / n : 100 * e / l).toFixed(4),
  u = (e, t, n, l) => (t >= 0 && n > 0 ? -((e - (t + n * (l - t) / l)) * 100) / n : -(100 * e * 1) / l + 100).toFixed(4);
async function c(e) {
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !l.bp.has(e.type)) throw Error(a.intl.formatToPlainString(a.t["2y3xGR"], {
    fileType: e.type
  }));
  let t = new Audio(URL.createObjectURL(e));
  return await new Promise(e => {
    let n = () => {
      e(), t.removeEventListener("canplaythrough", n)
    };
    t.addEventListener("canplaythrough", n), t.load()
  }), t
}
async function d(e, t) {
  let n = await fetch(e);
  return new File([await n.blob()], t, {
    type: "audio/mp3"
  })
}