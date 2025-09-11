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
  Chunk230711 = require("./230711.js"),
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
  Chunk442334 = require("./442334.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298291 = require("./298291.js"),
  Chunk622025 = require("./622025.js"),
  Chunk10198 = require("./10198.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getHardwareEncoding()),
    {
      clipsEnabled: t,
      remindersEnabled: n,
      decoupledClipsEnabled: a,
      clipsLength: P,
      clipsQuality: D
    } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()),
    L = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()),
    j = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)),
    M = Chunk435064.Z.isDecoupledGameClippingEnabled(),
    k = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      showClipsHeaderEntrypoint: U
    } = Chunk924557.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
  o()(null != j, "Save clip keybind unset");
  let G = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    B = Chunk647438.useMemo(() => [{
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
    }], [G]),
    Z = Chunk647438.useMemo(() => [{
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
    }], [G]),
    F = Chunk647438.useMemo(() => [{
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
    }], [G]),
    V = Chunk647438.useCallback(e => {
      c.Z.setKeybind(x(w({}, j), {
        shortcut: e
      }))
    }, [j]);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      disabled: !module,
      children: [!module && (0, Chunk951288.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        className: Chunk622025.formItem,
        children: Chunk388032.intl.format(Chunk388032.t.kiaF4e, {
          onClick: () => Chunk230711.Z.open(Chunk981631.oAB.VOICE, Chunk526761.gP, {
            scrollPosition: Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), L === Chunk894694.x.BELOW_MINIMUM ? (0, Chunk951288.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        className: Chunk622025.formItem,
        children: Chunk388032.intl.string(Chunk388032.t.SIxrIC)
      }) : null, (0, Chunk951288.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        disabled: !module,
        className: Chunk622025.formItem,
        value: exports,
        note: Chunk388032.intl.string(Chunk388032.t["4Qw3ND"]),
        onChange: e => y.em({
          clipsEnabled: e,
          trackAnalytics: true
        }),
        children: Chunk388032.intl.string(Chunk388032.t.h8rgrK)
      }), module && (0, Chunk951288.jsx)(Chunk494620.Z, {
        className: Chunk622025.formItem,
        children: Chunk388032.intl.string(Chunk388032.t["Z+Mfqa"])
      })]
    }), M && k && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        className: Chunk10198.marginTop20,
        disabled: !module,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          hideBorder: true,
          disabled: !module,
          className: Chunk622025.formItem,
          value: Chunk512722,
          note: Chunk388032.intl.string(Chunk388032.t.YP3ujo),
          onChange: e => y._Q({
            enabled: e,
            trackAnalytics: true
          }),
          children: Chunk388032.intl.string(Chunk388032.t.yXvykp)
        })
      })]
    }), U && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        className: Chunk10198.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          hideBorder: true,
          className: Chunk622025.formItem,
          value: require,
          note: Chunk388032.intl.string(Chunk388032.t.m4Cjj4),
          onChange: e => y.N0(e),
          children: Chunk388032.intl.string(Chunk388032.t["3zwNf3"])
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: Chunk10198.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk442334.Q, {
        className: Chunk622025.formItem,
        select: Chunk39604.eU,
        title: Chunk388032.intl.string(Chunk388032.t.OgfUio),
        note: Chunk388032.intl.string(Chunk388032.t.H7j4tb),
        value: P,
        options: B
      }), (0, Chunk951288.jsx)(Chunk442334.Q, {
        className: Chunk622025.formItem,
        select: e => y.yi({
          resolution: e,
          frameRate: D.frameRate
        }),
        title: Chunk388032.intl.string(Chunk388032.t.aFudZG),
        note: Chunk388032.intl.string(Chunk388032.t.nIrkW1),
        value: D.resolution,
        options: Z
      }), (0, Chunk951288.jsx)(Chunk442334.Q, {
        className: Chunk622025.formItem,
        select: e => y.yi({
          resolution: D.resolution,
          frameRate: e
        }),
        title: Chunk388032.intl.string(Chunk388032.t["2wScLy"]),
        note: Chunk388032.intl.string(Chunk388032.t["Rf9+f3"]),
        value: D.frameRate,
        options: F
      }), (0, Chunk951288.jsx)(Chunk442334.O, {
        className: Chunk622025.formItem,
        title: Chunk388032.intl.string(Chunk388032.t.pf54ER),
        note: Chunk388032.intl.string(Chunk388032.t["QyB/jI"]),
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk298291.keyRecorder,
          children: (0, Chunk951288.jsx)(Chunk825209.Z, {
            defaultValue: j.shortcut,
            onChange: V
          })
        })
      })]
    })]
  })
}