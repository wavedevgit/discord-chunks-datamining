/** Chunk was on web.js **/
/** chunk id: 267006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk996073 = require("./996073.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getExperimentalEncoders());
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.AxnPm1),
      checked: module,
      onChange: Chunk846027.Z.setExperimentalEncoders
    })
  })
}

function y() {
  let {
    openH264: e,
    hardwareEncoding: t
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    openH264: Chunk131951.Z.getOpenH264(),
    hardwareEncoding: Chunk131951.Z.getHardwareEncodingSetting()
  })), n = Chunk647438.useRef(null);
  (0, Chunk996073.Z)(require, Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
  let h = Chunk647438.useCallback(e => {
    e ? s.Z.setHardwareEncoding(true) : (0, o.h7j)(e => (0, r.jsx)(o.ConfirmModal, E(m({
      header: p.intl.string(p.t.mly1DB),
      confirmText: p.intl.string(p.t.BddRzS),
      cancelText: p.intl.string(p.t["ETE/oC"]),
      onConfirm: () => s.Z.setHardwareEncoding(false)
    }, e), {
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: p.intl.format(p.t.aPStAW, {})
      })
    })))
  }, []);
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["71Ve1y"]),
          checked: module,
          onChange: Chunk846027.Z.setOpenH264
        })
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
        children: [(0, Chunk951288.jsx)("div", {
          ref: require,
          style: {
            scrollMarginTop: "48px"
          },
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.Sln58X),
            description: Chunk388032.intl.string(Chunk388032.t.P1UKqq),
            checked: exports,
            onChange: h
          })
        }), !exports && (0, Chunk951288.jsx)(Chunk494620.Z, {
          look: Chunk494620.z.WARNING,
          children: Chunk388032.intl.string(Chunk388032.t.Uz6L6x)
        })]
      }), (0, Chunk951288.jsx)(b, {})]
    })
  })
}