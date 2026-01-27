/** Chunk was on web.js **/
/** chunk id: 217639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk953143 = require("./953143.jsx"),
  Chunk863291 = require("./863291.jsx"),
  Chunk302065 = require("./302065.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk210273 = require("./210273.js"),
  Chunk508155 = require("./508155.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811027 = require("./811027.js");
let g = function(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.uE,
    children: p.t.map(e => (0, r.jsxs)("div", {
      className: m.$Y,
      children: [e.tier === _.TVA.TIER_3 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a()(m.Bt, m.gP)
        }), (0, r.jsx)("div", {
          className: a()(m.Bt, m.zV)
        }), (0, r.jsxs)("div", {
          className: a()(m.d0, m.OP),
          children: [(0, r.jsx)(u.A, {
            className: m.qZ
          }), (0, r.jsx)(u.A, {
            className: m.xB
          }), (0, r.jsx)(c.A, {
            className: m.qi
          })]
        }), (0, r.jsx)("div", {
          className: a()(m.d0, m.FV),
          children: (0, r.jsx)(u.A, {
            className: m.qZ
          })
        })]
      }), e.tier === t.premiumTier && (0, r.jsx)(s.Text, {
        className: m._E,
        tag: "div",
        variant: "text-xs/semibold",
        color: "always-white",
        children: h.intl.string(h.t["9JbE3J"])
      }), (0, r.jsxs)("div", {
        className: m.Oj,
        children: [(0, r.jsx)(s.Heading, {
          className: m.Xk,
          variant: "heading-xxl/semibold",
          color: "always-white",
          children: (0, d.gb)(e.tier, {
            useLevels: false
          })
        }), (0, r.jsx)(s.Text, {
          className: m.$T,
          variant: "text-md/normal",
          color: "always-white",
          children: h.intl.format(h.t.vbAsA7, {
            numBoostsRequired: _.M2T[e.tier]
          })
        })]
      }), (0, r.jsx)("ul", {
        className: m.X8,
        children: e.perks.map((e, t) => {
          let n = (0, f.X)(e.perkIcon);
          return null == e.predicate || e.predicate() ? (0, r.jsxs)("li", {
            className: m.de,
            children: [(0, r.jsxs)(s.Text, {
              className: m.kt,
              variant: "text-md/normal",
              color: "always-white",
              children: [(0, r.jsx)(n, {
                className: m.Kd,
                color: o.A.colors.WHITE
              }), e.getCopy()]
            }), e.isNew ? (0, r.jsx)(l.A, {
              className: m.WN,
              forceUseColorForSparkles: true,
              shouldInheritBackgroundColor: true,
              shouldInheritTextColor: true
            }) : null]
          }, t) : null
        })
      })]
    }, e.tier))
  })
}