/** Chunk was on web.js **/
/** chunk id: 556296, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ek: () => w,
  I1: () => M,
  ZP: () => eO
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./704826.js"), require("./35282.js");
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
  Chunk444675 = require("./444675.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = new Chunk710845.Z("KeybindsStore"),
  w = {
    id: "1000",
    action: Chunk981631.kg4.TOGGLE_MUTE,
    shortcut: (0, Chunk13140.Kd)("mod+shift+m"),
    enabled: true,
    managed: true,
    params: {}
  };

function D() {
  var e;
  let t = null != (e = (0, Chunk378799.pz)(false).get("Backquote")) ? module : "`";
  return "+" === exports ? t = "plus" : 0 === exports.length && (t = "`"), "shift+".concat(exports)
}
let x = "1001",
  L = 10,
  j = function(e) {
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
  M = e => {
    let t = (0, y.UR)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t)
  },
  k = (e, t, n, r) => {
    var i, a;
    let o = (0, b.pz)(false).get("Backquote"),
      s = (0, b.pz)(true).get("Backquote");
    P.log(e.message, {
      tags: {
        backquoteKey: null != o ? o : "unknown",
        nativeBackquoteKey: null != s ? s : "unknown",
        backquoteCode: "".concat(null == (i = (0, b.T_)(null != o ? o : "`")) ? true : i.keyCode),
        nativeBackquoteCode: "".concat(null == (a = (0, b.T_)(null != s ? s : "`")) ? true : a.keyCode)
      },
      extra: C({
        stack: e.stack,
        keyCombo: t,
        combo: n,
        layoutMapBacktick: o,
        env: v.CgE[(0, y.dU)()],
        backtickEventShape: (0, b.T_)("`"),
        backquoteKeyShape: (0, b.T_)(null != o ? o : "`"),
        nativeBackquoteKeyShape: (0, b.T_)(null != s ? s : "`")
      }, r)
    })
  };

function U(e) {
  var t;
  let n = (0, y.Kd)(e),
    r = (0, b.T_)("`"),
    i = null != (t = null == r ? true : r.keyCode) ? t : (0, y.UR)("`");
  return M(n) ? n : null == i ? (k(Error("Unable to get backtick code for overlay default keybind"), e, n, {
    rawBacktickShape: r
  }), null) : (k(Error("Default overlay keybind is unsupported"), e, n, {
    rawBacktickCode: i
  }), [...n, [v.MoX.KEYBOARD_KEY, i, (0, y.dU)()]])
}
let G = () => {
    let e = D();
    "shift" === module && (k(Error("Default overlay keybind is only shift"), module, null), e = "shift+`");
    let t = U(module);
    if (null == exports) return j([], false);
    if (M(exports)) return j(exports, true);
    let n = (0, Chunk13140.UR)("shift"),
      r = (0, Chunk378799.T_)("`");
    return 0 === exports.length ? k(Error("Default overlay keybind combo is empty"), module, exports) : null == require ? k(Error("Unable to get shift code"), module, exports, {
      shiftCode: require
    }) : null == r && k(Error("Unable to get backtick code"), module, exports), j(exports, false)
  },
  B = {},
  Z = {},
  F = 0,
  V = true,
  H = {},
  Y = false,
  W = false,
  K = [Chunk981631.kg4.PUSH_TO_TALK, Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
  z = [];

function q(e) {
  switch (e) {
    case w.id:
      return w;
    case G().id:
      return G();
    default:
      return Z[e]
  }
}

function X(e, t) {
  return !(e.shortcut.length >= t.shortcut.length) && e.shortcut.every(e => t.shortcut.some(t => t[0] === e[0] && t[1] === e[1]))
}

function Q(e, t, n) {
  m.default.track(v.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: n.action,
    shortcut_combo: (0, y.BB)(n.shortcut),
    is_native_keyboard_event: true
  }), t.onTrigger(e, n)
}

function J(e, t) {
  var n;
  let r = q(e);
  if (null == r) return;
  let i = null == (n = H[r.action]) ? true : n.keyEvents;
  if (null == i) return;
  let a = H[r.action];
  if (i.keydown && i.keyup) {
    null != a && Q(t, H[r.action], r);
    return
  }
  z.push(e), setTimeout(() => {
    for (let t of z) {
      if (t === e) continue;
      let n = q(t);
      if (null != n && X(r, n)) {
        z.includes(e) && z.splice(z.indexOf(e), 1);
        return
      }
    }
    try {
      null != a && Q(t, a, r)
    } finally {
      setTimeout(() => {
        z.includes(e) && z.splice(z.indexOf(e), 1)
      }, L)
    }
  }, L)
}

function $() {
  let e = G();
  null == l().find(Z, t => e.action === t.action && t.enabled && t.shortcut.length > 0) && V && !W && (eo(module), W = true)
}

function ee() {
  let e = G();
  W && (ea(module.id), W = false)
}

function et() {
  let {
    showKeybindIndicators: e
  } = Chunk658785.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == l().find(Z, e => w.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !Y && V && module && (eo(w), Y = true)
}

function en() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  (Y || module) && (ea(w.id), Y = false)
}

function er(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? et() : en(true)
}

function ei(e, t, n, r) {
  if (g.isPlatformEmbedded) E.ZP.inputEventRegister(parseInt(e), t, n, r);
  else {
    ea(e);
    let i = (0, _.r)(document);
    r.keyup && i.bindGlobal((0, y.BB)(t), () => n(false), "keyup"), r.keydown && i.bindGlobal((0, y.BB)(t), () => n(true), "keydown"), B[e] = i
  }
}

function ea(e) {
  if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
  else {
    let t = B[e];
    if (null != t) {
      let n = Z[e];
      if (null != n) {
        let e = H[n.action];
        (null == e ? true : e.isPressed) === true && S.nextTick(() => Q(false, e, n))
      }
      t.reset(), B[e] = null
    }
  }
}

function eo(e) {
  if (!V || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: r
  } = e;
  if (0 === t.length || null == t || n === v.kg4.UNASSIGNED || !r) return;
  if (null == H[n]) return void P.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
  let i = e.id,
    a = H[n].keyEvents;
  e.action === v.kg4.TOGGLE_MUTE && en(), e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && ee(), ei(i, t, e => J(i, e), C({
    focused: true,
    blurred: true,
    keydown: false,
    keyup: false
  }, a)), d.Z.validateKeybind((0, y.BB)(t))
}

function es(e) {
  let t = C({
    id: F.toString(),
    enabled: true,
    action: v.kg4.UNASSIGNED,
    shortcut: [],
    managed: false,
    params: {}
  }, e);
  return Z = R(C({}, Z), {
    [t.id]: t
  }), F += 1, t
}

function el(e) {
  ea(e.id), Z = C({}, Z), delete Z[e.id], e.action === v.kg4.TOGGLE_MUTE && et(), e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && $()
}

function ec(e) {
  let {
    keybind: t
  } = e;
  eo(es(t))
}

function eu(e) {
  let {
    id: t
  } = e, n = Z[t];
  __OVERLAY__ || m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: n.action,
    keybind_is_bound: false,
    keybind_has_shortcut: false
  }), null != n && el(n)
}

function ed(e) {
  let {
    keybind: t
  } = e;
  Z = R(C({}, Z), {
    [t.id]: t
  }), __OVERLAY__ || (m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: true,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, y.BB)(t.shortcut) : null
  }) : t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, y.BB)(t.shortcut) : null
  })), eo(t)
}

function ef(e) {
  let {
    enable: t
  } = e;
  V = t, t ? (d.Z.enable(), l().forEach(Z, eo), et(), $()) : (d.Z.disable(), l().forEach(Z, e => ea(e.id)), en(), ee())
}

function e_(e) {
  let {
    keybinds: t
  } = e;
  H = t, B = {}, F = 0, Object.values(Z).filter(e => K.includes(e.action) && e.managed).length !== K.length && eg(), l().forEach(Z, e => {
    F = Math.max(parseInt(e.id, 10), F) + 1;
    try {
      eo(e)
    } catch (t) {
      P.error("Failed to register keybind", e, t)
    }
  }), V = true, null == r && (r = p.Z.subscribe({
    location: "KeybindsStore"
  }, er))
}

function ep(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return null == l().find(Z, t => t.action === e && (!n || t.managed === n)) && (eo(es({
    action: e,
    enabled: true,
    shortcut: (0, y.Kd)(t),
    managed: true,
    params: {}
  })), true)
}

function eh(e) {
  let t = false;
  return l().each(Z, n => {
    n.action === e && true === n.managed && (el(n), t = true)
  }), t
}
let em = [function() {
  let e = Chunk131951.Z.getShortcuts();
  return l().each(Z, t => {
    t.action === v.kg4.PUSH_TO_TALK && true === t.managed && (null == t.context || null == e[t.context]) && el(t)
  }), l().reduce(Chunk131951.Z.getShortcuts(), (e, t, n) => {
    let r = l().find(Z, e => e.action === v.kg4.PUSH_TO_TALK && true === e.managed && e.context === n);
    if (null == r) eo(es({
      action: v.kg4.PUSH_TO_TALK,
      enabled: true,
      shortcut: t,
      managed: true,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || false;
      ed({
        keybind: R(C({}, r), {
          shortcut: "string" == typeof t ? (0, y.Kd)(t) : t,
          context: n
        })
      })
    }
    returntrue
  }, false)
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && ep(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, D())
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && ep(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  let e = eh(Chunk981631.kg4.SOUNDBOARD_HOLD);
  return ep(Chunk981631.kg4.SOUNDBOARD_HOLD, Chunk710111.D_, false) || module
}, function() {
  return ep(Chunk981631.kg4.SAVE_CLIP, Chunk356659.D_)
}];

function eg() {
  return et(), $(), em.reduce((e, t) => t() || e, false)
}

function eE() {
  return (async () => {
    await (0, Chunk378799.SW)(), eg() && ey.emitChange()
  })(), false
}
Chunk714338.Z.setGetKeybindList(() => {
  let e = [];
  for (let t in Z) Z.hasOwnProperty(exports) && module.push((0, Chunk13140.BB)(Z[exports].shortcut));
  let {
    showKeybindIndicators: t
  } = Chunk658785.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  return exports && module.push((0, Chunk13140.BB)(w.shortcut)), module
});
class eb extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    for (let t in __OVERLAY__ || this.waitFor(h.Z, O.default), Z = null != e ? e : {}) delete Z[t].latched, delete Z[t].pressedTime
  }
  getUserAgnosticState() {
    return Z
  }
  hasKeybind(e, t, n) {
    for (let r in Z)
      for (let i of Z[r].shortcut)
        if (i[0] === e && i[1] === t && (true === n || n === i[2])) returntrue;
    returnfalse
  }
  hasExactKeybind(e) {
    for (let t in Z) {
      let n = Z[t];
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
      i = l().find(Z, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
    return null != i ? i : r && e === v.kg4.TOGGLE_MUTE ? w : null
  }
  getOverlayKeybind() {
    let e = this.getKeybindForAction(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, true);
    return null != module ? module : G()
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, true)
  }
}
A(eb, "displayName", "KeybindsStore"), A(eb, "persistKey", "keybinds"), A(eb, "migrations", [function() {
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
    return R(C({}, e), {
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
        i = R(C({}, i), {
          enabled: false !== i.enabled,
          params: null != (n = i.params) ? n : {}
        })
      }
      t[r] = i
    }
  }
  return t
}, e => l().reduce(e, (e, t, n) => t.action === v.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : R(C({}, e), {
  [n]: t
}), {})]);
let ey = new eb(Chunk570140.Z, {
    CONNECTION_OPEN: eg,
    LOGIN_SUCCESS: eE,
    AUDIO_SET_MODE: eg,
    OVERLAY_SET_ENABLED: eg,
    RPC_APP_CONNECTED: eg,
    RPC_APP_DISCONNECTED: eg,
    KEYBINDS_ADD_KEYBIND: ec,
    KEYBINDS_DELETE_KEYBIND: eu,
    KEYBINDS_SET_KEYBIND: ed,
    KEYBINDS_ENABLE_ALL_KEYBINDS: ef,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: e_
  }),
  eO = ey