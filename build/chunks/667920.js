/** Chunk was on 40556 **/
/** chunk id: 667920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N7: () => o,
  Xi: () => c,
  Y0: () => a,
  a: () => d,
  fP: () => r,
  gP: () => s,
  y: () => u
}), require("./65821.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk335416 = require("./335416.js"),
  Chunk985018 = require("./985018.jsx");
let a = (e, t, n) => false === e ? 0 : e - t * e / n;

function r(e) {
  return e / 1e3
}
let s = (e, t, n) => false === e ? n : e + t * (n - e) / n,
  u = (e, t, n, l) => (t >= 0 && n > 0 ? (e - (t - n * t / l)) * 100 / n : 100 * e / l).toFixed(4),
  o = (e, t, n, l) => (t >= 0 && n > 0 ? -((e - (t + n * (l - t) / l)) * 100) / n : -(100 * e * 1) / l + 100).toFixed(4);
async function c(e) {
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !l.VM.has(e.type)) throw Error(i.intl.formatToPlainString(i.t["2y3xGU"], {
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