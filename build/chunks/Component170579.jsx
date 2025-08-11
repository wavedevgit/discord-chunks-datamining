/** Chunk was on web.js **/
/** chunk id: 170579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk483444 = require("./483444.jsx"),
  Chunk599250 = require("./599250.jsx"),
  Chunk926153 = require("./926153.jsx"),
  Chunk27693 = require("./27693.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk108989 = require("./108989.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790816 = require("./790816.js");

function v(e, t) {
  let n = p.ZP.getDefaultPrice(e),
    {
      intervalType: r
    } = p.ZP.getInterval(e),
    i = (0, h.T4)(n.amount, n.currency);
  if (t) return i;
  switch (r) {
    case b.rV.MONTH:
      return y.intl.formatToPlainString(y.t.AbOLNj, {
        price: i
      });
    case b.rV.YEAR:
      return y.intl.formatToPlainString(y.t.rS8FAw, {
        price: i
      })
  }
}
let I = e => {
    let {
      isTier0: t,
      discountAmount: n
    } = e, i = (0, g.N)(), a = null != i && i.trial_id === b.a7, l = y.intl.string(y.t.IBYG5e);
    return true !== n ? l = y.intl.formatToPlainString(y.t.iiLbvr, {
      percent: n
    }) : a && (l = y.intl.string(y.t.gtNqJS)), (0, r.jsx)("div", {
      className: O.trialBadgeContainer,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        className: o()(O.trialOfferText, {
          [O.tier0TrialOffer]: t
        }),
        children: l
      })
    })
  },
  T = function(e) {
    var t;
    let n, {
        hideCloseButton: i = false,
        hideCloseOnFullScreen: p,
        shouldShowPrice: h,
        plan: g,
        renderAnimation: y,
        onClose: T,
        isGift: S,
        upgradeToPremiumType: A,
        headerTheme: N = b.nL.DEFAULT,
        className: C,
        showTrialBadge: R = false,
        showDiscountBadge: P = false
      } = e,
      w = A === b.p9.TIER_2;
    n = A === b.p9.TIER_0 ? d.Z : A === b.p9.TIER_1 ? f.Z : u.Z;
    let D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
      L = (0, m.Ng)(),
      x = null == L || null == (t = L.discount) ? true : t.amount;
    return (0, r.jsxs)("div", {
      "aria-hidden": true,
      className: o()({
        [O.headerBackground]: !w,
        [O.tier2HeaderBackground]: w
      }, C),
      children: [D || N !== b.nL.WINTER ? null : (0, r.jsx)(E.Z, {
        className: O.snow,
        wind: 5
      }), (R || P) && (0, r.jsx)(_.Z, {
        className: O.trialBadgeSparkles
      }), y(), (0, r.jsxs)(c.Z, {
        align: c.Z.Align.START,
        justify: c.Z.Justify.BETWEEN,
        className: O.headerTop,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(n, {
            className: o()(O.headerIcon, {
              [O.nonTier2]: !w
            })
          }), (R || P) && (0, r.jsx)(I, {
            isTier0: A === b.p9.TIER_0,
            discountAmount: P ? x : true
          })]
        }), !i && (0, r.jsx)(s.olH, {
          hideOnFullscreen: p,
          onClick: T,
          className: O.closeButton
        })]
      }), h && null != g ? (0, r.jsx)("div", {
        className: O.price,
        children: v(g, S)
      }) : null]
    })
  }