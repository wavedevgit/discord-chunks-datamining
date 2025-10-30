/** Chunk was on 1272 **/
/** chunk id: 479837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => _
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

function _() {
  var e, t;
  if (!(0, Chunk365023.l)()) return;
  let n = Chunk131951.Z.isVideoEnabled(),
    _ = Object.values(Chunk131951.Z.getVideoDevices())[0],
    b = false === (null == (t = null == _ ? true : _.disabled) || exports),
    E = Chunk131951.Z.supportsInApp(Chunk65154.AN.VIDEO) && Chunk131951.Z.supportsInApp(Chunk65154.AN.DESKTOP_CAPTURE),
    O = Chunk592125.Z.getChannel(Chunk19780.Z.getChannelId()),
    I = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.id;
  if (null == O || null == I) return;
  let {
    reachedLimit: y
  } = (0, Chunk829750.t)(O);
  if (!y) {
    if (O.isGuildStageVoice()) {
      let e = Chunk565799.Z.getMutableParticipants(O.id, Chunk501655.pV.SPEAKER),
        t = null == module ? true : module.find(e => {
          let {
            user: t
          } = e;
          return t.id === I
        });
      if (!(0, Chunk368442.tu)(O.guild_id) || !E || null == exports || exports.voiceState.suppress) return
    }
    return require ? Chunk846027.Z.setVideoEnabled(false) : !require && b ? (0, Chunk173507.Z)(() => {
      Chunk846027.Z.setVideoEnabled(true)
    }, Chunk981631.IlC.APP, true) : b || (0, Chunk560688.Z)(), false
  }
}