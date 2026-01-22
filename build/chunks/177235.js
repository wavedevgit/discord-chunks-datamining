/** Chunk was on 21738 **/
/** chunk id: 177235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let p = {
  [Chunk652215.e$_.SET_USER_VOICE_SETTINGS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.A)(e).required().keys({
      user_id: e.string().required(),
      pan: (0, o.A)(e).keys({
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
          mute: o
        }
      } = e, c = a.default.getCurrentUser();
      if (null == a.default.getUser(t) || (null == c ? true : c.id) === t) throw new s.A({
        errorCode: d.Lw6.INVALID_USER
      }, "Invalid user id: ".concat(t));
      if (null != n && i.A.setLocalPan(t, n.left, n.right), null != r && i.A.setLocalVolume(t, r), null != o) {
        let e = l.A.isLocalMute(t);
        (e && !o || !e && o) && i.A.toggleLocalMute(t)
      }
      return {
        user_id: t,
        pan: l.A.getLocalPan(t),
        volume: l.A.getLocalVolume(t),
        mute: l.A.isLocalMute(t)
      }
    }
  },
  [Chunk652215.e$_.GET_VOICE_SETTINGS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    handler: () => (0, c.l6)()
  },
  [Chunk652215.e$_.SET_VOICE_SETTINGS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.A)(e).required().keys({
      input: (0, o.A)(e).keys({
        device_id: e.string().valid(Object.keys(l.A.getInputDevices())),
        volume: e.number().min(0).max(100)
      }),
      output: (0, o.A)(e).keys({
        device_id: e.string().valid(Object.keys(l.A.getOutputDevices())),
        volume: e.number().min(0).max(200)
      }),
      mode: (0, o.A)(e).keys({
        type: e.string().valid(Object.keys(d.TBI)),
        auto_threshold: e.boolean(),
        threshold: e.number().min(false).max(0),
        shortcut: e.array().items((0, o.A)(e).keys({
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
          echo_cancellation: s,
          noise_suppression: o,
          qos: u,
          silence_warning: d,
          deaf: p,
          mute: f
        }
      } = e;
      if (t && (null != t.device_id && i.A.setInputDevice(t.device_id), null != t.volume && i.A.setInputVolume(t.volume)), n && (null != n.device_id && i.A.setOutputDevice(n.device_id), null != n.volume && i.A.setOutputVolume(n.volume)), r) {
        let e = l.A.getMode(),
          t = l.A.getModeOptions();
        null != r.type && (e = r.type), null != r.auto_threshold && (t.autoThreshold = r.auto_threshold), null != r.threshold && (t.threshold = r.threshold), null != r.shortcut && (t.shortcut = r.shortcut.map(e => [e.type, e.code])), null != r.delay && (t.delay = r.delay), i.A.setMode(e, t)
      }
      if (null != a && i.A.setAutomaticGainControl(a), null != s && i.A.setEchoCancellation(s), null != o && i.A.setNoiseSuppression(o), null != u && i.A.setQoS(u), null != d && i.A.setSilenceWarning(d), null != p) {
        let e = l.A.isSelfDeaf();
        (e && !p || !e && p) && i.A.toggleSelfDeaf()
      }
      if (null != f) {
        let e = l.A.isSelfMute();
        (e && !f || !e && f) && i.A.toggleSelfMute()
      }
      return (0, c.l6)()
    }
  }
}