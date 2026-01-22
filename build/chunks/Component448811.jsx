/** Chunk was on web.js **/
/** chunk id: 448811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk979286 = require("./979286.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk732475 = require("./732475.js");
let p = e => {
  let {
    onClose: t
  } = e, {
    analyticsLocations: n
  } = (0, o.Ay)(), p = () => {
    t(), (0, l.pX)(u.BVt.COLLECTIBLES_SHOP), (0, c.Cz)({
      analyticsSource: s.A.PREMIUM_PAYMENT_MODAL,
      analyticsLocations: n
    }), (0, a.jH)()
  };
  return (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)("div", {
      className: f.Wk,
      children: (0, r.jsx)(i.U1X, {
        size: "custom",
        width: 20,
        height: 20,
        color: i.LU0.colors.WHITE
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: d.intl.format(d.t.twSHte, {
        checkItOut: e => (0, r.jsx)(i.DUT, {
          className: f.nf,
          onClick: p,
          children: e
        })
      })
    })]
  })
}