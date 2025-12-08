/** Chunk was on web.js **/
/** chunk id: 929782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  enable: () => C,
  isNotSupported: () => T,
  trackToggleSelfDeaf: () => P,
  trackToggleSelfMute: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk556296 = require("./556296.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk13140 = require("./13140.js"),
  Chunk554174 = require("./554174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk761274 = require("./761274.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk710845.Z("AudioActionCreators");

function I() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
    return t => (0, r.jsx)(e, y({
      source: "Unsupported Browser"
    }, t))
  })
}

function T() {
  return !Chunk131951.Z.isSupported() && ((0, Chunk481060.h7j)(e => (0, r.jsx)(a.VoidConfirmModal, v(y({
    header: E.intl.string(E.t.ilMTy0),
    confirmText: E.intl.string(E.t["BK8LK+"]),
    cancelText: E.intl.string(E.t["ETE/oC"]),
    onConfirm: I,
    confirmButtonColor: i.zx.Colors.BRAND
  }, e), {
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: E.intl.string(E.t.h66vlB)
    })
  }))), true)
}

function A(e) {
  p.default.track(h.rMx.PERMISSIONS_ACKED, {
    type: "audio",
    action: e
  })
}

function C() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return T() ? Promise.resolve(false) : (Chunk626135.default.track(Chunk981631.rMx.PERMISSIONS_REQUESTED, {
    type: "audio"
  }), Chunk131951.Z.getMediaEngine().enable().then(() => {
    Chunk570140.Z.dispatch({
      type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
      enabled: true,
      unmute: module
    }), A(Chunk761274.PQ.ACCEPTED)
  }, e => {
    switch (e) {
      case h.ETv.NO_DEVICES_FOUND:
        A(g.PQ.NO_DEVICES);
        break;
      case h.ETv.PERMISSION_DENIED:
        A(g.PQ.DENIED);
        break;
      case h.ETv.PERMISSION_DISMISSED:
        A(g.PQ.DISMISSED);
        break;
      default:
        A(g.PQ.ERROR), S.warn("unknown getUserMedia error: ".concat(e))
    }
  }).then(() => true))
}

function N(e) {
  let {
    usedKeybind: t = false,
    location: n
  } = e, r = d.ZP.getKeybindForAction(h.kg4.TOGGLE_MUTE, false, true), i = u.Z.getVoiceChannelId(), a = null != i ? l.Z.getChannel(i) : null;
  p.default.track(h.rMx.INPUT_MUTE_TOGGLED, {
    enabled: !c.Z.isSelfMute(),
    custom_keybind_assigned: null != r && r.id !== d.Ek.id,
    used_keybind: t,
    app_in_focus: f.Z.isAppFocused(),
    overlay_activated: null != (0, m.Z)(),
    voice_channel_type: null != a ? a.type : null,
    location: n
  })
}

function P(e) {
  let {
    usedKeybind: t = false,
    location: n
  } = e, r = d.ZP.getKeybindForAction(h.kg4.TOGGLE_DEAFEN, false, true), i = u.Z.getVoiceChannelId(), a = null != i ? l.Z.getChannel(i) : null;
  p.default.track(h.rMx.SELF_DEAFEN_TOGGLED, {
    enabled: !c.Z.isSelfDeaf(),
    keybind_assigned: null != r ? (0, _.BB)(r.shortcut) : true,
    used_keybind: t,
    app_in_focus: f.Z.isAppFocused(),
    overlay_activated: null != (0, m.Z)(),
    voice_channel_type: null != a ? a.type : null,
    location: n
  })
}