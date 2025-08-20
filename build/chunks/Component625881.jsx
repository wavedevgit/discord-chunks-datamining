/** Chunk was on 81709 **/
/** chunk id: 625881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk230916 = require("./230916.js"),
  Chunk798769 = require("./798769.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk768051 = require("./768051.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");
let E = function(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: a,
    onConfirm: E,
    userDiscountOffer: j
  } = e, [N, I] = r.useState(false), [v, O] = r.useState(false), P = async e => {
    try {
      O(true), I(false), await o.tn.post({
        url: b.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        },
        rejectWithError: true
      }), E()
    } catch (e) {
      I(true)
    }
    O(false)
  }, T = (0, u.ZP)(), R = (0, l.wj)(T) ? C : g, S = (0, _._)(t, x.Xh.PREMIUM_MONTH_TIER_2, j), D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), w = (0, p.T4)(D.amount, D.currency);
  return null == j ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(f.Z, {
      premiumType: n,
      onClose: a
    }), (0, i.jsx)(c.hzk, {
      "data-migration-pending": true,
      className: h.body,
      children: (0, i.jsxs)("div", {
        className: h.confirmDiscountContent,
        children: [(0, i.jsx)(c.X6q, {
          variant: "heading-xl/bold",
          children: y.intl.format(y.t.q9Vxu7, {
            percent: j.discount.amount
          })
        }), (0, i.jsxs)("div", {
          className: h.confirmDiscountDescription,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: R,
            className: h.confirmDiscountIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: y.intl.format(y.t.Eq1RHB, {
              percent: j.discount.amount,
              numMonths: j.discount.user_usage_limit,
              price: w
            })
          })]
        }), (0, i.jsx)("div", {
          className: h.confirmDiscountLegalese,
          children: (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.confirmDiscountLegaleseText,
            children: y.intl.format(y.t.hrGTjI, {
              discountedPrice: S,
              billingPeriod: (0, m.JP)(j.discount.user_usage_limit_interval),
              numMonths: j.discount.user_usage_limit,
              fullPrice: w,
              helpdeskArticle: d.Z.getArticleURL(b.BhN.PAID_TERMS)
            })
          })
        }), N && (0, i.jsx)("div", {
          className: h.redemptionFailedMessage,
          children: (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.redemptionFailedMessageCopy,
            children: y.intl.string(y.t.AD6odn)
          })
        }), (0, i.jsxs)("div", {
          className: s()(h.confirmDiscountButtons, {
            [h.confrimDiscountsButtonsError]: N,
            [h.confrimDiscountsButtonsNoError]: !N
          }),
          children: [(0, i.jsx)(c.Avr, {
            variant: "primary",
            text: y.intl.string(y.t.zl7LZm),
            onClick: () => a()
          }), (0, i.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: y.intl.string(y.t.CKSuZG),
            loading: v,
            onClick: () => P(j.id)
          })]
        })]
      })
    })]
  })
}