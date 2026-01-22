/** Chunk was on 21738 **/
/** chunk id: 87203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => m
});
var Chunk827343 = require("./827343.js"),
  Chunk168943 = require("./168943.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk96566 = require("./96566.js"),
  Chunk405018 = require("./405018.js"),
  Chunk222692 = require("./222692.jsx"),
  Chunk442353 = require("./442353.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function m() {
  var e, t;
  if (!(0, i.L)()) return;
  let n = p.A.isVideoEnabled(),
    m = Object.values(p.A.getVideoDevices())[0],
    b = false === (null == (e = null == m ? true : m.disabled) || e),
    _ = p.A.supportsInApp(g.O5.VIDEO) && p.A.supportsInApp(g.O5.DESKTOP_CAPTURE),
    E = d.A.getChannel(f.A.getChannelId()),
    O = null == (t = h.default.getCurrentUser()) ? true : t.id;
  if (null == E || null == O) return;
  let {
    reachedLimit: y
  } = (0, o.M)(E);
  if (!y) {
    if (E.isGuildStageVoice()) {
      let e = l.A.getMutableParticipants(E.id, a.ip.SPEAKER),
        t = null == e ? true : e.find(e => {
          let {
            user: t
          } = e;
          return t.id === O
        });
      if (!(0, s.Bw)(E.guild_id) || !_ || null == t || t.voiceState.suppress) return
    }
    return n ? r.A.setVideoEnabled(false) : !n && b ? (0, u.A)(() => {
      r.A.setVideoEnabled(true)
    }, A.BRT.APP, true) : b || (0, c.A)(), false
  }
}