/** Chunk was on 30202 **/
/** chunk id: 64914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401430 = require("./401430.js"),
  Chunk100527 = require("./100527.js"),
  Chunk415439 = require("./415439.js"),
  Chunk956097 = require("./956097.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695103 = require("./695103.js"),
  Chunk998502 = require("./998502.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk399970 = require("./399970.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk692278 = require("./692278.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O() {
  let [e] = Chunk73800.useState(() => Chunk998502.ZP.getEnableHardwareAcceleration()), t = Chunk695346.bm.useSetting(), n = Chunk695346.Sb.useSetting(), O = (0, Chunk442837.e7)([Chunk695103.Z], () => Chunk695103.Z.testModeApplicationId), v = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.showPlayAgain), S = Chunk73800.useCallback(e => {
    h.bm.updateSetting(!e)
  }, []), T = Chunk73800.useCallback(e => {
    e ? (0, a.h7j)(e => (0, i.jsx)(b.Z, C({}, e))) : l.mc()
  }, []), N = Chunk73800.useCallback(e => {
    (0, c.BV)(e, o.Z.USER_SETTINGS)
  }, []), I = Chunk73800.useCallback(e => {
    (0, a.h7j)(t => {
      var n, r;
      let s = e ? j.intl.format(j.t.LYXRxM, {}) : j.intl.format(j.t.uDP3Ky, {});
      return (0, i.jsx)(a.ConfirmModal, (n = C({
        header: j.intl.string(j.t.aqpAvr),
        confirmText: j.intl.string(j.t.vT7ckp),
        cancelText: j.intl.string(j.t["ETE/oK"]),
        onConfirm: () => p.ZP.setEnableHardwareAcceleration(e)
      }, t), r = r = {
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: s
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    })
  }, []), {
    warpEnabled: y,
    warpConnecting: A,
    warpLog: P
  } = (0, Chunk442837.cj)([Chunk956097.Z], () => ({
    warpEnabled: Chunk956097.Z.enabled,
    warpConnecting: Chunk956097.Z.connecting,
    warpLog: Chunk956097.Z.log
  })), R = Chunk73800.useCallback(e => {
    e ? d.Z.connect() : d.Z.disconnect()
  }, []);
  return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t["8/udY2"]),
    children: [(0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk695346.Sb.updateSetting,
        note: Chunk388032.intl.format(Chunk388032.t["CY6q/f"], {
          apiDocsUrl: Chunk981631.EYA.API_DOCS
        }),
        children: Chunk388032.intl.string(Chunk388032.t.ObIb1d)
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        className: module ? "" : Chunk692278.formSwitchExtension,
        value: module,
        onChange: I,
        note: Chunk388032.intl.string(Chunk388032.t.Afc7l5),
        hideBorder: !module,
        children: Chunk388032.intl.string(Chunk388032.t["eOC/Fx"])
      })
    }), !module && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        children: Chunk388032.intl.string(Chunk388032.t.j7S6IS)
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk692278.infoBoxDivider
      })]
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: !exports,
        onChange: S,
        note: Chunk388032.intl.string(Chunk388032.t["8mYp39"]),
        children: Chunk388032.intl.string(Chunk388032.t.fi3UQE)
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: null != O,
        note: Chunk388032.intl.string(Chunk388032.t["52hMnJ"]),
        onChange: T,
        children: Chunk388032.intl.string(Chunk388032.t.erOqlp)
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: v,
        note: Chunk388032.intl.string(Chunk388032.t["B/qU4O"]),
        onChange: N,
        children: Chunk388032.intl.string(Chunk388032.t.qDZryM)
      })
    }), (0, Chunk255367.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.SETTINGS_ADVANCED_CF_WARP,
      children: [(0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: y,
        note: "Enable WARP Proxy Connection",
        onChange: R,
        children: "Enable WARP"
      }), A ? (0, Chunk255367.jsx)(Chunk481060.$jN, {}) : null, (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "code",
        children: P.map((e, t) => (0, i.jsx)("div", {
          children: JSON.stringify(e)
        }, t))
      })]
    })]
  })
}