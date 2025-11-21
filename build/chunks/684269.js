/** Chunk was on 76215 **/
/** chunk id: 684269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk695346 = require("./695346.js"),
  Chunk875425 = require("./875425.js");
let i = [Chunk875425.FO.MINUTES_30, Chunk875425.FO.HOURS_1, Chunk875425.FO.HOURS_4];

function a() {
  var e;
  let t = Chunk695346.Ok.getSetting();
  if (null == exports || "" === exports.expiresAtMs) return Chunk875425.FO.TODAY;
  let n = Number(exports.expiresAtMs);
  if (isNaN(require)) return Chunk875425.FO.TODAY;
  if (0 === require) return Chunk875425.FO.DONT_CLEAR;
  let a = new Date,
    o = new Date(require);
  if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate()) return Chunk875425.FO.TODAY;
  let u = Number(require) - Date.now();
  return null != (e = i.find(e => u <= e)) ? module : Chunk875425.FO.TODAY
}