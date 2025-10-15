/** Chunk was on 27978 **/
/** chunk id: 360887, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk773244 = require("./773244.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk362762 = require("./362762.js"),
  Chunk872549 = require("./872549.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    match: t,
    location: n
  } = e, l = (0, s.parse)(n.search).token, [g, b] = i.useState(false), j = (0, o.e7)([h.Z], () => h.Z.getState(n.pathname)), I = i.useCallback((e, t, n) => ({
    token: l,
    path: e,
    search: n,
    fingerprint: t
  }), [l]);
  return (i.useEffect(() => {
    if (null != l && (a.tq || a.Em)) {
      var e;
      let t = null == (e = m.default.getSuperProperties()) ? true : e.os,
        r = new URL(n.pathname + n.search, window.location.origin),
        i = (0, f.Gn)("one_time_login", t, r);
      window.location.href = i;
      return
    }
  }, [t, l, n]), a.tq || a.Em) ? null : (0, r.jsx)(c.Z, {
    deepLinkType: E.jE.ONE_TIME_LOGIN,
    path: n.pathname,
    search: n.search,
    paramsBuilder: I,
    children: (() => {
      if ((0, p.DB)()) return null;
      switch (j) {
        case x.kEZ.OPEN:
          return (0, r.jsxs)(d.ZP, {
            children: [(0, r.jsx)(d.Dx, {
              children: v.intl.string(v.t.csrAMJ)
            }), (0, r.jsx)(d.DK, {
              children: "Check your Discord app to continue with one-time login."
            })]
          });
        case x.kEZ.OPENING:
          return (0, r.jsxs)(d.ZP, {
            children: [(0, r.jsx)(d.Dx, {
              children: v.intl.string(v.t["Z+hCVU"])
            }), (0, r.jsx)(d.Hh, {})]
          });
        case x.kEZ.OPEN_FAIL:
        default:
          if (j === x.kEZ.OPEN_FAIL && !g && null != l) return (0, r.jsxs)(d.ZP, {
            children: [(0, r.jsx)(d.Dx, {
              children: "Trying to open Discord..."
            }), (0, r.jsx)(d.DK, {
              children: "Attempting to launch Discord with your one-time login."
            }), (0, r.jsx)(d.zx, {
              onClick: () => {
                let e = "discord://login/one-time?token=".concat(encodeURIComponent(l));
                _.Z.launch(e, () => b(true))
              },
              children: "Try Opening Discord"
            }), (0, r.jsx)(d.zx, {
              onClick: () => (0, p.uL)((0, u.M)()),
              style: {
                marginTop: "8px"
              },
              children: v.intl.string(v.t["2ixEBi"])
            })]
          });
          return (0, r.jsxs)(d.ZP, {
            children: [(0, r.jsx)(d.Dx, {
              children: v.intl.string(v.t.qllnGm)
            }), (0, r.jsx)(d.DK, {
              children: g ? "Unable to open Discord automatically. Please open Discord manually and try again, or continue in browser." : "Continue your one-time login in the browser."
            }), (0, r.jsx)(d.zx, {
              onClick: () => (0, p.uL)((0, u.M)()),
              children: "Login in Browser"
            })]
          })
      }
    })()
  })
}
let j = function(e) {
  let {
    enabled: t
  } = (0, g.WW)("OneTimeLoginCardWrapper");
  return t ? (0, r.jsx)(b, function(e) {
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
  }({}, e)) : (0, r.jsx)(l.l_, {
    to: x.Z5c.LOGIN
  })
}