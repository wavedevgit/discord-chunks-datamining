/** Chunk was on 53485 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(544891),
  o = n(780384),
  c = n(481060),
  d = n(410030),
  u = n(63063),
  m = n(74538),
  g = n(937615),
  p = n(230916),
  h = n(798769),
  f = n(474936),
  N = n(981631),
  b = n(388032),
  x = n(842764),
  _ = n(982404),
  E = n(299156);
let j = function(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: s,
    onConfirm: j,
    userDiscountOffer: C
  } = e, [O, v] = i.useState(!1), [S, T] = i.useState(!1), I = async e => {
    try {
      T(!0), v(!1), await l.tn.post({
        url: N.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        },
        rejectWithError: !0
      }), j()
    } catch (e) {
      v(!0)
    }
    T(!1)
  }, y = (0, d.ZP)(), A = (0, o.wj)(y) ? _ : E, P = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, C), R = (0, m.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), D = (0, g.T4)(R.amount, R.currency);
  return null == C ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      premiumType: n,
      onClose: s
    }), (0, r.jsx)(c.hzk, {
      className: x.body,
      children: (0, r.jsxs)("div", {
        className: x.confirmDiscountContent,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-xl/bold",
          children: b.NW.format(b.t.q9Vxu7, {
            percent: C.discount.amount
          })
        }), (0, r.jsxs)("div", {
          className: x.confirmDiscountDescription,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: A,
            className: x.confirmDiscountIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: b.NW.format(b.t.Eq1RHB, {
              percent: C.discount.amount,
              numMonths: C.discount.user_usage_limit,
              price: D
            })
          })]
        }), (0, r.jsx)("div", {
          className: x.confirmDiscountLegalese,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: x.confirmDiscountLegaleseText,
            children: b.NW.format(b.t.hrGTjI, {
              discountedPrice: P,
              billingPeriod: (0, m.JP)(C.discount.user_usage_limit_interval),
              numMonths: C.discount.user_usage_limit,
              fullPrice: D,
              helpdeskArticle: u.Z.getArticleURL(N.BhN.PAID_TERMS)
            })
          })
        }), O && (0, r.jsx)("div", {
          className: x.redemptionFailedMessage,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: x.redemptionFailedMessageCopy,
            children: b.NW.string(b.t.AD6odn)
          })
        }), (0, r.jsxs)("div", {
          className: a()(x.confirmDiscountButtons, {
            [x.confrimDiscountsButtonsError]: O,
            [x.confrimDiscountsButtonsNoError]: !O
          }),
          children: [(0, r.jsx)(c.zxk, {
            look: c.iLD.LINK,
            onClick: () => s(),
            children: b.NW.string(b.t.zl7LZm)
          }), (0, r.jsx)(c.zxk, {
            size: c.PhG.SMALL,
            submitting: S,
            onClick: () => I(C.id),
            children: b.NW.string(b.t.CKSuZG)
          })]
        })]
      })
    })]
  })
}