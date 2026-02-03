/** Chunk was on 44669 **/
/** chunk id: 69435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O,
  D: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk271866 = require("./271866.js"),
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

function y() {
  let [e] = l.useState(() => d.Ay.getEnableHardwareAcceleration()), t = l.useCallback(e => {
    let t = e ? A.intl.format(A.t.LYXRxL, {}) : A.intl.format(A.t.uDP3Kz, {});
    (0, s.A)({
      title: A.intl.string(A.t.aqpAvn),
      subtitle: t,
      confirmText: A.intl.string(A.t.vT7ckk),
      onConfirm: () => d.Ay.setEnableHardwareAcceleration(e)
    })
  }, []);
  return (0, r.jsxs)(a.BJc, {
    children: [(0, r.jsx)(a.dOG, {
      label: A.intl.string(A.t["eOC/F2"]),
      description: A.intl.string(A.t.Afc7l6),
      checked: e,
      onChange: t
    }), !e && (0, r.jsx)(h.A, {
      look: h.k.WARNING,
      children: A.intl.string(A.t.j7S6IX)
    })]
  })
}

function O() {
  let e = p.l_.useSetting(),
    t = p.Q_.useSetting(),
    n = (0, i.bG)([u.A], () => u.A.testModeApplicationId),
    s = l.useCallback(e => {
      p.l_.updateSetting(!e)
    }, []),
    d = l.useCallback(e => {
      e ? (0, a.qfG)(e => (0, r.jsx)(g.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e))) : o.cL()
    }, []);
  return (0, r.jsx)(f.A, {
    title: A.intl.string(A.t["8/udY0"]),
    children: (0, r.jsxs)(a.BJc, {
      gap: 16,
      children: [(0, r.jsxs)(c.x, {
        setting: m.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
        children: [(0, r.jsx)(a.dOG, {
          label: A.intl.string(A.t.ObIb1Q),
          description: A.intl.format(A.t["CY6q/Q"], {
            apiDocsUrl: b.X7G.API_DOCS
          }),
          checked: t,
          onChange: p.Q_.updateSetting
        }), (0, r.jsx)(a.cGx, {})]
      }), (0, r.jsx)(c.x, {
        setting: m.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
        children: (0, r.jsxs)(a.BJc, {
          gap: 16,
          children: [(0, r.jsx)(y, {}), (0, r.jsx)(a.cGx, {})]
        })
      }), (0, r.jsxs)(c.x, {
        setting: m.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
        children: [(0, r.jsx)(a.dOG, {
          label: A.intl.string(A.t.fi3UQN),
          description: A.intl.string(A.t["8mYp37"]),
          checked: !e,
          onChange: s
        }), (0, r.jsx)(a.cGx, {})]
      }), (0, r.jsxs)(c.x, {
        setting: m.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
        children: [(0, r.jsx)(a.dOG, {
          label: A.intl.string(A.t.erOqlh),
          description: A.intl.string(A.t["52hMnD"]),
          checked: null != n,
          onChange: d
        }), (0, r.jsx)(a.cGx, {})]
      })]
    })
  })
}