/** Chunk was on 24516 **/
/** chunk id: 939073, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  k: () => s,
  l: () => r
});
var Chunk70956 = require("./70956.js");

function r(e) {
  let t = e / n.Z.Millis.MINUTE;
  return t < 5 ? "0-5min" : t < 15 ? "5-15min" : t < 30 ? "15-30min" : t < 45 ? "30-45min" : t < 60 ? "45-60min" : t < 120 ? "1-2hr" : t < 180 ? "2-3hr" : "3hr+"
}

function s() {
  var e;
  let t = window.Meticulous;
  return null != t && t.isRunningAsTest && (null == (e = t.replay) ? true : e.isBenchmarkableReplay) ? t.replay : null
}