/** Chunk was on 76215 **/
/** chunk id: 684269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk695346 = require("./695346.js"),
  Chunk875425 = require("./875425.js");
let l = [Chunk875425.FO.MINUTES_30, Chunk875425.FO.HOURS_1, Chunk875425.FO.HOURS_4];

function a() {
  var e;
  let t = r.Ok.getSetting();
  if (null == t || "" === t.expiresAtMs) return i.FO.TODAY;
  let n = Number(t.expiresAtMs);
  if (isNaN(n)) return i.FO.TODAY;
  if (0 === n) return i.FO.DONT_CLEAR;
  let a = new Date,
    o = new Date(n);
  if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate()) return i.FO.TODAY;
  let u = Number(n) - Date.now();
  return null != (e = l.find(e => u <= e)) ? e : i.FO.TODAY
}