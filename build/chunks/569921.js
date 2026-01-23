/** Chunk was on 41091 **/
/** chunk id: 569921, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk253932 = require("./253932.js"),
  Chunk403918 = require("./403918.js");
let i = [Chunk403918.yt.MINUTES_30, Chunk403918.yt.HOURS_1, Chunk403918.yt.HOURS_4];

function a() {
  var t;
  let e = l.G2.getSetting();
  if (null == e || "" === e.expiresAtMs) return r.yt.TODAY;
  let n = Number(e.expiresAtMs);
  if (isNaN(n)) return r.yt.TODAY;
  if (0 === n) return r.yt.DONT_CLEAR;
  let a = new Date,
    o = new Date(n);
  if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate()) return r.yt.TODAY;
  let s = Number(n) - Date.now();
  return null != (t = i.find(t => s <= t)) ? t : r.yt.TODAY
}