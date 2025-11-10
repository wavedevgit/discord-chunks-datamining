/** Chunk was on 27978 **/
/** chunk id: 685311, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk536285 = require("./536285.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");
let m = function(e) {
  let {
    match: t,
    location: n,
    attemptDeepLink: s
  } = e, [m, p] = i.useState(0);
  i.useEffect(() => {
    o.default.once("connected", () => {
      p(1)
    }), o.default.once("disconnected", () => {
      (0, d.uL)((0, c.M)())
    }), o.default.connect()
  }, []), i.useEffect(() => {
    if (0 !== m) return;
    let e = setTimeout(() => (0, d.uL)((0, c.M)()), 3e3);
    return () => clearTimeout(e)
  }, [m]);
  let f = i.useCallback(async (e, t) => {
    try {
      p(2), await s(e, t), p(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [s]);
  if ((0, d.DB)()) return null;
  switch (m) {
    case 1:
      return (0, r.jsxs)(u.ZP, {
        children: [(0, r.jsx)(u.Dx, {
          className: g.marginBottom8,
          children: h.intl.string(h.t.qllnGm)
        }), (0, r.jsx)(u.DK, {
          children: h.intl.string(h.t.SXCxye)
        }), (0, r.jsx)("div", {
          className: g.marginTop40,
          children: (0, r.jsx)(a.Button, {
            text: h.intl.string(h.t.UQvCf7),
            fullWidth: true,
            onClick: () => f(t, n)
          })
        }), (0, r.jsx)("div", {
          className: l()(g.marginTop8, g.marginCenterHorz),
          children: (0, r.jsx)(a.Avr, {
            text: h.intl.string(h.t["2ixEBi"]),
            textVariant: "text-sm/normal",
            onClick: () => (0, d.uL)((0, c.M)())
          })
        })]
      });
    case 0:
    case 2:
      return (0, r.jsxs)(u.ZP, {
        children: [(0, r.jsx)(u.Dx, {
          children: h.intl.string(h.t["Z+hCVU"])
        }), (0, r.jsx)(u.Hh, {})]
      });
    case 3:
      return (0, r.jsxs)(u.ZP, {
        children: [(0, r.jsx)(u.Dx, {
          className: g.marginBottom8,
          children: h.intl.string(h.t.csrAMJ)
        }), (0, r.jsx)(u.DK, {
          children: h.intl.string(h.t.ghBJz9)
        })]
      })
  }
}