/** Chunk was on 41091 **/
/** chunk id: 569921, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk253932 = require("./253932.js"),
  Chunk403918 = require("./403918.js");
let r = [Chunk403918.yt.MINUTES_30, Chunk403918.yt.HOURS_1, Chunk403918.yt.HOURS_4];

function i() {
  var t;
  let e = l.G2.getSetting();
  if (null == e || "" === e.expiresAtMs) return a.yt.TODAY;
  let n = Number(e.expiresAtMs);
  if (isNaN(n)) return a.yt.TODAY;
  if (0 === n) return a.yt.DONT_CLEAR;
  let i = new Date,
    o = new Date(n);
  if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate()) return a.yt.TODAY;
  let s = Number(n) - Date.now();
  return null != (t = r.find(t => s <= t)) ? t : a.yt.TODAY
}