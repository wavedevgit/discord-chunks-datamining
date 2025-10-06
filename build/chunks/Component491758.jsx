/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
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
  Chunk442334 = require("./442334.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556865 = require("./556865.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getHardwareEncoding()),
    {
      clipsEnabled: t,
      remindersEnabled: n,
      decoupledClipsEnabled: a,
      clipsLength: R,
      clipsQuality: w
    } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()),
    L = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()),
    x = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)),
    M = Chunk435064.Z.isDecoupledGameClippingEnabled(),
    j = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      showClipsHeaderEntrypoint: k
    } = Chunk924557.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
  o()(null != x, "Save clip keybind unset");
  let U = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    G = Chunk647438.useMemo(() => [{
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
    }], [U]),
    B = Chunk647438.useMemo(() => [{
      value: Chunk37113.LY.RESOLUTION_480,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_480
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_720,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_720
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_1080,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_1080
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_1440,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_1440
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_SOURCE,
      label: Chunk388032.intl.string(Chunk388032.t.XjXqzs)
    }], [U]),
    Z = Chunk647438.useMemo(() => [{
      value: Chunk37113.ws.FPS_15,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_15
      })
    }, {
      value: Chunk37113.ws.FPS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_30
      })
    }, {
      value: Chunk37113.ws.FPS_60,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_60
      })
    }], [U]),
    F = Chunk647438.useCallback(e => {
      c.Z.setKeybind(D(P({}, x), {
        shortcut: e
      }))
    }, [x]);
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 24,
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      disabled: !module,
      children: [!module && (0, Chunk951288.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        children: Chunk388032.intl.format(Chunk388032.t.kiaF4e, {
          onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
            section: Chunk981631.oAB.VOICE,
            subsection: Chunk526761.gP,
            scrollPosition: Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), L === Chunk894694.x.BELOW_MINIMUM ? (0, Chunk951288.jsx)(Chunk494620.Z, {
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
      })]
    }), M && j && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        disabled: !module,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.yXvykp),
          description: Chunk388032.intl.string(Chunk388032.t.YP3ujo),
          checked: Chunk512722,
          disabled: !module,
          onChange: e => O._Q({
            enabled: e,
            trackAnalytics: true
          })
        })
      })]
    }), k && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["3zwNf3"]),
          description: Chunk388032.intl.string(Chunk388032.t.m4Cjj4),
          checked: require,
          onChange: e => O.N0(e)
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.hjN, {
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 24,
        children: [(0, Chunk951288.jsx)(Chunk442334.Q, {
          select: Chunk39604.eU,
          title: Chunk388032.intl.string(Chunk388032.t.OgfUio),
          note: Chunk388032.intl.string(Chunk388032.t.H7j4tb),
          value: R,
          options: G
        }), (0, Chunk951288.jsx)(Chunk442334.Q, {
          select: e => O.yi({
            resolution: e,
            frameRate: w.frameRate
          }),
          title: Chunk388032.intl.string(Chunk388032.t.aFudZG),
          note: Chunk388032.intl.string(Chunk388032.t.nIrkW1),
          value: w.resolution,
          options: B
        }), (0, Chunk951288.jsx)(Chunk442334.Q, {
          select: e => O.yi({
            resolution: w.resolution,
            frameRate: e
          }),
          title: Chunk388032.intl.string(Chunk388032.t["2wScLy"]),
          note: Chunk388032.intl.string(Chunk388032.t["Rf9+f3"]),
          value: w.frameRate,
          options: Z
        }), (0, Chunk951288.jsx)(Chunk481060.NIc, {
          label: Chunk388032.intl.string(Chunk388032.t.pf54ER),
          description: Chunk388032.intl.string(Chunk388032.t["QyB/jI"]),
          layout: "horizontal",
          children: (0, Chunk951288.jsx)("div", {
            className: Chunk556865.keyRecorder,
            children: (0, Chunk951288.jsx)(Chunk825209.Z, {
              defaultValue: x.shortcut,
              onChange: F
            })
          })
        })]
      })
    })]
  })
}