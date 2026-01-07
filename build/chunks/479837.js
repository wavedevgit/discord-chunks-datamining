/** Chunk was on 1272 **/
/** chunk id: 479837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => b
});
var Chunk846027 = require("./846027.js"),
  Chunk365023 = require("./365023.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk368442 = require("./368442.js"),
  Chunk829750 = require("./829750.js"),
  Chunk560688 = require("./560688.jsx"),
  Chunk173507 = require("./173507.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function b() {
  var e, t;
  if (!(0, i.l)()) return;
  let n = p.Z.isVideoEnabled(),
    b = Object.values(p.Z.getVideoDevices())[0],
    _ = false === (null == (t = null == b ? true : b.disabled) || t),
    E = p.Z.supportsInApp(h.AN.VIDEO) && p.Z.supportsInApp(h.AN.DESKTOP_CAPTURE),
    O = d.Z.getChannel(f.Z.getChannelId()),
    v = null == (e = g.default.getCurrentUser()) ? true : e.id;
  if (null == O || null == v) return;
  let {
    reachedLimit: y
  } = (0, s.t)(O);
  if (!y) {
    if (O.isGuildStageVoice()) {
      let e = l.Z.getMutableParticipants(O.id, a.pV.SPEAKER),
        t = null == e ? true : e.find(e => {
          let {
            user: t
          } = e;
          return t.id === v
        });
      if (!(0, o.tu)(O.guild_id) || !E || null == t || t.voiceState.suppress) return
    }
    return n ? r.Z.setVideoEnabled(false) : !n && _ ? (0, u.Z)(() => {
      r.Z.setVideoEnabled(true)
    }, m.IlC.APP, true) : _ || (0, c.Z)(), false
  }
}