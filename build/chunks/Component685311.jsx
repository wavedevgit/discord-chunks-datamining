/** Chunk was on 27978 **/
/** chunk id: 685311, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk536285 = require("./536285.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");
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
      (0, d.uL)((0, c.M)())
    }), o.default.connect()
  }, []), i.useEffect(() => {
    if (0 !== g) return;
    let e = setTimeout(() => (0, d.uL)((0, c.M)()), 3e3);
    return () => clearTimeout(e)
  }, [g]);
  let p = i.useCallback(async (e, t) => {
    try {
      m(2), await s(e, t), m(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [s]);
  if ((0, d.DB)()) return null;
  switch (g) {
    case 1:
      return (0, r.jsxs)(u.ZP, {
        children: [(0, r.jsx)(u.Dx, {
          className: f.marginBottom8,
          children: h.intl.string(h.t.qllnGm)
        }), (0, r.jsx)(u.DK, {
          children: h.intl.string(h.t.SXCxye)
        }), (0, r.jsx)("div", {
          className: f.marginTop40,
          children: (0, r.jsx)(l.Button, {
            text: h.intl.string(h.t.UQvCf7),
            fullWidth: true,
            onClick: () => p(t, n)
          })
        }), (0, r.jsx)("div", {
          className: a()(f.marginTop8, f.marginCenterHorz),
          children: (0, r.jsx)(l.Avr, {
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
          className: f.marginBottom8,
          children: h.intl.string(h.t.csrAMJ)
        }), (0, r.jsx)(u.DK, {
          children: h.intl.string(h.t.ghBJz9)
        })]
      })
  }
}