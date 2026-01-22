/** Chunk was on web.js **/
/** chunk id: 683793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk250277 = require("./250277.js"),
  Chunk492735 = require("./492735.js"),
  Chunk350045 = require("./350045.js");
let f = function(e) {
  let {
    churnUserDiscountOffer: t,
    onDiscountClaim: n,
    onContinue: f
  } = e, p = (0, o.Ay)(), _ = (0, i.Mw)(p) ? u : d;
  return null == t ? null : (0, r.jsxs)("div", {
    className: c.bR,
    children: [(0, r.jsx)("div", {
      className: c.v0
    }), (0, r.jsx)("div", {
      className: c.X2
    }), (0, r.jsx)("div", {
      className: c.Dg,
      children: (0, r.jsxs)("div", {
        className: c.xt,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: _,
          className: c.lR
        }), (0, r.jsxs)("div", {
          className: c.t2,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            className: c.PU,
            children: l.intl.format(l.t["2gem05"], {
              percent: t.discount.amount,
              numMonths: t.discount.user_usage_limit
            })
          }), (0, r.jsxs)("div", {
            className: c.$t,
            children: [(0, r.jsxs)(s.wLn, {
              "data-migration-pending": true,
              className: c.Oy,
              innerClassName: c.iO,
              look: a.pR.OUTLINED,
              color: a.XD.CUSTOM,
              onClick: () => null == n ? true : n(),
              children: [(0, r.jsx)(s.tvc, {
                size: "xs",
                color: "currentColor",
                className: c.Fl
              }), (0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                className: c.H0,
                children: l.intl.string(l.t.zrCzVB)
              })]
            }), (0, r.jsx)(s.Button, {
              variant: "primary",
              text: l.intl.string(l.t["3PatSz"]),
              onClick: () => null == f ? true : f()
            })]
          })]
        })]
      })
    })]
  })
}