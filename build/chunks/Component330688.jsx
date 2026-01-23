/** Chunk was on web.js **/
/** chunk id: 330688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => I,
  TU: () => A,
  hH: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk555444 = require("./555444.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk825468 = require("./825468.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let b = !Chunk723702.isPlatformEmbedded;

function O(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function v(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: i,
      delay: c,
      pttLatchingEnabled: E
    } = (0, a.cf)([u.A], () => u.A.getModeOptions()),
    {
      enableLatching: y
    } = (0, f.y)({
      location: "PTTTools"
    });
  return t = d.isPlatformEmbedded || n !== m.TBI.PUSH_TO_TALK ? (0, r.jsx)(s.po8, {
    messageType: s.YCn.INFO,
    children: g.intl.format(g.t.HVvn5T, {
      onClick: () => (0, _.openUserSettings)(p.X.KEYBINDS_PANEL, {
        section: m.nc_.KEYBINDS
      })
    })
  }) : (0, r.jsx)(s.po8, {
    messageType: s.YCn.WARNING,
    children: g.intl.format(g.t.zvMPOc, {
      onDownloadClick: () => (0, h._)("Help Text PTT")
    })
  }), (0, r.jsxs)(s.BJc, {
    gap: 20,
    children: [(0, r.jsxs)(s.BJc, {
      gap: 16,
      direction: "horizontal",
      children: [(0, r.jsx)(s.D0$, {
        label: g.intl.string(g.t.YkDjVM),
        children: (0, r.jsx)(l.A, {
          defaultValue: i,
          onChange: e => o.A.setMode(n, {
            shortcut: e
          })
        })
      }), (0, r.jsx)(s.Apm, {
        label: g.intl.string(g.t.y0ShVt),
        initialValue: c,
        onValueChange: e => o.A.setMode(n, {
          delay: e
        }),
        onValueRender: O,
        maxValue: m.IjB
      })]
    }), y && (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t.EGn1eN),
      description: g.intl.string(g.t.iT257i),
      checked: null != E && E,
      onChange: e => o.A.setMode(n, {
        pttLatchingEnabled: e
      })
    }), t]
  })
}

function A(e, t) {
  e === m.TBI.PUSH_TO_TALK && b && (0, s.mMO)(async () => {
    let {
      default: e
    } = await n.e("10919").then(n.bind(n, 556506));
    return t => (0, r.jsx)(e, y({
      title: g.intl.string(g.t.Kdt0Gb),
      confirmText: g.intl.string(g.t["1WjMbC"]),
      cancelText: g.intl.string(g.t.BddRzS),
      onConfirm: () => (0, h._)("PTT Limited Modal"),
      body: g.intl.string(g.t.NIozvt)
    }, t))
  }), o.A.setMode(e, true, true, {
    analyticsLocations: t
  })
}

function I() {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(), t = (0, a.bG)([u.A], () => u.A.getMode()), n = [{
    value: m.TBI.VOICE_ACTIVITY,
    name: g.intl.string(g.t.cHCEOJ)
  }, {
    value: m.TBI.PUSH_TO_TALK,
    name: b ? g.intl.string(g.t["1AINrB"]) : g.intl.string(g.t.Q8gkVL)
  }], o = i.useCallback(t => {
    let {
      value: n
    } = t;
    A(n, e)
  }, [e]);
  return (0, r.jsxs)(s.BJc, {
    gap: 20,
    children: [(0, r.jsx)(s.z6M, {
      label: g.intl.string(g.t["pS+K2L"]),
      onChange: e => o({
        value: e
      }),
      options: n,
      value: t
    }), t === m.TBI.PUSH_TO_TALK && (0, r.jsx)(v, {
      inputMode: t
    })]
  })
}