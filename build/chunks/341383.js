/** Chunk was on 21738 **/
/** chunk id: 341383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk827343 = require("./827343.js"),
  Chunk684013 = require("./684013.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk55619 = require("./55619.js"),
  Chunk87203 = require("./87203.js"),
  Chunk272355 = require("./272355.js"),
  Chunk793574 = require("./793574.js"),
  Chunk734066 = require("./734066.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk963169 = require("./963169.js"),
  Chunk652896 = require("./652896.js"),
  Chunk349963 = require("./349963.js"),
  Chunk140175 = require("./140175.js"),
  Chunk528772 = require("./528772.js"),
  Chunk123973 = require("./123973.js"),
  Chunk944775 = require("./944775.js"),
  Chunk555444 = require("./555444.js"),
  Chunk616356 = require("./616356.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk351906 = require("./351906.js"),
  Chunk532624 = require("./532624.js"),
  Chunk242286 = require("./242286.js"),
  Chunk256415 = require("./256415.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427603 = require("./427603.js"),
  Chunk541185 = require("./541185.js"),
  Chunk652215 = require("./652215.js");
require("./509381.js");
var Chunk731854 = require("./731854.js");
let D = true,
  M = new Map;

function k(e, t, n, r) {
  var i;
  let l = performance.now();
  if (!S.A.isConnected()) return;
  let a = null != (i = r.context) ? i : R.x.DEFAULT,
    s = M.get(a);
  null == s && (s = {
    held: new Set,
    latched: new Set,
    vadPriorityLatched: new Set,
    priorityHeldOrLatched: new Set
  }, M.set(a, s)), n || (e ? s.held.add(r.id) : s.held.delete(r.id));
  let o = false;
  if (e) r.pressedTime = l;
  else if (null != r.pressedTime && (0, y.H)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching) {
    let {
      pttLatchingEnabled: e = false
    } = v.A.getModeOptions(a), t = n ? s.vadPriorityLatched : s.latched;
    (o = t.has(r.id)) || true !== e || !(l < r.pressedTime + 150) || !D ? (t.delete(r.id), o = false) : (t.add(r.id), o = true)
  }
  t && (e || o ? s.priorityHeldOrLatched.add(r.id) : s.priorityHeldOrLatched.delete(r.id));
  let c = s.held.size > 0,
    u = s.latched.size > 0,
    d = c || u,
    p = s.priorityHeldOrLatched.size > 0;
  (0, _.N)(c, p, d)
}
let U = {
  [Chunk652215.hCu.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [Chunk652215.hCu.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [Chunk652215.hCu.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      v.A.getMode(t.context) === L.TBI.PUSH_TO_TALK && (U[L.hCu.PUSH_TO_TALK].isPressed = e, k(e, false, false, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk652215.hCu.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e, t) {
      (v.A.getMode() === L.TBI.PUSH_TO_TALK || w.A.getCurrentConfig({
        location: "keybinds"
      }).onPTTKeybind) && (U[L.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e, k(e, true, false, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk652215.hCu.VAD_PRIORITY]: {
    onTrigger(e, t) {
      v.A.getMode() === L.TBI.VOICE_ACTIVITY && w.A.getCurrentConfig({
        location: "keybinds"
      }).separateKeybind && (U[L.hCu.VAD_PRIORITY].isPressed = e, k(e, true, true, t))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk652215.hCu.PUSH_TO_MUTE]: {
    onTrigger(e) {
      v.A.getMode() === L.TBI.VOICE_ACTIVITY && (U[L.hCu.PUSH_TO_MUTE].isPressed = e, i.A.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: true,
      keydown: true
    },
    isPressed: false
  },
  [Chunk652215.hCu.TOGGLE_MUTE]: {
    onTrigger: () => i.A.toggleSelfMute({
      usedKeybind: true,
      location: "Custom Keybind"
    }),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_DEAFEN]: {
    onTrigger: () => i.A.toggleSelfDeaf({
      usedKeybind: true,
      location: "Custom Keybind"
    }),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_CAMERA]: {
    onTrigger: () => (0, c.s)(),
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = v.A.getMode() === L.TBI.PUSH_TO_TALK ? L.TBI.VOICE_ACTIVITY : L.TBI.PUSH_TO_TALK;
      i.A.setMode(e)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_OVERLAY]: {
    onTrigger() {},
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e, t) {
      if (!(0, N.DV)(t.shortcut)) return;
      let n = (0, P.A)();
      null != n && l.A.setInputLocked(!j.default.isLocked(n), n)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = T.default.getFocusedPID(),
        t = null != e;
      null != e && t && j.default.isPinned(L.uss.TEXT) && j.default.isLocked(e) && T.default.isReady(e) && l.A.activateRegion(L.ajI.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = I.A.getCurrentUserActiveStream();
      if (null != e) return (0, s.vN)((0, f._z)(e));
      (0, A.A)(true, [d.A.GO_LIVE_KEYBIND])
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      o.A.setEnabled(!C.A.enabled)
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.NAVIGATE_BACK]: {
    onTrigger: () => (0, m.OE)("global_keybind"),
    keyEvents: {
      keyup: true,
      keydown: false,
      focused: true,
      blurred: false
    }
  },
  [Chunk652215.hCu.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, m.Qb)("global_keybind"),
    keyEvents: {
      keyup: true,
      keydown: false,
      focused: true,
      blurred: false
    }
  },
  [Chunk652215.hCu.SOUNDBOARD]: {
    onTrigger: () => {
      let e = (0, P.A)();
      if (null != e)
        if (b.A.enabled)(0, O.Lk)(e);
        else {
          if (!(0, E.l)()) return;
          (0, O.hK)(true, e)
        }
    },
    keyEvents: {
      keyup: true,
      keydown: false
    }
  },
  [Chunk652215.hCu.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      let t = (0, P.A)();
      if (null != t) {
        if (e) {
          if (!(0, E.l)()) return;
          (0, O.hK)(false, t)
        } else(0, O.Lk)(t);
        return
      }
    },
    keyEvents: {
      keyup: true,
      keydown: true
    }
  },
  [Chunk652215.hCu.SAVE_CLIP]: {
    onTrigger: () => {
      (0, h.TD)() && (x.default.track(L.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, g.l0)())
    },
    keyEvents: {
      keyup: false,
      keydown: true
    }
  },
  [Chunk652215.hCu.SAVE_SCREENSHOT]: {
    onTrigger: () => {
      !(0, h.TD)() || (0, p.cx)() && (x.default.track(L.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, g.yT)())
    },
    keyEvents: {
      keyup: false,
      keydown: true
    }
  },
  [Chunk652215.hCu.SWITCH_TO_VOICE_CHANNEL]: {
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
  [Chunk652215.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
  M.clear(), (0, _.N)(false, false, false)
}

function V(e) {
  let {
    hasLatchPermission: t
  } = e;
  if (t === D) returnfalse;
  (D = t) || G()
}
class B extends Chunk272355.A {
  _initialize() {
    r.h.wait(() => r.h.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: U
    })), r.h.subscribe("AUDIO_SET_MODE", G), r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.h.subscribe("SET_VAD_PERMISSION", V)
  }
  _terminate() {
    r.h.unsubscribe("AUDIO_SET_MODE", G), r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.h.unsubscribe("SET_VAD_PERMISSION", V)
  }
  handleVoiceChannelSelect(e) {
    let {
      currentVoiceChannelId: t,
      channelId: n
    } = e;
    t !== n && G()
  }
}
let H = new B