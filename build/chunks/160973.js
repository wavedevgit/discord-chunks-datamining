/** Chunk was on web.js **/
/** chunk id: 160973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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

function _(e) {
  let t, {
      context: n,
      application: _,
      activityAction: p
    } = e,
    h = "channel" === n.type ? n.channel : true,
    m = (0, r.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
    g = (0, a.KF)(null == h ? true : h.id),
    E = false;
  switch (p) {
    case s.JS.LEAVE:
      E = false;
      break;
    case s.JS.START:
      null == h ? E = false : (null == h ? true : h.isGuildVoice()) ? g !== a.jy.CAN_LAUNCH && (E = true) : (0, i.WS)(h) || (E = true);
      break;
    case s.JS.JOIN:
      (null == h ? true : h.isGuildVoice()) ? E = !m: (0, i.WS)(h) || (E = true)
  }
  if (p !== s.JS.LEAVE) {
    let e = _ instanceof l.ZP ? _.embeddedActivityConfig : _.embedded_activity_config,
      n = (0, o.Z)((0, u.getOS)());
    null == e || e.supported_platforms.includes(n) ? (null == h ? true : h.isThread()) && (E = true, t = f.intl.string(f.t.ddSR3v)) : (E = false, t = f.intl.string(f.t.z2YTgJ))
  }
  return E && null == t && (t = f.intl.string(f.t.f41E1g)), {
    disabled: E,
    reason: t
  }
}