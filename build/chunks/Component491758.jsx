/** Chunk was on web.js **/
/** chunk id: 491758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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

function N(e, t, n) {
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
      N(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D() {
  let e = (0, O.nq)(),
    t = (0, O.z8)(),
    n = (0, m.isWindows)(),
    {
      remindersEnabled: a,
      clipsLength: N,
      clipsQuality: w
    } = (0, s.cj)([E.Z], () => E.Z.getSettings()),
    D = (0, s.e7)([E.Z], () => E.Z.getHardwareClassification()),
    x = (0, s.e7)([h.ZP], () => h.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, true)),
    L = (0, s.e7)([h.ZP], () => h.ZP.getKeybindForAction(I.kg4.SAVE_SCREENSHOT, true)),
    j = (0, y.Z)(_.Z),
    {
      showClipsHeaderEntrypoint: M
    } = g.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    }),
    k = (0, g.PP)();
  o()(null != x, "Save clip keybind unset"), o()(null != L, "Save screenshot keybind unset");
  let U = (0, s.e7)([f.default], () => f.default.locale),
    G = i.useMemo(() => [{
      value: S.OT.SECONDS_30,
      label: C.intl.formatToPlainString(C.t["bTFv/3"], {
        count: 30
      })
    }, {
      value: S.OT.MINUTES_1,
      label: C.intl.formatToPlainString(C.t.ICo9Nk, {
        count: 1
      })
    }, {
      value: S.OT.MINUTES_2,
      label: C.intl.formatToPlainString(C.t.ICo9Nk, {
        count: 2
      })
    }], [U]),
    Z = i.useMemo(() => [{
      value: T.LY.RESOLUTION_480,
      label: C.intl.formatToPlainString(C.t.TEOC0I, {
        resolution: T.LY.RESOLUTION_480
      })
    }, {
      value: T.LY.RESOLUTION_720,
      label: C.intl.formatToPlainString(C.t.TEOC0I, {
        resolution: T.LY.RESOLUTION_720
      })
    }, {
      value: T.LY.RESOLUTION_1080,
      label: C.intl.formatToPlainString(C.t.TEOC0I, {
        resolution: T.LY.RESOLUTION_1080
      })
    }, {
      value: T.LY.RESOLUTION_1440,
      label: C.intl.formatToPlainString(C.t.TEOC0I, {
        resolution: T.LY.RESOLUTION_1440
      })
    }, {
      value: T.LY.RESOLUTION_SOURCE,
      label: C.intl.string(C.t.XjXqzh)
    }], [U]),
    F = i.useMemo(() => [{
      value: T.ws.FPS_15,
      label: C.intl.formatToPlainString(C.t.Qb44XH, {
        fps: T.ws.FPS_15
      })
    }, {
      value: T.ws.FPS_30,
      label: C.intl.formatToPlainString(C.t.Qb44XH, {
        fps: T.ws.FPS_30
      })
    }, {
      value: T.ws.FPS_60,
      label: C.intl.formatToPlainString(C.t.Qb44XH, {
        fps: T.ws.FPS_60
      })
    }], [U]),
    B = i.useCallback(e => {
      u.Z.setKeybind(R(P({}, x), {
        shortcut: e
      }))
    }, [x]),
    V = i.useCallback(e => {
      u.Z.setKeybind(R(P({}, L), {
        shortcut: e
      }))
    }, [L]);
  return (0, r.jsxs)(c.C3N, {
    children: [(0, r.jsx)(p.Z, {
      children: C.intl.string(C.t["Z+MfqT"])
    }), D === b.xH.BELOW_MINIMUM ? (0, r.jsx)(p.Z, {
      look: p.z.WARNING,
      children: C.intl.string(C.t.SIxrIF)
    }) : null, (0, r.jsx)(c.rsf, {
      label: C.intl.string(C.t.h8rgrK),
      description: C.intl.string(C.t["4Qw3NO"]),
      checked: t,
      onChange: e => v.em({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), n && j && (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(c.rsf, {
        label: C.intl.string(C.t.yXvykv),
        description: C.intl.string(C.t.YP3ujk),
        checked: e,
        onChange: e => v._Q({
          enabled: e,
          trackAnalytics: true
        })
      })
    }), M && (0, r.jsx)(c.rsf, {
      label: C.intl.string(C.t["3zwNf6"]),
      description: C.intl.string(C.t.m4Cjj9),
      checked: a,
      onChange: e => v.N0(e)
    }), (0, r.jsx)(l.y6, {
      onChange: v.eU,
      label: C.intl.string(C.t.OgfUio),
      description: C.intl.string(C.t.H7j4tY),
      value: N,
      options: G
    }), (0, r.jsx)(l.y6, {
      onChange: e => v.yi({
        resolution: e,
        frameRate: w.frameRate
      }),
      label: C.intl.string(C.t.aFudZJ),
      description: C.intl.string(C.t.nIrkW5),
      value: w.resolution,
      options: Z
    }), (0, r.jsx)(l.y6, {
      onChange: e => v.yi({
        resolution: w.resolution,
        frameRate: e
      }),
      label: C.intl.string(C.t["2wScL1"]),
      description: C.intl.string(C.t["Rf9+fy"]),
      value: w.frameRate,
      options: F
    }), (0, r.jsx)(c.gNt, {
      label: C.intl.string(C.t.pf54EU),
      description: C.intl.string(C.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: A.keyRecorder,
        children: (0, r.jsx)(d.Z, {
          defaultValue: x.shortcut,
          onChange: B
        })
      })
    }), k && (0, r.jsx)(c.gNt, {
      label: C.intl.string(C.t["0U/hj7"]),
      description: C.intl.string(C.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: A.keyRecorder,
        children: (0, r.jsx)(d.Z, {
          defaultValue: L.shortcut,
          onChange: V
        })
      })
    })]
  })
}