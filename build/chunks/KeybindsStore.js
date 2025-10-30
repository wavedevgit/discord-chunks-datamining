/** Chunk was on web.js **/
/** chunk id: 556296, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ek: () => D,
  I1: () => j,
  ZP: () => ev
}), require("./388685.js"), require("./539854.js"), require("./704826.js"), require("./35282.js");
var i, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk714338 = require("./714338.js"),
  Chunk710845 = require("./710845.js"),
  Chunk280049 = require("./280049.js"),
  Chunk658785 = require("./658785.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk378799 = require("./378799.js"),
  Chunk13140 = require("./13140.js"),
  Chunk808506 = require("./808506.js"),
  Chunk981631 = require("./981631.js"),
  Chunk356659 = require("./356659.js"),
  Chunk710111 = require("./710111.js"),
  Chunk295907 = require("./295907.js"),
  Chunk444675 = require("./444675.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = new Chunk710845.Z("KeybindsStore"),
  D = {
    id: "1000",
    action: Chunk981631.kg4.TOGGLE_MUTE,
    shortcut: (0, Chunk13140.Kd)("mod+shift+m"),
    enabled: true,
    managed: true,
    params: {}
  };

function L() {
  var e;
  let t = null != (e = (0, Chunk378799.pz)(false).get("Backquote")) ? module : "`";
  return "+" === exports ? t = "plus" : 0 === exports.length && (t = "`"), "shift+".concat(exports)
}
let x = "1001",
  M = 10,
  k = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return {
      id: x,
      action: v.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      shortcut: e,
      enabled: t,
      managed: true,
      params: {}
    }
  },
  j = e => {
    let t = (0, y.UR)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t)
  },
  U = (e, t, n, r) => {
    var i, a;
    let o = (0, b.pz)(false).get("Backquote"),
      s = (0, b.pz)(true).get("Backquote");
    w.log(e, {
      tags: {
        backquoteKey: null != o ? o : "unknown",
        nativeBackquoteKey: null != s ? s : "unknown",
        backquoteCode: "".concat(null == (i = (0, b.T_)(null != o ? o : "`")) ? true : i.keyCode),
        nativeBackquoteCode: "".concat(null == (a = (0, b.T_)(null != s ? s : "`")) ? true : a.keyCode)
      },
      extra: N({
        keyCombo: t,
        combo: n,
        layoutMapBacktick: o,
        env: T.Cg[(0, y.dU)()],
        backtickEventShape: (0, b.T_)("`"),
        backquoteKeyShape: (0, b.T_)(null != o ? o : "`"),
        nativeBackquoteKeyShape: (0, b.T_)(null != s ? s : "`")
      }, r)
    })
  };

function G(e) {
  var t;
  let n = (0, y.Kd)(e),
    r = (0, b.T_)("`"),
    i = null != (t = null == r ? true : r.keyCode) ? t : (0, y.UR)("`");
  return j(n) ? n : null == i ? (U("Unable to get backtick code for overlay default keybind", e, n, {
    rawBacktickShape: r
  }), null) : (U("Default overlay keybind is unsupported", e, n, {
    rawBacktickCode: i
  }), [...n, [T.Mo.KEYBOARD_KEY, i, (0, y.dU)()]])
}
let B = () => {
    let e = L();
    "shift" === module && (U("Default overlay keybind is only shift", module, null), e = "shift+`");
    let t = G(module);
    if (null == exports) return k([], false);
    if (j(exports)) return k(exports, true);
    let n = (0, Chunk13140.UR)("shift"),
      r = (0, Chunk378799.T_)("`");
    return 0 === exports.length ? U("Default overlay keybind combo is empty", module, exports) : null == require ? U("Unable to get shift code", module, exports, {
      shiftCode: require
    }) : null == r && U("Unable to get backtick code", module, exports), k(exports, false)
  },
  Z = {},
  F = {},
  V = 0,
  H = true,
  Y = {},
  W = false,
  K = false,
  z = [Chunk981631.kg4.PUSH_TO_TALK, Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
  q = [];

function X(e) {
  switch (e) {
    case D.id:
      return D;
    case B().id:
      return B();
    default:
      return F[e]
  }
}

function Q(e, t) {
  return !(e.shortcut.length >= t.shortcut.length) && e.shortcut.every(e => t.shortcut.some(t => t[0] === e[0] && t[1] === e[1]))
}

function J(e, t, n) {
  m.default.track(v.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: n.action,
    shortcut_combo: (0, y.BB)(n.shortcut),
    is_native_keyboard_event: true
  }), t.onTrigger(e, n)
}

function $(e, t) {
  var n;
  let r = X(e);
  if (null == r) return;
  let i = null == (n = Y[r.action]) ? true : n.keyEvents;
  if (null == i) return;
  let a = Y[r.action];
  if (i.keydown && i.keyup) {
    null != a && J(t, Y[r.action], r);
    return
  }
  q.push(e), setTimeout(() => {
    for (let t of q) {
      if (t === e) continue;
      let n = X(t);
      if (null != n && Q(r, n)) {
        q.includes(e) && q.splice(q.indexOf(e), 1);
        return
      }
    }
    try {
      null != a && J(t, a, r)
    } finally {
      setTimeout(() => {
        q.includes(e) && q.splice(q.indexOf(e), 1)
      }, M)
    }
  }, M)
}

function ee() {
  let e = B();
  null == l().find(F, t => e.action === t.action && t.enabled && t.shortcut.length > 0) && H && !K && (es(module), K = true)
}

function et() {
  let e = B();
  K && (eo(module.id), K = false)
}

function en() {
  let {
    showKeybindIndicators: e
  } = Chunk658785.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == l().find(F, e => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !W && H && module && (es(D), W = true)
}

function er() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  (W || module) && (eo(D.id), W = false)
}

function ei(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? en() : er(true)
}

function ea(e, t, n, r) {
  if (g.isPlatformEmbedded) try {
    E.ZP.inputEventRegister(parseInt(e), t, n, r)
  } catch (n) {
    throw w.error("Failed to register native keybind", {
      eventId: e,
      shortcut: t
    }, n), n
  } else {
    eo(e);
    let i = (0, _.r)(document);
    r.keyup && i.bindGlobal((0, y.BB)(t), () => n(false), "keyup"), r.keydown && i.bindGlobal((0, y.BB)(t), () => n(true), "keydown"), Z[e] = i
  }
}

function eo(e) {
  if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
  else {
    let t = Z[e];
    if (null != t) {
      let n = F[e];
      if (null != n) {
        let e = Y[n.action];
        (null == e ? true : e.isPressed) === true && A.nextTick(() => J(false, e, n))
      }
      t.reset(), Z[e] = null
    }
  }
}

function es(e) {
  if (!H || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: r
  } = e;
  if (0 === t.length || null == t || n === v.kg4.UNASSIGNED || !r) return;
  if (null == Y[n]) return void w.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
  let i = e.id,
    a = Y[n].keyEvents;
  e.action === v.kg4.TOGGLE_MUTE && er(), e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && et(), ea(i, t, e => $(i, e), N({
    focused: true,
    blurred: true,
    keydown: false,
    keyup: false
  }, a)), d.Z.validateKeybind((0, y.BB)(t))
}

function el(e) {
  let t = N({
    id: V.toString(),
    enabled: true,
    action: v.kg4.UNASSIGNED,
    shortcut: [],
    managed: false,
    params: {}
  }, e);
  return F = P(N({}, F), {
    [t.id]: t
  }), V += 1, t
}

function ec(e) {
  eo(e.id), F = N({}, F), delete F[e.id], e.action === v.kg4.TOGGLE_MUTE && en(), e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && ee()
}

function eu(e) {
  let {
    keybind: t
  } = e;
  es(el(t))
}

function ed(e) {
  let {
    id: t
  } = e, n = F[t];
  __OVERLAY__ || m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: n.action,
    keybind_is_bound: false,
    keybind_has_shortcut: false
  }), null != n && ec(n)
}

function ef(e) {
  let {
    keybind: t
  } = e;
  F = P(N({}, F), {
    [t.id]: t
  }), __OVERLAY__ || (m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: true,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, y.BB)(t.shortcut) : null
  }) : t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, y.BB)(t.shortcut) : null
  })), es(t)
}

function e_(e) {
  let {
    enable: t
  } = e;
  H = t, t ? (d.Z.enable(), l().forEach(F, es), en(), ee()) : (d.Z.disable(), l().forEach(F, e => eo(e.id)), er(), et())
}

function ep(e) {
  let {
    keybinds: t
  } = e;
  Y = t, Z = {}, V = 0, Object.values(F).filter(e => z.includes(e.action) && e.managed).length !== z.length && eE(), l().forEach(F, e => {
    V = Math.max(parseInt(e.id, 10), V) + 1;
    try {
      es(e)
    } catch (t) {
      w.error("Failed to register keybind", e, t)
    }
  }), H = true, null == r && (r = p.Z.subscribe({
    location: "KeybindsStore"
  }, ei))
}

function eh(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return null == l().find(F, t => t.action === e && (!n || t.managed === n)) && (es(el({
    action: e,
    enabled: true,
    shortcut: (0, y.Kd)(t),
    managed: true,
    params: {}
  })), true)
}

function em(e) {
  let t = false;
  return l().each(F, n => {
    n.action === e && true === n.managed && (ec(n), t = true)
  }), t
}
let eg = [function() {
  let e = Chunk131951.Z.getShortcuts();
  return l().each(F, t => {
    t.action === v.kg4.PUSH_TO_TALK && true === t.managed && (null == t.context || null == e[t.context]) && ec(t)
  }), l().reduce(Chunk131951.Z.getShortcuts(), (e, t, n) => {
    let r = l().find(F, e => e.action === v.kg4.PUSH_TO_TALK && true === e.managed && e.context === n);
    if (null == r) es(el({
      action: v.kg4.PUSH_TO_TALK,
      enabled: true,
      shortcut: t,
      managed: true,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || false;
      ef({
        keybind: P(N({}, r), {
          shortcut: "string" == typeof t ? (0, y.Kd)(t) : t,
          context: n
        })
      })
    }
    returntrue
  }, false)
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && eh(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, L())
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && eh(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  let e = em(Chunk981631.kg4.SOUNDBOARD_HOLD);
  return eh(Chunk981631.kg4.SOUNDBOARD_HOLD, Chunk710111.D_, false) || module
}, function() {
  return eh(Chunk981631.kg4.SAVE_CLIP, Chunk356659.Fv)
}, function() {
  return eh(Chunk981631.kg4.SAVE_SCREENSHOT, Chunk356659.$O)
}];

function eE() {
  return en(), ee(), eg.reduce((e, t) => t() || e, false)
}

function eb() {
  return (async () => {
    await (0, Chunk378799.SW)(), eE() && eO.emitChange()
  })(), false
}
Chunk714338.Z.setGetKeybindList(() => {
  let e = [];
  for (let t in F) F.hasOwnProperty(exports) && module.push((0, Chunk13140.BB)(F[exports].shortcut));
  let {
    showKeybindIndicators: t
  } = Chunk658785.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  return exports && module.push((0, Chunk13140.BB)(D.shortcut)), module
});
class ey extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    for (let t in __OVERLAY__ || this.waitFor(h.Z, O.default), F = null != e ? e : {}) delete F[t].latched, delete F[t].pressedTime
  }
  getUserAgnosticState() {
    return F
  }
  hasKeybind(e, t, n) {
    for (let r in F)
      for (let i of F[r].shortcut)
        if (i[0] === e && i[1] === t && (true === n || n === i[2])) returntrue;
    returnfalse
  }
  hasExactKeybind(e) {
    for (let t in F) {
      let n = F[t];
      if (l().isEqual(n.shortcut, e)) returntrue
    }
    returnfalse
  }
  getKeybindForAction(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      {
        showKeybindIndicators: r
      } = p.Z.getCurrentConfig({
        location: "KeybindsStore"
      }),
      i = l().find(F, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
    return null != i ? i : r && e === v.kg4.TOGGLE_MUTE ? D : null
  }
  getOverlayKeybind() {
    let e = this.getKeybindForAction(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, true);
    return null != module ? module : B()
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, true)
  }
}
C(ey, "displayName", "KeybindsStore"), C(ey, "persistKey", "keybinds"), C(ey, "migrations", [function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      v: t,
      keybinds: n = module
    } = module;
  return l().reduce(require, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, y.Kd)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, y.dU)()] : e)), e[r] = n), e), {})
}, e => e, e => {
  let {
    keybinds: t = e
  } = e;
  return l().reduce(t, (e, t, n) => {
    if ((0, g.isLinux)() && t.action === v.kg4.SOUNDBOARD_HOLD) {
      let n = t.shortcut.map(e => e[1]),
        r = (0, y.Kd)("`").map(e => e[1]);
      if (o()(n, r)) return e
    }
    return P(N({}, e), {
      [n]: t
    })
  }, {})
}, e => {
  let t = {};
  for (let r in e) {
    let i = e[r];
    if (null != i) {
      if (null == i.params || null == i.enabled) {
        var n;
        i = P(N({}, i), {
          enabled: false !== i.enabled,
          params: null != (n = i.params) ? n : {}
        })
      }
      t[r] = i
    }
  }
  return t
}, e => l().reduce(e, (e, t, n) => t.action === v.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : P(N({}, e), {
  [n]: t
}), {})]);
let eO = new ey(Chunk570140.Z, {
    CONNECTION_OPEN: eE,
    LOGIN_SUCCESS: eb,
    AUDIO_SET_MODE: eE,
    OVERLAY_SET_ENABLED: eE,
    RPC_APP_CONNECTED: eE,
    RPC_APP_DISCONNECTED: eE,
    KEYBINDS_ADD_KEYBIND: eu,
    KEYBINDS_DELETE_KEYBIND: ed,
    KEYBINDS_SET_KEYBIND: ef,
    KEYBINDS_ENABLE_ALL_KEYBINDS: e_,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: ep
  }),
  ev = eO