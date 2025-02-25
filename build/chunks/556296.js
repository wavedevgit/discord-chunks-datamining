/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Ek: () => L,
  ZP: () => es
}), n(653041), n(47120), n(757143), n(301563);
var i, o = n(879443),
  a = n.n(o),
  s = n(414861),
  l = n.n(s),
  c = n(348327),
  u = n.n(c),
  d = n(392711),
  f = n.n(d),
  _ = n(442837),
  p = n(570140),
  h = n(714338),
  g = n(710845),
  m = n(658785),
  E = n(131951),
  v = n(626135),
  b = n(358085),
  y = n(998502),
  O = n(13140),
  S = n(808506),
  I = n(981631),
  T = n(356659),
  N = n(710111),
  A = n(444675);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
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

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = new g.Z("KeybindsStore"),
  L = {
    id: "1000",
    action: I.kg4.TOGGLE_MUTE,
    shortcut: (0, O.Kd)("mod+shift+m"),
    enabled: !0,
    managed: !0,
    params: {}
  },
  x = {
    id: "1001",
    action: I.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
    shortcut: (0, O.Kd)("shift+`"),
    enabled: !0,
    managed: !0,
    params: {}
  },
  M = {},
  j = {},
  k = 0,
  U = !0,
  G = {},
  B = !1,
  F = [I.kg4.PUSH_TO_TALK, I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

function V(e) {
  switch (e) {
    case L.id:
      return L;
    case x.id:
      return x;
    default:
      return j[e]
  }
}

function Z(e, t) {
  let n = V(e);
  null != n && G[n.action].onTrigger(t, n)
}

function H() {
  let {
    showKeybindIndicators: e
  } = m.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == f().find(j, e => L.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !B && U && e && (q(L), B = !0)
}

function W() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  (B || e) && (z(L.id), B = !1)
}

function Y(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? H() : W(!0)
}

function K(e, t, n, r) {
  if (b.isPlatformEmbedded) y.ZP.inputEventRegister(parseInt(e), t, n, r);
  else {
    z(e);
    let i = l()(new(a())(document));
    r.keyup && i.bindGlobal((0, O.BB)(t), () => n(!1), "keyup"), r.keydown && i.bindGlobal((0, O.BB)(t), () => n(!0), "keydown"), M[e] = i
  }
}

function z(e) {
  if (b.isPlatformEmbedded) y.ZP.inputEventUnregister(parseInt(e, 10));
  else if (M[e]) {
    let t = j[e],
      n = G[t.action];
    (null == n ? void 0 : n.isPressed) === !0 && A.nextTick(() => n.onTrigger(!1, t)), M[e].reset(), M[e] = null
  }
}

function q(e) {
  if (!U || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: r
  } = e;
  if ("" === t || null == t || n === I.kg4.UNASSIGNED || !r) return;
  if (null == G[n]) {
    w.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
    return
  }
  let i = e.id,
    o = G[n].keyEvents;
  e.action === I.kg4.TOGGLE_MUTE && W(), K(i, t, e => Z(i, e), R({
    focused: !0,
    blurred: !0,
    keydown: !1,
    keyup: !1
  }, o)), h.Z.validateKeybind((0, O.BB)(e.shortcut))
}

function Q(e) {
  let t = R({
    id: k.toString(),
    enabled: !0,
    action: I.kg4.UNASSIGNED,
    shortcut: [],
    managed: !1,
    params: {}
  }, e);
  return j = D(R({}, j), {
    [t.id]: t
  }), k += 1, t
}

function X(e) {
  z(e.id), j = R({}, j), delete j[e.id], e.action === I.kg4.TOGGLE_MUTE && H()
}

function J(e) {
  let {
    keybind: t
  } = e;
  q(Q(t))
}

function $(e) {
  let {
    id: t
  } = e, n = j[t];
  __OVERLAY__ || v.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: n.action,
    keybind_is_bound: !1,
    keybind_has_shortcut: !1
  }), null != n && X(n)
}

function ee(e) {
  let {
    keybind: t
  } = e;
  j = D(R({}, j), {
    [t.id]: t
  }), __OVERLAY__ || (v.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: !0,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null
  }) : t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null
  })), q(t)
}

function et(e) {
  let {
    enable: t
  } = e;
  U = t, t ? (h.Z.enable(), f().forEach(j, q), H()) : (h.Z.disable(), f().forEach(j, e => z(e.id)), W())
}

