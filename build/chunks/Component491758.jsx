/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk556296 = require("./556296.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298291 = require("./298291.js");

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

function P() {
  let {
    clipsEnabled: e,
    remindersEnabled: t,
    decoupledClipsEnabled: n,
    clipsLength: a,
    clipsQuality: A,
    autoClipPhrases: N
  } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()), P = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()), w = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)), D = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_SCREENSHOT, true)), [x, L] = Chunk647438.useState(N.join(", ")), M = Chunk435064.Z.isDecoupledGameClippingEnabled(), k = (0, Chunk779618.Z)(Chunk131951.Z), {
    showClipsHeaderEntrypoint: j,
    enableAdvancedSignals: U
  } = Chunk924557.NV.useExperiment({
    location: "clips_recording_settings"
  }, {
    autoTrackExposure: false
  }), G = (0, Chunk924557.PP)();
  o()(null != w, "Save clip keybind unset"), o()(null != D, "Save screenshot keybind unset");
  let B = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    Z = Chunk647438.useMemo(() => (0, Chunk392711.debounce)(e => {
      let t = e.split(",").map(e => e.trim()).filter(e => e.length > 0);
      y.a2(t)
    }, 200), []),
    F = Chunk647438.useCallback(e => {
      L(e), Z(e)
    }, [Z]),
    V = Chunk647438.useMemo(() => [{
      value: Chunk356659.OT.SECONDS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t["bTFv/3"], {
        count: 30
      })
    }, {
      value: Chunk356659.OT.MINUTES_1,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nk, {
        count: 1
      })
    }, {
      value: Chunk356659.OT.MINUTES_2,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nk, {
        count: 2
      })
    }], [B]),
    H = Chunk647438.useMemo(() => [{
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: Chunk388032.intl.string(Chunk388032.t.XjXqzh)
    }], [B]),
    Y = Chunk647438.useMemo(() => [{
      value: Chunk37113.ApplicationStreamFPS.FPS_15,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: Chunk37113.ApplicationStreamFPS.FPS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: Chunk37113.ApplicationStreamFPS.FPS_60,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_60
      })
    }], [B]),
    W = Chunk647438.useCallback(e => {
      u.Z.setKeybind(R(C({}, w), {
        shortcut: e
      }))
    }, [w]),
    K = Chunk647438.useCallback(e => {
      u.Z.setKeybind(R(C({}, D), {
        shortcut: e
      }))
    }, [D]);
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 24,
    children: [P === Chunk894694.xH.BELOW_MINIMUM ? (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.SIxrIF)
    }) : null, (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.h8rgrK),
      description: Chunk388032.intl.string(Chunk388032.t["4Qw3NO"]),
      checked: module,
      onChange: e => y.em({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), (0, Chunk951288.jsx)(Chunk494620.Z, {
      children: Chunk388032.intl.string(Chunk388032.t["Z+MfqT"])
    }), M && k && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.yXvykv),
        description: Chunk388032.intl.string(Chunk388032.t.YP3ujk),
        checked: require,
        onChange: e => y._Q({
          enabled: e,
          trackAnalytics: true
        })
      })]
    }), j && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["3zwNf6"]),
        description: Chunk388032.intl.string(Chunk388032.t.m4Cjj9),
        checked: exports,
        onChange: e => y.N0(e)
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: Chunk39604.eU,
        label: Chunk388032.intl.string(Chunk388032.t.OgfUio),
        description: Chunk388032.intl.string(Chunk388032.t.H7j4tY),
        value: Chunk512722,
        options: V
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: e => y.yi({
          resolution: e,
          frameRate: A.frameRate
        }),
        label: Chunk388032.intl.string(Chunk388032.t.aFudZJ),
        description: Chunk388032.intl.string(Chunk388032.t.nIrkW5),
        value: A.resolution,
        options: H
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: e => y.yi({
          resolution: A.resolution,
          frameRate: e
        }),
        label: Chunk388032.intl.string(Chunk388032.t["2wScL1"]),
        description: Chunk388032.intl.string(Chunk388032.t["Rf9+fy"]),
        value: A.frameRate,
        options: Y
      }), U && (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.JIze0o),
        description: Chunk388032.intl.string(Chunk388032.t.dA2fYk),
        layout: "vertical",
        children: (0, Chunk951288.jsx)(Chunk481060.oil, {
          value: x,
          onChange: F
        })
      }), (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.pf54EU),
        description: Chunk388032.intl.string(Chunk388032.t["QyB/jK"]),
        layout: "horizontal",
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk298291.keyRecorder,
          children: (0, Chunk951288.jsx)(Chunk825209.Z, {
            defaultValue: w.shortcut,
            onChange: W
          })
        })
      }), G && (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["0U/hj7"]),
        description: Chunk388032.intl.string(Chunk388032.t["5zxkdo"]),
        layout: "horizontal",
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk298291.keyRecorder,
          children: (0, Chunk951288.jsx)(Chunk825209.Z, {
            defaultValue: D.shortcut,
            onChange: K
          })
        })
      })]
    })]
  })
}