/** Chunk was on web.js **/
/** chunk id: 228965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk811024 = require("./811024.js"),
  Chunk782091 = require("./782091.js"),
  Chunk847381 = require("./847381.js"),
  Chunk849269 = require("./849269.js"),
  Chunk611010 = require("./611010.js"),
  Chunk576705 = require("./576705.js"),
  Chunk723702 = require("./723702.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let t, {
      context: n,
      application: p,
      activityAction: _
    } = e,
    h = "channel" === n.type ? n.channel : true,
    m = (0, r.bG)([c.A], () => c.A.can(d.xB.USE_EMBEDDED_ACTIVITIES, h)),
    g = (0, a.et)(null == h ? true : h.id),
    E = false;
  switch (_) {
    case s.o6.LEAVE:
      E = false;
      break;
    case s.o6.START:
      null == h ? E = false : (null == h ? true : h.isGuildVoice()) ? g !== a.xy.CAN_LAUNCH && (E = true) : (0, i.pE)(h) || (E = true);
      break;
    case s.o6.JOIN:
      (null == h ? true : h.isGuildVoice()) ? E = !m: (0, i.pE)(h) || (E = true)
  }
  if (_ !== s.o6.LEAVE) {
    let e = p instanceof l.Ay ? p.embeddedActivityConfig : p.embedded_activity_config,
      n = (0, o.A)((0, u.getOS)());
    null == e || e.supported_platforms.includes(n) ? (null == h ? true : h.isThread()) && (E = true, t = f.intl.string(f.t.ddSR3v)) : (E = false, t = f.intl.string(f.t.z2YTgJ))
  }
  return E && null == t && (t = f.intl.string(f.t.f41E1g)), {
    disabled: E,
    reason: t
  }
}