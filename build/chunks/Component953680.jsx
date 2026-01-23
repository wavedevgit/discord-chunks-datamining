/** Chunk was on 86142 **/
/** chunk id: 953680, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk129014 = require("./129014.js"),
  Chunk642277 = require("./642277.jsx"),
  Chunk854378 = require("./854378.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");
let g = function(e) {
  let {
    match: t,
    location: n,
    attemptDeepLink: s
  } = e, [g, m] = i.useState(0);
  i.useEffect(() => {
    o.default.once("connected", () => {
      m(1)
    }), o.default.once("disconnected", () => {
      (0, d.pX)((0, c.W)())
    }), o.default.connect()
  }, []), i.useEffect(() => {
    if (0 !== g) return;
    let e = setTimeout(() => (0, d.pX)((0, c.W)()), 3e3);
    return () => clearTimeout(e)
  }, [g]);
  let f = i.useCallback(async (e, t) => {
    try {
      m(2), await s(e, t), m(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [s]);
  if ((0, d.MX)()) return null;
  switch (g) {
    case 1:
      return (0, r.jsxs)(u.Ay, {
        children: [(0, r.jsx)(u.hE, {
          className: p.QB,
          children: h.intl.string(h.t.qllnGm)
        }), (0, r.jsx)(u.tK, {
          children: h.intl.string(h.t.SXCxye)
        }), (0, r.jsx)("div", {
          className: p.eT,
          children: (0, r.jsx)(a.Button, {
            text: h.intl.string(h.t.UQvCf7),
            fullWidth: true,
            onClick: () => f(t, n)
          })
        }), (0, r.jsx)("div", {
          className: l()(p.Ot, p.F1),
          children: (0, r.jsx)(a.QWc, {
            text: h.intl.string(h.t["2ixEBi"]),
            textVariant: "text-sm/normal",
            onClick: () => (0, d.pX)((0, c.W)())
          })
        })]
      });
    case 0:
    case 2:
      return (0, r.jsxs)(u.Ay, {
        children: [(0, r.jsx)(u.hE, {
          children: h.intl.string(h.t["Z+hCVU"])
        }), (0, r.jsx)(u.CK, {})]
      });
    case 3:
      return (0, r.jsxs)(u.Ay, {
        children: [(0, r.jsx)(u.hE, {
          className: p.QB,
          children: h.intl.string(h.t.csrAMJ)
        }), (0, r.jsx)(u.tK, {
          children: h.intl.string(h.t.ghBJz9)
        })]
      })
  }
}