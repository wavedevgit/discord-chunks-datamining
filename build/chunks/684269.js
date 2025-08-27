/** Chunk was on 31649 **/
/** chunk id: 684269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk695346 = require("./695346.js"),
  Chunk875425 = require("./875425.js");
let i = [Chunk875425.FO.MINUTES_30, Chunk875425.FO.HOURS_1, Chunk875425.FO.HOURS_4];

function l() {
  var t;
  let e = Chunk695346.Ok.getSetting();
  if (null == exports || "" === exports.expiresAtMs) return Chunk875425.FO.TODAY;
  let n = Number(exports.expiresAtMs);
  if (isNaN(require)) return Chunk875425.FO.TODAY;
  if (0 === require) return Chunk875425.FO.DONT_CLEAR;
  let l = new Date,
    o = new Date(require);
  if (l.getFullYear() !== o.getFullYear() || l.getMonth() !== o.getMonth() || l.getDate() !== o.getDate()) return Chunk875425.FO.TODAY;
  let s = Number(require) - Date.now();
  return null != (t = i.find(t => s <= t)) ? module : Chunk875425.FO.TODAY
}