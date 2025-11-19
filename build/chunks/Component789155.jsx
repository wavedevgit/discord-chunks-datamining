/** Chunk was on web.js **/
/** chunk id: 789155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978774 = require("./978774.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");
let f = function(e) {
  let {
    churnUserDiscountOffer: t,
    onDiscountClaim: n,
    onContinue: f
  } = e, _ = (0, s.ZP)(), p = (0, i.wj)(_) ? u : d;
  return null == t ? null : (0, r.jsxs)("div", {
    className: c.churnFooterContainer,
    children: [(0, r.jsx)("div", {
      className: c.churnFooterGlow
    }), (0, r.jsx)("div", {
      className: c.churnFooterTopBorder
    }), (0, r.jsx)("div", {
      className: c.churnFooterContent,
      children: (0, r.jsxs)("div", {
        className: c.churnFooterContentBody,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: p,
          className: c.churnFooterIcon
        }), (0, r.jsxs)("div", {
          className: c.churnFooterContentBodyInner,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            className: c.churnFooterCopy,
            children: l.intl.format(l.t["2gem05"], {
              percent: t.discount.amount,
              numMonths: t.discount.user_usage_limit
            })
          }), (0, r.jsxs)("div", {
            className: c.churnFooterCTAs,
            children: [(0, r.jsxs)(o.gtL, {
              "data-migration-pending": true,
              className: c.churnFooterClaimCTA,
              innerClassName: c.churnFooterClaimCTAInner,
              look: a.iL.OUTLINED,
              color: a.Tt.CUSTOM,
              onClick: () => null == n ? true : n(),
              children: [(0, r.jsx)(o.SrA, {
                size: "xs",
                color: "currentColor",
                className: c.churnFooterClaimIcon
              }), (0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                className: c.churnFooterClaimCopy,
                children: l.intl.string(l.t.zrCzVB)
              })]
            }), (0, r.jsx)(o.Button, {
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