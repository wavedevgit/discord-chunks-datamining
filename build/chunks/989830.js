/** Chunk was on 11424 **/
/** chunk id: 989830, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function l(t, e) {
  return t === e || (null == t ? true : t.channelId) === (null == e ? true : e.channelId) && (null == t ? true : t.value) === (null == e ? true : e.value) && (null == t ? true : t.multiplier) === (null == e ? true : e.multiplier)
}

function a(t) {
  let e = (0, n.e7)([r.Z], () => !!r.Z.isEnabled() && r.Z.combosEnabled);
  return (0, n.e7)([o.ZP, s.default], () => e ? o.ZP.getUserCombo(s.default.getId(), t) : true, [t, e], l)
}