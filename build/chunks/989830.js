/** Chunk was on 46653 **/
/** chunk id: 989830, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function l(e, t) {
  return e === t || (null == e ? true : e.channelId) === (null == t ? true : t.channelId) && (null == e ? true : e.value) === (null == t ? true : t.value) && (null == e ? true : e.multiplier) === (null == t ? true : t.multiplier)
}

function a(e) {
  let t = (0, n.e7)([s.Z], () => !!s.Z.isEnabled() && s.Z.combosEnabled);
  return (0, n.e7)([o.ZP, r.default], () => t ? o.ZP.getUserCombo(r.default.getId(), e) : true, [e, t], l)
}