/** Chunk was on 35755 **/
/** chunk id: 160973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk442837 = require("./442837.js"),
  Chunk595519 = require("./595519.js"),
  Chunk374065 = require("./374065.js"),
  Chunk761122 = require("./761122.js"),
  Chunk542094 = require("./542094.js"),
  Chunk973616 = require("./973616.js"),
  Chunk496675 = require("./496675.js"),
  Chunk358085 = require("./358085.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let t, {
      context: n,
      application: m,
      activityAction: f
    } = e,
    h = "channel" === n.type ? n.channel : true,
    v = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
    y = (0, r.KF)(null == h ? true : h.id),
    x = false;
  switch (f) {
    case o.JS.LEAVE:
      x = false;
      break;
    case o.JS.START:
      null == h ? x = false : (null == h ? true : h.isGuildVoice()) ? y !== r.jy.CAN_LAUNCH && (x = true) : (0, l.WS)(h) || (x = true);
      break;
    case o.JS.JOIN:
      (null == h ? true : h.isGuildVoice()) ? x = !v: (0, l.WS)(h) || (x = true)
  }
  if (f !== o.JS.LEAVE) {
    let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
      n = (0, a.Z)((0, u.getOS)());
    null == e || e.supported_platforms.includes(n) ? (null == h ? true : h.isThread()) && (x = true, t = p.intl.string(p.t.ddSR3t)) : (x = false, t = p.intl.string(p.t.z2YTgI))
  }
  return x && null == t && (t = p.intl.string(p.t.f41E1t)), {
    disabled: x,
    reason: t
  }
}