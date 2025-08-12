/** Chunk was on 1272 **/
/** chunk id: 662194, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let p = {
  [Chunk981631.Etm.SET_USER_VOICE_SETTINGS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, s.Z)(e).required().keys({
      user_id: e.string().required(),
      pan: (0, s.Z)(e).keys({
        left: e.number().min(0).max(1).required(),
        right: e.number().min(0).max(1).required()
      }),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          user_id: t,
          pan: n,
          volume: r,
          mute: s
        }
      } = e, c = a.default.getCurrentUser();
      if (null == a.default.getUser(t) || (null == c ? true : c.id) === t) throw new o.Z({
        errorCode: d.lTL.INVALID_USER
      }, "Invalid user id: ".concat(t));
      if (null != n && i.Z.setLocalPan(t, n.left, n.right), null != r && i.Z.setLocalVolume(t, r), null != s) {
        let e = l.Z.isLocalMute(t);
        (e && !s || !e && s) && i.Z.toggleLocalMute(t)
      }
      return {
        user_id: t,
        pan: l.Z.getLocalPan(t),
        volume: l.Z.getLocalVolume(t),
        mute: l.Z.isLocalMute(t)
      }
    }
  },
  [Chunk981631.Etm.GET_VOICE_SETTINGS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    handler: () => (0, Chunk852926._X)()
  },
  [Chunk981631.Etm.SET_VOICE_SETTINGS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, s.Z)(e).required().keys({
      input: (0, s.Z)(e).keys({
        device_id: e.string().valid(Object.keys(l.Z.getInputDevices())),
        volume: e.number().min(0).max(100)
      }),
      output: (0, s.Z)(e).keys({
        device_id: e.string().valid(Object.keys(l.Z.getOutputDevices())),
        volume: e.number().min(0).max(200)
      }),
      mode: (0, s.Z)(e).keys({
        type: e.string().valid(Object.keys(d.pM4)),
        auto_threshold: e.boolean(),
        threshold: e.number().min(false).max(0),
        shortcut: e.array().items((0, s.Z)(e).keys({
          type: e.number().min(0).max(3).required(),
          code: e.number().required(),
          name: e.string()
        })),
        delay: e.number().min(0).max(2e3)
      }),
      automatic_gain_control: e.boolean(),
      echo_cancellation: e.boolean(),
      noise_suppression: e.boolean(),
      qos: e.boolean(),
      silence_warning: e.boolean(),
      deaf: e.boolean(),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          input: t,
          output: n,
          mode: r,
          automatic_gain_control: a,
          echo_cancellation: o,
          noise_suppression: s,
          qos: u,
          silence_warning: d,
          deaf: p,
          mute: f
        }
      } = e;
      if (t && (null != t.device_id && i.Z.setInputDevice(t.device_id), null != t.volume && i.Z.setInputVolume(t.volume)), n && (null != n.device_id && i.Z.setOutputDevice(n.device_id), null != n.volume && i.Z.setOutputVolume(n.volume)), r) {
        let e = l.Z.getMode(),
          t = l.Z.getModeOptions();
        null != r.type && (e = r.type), null != r.auto_threshold && (t.autoThreshold = r.auto_threshold), null != r.threshold && (t.threshold = r.threshold), null != r.shortcut && (t.shortcut = r.shortcut.map(e => [e.type, e.code])), null != r.delay && (t.delay = r.delay), i.Z.setMode(e, t)
      }
      if (null != a && i.Z.setAutomaticGainControl(a), null != o && i.Z.setEchoCancellation(o), null != s && i.Z.setNoiseSuppression(s), null != u && i.Z.setQoS(u), null != d && i.Z.setSilenceWarning(d), null != p) {
        let e = l.Z.isSelfDeaf();
        (e && !p || !e && p) && i.Z.toggleSelfDeaf()
      }
      if (null != f) {
        let e = l.Z.isSelfMute();
        (e && !f || !e && f) && i.Z.toggleSelfMute()
      }
      return (0, c._X)()
    }
  }
}