/** Chunk was on web.js **/
/** chunk id: 69435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C,
  DS: () => T,
  yW: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk271866 = require("./271866.js"),
  Chunk724122 = require("./724122.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk147964 = require("./147964.js"),
  Chunk837921 = require("./837921.js"),
  Chunk253932 = require("./253932.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk912615 = require("./912615.jsx"),
  Chunk790174 = require("./790174.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
let A = "AppHardwareAcceleration";

function I() {
  if ((0, u.W)("DesktopNativeUtils")) {
    let e = s.w.get(A);
    if ("boolean" == typeof e) return e
  }
  return p.Ay.getEnableHardwareAcceleration()
}

function S(e) {
  (0, u.W)("DesktopNativeUtils") ? (s.w.set(A, e), p.Ay.setEnableHardwareAcceleration(true)) : p.Ay.setEnableHardwareAcceleration(e)
}

function T() {
  let [e] = i.useState(() => I()), t = i.useCallback(e => {
    let t = e ? b.intl.format(b.t.LYXRxL, {}) : b.intl.format(b.t.uDP3Kz, {});
    (0, o.A)({
      title: b.intl.string(b.t.aqpAvn),
      subtitle: t,
      confirmText: b.intl.string(b.t.vT7ckk),
      onConfirm: () => S(e)
    })
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.dOG, {
      label: b.intl.string(b.t["eOC/F2"]),
      description: b.intl.string(b.t.Afc7l6),
      checked: e,
      onChange: t
    }), !e && (0, r.jsx)(h.A, {
      look: h.k.WARNING,
      children: b.intl.string(b.t.j7S6IX)
    })]
  })
}

function C() {
  let e = _.l_.useSetting(),
    t = _.Q_.useSetting(),
    n = (0, a.bG)([f.A], () => f.A.testModeApplicationId),
    s = i.useCallback(e => {
      _.l_.updateSetting(!e)
    }, []),
    o = i.useCallback(e => {
      e ? (0, l.qfG)(e => (0, r.jsx)(m.A, v({}, e))) : c.cL()
    }, []);
  return (0, r.jsx)(g.A, {
    title: b.intl.string(b.t["8/udY0"]),
    children: (0, r.jsxs)(l.BJc, {
      gap: 16,
      children: [(0, r.jsxs)(d.x, {
        setting: E.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
        children: [(0, r.jsx)(l.dOG, {
          label: b.intl.string(b.t.ObIb1Q),
          description: b.intl.format(b.t["CY6q/Q"], {
            apiDocsUrl: y.X7G.API_DOCS
          }),
          checked: t,
          onChange: _.Q_.updateSetting
        }), (0, r.jsx)(l.cGx, {})]
      }), (0, r.jsx)(d.x, {
        setting: E.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
        children: (0, r.jsxs)(l.BJc, {
          gap: 16,
          children: [(0, r.jsx)(T, {}), (0, r.jsx)(l.cGx, {})]
        })
      }), (0, r.jsxs)(d.x, {
        setting: E.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
        children: [(0, r.jsx)(l.dOG, {
          label: b.intl.string(b.t.fi3UQN),
          description: b.intl.string(b.t["8mYp37"]),
          checked: !e,
          onChange: s
        }), (0, r.jsx)(l.cGx, {})]
      }), (0, r.jsxs)(d.x, {
        setting: E.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
        children: [(0, r.jsx)(l.dOG, {
          label: b.intl.string(b.t.erOqlh),
          description: b.intl.string(b.t["52hMnD"]),
          checked: null != n,
          onChange: o
        }), (0, r.jsx)(l.cGx, {})]
      })]
    })
  })
}