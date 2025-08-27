/** Chunk was on 81709 **/
/** chunk id: 625881, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
let C = function(t) {
  let {
    premiumSubscription: e,
    premiumType: n,
    onClose: r,
    onConfirm: C,
    userDiscountOffer: b
  } = t, [N, O] = a.useState(false), [P, I] = a.useState(false), T = async t => {
    try {
      I(true), O(false), await l.tn.post({
        url: y.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: t
        },
        rejectWithError: true
      }), C()
    } catch (t) {
      O(true)
    }
    I(false)
  }, R = (0, u.ZP)(), v = (0, o.wj)(R) ? E : g, S = (0, x._n)(e, _.Xh.PREMIUM_MONTH_TIER_2, b), w = (0, m.aS)(_.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: e.currency,
    paymentSourceId: e.paymentSourceId
  }), D = (0, p.T4)(w.amount, w.currency);
  return null == b ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(f.Z, {
      premiumType: n,
      onClose: r
    }), (0, i.jsx)(c.hzk, {
      "data-migration-pending": true,
      className: j.body,
      children: (0, i.jsxs)("div", {
        className: j.confirmDiscountContent,
        children: [(0, i.jsx)(c.X6q, {
          variant: "heading-xl/bold",
          children: h.intl.format(h.t.q9Vxu7, {
            percent: b.discount.amount
          })
        }), (0, i.jsxs)("div", {
          className: j.confirmDiscountDescription,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: v,
            className: j.confirmDiscountIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: h.intl.format(h.t.Eq1RHB, {
              percent: b.discount.amount,
              numMonths: b.discount.user_usage_limit,
              price: D
            })
          })]
        }), (0, i.jsx)("div", {
          className: j.confirmDiscountLegalese,
          children: (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: j.confirmDiscountLegaleseText,
            children: h.intl.format(h.t.hrGTjI, {
              discountedPrice: S,
              billingPeriod: (0, m.JP)(b.discount.user_usage_limit_interval),
              numMonths: b.discount.user_usage_limit,
              fullPrice: D,
              helpdeskArticle: d.Z.getArticleURL(y.BhN.PAID_TERMS)
            })
          })
        }), N && (0, i.jsx)("div", {
          className: j.redemptionFailedMessage,
          children: (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: j.redemptionFailedMessageCopy,
            children: h.intl.string(h.t.AD6odn)
          })
        }), (0, i.jsxs)("div", {
          className: s()(j.confirmDiscountButtons, {
            [j.confrimDiscountsButtonsError]: N,
            [j.confrimDiscountsButtonsNoError]: !N
          }),
          children: [(0, i.jsx)(c.Avr, {
            variant: "primary",
            text: h.intl.string(h.t.zl7LZm),
            onClick: () => r()
          }), (0, i.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: h.intl.string(h.t.CKSuZG),
            loading: P,
            onClick: () => T(b.id)
          })]
        })]
      })
    })]
  })
}