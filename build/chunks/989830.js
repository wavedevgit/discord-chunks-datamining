/** Chunk was on web.js **/
/** chunk id: 989830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function s(e, t) {
  return e === t || (null == e ? true : e.channelId) === (null == t ? true : t.channelId) && (null == e ? true : e.value) === (null == t ? true : t.value) && (null == e ? true : e.multiplier) === (null == t ? true : t.multiplier)
}

function l(e) {
  let t = (0, r.e7)([o.Z], () => !!o.Z.isEnabled() && o.Z.combosEnabled);
  return (0, r.e7)([a.ZP, i.default], () => t ? a.ZP.getUserCombo(i.default.getId(), e) : true, [e, t], s)
}