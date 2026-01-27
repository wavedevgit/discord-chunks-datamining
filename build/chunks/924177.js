/** Chunk was on 77870 **/
/** chunk id: 924177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js");

function a(e, t) {
  return e === t || (null == e ? true : e.channelId) === (null == t ? true : t.channelId) && (null == e ? true : e.value) === (null == t ? true : t.value) && (null == e ? true : e.multiplier) === (null == t ? true : t.multiplier)
}

function o(e) {
  let t = (0, r.bG)([i.A], () => !!i.A.isEnabled() && i.A.combosEnabled);
  return (0, r.bG)([s.Ay, l.default], () => t ? s.Ay.getUserCombo(l.default.getId(), e) : true, [e, t], a)
}