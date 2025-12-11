/** Chunk was on web.js **/
/** chunk id: 64914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => P,
  ZP: () => R,
  fD: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk401430 = require("./401430.js"),
  Chunk100527 = require("./100527.js"),
  Chunk415439 = require("./415439.js"),
  Chunk947851 = require("./947851.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695103 = require("./695103.js"),
  Chunk998502 = require("./998502.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk399970 = require("./399970.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let C = "AppHardwareAcceleration";

function A() {
  if ((0, Chunk947851.Y)("DesktopNativeUtils")) {
    let e = Chunk433517.K.get(C);
    if ("boolean" == typeof module) return module
  }
  return Chunk998502.ZP.getEnableHardwareAcceleration()
}

function N(e) {
  (0, f.Y)("DesktopNativeUtils") ? (o.K.set(C, e), m.ZP.setEnableHardwareAcceleration(true)) : m.ZP.setEnableHardwareAcceleration(e)
}

function P() {
  let [e] = Chunk473749.useState(() => A()), t = Chunk473749.useCallback(e => {
    let t = e ? S.intl.format(S.t.LYXRxL, {}) : S.intl.format(S.t.uDP3Kz, {});
    (0, s.Z)({
      title: S.intl.string(S.t.aqpAvn),
      subtitle: t,
      confirmText: S.intl.string(S.t.vT7ckk),
      onConfirm: () => N(e)
    })
  }, []);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["eOC/F2"]),
      description: Chunk388032.intl.string(Chunk388032.t.Afc7l6),
      checked: module,
      onChange: exports
    }), !module && (0, Chunk54381.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.j7S6IX)
    })]
  })
}

function R() {
  let e = Chunk695346.bm.useSetting(),
    t = Chunk695346.Sb.useSetting(),
    n = (0, Chunk442837.e7)([Chunk695103.Z], () => Chunk695103.Z.testModeApplicationId),
    o = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.showPlayAgain),
    s = Chunk473749.useCallback(e => {
      g.bm.updateSetting(!e)
    }, []),
    f = Chunk473749.useCallback(e => {
      e ? (0, l.h7j)(e => (0, r.jsx)(b.Z, T({}, e))) : c.mc()
    }, []),
    m = Chunk473749.useCallback(e => {
      (0, d.BV)(e, u.Z.USER_SETTINGS)
    }, []);
  return (0, Chunk54381.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      children: [(0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.ObIb1Q),
          description: Chunk388032.intl.format(Chunk388032.t["CY6q/Q"], {
            apiDocsUrl: Chunk981631.EYA.API_DOCS
          }),
          checked: exports,
          onChange: Chunk695346.Sb.updateSetting
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk54381.jsx)(P, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
        })
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.fi3UQN),
          description: Chunk388032.intl.string(Chunk388032.t["8mYp37"]),
          checked: !module,
          onChange: Chunk248514
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.erOqlh),
          description: Chunk388032.intl.string(Chunk388032.t["52hMnD"]),
          checked: null != require,
          onChange: Chunk947851
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.qDZryG),
          description: Chunk388032.intl.string(Chunk388032.t["B/qU4K"]),
          checked: Chunk433517,
          onChange: Chunk998502
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      })]
    })
  })
}