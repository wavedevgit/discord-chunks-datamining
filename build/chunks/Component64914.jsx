/** Chunk was on web.js **/
/** chunk id: 64914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => D,
  fD: () => P
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401430 = require("./401430.js"),
  Chunk100527 = require("./100527.js"),
  Chunk415439 = require("./415439.js"),
  Chunk956097 = require("./956097.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk247595 = require("./247595.js");

function S(e, t, n) {
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
      S(e, t, n[t])
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
let R = "AppHardwareAcceleration";

function P() {
  if ((0, Chunk947851.Y)("DesktopNativeUtils")) {
    let e = Chunk433517.K.get(R);
    if ("boolean" == typeof module) return module
  }
  return Chunk998502.ZP.getEnableHardwareAcceleration()
}

function w(e) {
  (0, f.Y)("DesktopNativeUtils") ? (o.K.set(R, e), h.ZP.setEnableHardwareAcceleration(true)) : h.ZP.setEnableHardwareAcceleration(e)
}

function D() {
  let [e] = Chunk647438.useState(() => P()), t = Chunk695346.bm.useSetting(), n = Chunk695346.Sb.useSetting(), o = (0, Chunk442837.e7)([Chunk695103.Z], () => Chunk695103.Z.testModeApplicationId), f = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.showPlayAgain), h = Chunk647438.useCallback(e => {
    g.bm.updateSetting(!e)
  }, []), S = Chunk647438.useCallback(e => {
    e ? (0, s.h7j)(e => (0, r.jsx)(b.Z, A({}, e))) : l.mc()
  }, []), C = Chunk647438.useCallback(e => {
    (0, u.BV)(e, c.Z.USER_SETTINGS)
  }, []), R = Chunk647438.useCallback(e => {
    (0, s.h7j)(t => {
      let n = e ? I.intl.format(I.t.LYXRxM, {}) : I.intl.format(I.t.uDP3Ky, {});
      return (0, r.jsx)(s.ConfirmModal, N(A({
        header: I.intl.string(I.t.aqpAvr),
        confirmText: I.intl.string(I.t.vT7ckp),
        cancelText: I.intl.string(I.t["ETE/oK"]),
        onConfirm: () => w(e)
      }, t), {
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: n
        })
      }))
    })
  }, []), {
    warpEnabled: D,
    warpConnecting: L,
    warpLog: x
  } = (0, Chunk442837.cj)([Chunk956097.Z], () => ({
    warpEnabled: Chunk956097.Z.enabled,
    warpConnecting: Chunk956097.Z.connecting,
    warpLog: Chunk956097.Z.log
  })), j = Chunk647438.useCallback(e => {
    e ? d.Z.connect() : d.Z.disconnect()
  }, []);
  return (0, Chunk951288.jsxs)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["8/udY2"]),
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk695346.Sb.updateSetting,
        note: Chunk388032.intl.format(Chunk388032.t["CY6q/f"], {
          apiDocsUrl: Chunk981631.EYA.API_DOCS
        }),
        children: Chunk388032.intl.string(Chunk388032.t.ObIb1d)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: module ? "" : Chunk247595.formSwitchExtension,
        value: module,
        onChange: R,
        note: Chunk388032.intl.string(Chunk388032.t.Afc7l5),
        hideBorder: !module,
        children: Chunk388032.intl.string(Chunk388032.t["eOC/Fx"])
      })
    }), !module && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        children: Chunk388032.intl.string(Chunk388032.t.j7S6IS)
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk247595.infoBoxDivider
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: !exports,
        onChange: Chunk998502,
        note: Chunk388032.intl.string(Chunk388032.t["8mYp39"]),
        children: Chunk388032.intl.string(Chunk388032.t.fi3UQE)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: null != Chunk433517,
        note: Chunk388032.intl.string(Chunk388032.t["52hMnJ"]),
        onChange: S,
        children: Chunk388032.intl.string(Chunk388032.t.erOqlp)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk947851,
        note: Chunk388032.intl.string(Chunk388032.t["B/qU4O"]),
        onChange: C,
        children: Chunk388032.intl.string(Chunk388032.t.qDZryM)
      })
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_CF_WARP,
      children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: D,
        note: "Enable WARP Proxy Connection",
        onChange: j,
        children: "Enable WARP"
      }), L ? (0, Chunk951288.jsx)(Chunk481060.$jN, {}) : null, (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "code",
        children: x.map((e, t) => (0, r.jsx)("div", {
          children: JSON.stringify(e)
        }, t))
      })]
    })]
  })
}