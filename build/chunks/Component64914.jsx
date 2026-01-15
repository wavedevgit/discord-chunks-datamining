/** Chunk was on web.js **/
/** chunk id: 64914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => C,
  ZP: () => A,
  fD: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk401430 = require("./401430.js"),
  Chunk947851 = require("./947851.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk695103 = require("./695103.js"),
  Chunk998502 = require("./998502.js"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk399970 = require("./399970.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let S = "AppHardwareAcceleration";

function I() {
  if ((0, u.Y)("DesktopNativeUtils")) {
    let e = o.K.get(S);
    if ("boolean" == typeof e) return e
  }
  return p.ZP.getEnableHardwareAcceleration()
}

function T(e) {
  (0, u.Y)("DesktopNativeUtils") ? (o.K.set(S, e), p.ZP.setEnableHardwareAcceleration(true)) : p.ZP.setEnableHardwareAcceleration(e)
}

function C() {
  let [e] = i.useState(() => I()), t = i.useCallback(e => {
    let t = e ? y.intl.format(y.t.LYXRxL, {}) : y.intl.format(y.t.uDP3Kz, {});
    (0, s.Z)({
      title: y.intl.string(y.t.aqpAvn),
      subtitle: t,
      confirmText: y.intl.string(y.t.vT7ckk),
      onConfirm: () => T(e)
    })
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.rsf, {
      label: y.intl.string(y.t["eOC/F2"]),
      description: y.intl.string(y.t.Afc7l6),
      checked: e,
      onChange: t
    }), !e && (0, r.jsx)(h.Z, {
      look: h.z.WARNING,
      children: y.intl.string(y.t.j7S6IX)
    })]
  })
}

function A() {
  let e = _.bm.useSetting(),
    t = _.Sb.useSetting(),
    n = (0, a.e7)([f.Z], () => f.Z.testModeApplicationId),
    o = i.useCallback(e => {
      _.bm.updateSetting(!e)
    }, []),
    s = i.useCallback(e => {
      e ? (0, l.h7j)(e => (0, r.jsx)(m.Z, v({}, e))) : c.mc()
    }, []);
  return (0, r.jsx)(g.Z, {
    title: y.intl.string(y.t["8/udY0"]),
    children: (0, r.jsxs)(l.Kqy, {
      gap: 16,
      children: [(0, r.jsxs)(d.F, {
        setting: E.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
        children: [(0, r.jsx)(l.rsf, {
          label: y.intl.string(y.t.ObIb1Q),
          description: y.intl.format(y.t["CY6q/Q"], {
            apiDocsUrl: b.EYA.API_DOCS
          }),
          checked: t,
          onChange: _.Sb.updateSetting
        }), (0, r.jsx)(l.izJ, {})]
      }), (0, r.jsx)(d.F, {
        setting: E.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
        children: (0, r.jsxs)(l.Kqy, {
          gap: 16,
          children: [(0, r.jsx)(C, {}), (0, r.jsx)(l.izJ, {})]
        })
      }), (0, r.jsxs)(d.F, {
        setting: E.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
        children: [(0, r.jsx)(l.rsf, {
          label: y.intl.string(y.t.fi3UQN),
          description: y.intl.string(y.t["8mYp37"]),
          checked: !e,
          onChange: o
        }), (0, r.jsx)(l.izJ, {})]
      }), (0, r.jsxs)(d.F, {
        setting: E.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
        children: [(0, r.jsx)(l.rsf, {
          label: y.intl.string(y.t.erOqlh),
          description: y.intl.string(y.t["52hMnD"]),
          checked: null != n,
          onChange: s
        }), (0, r.jsx)(l.izJ, {})]
      })]
    })
  })
}