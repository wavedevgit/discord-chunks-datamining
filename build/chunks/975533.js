/** Chunk was on 1272 **/
/** chunk id: 975533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
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
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk891304 = require("./891304.js"),
  Chunk569545 = require("./569545.js"),
  Chunk722835 = require("./722835.js"),
  Chunk837968 = require("./837968.js"),
  Chunk352527 = require("./352527.js"),
  Chunk641015 = require("./641015.js"),
  Chunk183584 = require("./183584.js"),
  Chunk383451 = require("./383451.js"),
  Chunk199902 = require("./199902.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
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
let D = true,
  M = new Map;

function k(e, t, n, r) {
  var i;
  let l = performance.now();
  if (!S.Z.isConnected()) return;
  let a = null != (i = r.context) ? i : R.Yn.DEFAULT,
    o = M.get(a);
  null == o && (o = {
    held: new Set,
    latched: new Set,
    vadPriorityLatched: new Set,
    priorityHeldOrLatched: new Set
  }, M.set(a, o)), n || (e ? o.held.add(r.id) : o.held.delete(r.id));
  let s = false;
  if (e) r.pressedTime = l;
  else if (null != r.pressedTime && (0, y.f)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching) {
    let e = L._M,
      {
        pttLatchingEnabled: t = false
      } = C.Z.getModeOptions(a),
      i = n ? o.vadPriorityLatched : o.latched;
    (s = i.has(r.id)) || true !== t || !(l < r.pressedTime + e) || !D ? (i.delete(r.id), s = false) : (i.add(r.id), s = true)
  }
  t && (e || s ? o.priorityHeldOrLatched.add(r.id) : o.priorityHeldOrLatched.delete(r.id));
  let c = o.held.size > 0,
    u = o.latched.size > 0,
    d = c || u,
    p = o.priorityHeldOrLatched.size > 0;
  (0, _.I)(c, p, d)
}
let U = {
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
      C.Z.getMode(t.context) === w.pM4.PUSH_TO_TALK && (U[w.kg4.PUSH_TO_TALK].isPressed = e, k(e, false, false, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk981631.kg4.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e, t) {
      (C.Z.getMode() === w.pM4.PUSH_TO_TALK || Z.Z.getCurrentConfig({
        location: "keybinds"
      }).onPTTKeybind) && (U[w.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e, k(e, true, false, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk981631.kg4.VAD_PRIORITY]: {
    onTrigger(e, t) {
      C.Z.getMode() === w.pM4.VOICE_ACTIVITY && Z.Z.getCurrentConfig({
        location: "keybinds"
      }).separateKeybind && (U[w.kg4.VAD_PRIORITY].isPressed = e, k(e, true, true, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk981631.kg4.PUSH_TO_MUTE]: {
    onTrigger(e) {
      C.Z.getMode() === w.pM4.VOICE_ACTIVITY && (U[w.kg4.PUSH_TO_MUTE].isPressed = e, i.Z.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk981631.kg4.TOGGLE_MUTE]: {
    onTrigger: () => i.Z.toggleSelfMute({
      usedKeybind: true,
      location: "Custom Keybind"
    }),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.TOGGLE_DEAFEN]: {
    onTrigger: () => i.Z.toggleSelfDeaf({
      usedKeybind: true,
      location: "Custom Keybind"
    }),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.TOGGLE_CAMERA]: {
    onTrigger: () => (0, c.r)(),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = C.Z.getMode() === w.pM4.PUSH_TO_TALK ? w.pM4.VOICE_ACTIVITY : w.pM4.PUSH_TO_TALK;
      i.Z.setMode(e)
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
      if (!(0, N.I1)(t.shortcut)) return;
      let n = (0, A.Z)();
      null != n && l.Z.setInputLocked(!P.default.isLocked(n), n)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = j.default.getFocusedPID(),
        t = null != e;
      null != e && t && P.default.isPinned(w.Odu.TEXT) && P.default.isLocked(e) && j.default.isReady(e) && l.Z.activateRegion(w.O0n.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = I.Z.getCurrentUserActiveStream();
      if (null != e) return (0, o.g)((0, m.V9)(e));
      (0, b.Z)(true, [d.Z.GO_LIVE_KEYBIND])
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      s.Z.setEnabled(!T.Z.enabled)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.NAVIGATE_BACK]: {
    onTrigger: () => (0, h.Hm)("global_keybind"),
    keyEvents: {
      keyup: true,
      keydown: false,
      focused: true,
      blurred: false
    }
  },
  [Chunk981631.kg4.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, h.TL)("global_keybind"),
    keyEvents: {
      keyup: true,
      keydown: false,
      focused: true,
      blurred: false
    }
  },
  [Chunk981631.kg4.SOUNDBOARD]: {
    onTrigger: () => {
      let e = (0, A.Z)();
      if (null != e)
        if (E.Z.enabled)(0, v.oZ)(e);
        else {
          if (!(0, O.D)()) return;
          (0, v.IN)(true, e)
        }
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk981631.kg4.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      let t = (0, A.Z)();
      if (null != t) {
        if (e) {
          if (!(0, O.D)()) return;
          (0, v.IN)(false, t)
        } else(0, v.oZ)(t);
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
      (0, f.LI)() && (x.default.track(w.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, g.br)())
    },
    keyEvents: {
      keyup: false,
      keydown: true
    }
  },
  [Chunk981631.kg4.SAVE_SCREENSHOT]: {
    onTrigger: () => {
      (0, f.LI)() && (0, p.iL)() && (x.default.track(w.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, g.ZW)())
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
      a.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: true,
      keydown: false,
      blurred: true,
      focused: true
    }
  }
};

function G() {
  M.clear(), (0, _.I)(false, false, false)
}

function H(e) {
  let {
    hasLatchPermission: t
  } = e;
  if (t === D) returnfalse;
  (D = t) || G()
}
class B extends Chunk317770.Z {
  _initialize() {
    r.Z.wait(() => r.Z.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: U
    })), r.Z.subscribe("AUDIO_SET_MODE", G), r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.Z.subscribe("SET_VAD_PERMISSION", H)
  }
  _terminate() {
    r.Z.unsubscribe("AUDIO_SET_MODE", G), r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.Z.unsubscribe("SET_VAD_PERMISSION", H)
  }
  handleVoiceChannelSelect(e) {
    let {
      currentVoiceChannelId: t,
      channelId: n
    } = e;
    t !== n && G()
  }
}
let V = new B