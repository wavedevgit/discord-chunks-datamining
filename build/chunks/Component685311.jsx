/** Chunk was on 27978 **/
/** chunk id: 685311, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk536285 = require("./536285.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");
let g = function(e) {
  let {
    match: t,
    location: n,
    attemptDeepLink: s
  } = e, [g, p] = i.useState(0);
  i.useEffect(() => {
    a.default.once("connected", () => {
      p(1)
    }), a.default.once("disconnected", () => {
      (0, u.uL)((0, o.M)())
    }), a.default.connect()
  }, []), i.useEffect(() => {
    if (0 !== g) return;
    let e = setTimeout(() => (0, u.uL)((0, o.M)()), 3e3);
    return () => clearTimeout(e)
  }, [g]);
  let m = i.useCallback(async (e, t) => {
    try {
      p(2), await s(e, t), p(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [s]);
  if ((0, u.DB)()) return null;
  switch (g) {
    case 1:
      return (0, r.jsxs)(c.ZP, {
        children: [(0, r.jsx)(c.Dx, {
          className: h.marginBottom8,
          children: d.intl.string(d.t.qllnGm)
        }), (0, r.jsx)(c.DK, {
          children: d.intl.string(d.t.SXCxye)
        }), (0, r.jsx)(c.zx, {
          className: h.marginTop40,
          onClick: () => m(t, n),
          children: d.intl.string(d.t.UQvCf7)
        }), (0, r.jsx)(c.zx, {
          className: l()(h.marginTop8, h.marginCenterHorz),
          color: c.zx.Colors.LINK,
          look: c.zx.Looks.LINK,
          onClick: () => (0, u.uL)((0, o.M)()),
          children: d.intl.string(d.t["2ixEBi"])
        })]
      });
    case 0:
    case 2:
      return (0, r.jsxs)(c.ZP, {
        children: [(0, r.jsx)(c.Dx, {
          children: d.intl.string(d.t["Z+hCVU"])
        }), (0, r.jsx)(c.Hh, {})]
      });
    case 3:
      return (0, r.jsxs)(c.ZP, {
        children: [(0, r.jsx)(c.Dx, {
          className: h.marginBottom8,
          children: d.intl.string(d.t.csrAMJ)
        }), (0, r.jsx)(c.DK, {
          children: d.intl.string(d.t.ghBJz9)
        })]
      })
  }
}