/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  enable: () => N,
  isNotSupported: () => I,
  trackToggleSelfDeaf: () => C,
  trackToggleSelfMute: () => A
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(570140),
  a = n(710845),
  s = n(592125),
  l = n(131951),
  c = n(944486),
  u = n(556296),
  d = n(451478),
  f = n(626135),
  _ = n(13140),
  p = n(554174),
  h = n(981631),
  g = n(761274),
  m = n(388032);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = new a.Z("AudioActionCreators");

function S() {
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("74023").then(n.bind(n, 431583));
    return t => (0, r.jsx)(e, v({
      source: "Unsupported Browser"
    }, t))
  })
}

function I() {
  return !l.Z.isSupported() && ((0, i.h7j)(e => (0, r.jsx)(i.ConfirmModal, y(v({
    header: m.NW.string(m.t.ilMTy8),
    confirmText: m.NW.string(m.t.BK8LKy),
    cancelText: m.NW.string(m.t["ETE/oK"]),
    onConfirm: S,
    confirmButtonColor: i.zxk.Colors.BRAND
  }, e), {
    children: (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      children: m.NW.string(m.t.h66vlJ)
    })
  }))), !0)
}

function T(e) {
  f.default.track(h.rMx.PERMISSIONS_ACKED, {
    type: "audio",
    action: e
  })
}

function N() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return I() ? Promise.resolve(!1) : (f.default.track(h.rMx.PERMISSIONS_REQUESTED, {
    type: "audio"
  }), l.Z.getMediaEngine().enable().then(() => {
    o.Z.dispatch({
      type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
      enabled: !0,
      unmute: e
    }), T(g.PQ.ACCEPTED)
  }, e => {
    switch (e) {
      case h.ETv.NO_DEVICES_FOUND:
        T(g.PQ.NO_DEVICES);
        break;
      case h.ETv.PERMISSION_DENIED:
        T(g.PQ.DENIED);
        break;
      case h.ETv.PERMISSION_DISMISSED:
        T(g.PQ.DISMISSED);
        break;
      default:
        T(g.PQ.ERROR), O.warn("unknown getUserMedia error: ".concat(e))
    }
  }).then(() => !0))
}

function A(e) {
  let {
    usedKeybind: t = !1,
    location: n
  } = e, r = u.ZP.getKeybindForAction(h.kg4.TOGGLE_MUTE, !1, !0), i = c.Z.getVoiceChannelId(), o = null != i ? s.Z.getChannel(i) : null;
  f.default.track(h.rMx.INPUT_MUTE_TOGGLED, {
    enabled: !l.Z.isSelfMute(),
    custom_keybind_assigned: null != r && r.id !== u.Ek.id,
    used_keybind: t,
    app_in_focus: d.Z.isFocused(),
    overlay_activated: null != (0, p.Z)(),
    voice_channel_type: null != o ? o.type : null,
    location: n
  })
}

function C(e) {
  let {
    usedKeybind: t = !1,
    location: n
  } = e, r = u.ZP.getKeybindForAction(h.kg4.TOGGLE_DEAFEN, !1, !0), i = c.Z.getVoiceChannelId(), o = null != i ? s.Z.getChannel(i) : null;
  f.default.track(h.rMx.SELF_DEAFEN_TOGGLED, {
    enabled: !l.Z.isSelfDeaf(),
    keybind_assigned: null != r ? (0, _.BB)(r.shortcut) : void 0,
    used_keybind: t,
    app_in_focus: d.Z.isFocused(),
    overlay_activated: null != (0, p.Z)(),
    voice_channel_type: null != o ? o.type : null,
    location: n
  })
}