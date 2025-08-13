/** Chunk was on web.js **/
/** chunk id: 556296, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ek: () => D,
  I1: () => j,
  ZP: () => eE
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./704826.js"), require("./35282.js");
var i, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk714338 = require("./714338.js"),
  Chunk710845 = require("./710845.js"),
  Chunk280049 = require("./280049.js"),
  Chunk658785 = require("./658785.js"),
  Chunk41534 = require("./41534.js"),
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

function N(e, t, n) {
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
      N(e, t, n[t])
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
  M = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return {
      id: x,
      action: I.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      shortcut: e,
      enabled: t,
      managed: true,
      params: {}
    }
  },
  j = e => {
    let t = (0, O.UR)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t)
  },
  k = (e, t, n, r) => {
    var i, o;
    let a = (0, y.pz)(false).get("Backquote"),
      s = (0, y.pz)(true).get("Backquote");
    (0, h.IK)(e.message, null, {
      tags: {
        backquoteKey: null != a ? a : "unknown",
        nativeBackquoteKey: null != s ? s : "unknown",
        backquoteCode: "".concat(null == (i = (0, y.T_)(null != a ? a : "`")) ? true : i.keyCode),
        nativeBackquoteCode: "".concat(null == (o = (0, y.T_)(null != s ? s : "`")) ? true : o.keyCode)
      },
      extra: C({
        stack: e.stack,
        keyCombo: t,
        combo: n,
        layoutMapBacktick: a,
        env: I.CgE[(0, O.dU)()],
        backtickEventShape: (0, y.T_)("`"),
        backquoteKeyShape: (0, y.T_)(null != a ? a : "`"),
        nativeBackquoteKeyShape: (0, y.T_)(null != s ? s : "`")
      }, r)
    })
  };

function U(e) {
  var t;
  let n = (0, O.Kd)(e),
    r = (0, y.T_)("`"),
    i = null != (t = null == r ? true : r.keyCode) ? t : (0, O.UR)("`");
  return j(n) ? n : null == i ? (k(Error("Unable to get backtick code for overlay default keybind"), e, n, {
    rawBacktickShape: r
  }), null) : (k(Error("Default overlay keybind is unsupported"), e, n, {
    rawBacktickCode: i
  }), [...n, [I.MoX.KEYBOARD_KEY, i, (0, O.dU)()]])
}
let G = () => {
    let e = L();
    "shift" === module && (k(Error("Default overlay keybind is only shift"), module, null), e = "shift+`");
    let t = U(module);
    if (null == exports) return M([], false);
    if (j(exports)) return M(exports, true);
    let n = (0, Chunk13140.UR)("shift"),
      r = (0, Chunk378799.T_)("`");
    return 0 === exports.length ? k(Error("Default overlay keybind combo is empty"), module, exports) : null == require ? k(Error("Unable to get shift code"), module, exports, {
      shiftCode: require
    }) : null == r && k(Error("Unable to get backtick code"), module, exports), M(exports, false)
  },
  B = {},
  Z = {},
  F = 0,
  V = true,
  H = {},
  Y = false,
  W = false,
  K = [Chunk981631.kg4.PUSH_TO_TALK, Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

function z(e) {
  switch (e) {
    case D.id:
      return D;
    case G().id:
      return G();
    default:
      return Z[e]
  }
}

function q(e, t) {
  let n = z(e);
  null != n && H[n.action].onTrigger(t, n)
}

function X() {
  let e = G();
  null == l().find(Z, t => e.action === t.action && t.enabled && t.shortcut.length > 0) && V && !W && (er(module), W = true)
}

function Q() {
  let e = G();
  W && (en(module.id), W = false)
}

function J() {
  let {
    showKeybindIndicators: e
  } = Chunk658785.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == l().find(Z, e => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !Y && V && module && (er(D), Y = true)
}

function $() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  (Y || module) && (en(D.id), Y = false)
}

function ee(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? J() : $(true)
}

function et(e, t, n, r) {
  if (E.isPlatformEmbedded) b.ZP.inputEventRegister(parseInt(e), t, n, r);
  else {
    en(e);
    let i = (0, _.r)(document);
    r.keyup && i.bindGlobal((0, O.BB)(t), () => n(false), "keyup"), r.keydown && i.bindGlobal((0, O.BB)(t), () => n(true), "keydown"), B[e] = i
  }
}

function en(e) {
  if (E.isPlatformEmbedded) b.ZP.inputEventUnregister(parseInt(e, 10));
  else {
    let t = B[e];
    if (null != t) {
      let n = Z[e];
      if (null != n) {
        let e = H[n.action];
        (null == e ? true : e.isPressed) === true && A.nextTick(() => e.onTrigger(false, n))
      }
      t.reset(), B[e] = null
    }
  }
}

function er(e) {
  if (!V || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: r
  } = e;
  if (0 === t.length || null == t || n === I.kg4.UNASSIGNED || !r) return;
  if (null == H[n]) return void w.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
  let i = e.id,
    o = H[n].keyEvents;
  e.action === I.kg4.TOGGLE_MUTE && $(), e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && Q(), et(i, t, e => q(i, e), C({
    focused: true,
    blurred: true,
    keydown: false,
    keyup: false
  }, o)), d.Z.validateKeybind((0, O.BB)(t))
}

function ei(e) {
  let t = C({
    id: F.toString(),
    enabled: true,
    action: I.kg4.UNASSIGNED,
    shortcut: [],
    managed: false,
    params: {}
  }, e);
  return Z = P(C({}, Z), {
    [t.id]: t
  }), F += 1, t
}

function eo(e) {
  en(e.id), Z = C({}, Z), delete Z[e.id], e.action === I.kg4.TOGGLE_MUTE && J(), e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && X()
}

function ea(e) {
  let {
    keybind: t
  } = e;
  er(ei(t))
}

function es(e) {
  let {
    id: t
  } = e, n = Z[t];
  __OVERLAY__ || g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: n.action,
    keybind_is_bound: false,
    keybind_has_shortcut: false
  }), null != n && eo(n)
}

function el(e) {
  let {
    keybind: t
  } = e;
  Z = P(C({}, Z), {
    [t.id]: t
  }), __OVERLAY__ || (g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: true,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null
  }) : t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null
  })), er(t)
}

function ec(e) {
  let {
    enable: t
  } = e;
  V = t, t ? (d.Z.enable(), l().forEach(Z, er), J(), X()) : (d.Z.disable(), l().forEach(Z, e => en(e.id)), $(), Q())
}

function eu(e) {
  let {
    keybinds: t
  } = e;
  H = t, B = {}, F = 0, Object.values(Z).filter(e => K.includes(e.action) && e.managed).length !== K.length && ep(), l().forEach(Z, e => {
    F = Math.max(parseInt(e.id, 10), F) + 1;
    try {
      er(e)
    } catch (t) {
      w.error("Failed to register keybind", e, t)
    }
  }), V = true, null == r && (r = p.Z.subscribe({
    location: "KeybindsStore"
  }, ee))
}

function ed(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return null == l().find(Z, t => t.action === e && (!n || t.managed === n)) && (er(ei({
    action: e,
    enabled: true,
    shortcut: (0, O.Kd)(t),
    managed: true,
    params: {}
  })), true)
}

function ef(e) {
  let t = false;
  return l().each(Z, n => {
    n.action === e && true === n.managed && (eo(n), t = true)
  }), t
}
let e_ = [function() {
  let e = Chunk131951.Z.getShortcuts();
  return l().each(Z, t => {
    t.action === I.kg4.PUSH_TO_TALK && true === t.managed && (null == t.context || null == e[t.context]) && eo(t)
  }), l().reduce(Chunk131951.Z.getShortcuts(), (e, t, n) => {
    let r = l().find(Z, e => e.action === I.kg4.PUSH_TO_TALK && true === e.managed && e.context === n);
    if (null == r) er(ei({
      action: I.kg4.PUSH_TO_TALK,
      enabled: true,
      shortcut: t,
      managed: true,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || false;
      el({
        keybind: P(C({}, r), {
          shortcut: "string" == typeof t ? (0, O.Kd)(t) : t,
          context: n
        })
      })
    }
    returntrue
  }, false)
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && ed(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, L())
}, function() {
  return !!Chunk808506.default.getAnyGlobalEnabledOverlay() && ed(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  let e = ef(Chunk981631.kg4.SOUNDBOARD_HOLD);
  return ed(Chunk981631.kg4.SOUNDBOARD_HOLD, Chunk710111.D_, false) || module
}, function() {
  return ed(Chunk981631.kg4.SAVE_CLIP, Chunk356659.D_)
}];

function ep() {
  return J(), X(), e_.reduce((e, t) => t() || e, false)
}

function eh() {
  return (async () => {
    await (0, Chunk378799.SW)(), ep() && eg.emitChange()
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
  return exports && module.push((0, Chunk13140.BB)(D.shortcut)), module
});
class em extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    __OVERLAY__ || this.waitFor(m.Z, v.default), Z = null != e ? e : {}
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
    return null != i ? i : r && e === I.kg4.TOGGLE_MUTE ? D : null
  }
  getOverlayKeybind() {
    let e = this.getKeybindForAction(Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK, true);
    return null != module ? module : G()
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, true)
  }
}
N(em, "displayName", "KeybindsStore"), N(em, "persistKey", "keybinds"), N(em, "migrations", [function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      v: t,
      keybinds: n = module
    } = module;
  return l().reduce(require, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, O.Kd)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, O.dU)()] : e)), e[r] = n), e), {})
}, e => e, e => {
  let {
    keybinds: t = e
  } = e;
  return l().reduce(t, (e, t, n) => {
    if ((0, E.isLinux)() && t.action === I.kg4.SOUNDBOARD_HOLD) {
      let n = t.shortcut.map(e => e[1]),
        r = (0, O.Kd)("`").map(e => e[1]);
      if (a()(n, r)) return e
    }
    return P(C({}, e), {
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
        i = P(C({}, i), {
          enabled: false !== i.enabled,
          params: null != (n = i.params) ? n : {}
        })
      }
      t[r] = i
    }
  }
  return t
}, e => l().reduce(e, (e, t, n) => t.action === I.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : P(C({}, e), {
  [n]: t
}), {})]);
let eg = new em(Chunk570140.Z, {
    CONNECTION_OPEN: ep,
    LOGIN_SUCCESS: eh,
    AUDIO_SET_MODE: ep,
    OVERLAY_SET_ENABLED: ep,
    RPC_APP_CONNECTED: ep,
    RPC_APP_DISCONNECTED: ep,
    KEYBINDS_ADD_KEYBIND: ea,
    KEYBINDS_DELETE_KEYBIND: es,
    KEYBINDS_SET_KEYBIND: el,
    KEYBINDS_ENABLE_ALL_KEYBINDS: ec,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: eu
  }),
  eE = eg