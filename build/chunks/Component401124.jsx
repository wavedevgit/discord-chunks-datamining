/** Chunk was on web.js **/
/** chunk id: 401124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  enable: () => C,
  isNotSupported: () => S,
  trackToggleSelfDeaf: () => w,
  trackToggleSelfMute: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk532624 = require("./532624.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk350535 = require("./350535.js"),
  Chunk427603 = require("./427603.js"),
  Chunk652215 = require("./652215.js"),
  Chunk765682 = require("./765682.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
let A = new Chunk626584.A("AudioActionCreators");

function I() {
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
    return t => (0, r.jsx)(e, b({
      source: "Unsupported Browser"
    }, t))
  })
}

function S() {
  return !c.A.isSupported() && ((0, a.qfG)(e => (0, r.jsx)(a.VoidConfirmModal, v(b({
    header: E.intl.string(E.t.ilMTy0),
    confirmText: E.intl.string(E.t["BK8LK+"]),
    cancelText: E.intl.string(E.t["ETE/oC"]),
    onConfirm: I,
    confirmButtonColor: i.$n.Colors.BRAND
  }, e), {
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: E.intl.string(E.t.h66vlB)
    })
  }))), true)
}

function T(e) {
  p.default.track(m.HAw.PERMISSIONS_ACKED, {
    type: "audio",
    action: e
  })
}

function C() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return S() ? Promise.resolve(false) : (p.default.track(m.HAw.PERMISSIONS_REQUESTED, {
    type: "audio"
  }), c.A.getMediaEngine().enable().then(() => {
    o.h.dispatch({
      type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
      enabled: true,
      unmute: e
    }), T(g.hL.ACCEPTED)
  }, e => {
    switch (e) {
      case m.xei.NO_DEVICES_FOUND:
        T(g.hL.NO_DEVICES);
        break;
      case m.xei.PERMISSION_DENIED:
        T(g.hL.DENIED);
        break;
      case m.xei.PERMISSION_DISMISSED:
        T(g.hL.DISMISSED);
        break;
      default:
        T(g.hL.ERROR), A.warn("unknown getUserMedia error: ".concat(e))
    }
  }).then(() => true))
}

function N(e) {
  let {
    usedKeybind: t = false,
    location: n
  } = e, r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_MUTE, false, true), i = u.A.getVoiceChannelId(), a = null != i ? l.A.getChannel(i) : null;
  p.default.track(m.HAw.INPUT_MUTE_TOGGLED, {
    enabled: !c.A.isSelfMute(),
    custom_keybind_assigned: null != r && r.id !== d.xC.id,
    used_keybind: t,
    app_in_focus: f.A.isAppFocused(),
    overlay_activated: null != (0, h.A)(),
    voice_channel_type: null != a ? a.type : null,
    location: n
  })
}

function w(e) {
  let {
    usedKeybind: t = false,
    location: n
  } = e, r = d.Ay.getKeybindForAction(m.hCu.TOGGLE_DEAFEN, false, true), i = u.A.getVoiceChannelId(), a = null != i ? l.A.getChannel(i) : null;
  p.default.track(m.HAw.SELF_DEAFEN_TOGGLED, {
    enabled: !c.A.isSelfDeaf(),
    keybind_assigned: null != r ? (0, _.dI)(r.shortcut) : true,
    used_keybind: t,
    app_in_focus: f.A.isAppFocused(),
    overlay_activated: null != (0, h.A)(),
    voice_channel_type: null != a ? a.type : null,
    location: n
  })
}