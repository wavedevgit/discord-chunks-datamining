/** Chunk was on 50642 **/
/** chunk id: 989830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function o(e, t) {
  return e === t || (null == e ? true : e.channelId) === (null == t ? true : t.channelId) && (null == e ? true : e.value) === (null == t ? true : t.value) && (null == e ? true : e.multiplier) === (null == t ? true : t.multiplier)
}

function s(e) {
  let t = (0, i.e7)([l.Z], () => !!l.Z.isEnabled() && l.Z.combosEnabled);
  return (0, i.e7)([a.ZP, r.default], () => t ? a.ZP.getUserCombo(r.default.getId(), e) : true, [e, t], o)
}