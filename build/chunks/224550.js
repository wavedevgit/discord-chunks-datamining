/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
}), n(411104);
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(858987),
  a = n(78839),
  s = n(122289),
  l = n(63063),
  c = n(74538),
  u = n(937615),
  d = n(296848),
  f = n(981631),
  _ = n(474936),
  p = n(388032),
  h = n(88519);
let m = function(e) {
  let t, n, m, g;
  let {
    subscriptionPlan: E,
    isGift: v,
    isTrial: b,
    isEmbeddedIAP: y,
    renewalInvoice: O,
    paymentSourceType: S,
    hide: I,
    purchaseType: T,
    productLine: N,
    basePrice: A,
    currentSubscription: C
  } = e, R = (0, i.e7)([a.ZP], () => a.ZP.inReverseTrial());
  if (I) return null;
  let P = null == e.planGroup ? [] : e.planGroup;
  if (null != O) {
    let e = c.ZP.getIntervalForInvoice(O);
    t = e.intervalType, n = e.intervalCount, m = (0, u.og)((0, u.T4)(O.total, O.currency), t, n), g = (0, u.og)((0, u.T4)(O.subtotal, O.currency), t, n)
  } else null != E && (t = E.interval, n = E.intervalCount);
  let w = (0, o.K)({
      purchaseType: T || f.GZQ.SUBSCRIPTION,
      plan: E,
      premiumSubscription: null == C ? null : C,
      isGift: !!v,
      planGroup: P,
      isPrepaidPaymentSource: !1
    }),
    D = p.NW.format(p.t.Y2Rkqa, {
      primaryText: w,
      paidURL: f.EYA.PAID_TERMS
    }),
    L = p.NW.format(p.t.H2uH5e, {
      primaryText: w,
      paidURL: f.EYA.PAID_TERMS
    }),
    x = "",
    M = "";
  if (y) {
    if (null != m && (null == O ? void 0 : O.subscriptionPeriodEnd) != null) x = p.NW.format(p.t["2VPTa2"], {
      subtotalRate: g
    });
    else switch (t) {
      case _.rV.MONTH:
        x = 1 === n ? p.NW.format(p.t["+ywPmZ"], {}) : p.NW.format(p.t.oBwZfn, {
          intervalCount: n
        });
        break;
      case _.rV.YEAR:
        x = p.NW.format(p.t.y9gsX1, {});
        break;
      case void 0:
        M = D, x = p.NW.format(p.t.UxGFHx, {});
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    }
  } else if (T === f.GZQ.ONE_TIME) switch (N) {
    case f.POd.COLLECTIBLES:
      M = D, x = v ? p.NW.format(p.t.ofqyUl, {
        paidURL: f.EYA.PAID_TERMS
      }) : p.NW.format(p.t.G3l0s7, {
        paidURL: f.EYA.PAID_TERMS
      });
      break;
    case f.POd.GUILD_PRODUCT:
      M = D, x = p.NW.format(p.t["GEAQ+v"], {
        paidURL: f.EYA.PAID_TERMS
      });
      break;
    default:
      M = L, x = p.NW.string(p.t["9/siSU"])
  } else if (null == E || v) switch (v && (M = D), t) {
    case _.rV.MONTH:
      x = v ? p.NW.string(p.t.IjNapq) : p.NW.string(p.t["/sGXPj"]), x = v ? p.NW.string(p.t.IjNapq) : 1 === n ? p.NW.string(p.t["/sGXPj"]) : p.NW.formatToPlainString(p.t.Fqjiho, {
        intervalCount: n
      });
      break;
    case _.rV.YEAR:
      x = v ? p.NW.string(p.t.vAfbGx) : p.NW.string(p.t.IGzFc3);
      break;
    case void 0:
      x = "";
      break;
    default:
      throw Error("Unexpected interval: ".concat(t))
  } else {
    let e;
    let r = (0, o.K)({
      purchaseType: f.GZQ.SUBSCRIPTION,
      plan: E,
      premiumSubscription: null == C ? null : C,
      isGift: !1,
      planGroup: P,
      isPrepaidPaymentSource: !1
    });
    if (null != A && null != t && null != n && (e = (0, u.og)((0, u.T4)(A.amount, A.currency), t, n)), null == e) {
      let e = Error("Missing base rate for legal fine print");
      (0, s.q2)(e, {
        tags: {
          planId: E.id
        }
      })
    }
    x = (null == C ? void 0 : C.isPausedAllowsResumeButNotUpdates) ? p.NW.format(p.t.B6oNwM, {
      primaryText: r,
      rate: e,
      paidURL: f.EYA.PAID_TERMS,
      contactLink: f.EYA.CONTACT,
      helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
    }) : null != C && (0, d.GY)(C, E.id, P) ? p.NW.format(p.t.LyBQUV, {
      primaryText: r,
      rate: e,
      paidURL: f.EYA.PAID_TERMS,
      contactLink: f.EYA.CONTACT,
      helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
    }) : R && N === f.POd.BOOST && null != A ? p.NW.format(p.t["2nKy//"], {
      price: (0, u.T4)(A.amount, A.currency),
      paidServiceTermsArticle: f.EYA.PAID_TERMS,
      contactUsArticle: f.EYA.CONTACT,
      subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
    }) : b ? p.NW.format(p.t["Hvo/Z2"], {
      buttonText: r,
      interval: c.ZP.formatInterval(null == E ? void 0 : E.interval),
      cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
      paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
    }) : p.NW.format(p.t.anJ7OT, {
      primaryText: r,
      rate: e,
      paidURL: f.EYA.PAID_TERMS,
      contactLink: f.EYA.CONTACT,
      helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: ["" !== M && (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        children: M
      }), (0, r.jsx)("div", {
        className: h.divider
      })]
    }), "" !== x && (0, r.jsx)("div", {
      children: x
    }), S === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
      className: h.paymentSourceNoticeCopy,
      children: p.NW.string(p.t.kj9VLC)
    }), S === f.HeQ.SOFORT && (0, r.jsxs)("div", {
      className: h.paymentSourceNoticeCopy,
      children: [p.NW.string(p.t["UYy1/v"]), " "]
    })]
  })
}