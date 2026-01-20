/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk358085 = require("./358085.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263753 = require("./263753.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
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

function R() {
  let e = (0, y.nq)(),
    t = (0, y.z8)(),
    n = (0, h.isWindows)(),
    {
      remindersEnabled: a,
      clipsLength: A,
      clipsQuality: P
    } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
    R = (0, s.e7)([g.Z], () => g.Z.getHardwareClassification()),
    D = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_CLIP, true)),
    x = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_SCREENSHOT, true)),
    L = (0, b.Z)(p.Z),
    {
      showClipsHeaderEntrypoint: j
    } = m.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    }),
    M = (0, m.PP)();
  o()(null != D, "Save clip keybind unset"), o()(null != x, "Save screenshot keybind unset");
  let k = (0, s.e7)([d.default], () => d.default.locale),
    U = i.useMemo(() => [{
      id: "30sec",
      value: v.OT.SECONDS_30,
      label: T.intl.formatToPlainString(T.t["bTFv/3"], {
        count: 30
      })
    }, {
      id: "1min",
      value: v.OT.MINUTES_1,
      label: T.intl.formatToPlainString(T.t.ICo9Nk, {
        count: 1
      })
    }, {
      id: "2min",
      value: v.OT.MINUTES_2,
      label: T.intl.formatToPlainString(T.t.ICo9Nk, {
        count: 2
      })
    }], [k]),
    G = i.useMemo(() => [{
      id: "480p",
      value: I.LY.RESOLUTION_480,
      label: T.intl.formatToPlainString(T.t.TEOC0I, {
        resolution: I.LY.RESOLUTION_480
      })
    }, {
      id: "720p",
      value: I.LY.RESOLUTION_720,
      label: T.intl.formatToPlainString(T.t.TEOC0I, {
        resolution: I.LY.RESOLUTION_720
      })
    }, {
      id: "1080p",
      value: I.LY.RESOLUTION_1080,
      label: T.intl.formatToPlainString(T.t.TEOC0I, {
        resolution: I.LY.RESOLUTION_1080
      })
    }, {
      id: "1440p",
      value: I.LY.RESOLUTION_1440,
      label: T.intl.formatToPlainString(T.t.TEOC0I, {
        resolution: I.LY.RESOLUTION_1440
      })
    }, {
      id: "source",
      value: I.LY.RESOLUTION_SOURCE,
      label: T.intl.string(T.t.XjXqzh)
    }], [k]),
    Z = i.useMemo(() => [{
      id: "15fps",
      value: I.ws.FPS_15,
      label: T.intl.formatToPlainString(T.t.Qb44XH, {
        fps: I.ws.FPS_15
      })
    }, {
      id: "30fps",
      value: I.ws.FPS_30,
      label: T.intl.formatToPlainString(T.t.Qb44XH, {
        fps: I.ws.FPS_30
      })
    }, {
      id: "60fps",
      value: I.ws.FPS_60,
      label: T.intl.formatToPlainString(T.t.Qb44XH, {
        fps: I.ws.FPS_60
      })
    }], [k]),
    F = i.useCallback(e => {
      c.Z.setKeybind(w(N({}, D), {
        shortcut: e
      }))
    }, [D]),
    B = i.useCallback(e => {
      c.Z.setKeybind(w(N({}, x), {
        shortcut: e
      }))
    }, [x]);
  return (0, r.jsxs)(l.C3N, {
    children: [(0, r.jsx)(f.Z, {
      children: T.intl.string(T.t["Z+MfqT"])
    }), R === E.xH.BELOW_MINIMUM ? (0, r.jsx)(f.Z, {
      look: f.z.WARNING,
      children: T.intl.string(T.t.SIxrIF)
    }) : null, (0, r.jsx)(l.rsf, {
      label: T.intl.string(T.t.h8rgrK),
      description: T.intl.string(T.t["4Qw3NO"]),
      checked: t,
      onChange: e => O.em({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), n && L && (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(l.rsf, {
        label: T.intl.string(T.t.yXvykv),
        description: T.intl.string(T.t.YP3ujk),
        checked: e,
        onChange: e => O._Q({
          enabled: e,
          trackAnalytics: true
        })
      })
    }), j && (0, r.jsx)(l.rsf, {
      label: T.intl.string(T.t["3zwNf6"]),
      description: T.intl.string(T.t.m4Cjj9),
      checked: a,
      onChange: e => O.N0(e)
    }), (0, r.jsx)(l.PhF, {
      onSelectionChange: O.eU,
      label: T.intl.string(T.t.OgfUio),
      description: T.intl.string(T.t.H7j4tY),
      value: A,
      options: U,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.PhF, {
      onSelectionChange: e => {
        O.yi({
          resolution: e,
          frameRate: P.frameRate
        })
      },
      label: T.intl.string(T.t.aFudZJ),
      description: T.intl.string(T.t.nIrkW5),
      value: P.resolution,
      options: G,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.PhF, {
      onSelectionChange: e => {
        O.yi({
          resolution: P.resolution,
          frameRate: e
        })
      },
      label: T.intl.string(T.t["2wScL1"]),
      description: T.intl.string(T.t["Rf9+fy"]),
      value: P.frameRate,
      options: Z,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.gNt, {
      label: T.intl.string(T.t.pf54EU),
      description: T.intl.string(T.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: C.keyRecorder,
        children: (0, r.jsx)(u.Z, {
          defaultValue: D.shortcut,
          onChange: F
        })
      })
    }), M && (0, r.jsx)(l.gNt, {
      label: T.intl.string(T.t["0U/hj7"]),
      description: T.intl.string(T.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: C.keyRecorder,
        children: (0, r.jsx)(u.Z, {
          defaultValue: x.shortcut,
          onChange: B
        })
      })
    })]
  })
}