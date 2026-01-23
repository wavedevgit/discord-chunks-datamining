/** Chunk was on web.js **/
/** chunk id: 532624, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => ev,
  DV: () => k,
  aS: () => V,
  xC: () => D
}), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./812715.js");
var i, Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775121 = require("./775121.js"),
  Chunk626584 = require("./626584.js"),
  Chunk549205 = require("./549205.js"),
  Chunk641376 = require("./641376.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk316501 = require("./316501.js"),
  Chunk350535 = require("./350535.js"),
  Chunk242286 = require("./242286.js"),
  Chunk652215 = require("./652215.js"),
  Chunk696016 = require("./696016.js"),
  Chunk980504 = require("./980504.js"),
  Chunk650583 = require("./650583.js"),
  Chunk72290 = require("./72290.js");

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

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = new Chunk626584.A("KeybindsStore"),
  D = {
    id: "1000",
    action: Chunk652215.hCu.TOGGLE_MUTE,
    shortcut: (0, Chunk350535.OH)("mod+shift+m"),
    enabled: true,
    managed: true,
    params: {}
  };

function x() {
  var e;
  let t = null != (e = (0, y.Ze)(false).get("Backquote")) ? e : "`";
  return "+" === t ? t = "plus" : 0 === t.length && (t = "`"), "shift+".concat(t)
}
let L = "1001",
  j = 10,
  M = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return {
      id: L,
      action: v.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
      shortcut: e,
      enabled: t,
      managed: true,
      params: {}
    }
  },
  k = e => {
    let t = (0, b.Z0)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t)
  },
  U = (e, t, n, r) => {
    var i, a;
    let s = (0, y.Ze)(false).get("Backquote"),
      o = (0, y.Ze)(true).get("Backquote");
    P.log(e, {
      tags: {
        backquoteKey: null != s ? s : "unknown",
        nativeBackquoteKey: null != o ? o : "unknown",
        backquoteCode: "".concat(null == (i = (0, y.Q_)(null != s ? s : "`")) ? true : i.keyCode),
        nativeBackquoteCode: "".concat(null == (a = (0, y.Q_)(null != o ? o : "`")) ? true : a.keyCode)
      },
      extra: N({
        keyCombo: t,
        combo: n,
        layoutMapBacktick: s,
        env: S.g$[(0, b._$)()],
        backtickEventShape: (0, y.Q_)("`"),
        backquoteKeyShape: (0, y.Q_)(null != s ? s : "`"),
        nativeBackquoteKeyShape: (0, y.Q_)(null != o ? o : "`")
      }, r)
    })
  };

function G(e) {
  var t;
  let n = (0, b.OH)(e),
    r = (0, y.Q_)("`"),
    i = null != (t = null == r ? true : r.keyCode) ? t : (0, b.Z0)("`");
  return k(n) ? n : null == i ? (U("Unable to get backtick code for overlay default keybind", e, n, {
    rawBacktickShape: r
  }), null) : (U("Default overlay keybind is unsupported", e, n, {
    rawBacktickCode: i
  }), [...n, [S.zY.KEYBOARD_KEY, i, (0, b._$)()]])
}
let V = () => {
    let e = x();
    "shift" === e && (U("Default overlay keybind is only shift", e, null), e = "shift+`");
    let t = G(e);
    if (null == t) return M([], false);
    if (k(t)) return M(t, true);
    let n = (0, b.Z0)("shift"),
      r = (0, y.Q_)("`");
    return 0 === t.length ? U("Default overlay keybind combo is empty", e, t) : null == n ? U("Unable to get shift code", e, t, {
      shiftCode: n
    }) : null == r && U("Unable to get backtick code", e, t), M(t, false)
  },
  F = {},
  B = {},
  H = 0,
  Y = true,
  W = {},
  K = false,
  z = false,
  q = [Chunk652215.hCu.PUSH_TO_TALK, Chunk652215.hCu.TOGGLE_OVERLAY_INPUT_LOCK, Chunk652215.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
  Z = [];

function X(e) {
  switch (e) {
    case D.id:
      return D;
    case V().id:
      return V();
    default:
      return B[e]
  }
}

function Q(e, t) {
  return !(e.shortcut.length >= t.shortcut.length) && e.shortcut.every(e => t.shortcut.some(t => t[0] === e[0] && t[1] === e[1]))
}

function J(e, t, n) {
  m.default.track(v.HAw.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: n.action,
    shortcut_combo: (0, b.dI)(n.shortcut),
    is_native_keyboard_event: true
  }), t.onTrigger(e, n)
}

function $(e, t) {
  var n;
  let r = X(e);
  if (null == r) return;
  let i = null == (n = W[r.action]) ? true : n.keyEvents;
  if (null == i) return;
  let a = W[r.action];
  if (i.keydown && i.keyup) {
    null != a && J(t, W[r.action], r);
    return
  }
  Z.push(e), setTimeout(() => {
    for (let t of Z) {
      if (t === e) continue;
      let n = X(t);
      if (null != n && Q(r, n)) {
        Z.includes(e) && Z.splice(Z.indexOf(e), 1);
        return
      }
    }
    try {
      null != a && J(t, a, r)
    } finally {
      setTimeout(() => {
        Z.includes(e) && Z.splice(Z.indexOf(e), 1)
      }, j)
    }
  }, j)
}

function ee() {
  let e = V();
  null == l().find(B, t => e.action === t.action && t.enabled && t.shortcut.length > 0) && Y && !z && (eo(e), z = true)
}

function et() {
  let e = V();
  z && (es(e.id), z = false)
}

function en() {
  let {
    showKeybindIndicators: e
  } = _.A.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == l().find(B, e => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !K && Y && e && (eo(D), K = true)
}

function er() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  (K || e) && (es(D.id), K = false)
}

function ei(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? en() : er(true)
}

function ea(e, t, n, r) {
  if (g.isPlatformEmbedded) try {
    E.Ay.inputEventRegister(e, t, n, r)
  } catch (n) {
    throw P.error("Failed to register native keybind", {
      eventId: e,
      shortcut: t
    }, n), n
  } else {
    es(e.toString());
    let i = (0, p.I)(document);
    r.keyup && i.bindGlobal((0, b.dI)(t), () => n(false), "keyup"), r.keydown && i.bindGlobal((0, b.dI)(t), () => n(true), "keydown"), F[e] = i
  }
}

function es(e) {
  if (g.isPlatformEmbedded) E.Ay.inputEventUnregister(parseInt(e, 10));
  else {
    let t = F[e];
    if (null != t) {
      let n = B[e];
      if (null != n) {
        let e = W[n.action];
        (null == e ? true : e.isPressed) === true && T.nextTick(() => J(false, e, n))
      }
      t.reset(), F[e] = null
    }
  }
}

function eo(e) {
  if (!Y || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: r
  } = e;
  if (0 === t.length || null == t || n === v.hCu.UNASSIGNED || !r) return;
  if (null == W[n]) return void P.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
  let i = e.id,
    a = parseInt(i, 10);
  if (isNaN(a)) return void P.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
    keybind: e
  });
  let s = W[n].keyEvents;
  e.action === v.hCu.TOGGLE_MUTE && er(), e.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK && et(), ea(a, t, e => $(i, e), N({
    focused: true,
    blurred: true,
    keydown: false,
    keyup: false
  }, s)), d.A.validateKeybind((0, b.dI)(t))
}

function el(e) {
  let t = N({
    id: H.toString(),
    enabled: true,
    action: v.hCu.UNASSIGNED,
    shortcut: [],
    managed: false,
    params: {}
  }, e);
  return B = R(N({}, B), {
    [t.id]: t
  }), H += 1, t
}

function ec(e) {
  es(e.id), B = N({}, B), delete B[e.id], e.action === v.hCu.TOGGLE_MUTE && en(), e.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK && ee()
}

function eu(e) {
  let {
    keybind: t
  } = e;
  eo(el(t))
}

function ed(e) {
  let {
    id: t
  } = e, n = B[t];
  __OVERLAY__ || m.default.track(v.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: n.action,
    keybind_is_bound: false,
    keybind_has_shortcut: false
  }), null != n && ec(n)
}

function ef(e) {
  let {
    keybind: t
  } = e;
  B = R(N({}, B), {
    [t.id]: t
  }), __OVERLAY__ || (m.default.track(v.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: true,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(v.HAw.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.dI)(t.shortcut) : null
  }) : t.action === v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(v.HAw.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.dI)(t.shortcut) : null
  })), eo(t)
}

function ep(e) {
  let {
    enable: t
  } = e;
  Y = t, t ? (d.A.enable(), l().forEach(B, eo), en(), ee()) : (d.A.disable(), l().forEach(B, e => es(e.id)), er(), et())
}

function e_(e) {
  let {
    keybinds: t
  } = e;
  W = t, F = {}, H = 0, Object.values(B).filter(e => q.includes(e.action) && e.managed).length !== q.length && eE(), l().forEach(B, e => {
    H = Math.max(parseInt(e.id, 10), H) + 1;
    try {
      eo(e)
    } catch (t) {
      P.error("Failed to register keybind", e, t)
    }
  }), Y = true, null == r && (r = _.A.subscribe({
    location: "KeybindsStore"
  }, ei))
}

function eh(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return null == l().find(B, t => t.action === e && (!n || t.managed === n)) && (eo(el({
    action: e,
    enabled: true,
    shortcut: (0, b.OH)(t),
    managed: true,
    params: {}
  })), true)
}

function em(e) {
  let t = false;
  return l().each(B, n => {
    n.action === e && true === n.managed && (ec(n), t = true)
  }), t
}
let eg = [function() {
  let e = h.A.getShortcuts();
  return l().each(B, t => {
    t.action === v.hCu.PUSH_TO_TALK && true === t.managed && (null == t.context || null == e[t.context]) && ec(t)
  }), l().reduce(h.A.getShortcuts(), (e, t, n) => {
    let r = l().find(B, e => e.action === v.hCu.PUSH_TO_TALK && true === e.managed && e.context === n);
    if (null == r) eo(el({
      action: v.hCu.PUSH_TO_TALK,
      enabled: true,
      shortcut: t,
      managed: true,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || false;
      ef({
        keybind: R(N({}, r), {
          shortcut: "string" == typeof t ? (0, b.OH)(t) : t,
          context: n
        })
      })
    }
    returntrue
  }, false)
}, function() {
  return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.hCu.TOGGLE_OVERLAY_INPUT_LOCK, x())
}, function() {
  return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  let e = em(v.hCu.SOUNDBOARD_HOLD);
  return eh(v.hCu.SOUNDBOARD_HOLD, I.XF, false) || e
}, function() {
  return eh(v.hCu.SAVE_CLIP, A.Ot)
}, function() {
  return eh(v.hCu.SAVE_SCREENSHOT, A.sz)
}];

function eE() {
  return en(), ee(), eg.reduce((e, t) => t() || e, false)
}

function ey() {
  return (async () => {
    await (0, y.AD)(), eE() && eO.emitChange()
  })(), false
}
Chunk775121.A.setGetKeybindList(() => {
  let e = [];
  for (let t in B) B.hasOwnProperty(t) && e.push((0, b.dI)(B[t].shortcut));
  let {
    showKeybindIndicators: t
  } = _.A.getCurrentConfig({
    location: "KeybindsStore"
  });
  return t && e.push((0, b.dI)(D.shortcut)), e
});
class eb extends(i = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    for (let t in __OVERLAY__ || this.waitFor(h.A, O.default), B = null != e ? e : {}) delete B[t].latched, delete B[t].pressedTime
  }
  getUserAgnosticState() {
    return B
  }
  hasKeybind(e, t, n) {
    for (let r in B)
      for (let i of B[r].shortcut)
        if (i[0] === e && i[1] === t && (true === n || n === i[2])) returntrue;
    returnfalse
  }
  hasExactKeybind(e) {
    for (let t in B) {
      let n = B[t];
      if (l().isEqual(n.shortcut, e)) returntrue
    }
    returnfalse
  }
  getKeybindForAction(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      {
        showKeybindIndicators: r
      } = _.A.getCurrentConfig({
        location: "KeybindsStore"
      }),
      i = l().find(B, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
    return null != i ? i : r && e === v.hCu.TOGGLE_MUTE ? D : null
  }
  getOverlayKeybind() {
    let e = this.getKeybindForAction(v.hCu.TOGGLE_OVERLAY_INPUT_LOCK, true);
    return null != e ? e : V()
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, true)
  }
}
C(eb, "displayName", "KeybindsStore"), C(eb, "persistKey", "keybinds"), C(eb, "migrations", [function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      v: t,
      keybinds: n = e
    } = e;
  return l().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, b.OH)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, b._$)()] : e)), e[r] = n), e), {})
}, e => e, e => {
  let {
    keybinds: t = e
  } = e;
  return l().reduce(t, (e, t, n) => {
    if ((0, g.isLinux)() && t.action === v.hCu.SOUNDBOARD_HOLD) {
      let n = t.shortcut.map(e => e[1]),
        r = (0, b.OH)("`").map(e => e[1]);
      if (s()(n, r)) return e
    }
    return R(N({}, e), {
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
        i = R(N({}, i), {
          enabled: false !== i.enabled,
          params: null != (n = i.params) ? n : {}
        })
      }
      t[r] = i
    }
  }
  return t
}, e => l().reduce(e, (e, t, n) => t.action === v.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : R(N({}, e), {
  [n]: t
}), {})]);
let eO = new eb(Chunk73153.h, {
    CONNECTION_OPEN: eE,
    LOGIN_SUCCESS: ey,
    AUDIO_SET_MODE: eE,
    OVERLAY_SET_ENABLED: eE,
    RPC_APP_CONNECTED: eE,
    RPC_APP_DISCONNECTED: eE,
    KEYBINDS_ADD_KEYBIND: eu,
    KEYBINDS_DELETE_KEYBIND: ed,
    KEYBINDS_SET_KEYBIND: ef,
    KEYBINDS_ENABLE_ALL_KEYBINDS: ep,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: e_
  }),
  ev = eO