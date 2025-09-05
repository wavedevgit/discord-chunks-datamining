/** Chunk was on web.js **/
/** chunk id: 267006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk996073 = require("./996073.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10198 = require("./10198.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getExperimentalEncoders());
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      className: o()(Chunk10198.marginTop8, Chunk10198.marginBottom20),
      value: module,
      onChange: Chunk846027.Z.setExperimentalEncoders,
      hideBorder: true,
      children: Chunk388032.intl.string(Chunk388032.t.AxnPm5)
    })
  })
}

function I() {
  let {
    openH264: e,
    hardwareEncoding: t
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    openH264: Chunk131951.Z.getOpenH264(),
    hardwareEncoding: Chunk131951.Z.getHardwareEncodingSetting()
  })), n = Chunk647438.useRef(null);
  (0, Chunk996073.Z)(require, Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
  let a = Chunk647438.useCallback(e => {
    e ? c.Z.setHardwareEncoding(true) : (0, l.h7j)(e => (0, r.jsx)(l.ConfirmModal, O(b({
      header: m.intl.string(m.t.mly1DA),
      confirmText: m.intl.string(m.t.BddRzc),
      cancelText: m.intl.string(m.t["ETE/oK"]),
      onConfirm: () => c.Z.setHardwareEncoding(false)
    }, e), {
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: m.intl.format(m.t.aPStAQ, {})
      })
    })))
  }, []);
  return (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: Chunk846027.Z.setOpenH264,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t["71Ve19"])
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
      children: (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
          style: {
            scrollMarginTop: "48px"
          },
          containerRef: require,
          value: exports,
          onChange: Chunk120356,
          note: Chunk388032.intl.string(Chunk388032.t.P1UKqq),
          hideBorder: true,
          children: Chunk388032.intl.string(Chunk388032.t.Sln58f)
        }), !exports && (0, Chunk951288.jsx)(Chunk494620.Z, {
          look: Chunk494620.z.WARNING,
          children: Chunk388032.intl.string(Chunk388032.t["Uz6L6+"])
        })]
      })
    }), (0, Chunk951288.jsx)(v, {})]
  })
}