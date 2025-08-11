/** Chunk was on web.js **/
/** chunk id: 139577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk111583 = require("./111583.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js"),
  Chunk170248 = require("./170248.js"),
  Chunk524484 = require("./524484.js");

function u(e) {
  let t = (0, l.Z)(c.oZ.CHAT_INPUT),
    n = (0, r.e7)([a.Z], () => a.Z.isEnabled({
      shakeLocation: c.oZ.CHAT_INPUT
    }));
  return (0, r.e7)([o.Z, s.ZP, i.default], () => n && o.Z.isTyping(e, i.default.getId()) ? s.ZP.getUserComboShakeIntensity(i.default.getId(), e, t) : 0)
}