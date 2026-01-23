/** Chunk was on web.js **/
/** chunk id: 807892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk532624 = require("./532624.js"),
  Chunk723702 = require("./723702.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753070 = require("./753070.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk203194 = require("./203194.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P() {
  let e = (0, b.XT)(),
    t = (0, b.Et)(),
    n = (0, h.isWindows)(),
    {
      remindersEnabled: a,
      clipsLength: C,
      clipsQuality: R
    } = (0, o.cf)([g.A], () => g.A.getSettings()),
    P = (0, o.bG)([g.A], () => g.A.getHardwareClassification()),
    D = (0, o.bG)([_.Ay], () => _.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, true)),
    x = (0, o.bG)([_.Ay], () => _.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, true)),
    L = (0, y.A)(p.A),
    {
      showClipsHeaderEntrypoint: j
    } = m.L_.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    }),
    M = (0, m.BW)();
  s()(null != D, "Save clip keybind unset"), s()(null != x, "Save screenshot keybind unset");
  let k = (0, o.bG)([d.default], () => d.default.locale),
    U = i.useMemo(() => [{
      id: "30sec",
      value: v.LX.SECONDS_30,
      label: S.intl.formatToPlainString(S.t["bTFv/3"], {
        count: 30
      })
    }, {
      id: "1min",
      value: v.LX.MINUTES_1,
      label: S.intl.formatToPlainString(S.t.ICo9Nk, {
        count: 1
      })
    }, {
      id: "2min",
      value: v.LX.MINUTES_2,
      label: S.intl.formatToPlainString(S.t.ICo9Nk, {
        count: 2
      })
    }], [k]),
    G = i.useMemo(() => [{
      id: "480p",
      value: I.on.RESOLUTION_480,
      label: S.intl.formatToPlainString(S.t.TEOC0I, {
        resolution: I.on.RESOLUTION_480
      })
    }, {
      id: "720p",
      value: I.on.RESOLUTION_720,
      label: S.intl.formatToPlainString(S.t.TEOC0I, {
        resolution: I.on.RESOLUTION_720
      })
    }, {
      id: "1080p",
      value: I.on.RESOLUTION_1080,
      label: S.intl.formatToPlainString(S.t.TEOC0I, {
        resolution: I.on.RESOLUTION_1080
      })
    }, {
      id: "1440p",
      value: I.on.RESOLUTION_1440,
      label: S.intl.formatToPlainString(S.t.TEOC0I, {
        resolution: I.on.RESOLUTION_1440
      })
    }, {
      id: "source",
      value: I.on.RESOLUTION_SOURCE,
      label: S.intl.string(S.t.XjXqzh)
    }], [k]),
    V = i.useMemo(() => [{
      id: "15fps",
      value: I.kn.FPS_15,
      label: S.intl.formatToPlainString(S.t.Qb44XH, {
        fps: I.kn.FPS_15
      })
    }, {
      id: "30fps",
      value: I.kn.FPS_30,
      label: S.intl.formatToPlainString(S.t.Qb44XH, {
        fps: I.kn.FPS_30
      })
    }, {
      id: "60fps",
      value: I.kn.FPS_60,
      label: S.intl.formatToPlainString(S.t.Qb44XH, {
        fps: I.kn.FPS_60
      })
    }], [k]),
    F = i.useCallback(e => {
      c.A.setKeybind(w(N({}, D), {
        shortcut: e
      }))
    }, [D]),
    B = i.useCallback(e => {
      c.A.setKeybind(w(N({}, x), {
        shortcut: e
      }))
    }, [x]);
  return (0, r.jsxs)(l.nVY, {
    children: [(0, r.jsx)(f.A, {
      children: S.intl.string(S.t["Z+MfqT"])
    }), P === E.k9.BELOW_MINIMUM ? (0, r.jsx)(f.A, {
      look: f.k.WARNING,
      children: S.intl.string(S.t.SIxrIF)
    }) : null, (0, r.jsx)(l.dOG, {
      label: S.intl.string(S.t.h8rgrK),
      description: S.intl.string(S.t["4Qw3NO"]),
      checked: t,
      onChange: e => O.yO({
        clipsEnabled: e,
        trackAnalytics: true
      })
    }), n && L && (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(l.dOG, {
        label: S.intl.string(S.t.yXvykv),
        description: S.intl.string(S.t.YP3ujk),
        checked: e,
        onChange: e => O.fd({
          enabled: e,
          trackAnalytics: true
        })
      })
    }), j && (0, r.jsx)(l.dOG, {
      label: S.intl.string(S.t["3zwNf6"]),
      description: S.intl.string(S.t.m4Cjj9),
      checked: a,
      onChange: e => O.Mt(e)
    }), (0, r.jsx)(l.l6P, {
      onSelectionChange: O.h$,
      label: S.intl.string(S.t.OgfUio),
      description: S.intl.string(S.t.H7j4tY),
      value: C,
      options: U,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.l6P, {
      onSelectionChange: e => {
        O.GS({
          resolution: e,
          frameRate: R.frameRate
        })
      },
      label: S.intl.string(S.t.aFudZJ),
      description: S.intl.string(S.t.nIrkW5),
      value: R.resolution,
      options: G,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.l6P, {
      onSelectionChange: e => {
        O.GS({
          resolution: R.resolution,
          frameRate: e
        })
      },
      label: S.intl.string(S.t["2wScL1"]),
      description: S.intl.string(S.t["Rf9+fy"]),
      value: R.frameRate,
      options: V,
      selectionMode: "single",
      fullWidth: true
    }), (0, r.jsx)(l.D0$, {
      label: S.intl.string(S.t.pf54EU),
      description: S.intl.string(S.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: T.g,
        children: (0, r.jsx)(u.A, {
          defaultValue: D.shortcut,
          onChange: F
        })
      })
    }), M && (0, r.jsx)(l.D0$, {
      label: S.intl.string(S.t["0U/hj7"]),
      description: S.intl.string(S.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, r.jsx)("div", {
        className: T.g,
        children: (0, r.jsx)(u.A, {
          defaultValue: x.shortcut,
          onChange: B
        })
      })
    })]
  })
}