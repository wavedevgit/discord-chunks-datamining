/** Chunk was on 1272 **/
/** chunk id: 975533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk223245 = require("./223245.js"),
  Chunk479837 = require("./479837.js"),
  Chunk317770 = require("./317770.js"),
  Chunk100527 = require("./100527.js"),
  Chunk924557 = require("./924557.js"),
  Chunk39604 = require("./39604.js"),
  Chunk891304 = require("./891304.js"),
  Chunk569545 = require("./569545.js"),
  Chunk722835 = require("./722835.js"),
  Chunk352527 = require("./352527.js"),
  Chunk641015 = require("./641015.js"),
  Chunk183584 = require("./183584.js"),
  Chunk383451 = require("./383451.js"),
  Chunk199902 = require("./199902.js"),
  Chunk131951 = require("./131951.js"),
  Chunk246946 = require("./246946.js"),
  Chunk556296 = require("./556296.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk626135 = require("./626135.js"),
  Chunk554174 = require("./554174.js"),
  Chunk577153 = require("./577153.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js");
let w = new Map;

function L(e, t, n) {
  var r;
  let i = performance.now(),
    l = null != (r = n.context) ? r : Z.Yn.DEFAULT;
  if (e) n.pressedTime = i;
  else if (null != n.pressedTime && (0, O.f)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching) {
    let e = A._M,
      {
        pttLatchingEnabled: t = false
      } = y.Z.getModeOptions(l);
    if (!n.latched && true === t && i < n.pressedTime + e) {
      n.latched = true;
      return
    }
    n.latched = false
  }
  let a = w.get(l);
  null == a && (a = new Map, w.set(l, a));
  let s = a.get(t);
  null == s && (s = new Set, a.set(t, s)), e ? s.add(n.id) : s.delete(n.id);
  let o = s.size > 0;
  y.Z.getMediaEngine().eachConnection(e => e.setForceAudioInput(o, t), l)
}
let R = {
    [Chunk981631.kg4.TOGGLE_PRIORITY_SPEAKER]: {
      onTrigger() {},
      keyEvents: {}
    },
    [Chunk981631.kg4.UNASSIGNED]: {
      onTrigger() {},
      keyEvents: {}
    },
    [Chunk981631.kg4.PUSH_TO_TALK]: {
      onTrigger(e, t) {
        y.Z.getMode(t.context) === x.pM4.PUSH_TO_TALK && (R[x.kg4.PUSH_TO_TALK].isPressed = e, L(e, false, t))
      },
      keyEvents: {
        keyup: true,
        keydown: true
      },
      isPressed: false
    },
    [Chunk981631.kg4.PUSH_TO_TALK_PRIORITY]: {
      onTrigger(e, t) {
        (y.Z.getMode() === x.pM4.PUSH_TO_TALK || P.Z.getCurrentConfig({
          location: "keybinds"
        }).onPTTKeybind) && (R[x.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e, L(e, true, t))
      },
      keyEvents: {
        keyup: true,
        keydown: true
      },
      isPressed: false
    },
    [Chunk981631.kg4.VAD_PRIORITY]: {
      onTrigger(e, t) {
        y.Z.getMode() === x.pM4.VOICE_ACTIVITY && P.Z.getCurrentConfig({
          location: "keybinds"
        }).separateKeybind && (R[x.kg4.VAD_PRIORITY].isPressed = e, L(e, true, t))
      },
      keyEvents: {
        keyup: true,
        keydown: true
      },
      isPressed: false
    },
    [Chunk981631.kg4.PUSH_TO_MUTE]: {
      onTrigger(e) {
        y.Z.getMode() === x.pM4.VOICE_ACTIVITY && (R[x.kg4.PUSH_TO_MUTE].isPressed = e, i.Z.setTemporarySelfMute(e))
      },
      keyEvents: {
        keyup: true,
        keydown: true
      },
      isPressed: false
    },
    [Chunk981631.kg4.TOGGLE_MUTE]: {
      onTrigger: () => Chunk846027.Z.toggleSelfMute({
        usedKeybind: true,
        location: "Custom Keybind"
      }),
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_DEAFEN]: {
      onTrigger: () => Chunk846027.Z.toggleSelfDeaf({
        usedKeybind: true,
        location: "Custom Keybind"
      }),
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_CAMERA]: {
      onTrigger: () => (0, Chunk479837.r)(),
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_VOICE_MODE]: {
      onTrigger() {
        let e = Chunk131951.Z.getMode() === Chunk981631.pM4.PUSH_TO_TALK ? Chunk981631.pM4.VOICE_ACTIVITY : Chunk981631.pM4.PUSH_TO_TALK;
        Chunk846027.Z.setMode(module)
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_OVERLAY]: {
      onTrigger() {},
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
      onTrigger(e, t) {
        if (!(0, C.I1)(t.shortcut)) return;
        let n = (0, j.Z)();
        null != n && l.Z.setInputLocked(!T.default.isLocked(n), n)
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
      onTrigger() {
        let e = Chunk808506.default.getFocusedPID(),
          t = null != module;
        null != module && exports && Chunk237997.default.isPinned(Chunk981631.Odu.TEXT) && Chunk237997.default.isLocked(module) && Chunk808506.default.isReady(module) && Chunk13245.Z.activateRegion(Chunk981631.O0n.TEXT_WIDGET)
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING]: {
      onTrigger() {
        let e = Chunk199902.Z.getCurrentUserActiveStream();
        if (null != module) return (0, Chunk872810.g)((0, Chunk569545.V9)(module));
        (0, Chunk722835.Z)(true, [Chunk100527.Z.GO_LIVE_KEYBIND])
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.TOGGLE_STREAMER_MODE]: {
      onTrigger() {
        Chunk223245.Z.setEnabled(!Chunk246946.Z.enabled)
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.NAVIGATE_BACK]: {
      onTrigger: () => (0, Chunk891304.Hm)("global_keybind"),
      keyEvents: {
        keyup: true,
        keydown: false,
        focused: true,
        blurred: false
      }
    },
    [Chunk981631.kg4.NAVIGATE_FORWARD]: {
      onTrigger: () => (0, Chunk891304.TL)("global_keybind"),
      keyEvents: {
        keyup: true,
        keydown: false,
        focused: true,
        blurred: false
      }
    },
    [Chunk981631.kg4.SOUNDBOARD]: {
      onTrigger: () => {
        let e = (0, Chunk554174.Z)();
        if (null != module)
          if (Chunk352527.Z.enabled)(0, Chunk183584.oZ)(module);
          else {
            if (!(0, Chunk641015.D)()) return;
            (0, Chunk183584.IN)(true, module)
          }
      },
      keyEvents: {
        keyup: true,
        keydown: false
      }
    },
    [Chunk981631.kg4.SOUNDBOARD_HOLD]: {
      onTrigger: e => {
        let t = (0, j.Z)();
        if (null != t) {
          if (e) {
            if (!(0, b.D)()) return;
            (0, E.IN)(false, t)
          } else(0, E.oZ)(t);
          return
        }
      },
      keyEvents: {
        keyup: true,
        keydown: true
      }
    },
    [Chunk981631.kg4.SAVE_CLIP]: {
      onTrigger: () => {
        (0, Chunk924557.ln)() && (Chunk626135.default.track(Chunk981631.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, Chunk39604.br)())
      },
      keyEvents: {
        keyup: false,
        keydown: true
      }
    },
    [Chunk981631.kg4.SAVE_SCREENSHOT]: {
      onTrigger: () => {
        (0, Chunk924557.ln)() && (0, Chunk924557.iL)() && (Chunk626135.default.track(Chunk981631.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, Chunk39604.ZW)())
      },
      keyEvents: {
        keyup: false,
        keydown: true
      }
    },
    [Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL]: {
      onTrigger(e, t) {
        let {
          params: {
            channelId: n
          }
        } = t;
        null != n && a.default.selectVoiceChannel(n)
      },
      keyEvents: {
        keyup: true,
        keydown: false,
        blurred: true,
        focused: true
      }
    },
    [Chunk981631.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
      onTrigger() {
        Chunk287734.default.selectVoiceChannel(null)
      },
      keyEvents: {
        keyup: true,
        keydown: false,
        blurred: true,
        focused: true
      }
    }
  },
  D = null;

function M() {
  w.clear(), Chunk131951.Z.getMediaEngine().eachConnection(e => {
    e.setForceAudioInput(false, false), e.setForceAudioInput(false, true)
  }, Chunk65154.Yn.DEFAULT)
}
class k extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.wait(() => Chunk570140.Z.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: R
    })), Chunk570140.Z.subscribe("AUDIO_SET_MODE", M), Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("AUDIO_SET_MODE", M), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect)
  }
  handleVoiceChannelSelect(e) {
    let {
      currentVoiceChannelId: t
    } = e;
    t !== D && M(), D = t
  }
}
let U = new k