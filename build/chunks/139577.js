/** Chunk was on 50642 **/
/** chunk id: 139577, original params: e,t,n (module,exports,require) **/
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
  let t = (0, s.Z)(c.oZ.CHAT_INPUT),
    n = (0, i.e7)([a.Z], () => a.Z.isEnabled({
      shakeLocation: c.oZ.CHAT_INPUT
    }));
  return (0, i.e7)([l.Z, o.ZP, r.default], () => n && l.Z.isTyping(e, r.default.getId()) ? o.ZP.getUserComboShakeIntensity(r.default.getId(), e, t) : 0)
}