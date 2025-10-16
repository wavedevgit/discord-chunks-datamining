/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
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
  Chunk313789 = require("./313789.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk518596 = require("./518596.jsx"),
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
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556865 = require("./556865.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getHardwareEncoding()),
    {
      clipsEnabled: t,
      remindersEnabled: n,
      decoupledClipsEnabled: a,
      clipsLength: N,
      clipsQuality: P
    } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()),
    D = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()),
    L = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)),
    x = Chunk435064.Z.isDecoupledGameClippingEnabled(),
    M = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      showClipsHeaderEntrypoint: k
    } = Chunk924557.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
  o()(null != L, "Save clip keybind unset");
  let j = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    U = Chunk647438.useMemo(() => [{
      value: Chunk356659.OT.SECONDS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t["bTFv//"], {
        count: 30
      })
    }, {
      value: Chunk356659.OT.MINUTES_1,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nj, {
        count: 1
      })
    }, {
      value: Chunk356659.OT.MINUTES_2,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nj, {
        count: 2
      })
    }], [j]),
    G = Chunk647438.useMemo(() => [{
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: Chunk388032.intl.string(Chunk388032.t.XjXqzs)
    }], [j]),
    B = Chunk647438.useMemo(() => [{
      value: Chunk37113.ApplicationStreamFPS.FPS_15,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: Chunk37113.ApplicationStreamFPS.FPS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: Chunk37113.ApplicationStreamFPS.FPS_60,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ApplicationStreamFPS.FPS_60
      })
    }], [j]),
    Z = Chunk647438.useCallback(e => {
      c.Z.setKeybind(w(R({}, L), {
        shortcut: e
      }))
    }, [L]);
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 24,
    children: [!module && (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.format(Chunk388032.t.kiaF4e, {
        onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
          section: Chunk981631.oAB.VOICE,
          subsection: Chunk526761.gP,
          scrollPosition: Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
        })
      })
    }), D === Chunk894694.x.BELOW_MINIMUM ? (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.SIxrIC)
    }) : null, (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.h8rgrK),
      description: Chunk388032.intl.string(Chunk388032.t["4Qw3ND"]),
      checked: exports,
      disabled: !module,
      onChange: e => O.em({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), module && (0, Chunk951288.jsx)(Chunk494620.Z, {
      children: Chunk388032.intl.string(Chunk388032.t["Z+Mfqa"])
    }), x && M && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.yXvykp),
        description: Chunk388032.intl.string(Chunk388032.t.YP3ujo),
        checked: Chunk512722,
        disabled: !module,
        onChange: e => O._Q({
          enabled: e,
          trackAnalytics: true
        })
      })]
    }), k && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["3zwNf3"]),
        description: Chunk388032.intl.string(Chunk388032.t.m4Cjj4),
        checked: require,
        onChange: e => O.N0(e)
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: Chunk39604.eU,
        label: Chunk388032.intl.string(Chunk388032.t.OgfUio),
        description: Chunk388032.intl.string(Chunk388032.t.H7j4tb),
        value: N,
        options: U
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: e => O.yi({
          resolution: e,
          frameRate: P.frameRate
        }),
        label: Chunk388032.intl.string(Chunk388032.t.aFudZG),
        description: Chunk388032.intl.string(Chunk388032.t.nIrkW1),
        value: P.resolution,
        options: G
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        onChange: e => O.yi({
          resolution: P.resolution,
          frameRate: e
        }),
        label: Chunk388032.intl.string(Chunk388032.t["2wScLy"]),
        description: Chunk388032.intl.string(Chunk388032.t["Rf9+f3"]),
        value: P.frameRate,
        options: B
      }), (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.pf54ER),
        description: Chunk388032.intl.string(Chunk388032.t["QyB/jI"]),
        layout: "horizontal",
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk556865.keyRecorder,
          children: (0, Chunk951288.jsx)(Chunk825209.Z, {
            defaultValue: L.shortcut,
            onChange: Z
          })
        })
      })]
    })]
  })
}