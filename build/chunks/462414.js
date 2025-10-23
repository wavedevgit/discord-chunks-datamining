/** Chunk was on 1272 **/
/** chunk id: 462414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk13140 = require("./13140.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function p(e) {
  let t = e.application.id;
  if (null == t) throw new s.Z({
    errorCode: u.lTL.INVALID_COMMAND
  }, "No application.");
  return t
}
let f = {
  [Chunk981631.Etm.SET_VOICE_SETTINGS_2]: {
    scope: Chunk186901.lH,
    validation: e => (0, o.Z)(e).required().keys({
      input_mode: (0, o.Z)(e).keys({
        type: e.string().valid(Object.keys(u.pM4)),
        shortcut: e.string().required()
      }),
      self_mute: e.boolean(),
      self_deaf: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          input_mode: n,
          self_mute: r,
          self_deaf: s
        }
      } = e, o = p(t);
      null != n && i.Z.setMode(n.type, {
        shortcut: (0, a.Kd)(n.shortcut)
      }, o), null != r && r !== l.Z.isSelfMute(o) && i.Z.toggleSelfMute({
        context: o
      }), null != s && s !== l.Z.isSelfDeaf(o) && i.Z.toggleSelfDeaf({
        context: o
      })
    }
  },
  [Chunk981631.Etm.SET_USER_VOICE_SETTINGS_2]: {
    scope: Chunk186901.lH,
    validation: e => (0, o.Z)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          mute: r,
          volume: a
        }
      } = e, s = p(t);
      null != r && r !== l.Z.isLocalMute(n, s) && i.Z.toggleLocalMute(n, s), null != a && i.Z.setLocalVolume(n, a, s)
    }
  },
  [Chunk981631.Etm.PUSH_TO_TALK]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.Z)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      l.Z.getMode(d.Yn.DEFAULT) === u.pM4.PUSH_TO_TALK && l.Z.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), d.Yn.DEFAULT)
    }
  }
}