function en(e) {
  let {
    keybinds: t
  } = e;
  G = t, M = {}, k = 0, Object.values(j).filter(e => F.includes(e.action) && e.managed).length !== F.length && eo(), f().forEach(j, e => {
    k = Math.max(parseInt(e.id, 10), k) + 1;
    try {
      q(e)
    } catch (t) {
      w.error("Failed to register keybind", e, t)
    }
  }), U = !0, null == r && (r = m.Z.subscribe({
    location: "KeybindsStore"
  }, Y))
}

function er(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return null == f().find(j, t => t.action === e && (!n || t.managed === n)) && (q(Q({
    action: e,
    enabled: !0,
    shortcut: (0, O.Kd)(t),
    managed: !0,
    params: {}
  })), !0)
}
let ei = [function() {
  let e = E.Z.getShortcuts();
  return f().each(j, t => {
    t.action === I.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && X(t)
  }), f().reduce(E.Z.getShortcuts(), (e, t, n) => {
    let r = f().find(j, e => e.action === I.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
    if (null == r) q(Q({
      action: I.kg4.PUSH_TO_TALK,
      enabled: !0,
      shortcut: t,
      managed: !0,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || !1;
      ee({
        keybind: D(R({}, r), {
          shortcut: "string" == typeof t ? (0, O.Kd)(t) : t,
          context: n
        })
      })
    }
    return !0
  }, !1)
}, function() {
  return !!S.ZP.getAnyGlobalEnabledOverlay() && er(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
}, function() {
  return !!S.ZP.getAnyGlobalEnabledOverlay() && er(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  return er(I.kg4.SOUNDBOARD_HOLD, N.D_, !1)
}, function() {
  return er(I.kg4.SAVE_CLIP, T.D_)
}];

function eo() {
  return H(), ei.reduce((e, t) => t() || e, !1)
}
h.Z.setGetKeybindList(() => {
  let e = [];
  for (let t in j) j.hasOwnProperty(t) && e.push((0, O.BB)(j[t].shortcut));
  let {
    showKeybindIndicators: t
  } = m.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  return t && e.push((0, O.BB)(L.shortcut)), e
});
class ea extends(i = _.ZP.DeviceSettingsStore) {
  initialize(e) {
    __OVERLAY__ || this.waitFor(E.Z, S.ZP), j = null != e ? e : {}
  }
  getUserAgnosticState() {
    return j
  }
  hasKeybind(e, t, n) {
    for (let r in j)
      for (let i of j[r].shortcut)
        if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
    return !1
  }
  hasExactKeybind(e) {
    for (let t in j) {
      let n = j[t];
      if (f().isEqual(n.shortcut, e)) return !0
    }
    return !1
  }
  getKeybindForAction(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      {
        showKeybindIndicators: r
      } = m.Z.getCurrentConfig({
        location: "KeybindsStore"
      }),
      i = f().find(j, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
    return null != i ? i : r && e === I.kg4.TOGGLE_MUTE ? L : null
  }
  getOverlayKeybind() {
    let e = this.getKeybindForAction(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    return null != e ? e : x
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
  }
}
C(ea, "displayName", "KeybindsStore"), C(ea, "persistKey", "keybinds"), C(ea, "migrations", [function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      v: t,
      keybinds: n = e
    } = e;
  return f().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, O.Kd)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, O.dU)()] : e)), e[r] = n), e), {})
}, e => e, e => {
  let {
    keybinds: t = e
  } = e;
  return f().reduce(t, (e, t, n) => {
    if ((0, b.isLinux)() && t.action === I.kg4.SOUNDBOARD_HOLD) {
      let n = t.shortcut.map(e => e[1]),
        r = (0, O.Kd)("`").map(e => e[1]);
      if (u()(n, r)) return e
    }
    return D(R({}, e), {
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
        i = D(R({}, i), {
          enabled: !1 !== i.enabled,
          params: null !== (n = i.params) && void 0 !== n ? n : {}
        })
      }
      t[r] = i
    }
  }
  return t
}, e => f().reduce(e, (e, t, n) => t.action === I.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : D(R({}, e), {
  [n]: t
}), {})]);
let es = new ea(p.Z, {
  CONNECTION_OPEN: eo,
  AUDIO_SET_MODE: eo,
  OVERLAY_SET_ENABLED: eo,
  RPC_APP_CONNECTED: eo,
  RPC_APP_DISCONNECTED: eo,
  KEYBINDS_ADD_KEYBIND: J,
  KEYBINDS_DELETE_KEYBIND: $,
  KEYBINDS_SET_KEYBIND: ee,
  KEYBINDS_ENABLE_ALL_KEYBINDS: et,
  KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: en
})