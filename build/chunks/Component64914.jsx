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
  if ((0, Chunk947851.Y)("DesktopNativeUtils")) {
    let e = Chunk433517.K.get(S);
    if ("boolean" == typeof module) return module
  }
  return Chunk998502.ZP.getEnableHardwareAcceleration()
}

function T(e) {
  (0, u.Y)("DesktopNativeUtils") ? (o.K.set(S, e), p.ZP.setEnableHardwareAcceleration(true)) : p.ZP.setEnableHardwareAcceleration(e)
}

function C() {
  let [e] = Chunk473749.useState(() => I()), t = Chunk473749.useCallback(e => {
    let t = e ? y.intl.format(y.t.LYXRxL, {}) : y.intl.format(y.t.uDP3Kz, {});
    (0, s.Z)({
      title: y.intl.string(y.t.aqpAvn),
      subtitle: t,
      confirmText: y.intl.string(y.t.vT7ckk),
      onConfirm: () => T(e)
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

function A() {
  let e = Chunk695346.bm.useSetting(),
    t = Chunk695346.Sb.useSetting(),
    n = (0, Chunk442837.e7)([Chunk695103.Z], () => Chunk695103.Z.testModeApplicationId),
    o = Chunk473749.useCallback(e => {
      _.bm.updateSetting(!e)
    }, []),
    s = Chunk473749.useCallback(e => {
      e ? (0, l.h7j)(e => (0, r.jsx)(h.Z, v({}, e))) : c.mc()
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
          children: [(0, Chunk54381.jsx)(C, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
        })
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.fi3UQN),
          description: Chunk388032.intl.string(Chunk388032.t["8mYp37"]),
          checked: !module,
          onChange: Chunk433517
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.erOqlh),
          description: Chunk388032.intl.string(Chunk388032.t["52hMnD"]),
          checked: null != require,
          onChange: Chunk248514
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
      })]
    })
  })
}