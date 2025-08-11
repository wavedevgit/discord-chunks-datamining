/** Chunk was on 17938 **/
/** chunk id: 789155, original params: e,s,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk615836 = require("./615836.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");
let d = function(e) {
  let {
    churnUserDiscountOffer: s,
    onDiscountClaim: r,
    onContinue: d
  } = e, p = (0, o.ZP)(), x = (0, n.wj)(p) ? u : m;
  return null == s ? null : (0, t.jsxs)("div", {
    className: c.churnFooterContainer,
    children: [(0, t.jsx)("div", {
      className: c.churnFooterGlow
    }), (0, t.jsx)("div", {
      className: c.churnFooterTopBorder
    }), (0, t.jsx)("div", {
      className: c.churnFooterContent,
      children: (0, t.jsxs)("div", {
        className: c.churnFooterContentBody,
        children: [(0, t.jsx)("img", {
          alt: "",
          src: x,
          className: c.churnFooterIcon
        }), (0, t.jsxs)("div", {
          className: c.churnFooterContentBodyInner,
          children: [(0, t.jsx)(i.Text, {
            variant: "text-md/medium",
            className: c.churnFooterCopy,
            children: l.intl.format(l.t["2gem09"], {
              percent: s.discount.amount,
              numMonths: s.discount.user_usage_limit
            })
          }), (0, t.jsxs)("div", {
            className: c.churnFooterCTAs,
            children: [(0, t.jsxs)(i.gtL, {
              "data-migration-pending": true,
              className: c.churnFooterClaimCTA,
              innerClassName: c.churnFooterClaimCTAInner,
              look: a.iL.OUTLINED,
              color: a.Tt.CUSTOM,
              onClick: () => null == r ? true : r(),
              children: [(0, t.jsx)(i.SrA, {
                size: "xs",
                color: "currentColor",
                className: c.churnFooterClaimIcon
              }), (0, t.jsx)(i.Text, {
                variant: "text-sm/semibold",
                className: c.churnFooterClaimCopy,
                children: l.intl.string(l.t.zrCzVF)
              })]
            }), (0, t.jsx)(i.zxk, {
              variant: "primary",
              text: l.intl.string(l.t["3PatS0"]),
              onClick: () => null == d ? true : d()
            })]
          })]
        })]
      })
    })]
  })
}