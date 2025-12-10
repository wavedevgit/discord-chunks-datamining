/** Chunk was on web.js **/
/** chunk id: 170579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk483444 = require("./483444.jsx"),
  Chunk599250 = require("./599250.jsx"),
  Chunk926153 = require("./926153.jsx"),
  Chunk27693 = require("./27693.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk716619 = require("./716619.js");

function b(e, t) {
  let n = f.ZP.getDefaultPrice(e),
    {
      intervalType: r
    } = f.ZP.getInterval(e),
    i = (0, p.T4)(n.amount, n.currency);
  if (t) return i;
  switch (r) {
    case h.rV.MONTH:
      return g.intl.formatToPlainString(g.t.AbOLNu, {
        price: i
      });
    case h.rV.YEAR:
      return g.intl.formatToPlainString(g.t["rS8FA+"], {
        price: i
      })
  }
}
let y = e => {
    let {
      isTier0: t,
      discountAmount: n
    } = e, i = (0, m.N)(), s = null != i && i.trial_id === h.a7, l = g.intl.string(g.t.IBYG5U);
    return true !== n ? l = g.intl.formatToPlainString(g.t.iiLbvu, {
      percent: n
    }) : s && (l = g.intl.string(g.t.gtNqJQ)), (0, r.jsx)("div", {
      className: E.trialBadgeContainer,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: a()(E.trialOfferText, {
          [E.tier0TrialOffer]: t
        }),
        children: l
      })
    })
  },
  O = function(e) {
    var t;
    let n, {
        hideCloseButton: i = false,
        hideCloseOnFullScreen: f,
        shouldShowPrice: p,
        plan: m,
        renderAnimation: g,
        onClose: O,
        isGift: v,
        upgradeToPremiumType: S,
        className: I,
        showTrialBadge: T = false,
        showDiscountBadge: C = false
      } = e,
      A = S === h.PremiumTypes.TIER_2;
    n = S === h.PremiumTypes.TIER_0 ? c.Z : S === h.PremiumTypes.TIER_1 ? u.Z : l.Z;
    let N = (0, _.N)(),
      P = null == N || null == (t = N.discount) ? true : t.amount;
    return (0, r.jsxs)("div", {
      "aria-hidden": true,
      className: a()({
        [E.headerBackground]: !A,
        [E.tier2HeaderBackground]: A
      }, I),
      children: [(T || C) && (0, r.jsx)(d.Z, {
        className: E.trialBadgeSparkles
      }), g(), (0, r.jsxs)(s.Z, {
        align: s.Z.Align.START,
        justify: s.Z.Justify.BETWEEN,
        className: E.headerTop,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(n, {
            className: a()(E.headerIcon, {
              [E.nonTier2]: !A
            })
          }), (T || C) && (0, r.jsx)(y, {
            isTier0: S === h.PremiumTypes.TIER_0,
            discountAmount: C ? P : true
          })]
        }), !i && (0, r.jsx)(o.olH, {
          "data-migration-pending": true,
          hideOnFullscreen: f,
          onClick: O,
          className: E.closeButton
        })]
      }), p && null != m ? (0, r.jsx)("div", {
        className: E.price,
        children: b(m, v)
      }) : null]
    })
  }