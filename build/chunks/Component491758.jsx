/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk556865 = require("./556865.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R() {
  let {
    clipsEnabled: e,
    remindersEnabled: t,
    decoupledClipsEnabled: n,
    clipsLength: a,
    clipsQuality: T
  } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()), C = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()), R = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)), P = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_SCREENSHOT, true)), w = Chunk435064.Z.isDecoupledGameClippingEnabled(), D = (0, Chunk779618.Z)(Chunk131951.Z), {
    showClipsHeaderEntrypoint: x
  } = Chunk924557.NV.useExperiment({
    location: "clips_recording_settings"
  }, {
    autoTrackExposure: false
  }), L = (0, Chunk924557.PP)();
  o()(null != R, "Save clip keybind unset"), o()(null != P, "Save screenshot keybind unset");
  let M = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    j = Chunk647438.useMemo(() => [{
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
    }], [M]),
    k = Chunk647438.useMemo(() => [{
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
    }], [M]),
    U = Chunk647438.useMemo(() => [{
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
    }], [M]),
    G = Chunk647438.useCallback(e => {
      c.Z.setKeybind(N(A({}, R), {
        shortcut: e
      }))
    }, [R]),
    B = Chunk647438.useCallback(e => {
      c.Z.setKeybind(N(A({}, P), {
        shortcut: e
      }))
    }, [P]);
  return (0, Chunk951288.jsxs)(Chunk481060.C3N, {
    children: [(0, Chunk951288.jsx)(Chunk494620.Z, {
      children: Chunk388032.intl.string(Chunk388032.t["Z+MfqT"])
    }), C === Chunk894694.xH.BELOW_MINIMUM ? (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.SIxrIF)
    }) : null, (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.h8rgrK),
      description: Chunk388032.intl.string(Chunk388032.t["4Qw3NO"]),
      checked: module,
      onChange: e => b.em({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), w && D && (0, Chunk951288.jsx)(Chunk951288.Fragment, {
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.yXvykv),
        description: Chunk388032.intl.string(Chunk388032.t.YP3ujk),
        checked: require,
        onChange: e => b._Q({
          enabled: e,
          trackAnalytics: true
        })
      })
    }), x && (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["3zwNf6"]),
      description: Chunk388032.intl.string(Chunk388032.t.m4Cjj9),
      checked: exports,
      onChange: e => b.N0(e)
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      onChange: Chunk39604.eU,
      label: Chunk388032.intl.string(Chunk388032.t.OgfUio),
      description: Chunk388032.intl.string(Chunk388032.t.H7j4tY),
      value: Chunk512722,
      options: j
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      onChange: e => b.yi({
        resolution: e,
        frameRate: T.frameRate
      }),
      label: Chunk388032.intl.string(Chunk388032.t.aFudZJ),
      description: Chunk388032.intl.string(Chunk388032.t.nIrkW5),
      value: T.resolution,
      options: k
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      onChange: e => b.yi({
        resolution: T.resolution,
        frameRate: e
      }),
      label: Chunk388032.intl.string(Chunk388032.t["2wScL1"]),
      description: Chunk388032.intl.string(Chunk388032.t["Rf9+fy"]),
      value: T.frameRate,
      options: U
    }), (0, Chunk951288.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.pf54EU),
      description: Chunk388032.intl.string(Chunk388032.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk556865.keyRecorder,
        children: (0, Chunk951288.jsx)(Chunk825209.Z, {
          defaultValue: R.shortcut,
          onChange: G
        })
      })
    }), L && (0, Chunk951288.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t["0U/hj7"]),
      description: Chunk388032.intl.string(Chunk388032.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk556865.keyRecorder,
        children: (0, Chunk951288.jsx)(Chunk825209.Z, {
          defaultValue: P.shortcut,
          onChange: B
        })
      })
    })]
  })
}