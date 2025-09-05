/** Chunk was on web.js **/
/** chunk id: 224550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk858987 = require("./858987.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk122289 = require("./122289.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk296848 = require("./296848.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498138 = require("./498138.js");
let g = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
      let e = Error("Missing base rate for legal fine print"),
        t = r || "none";
      return (0, s.q2)(e, {
        tags: {
          planId: t
        }
      }), null
    }
    return (0, u.og)((0, u.T4)(e.amount, e.currency), t, n)
  },
  E = function(e) {
    let t, n, s, E, {
        subscriptionPlan: b,
        isGift: y,
        isTrial: O,
        isOrbCheckout: v,
        isEmbeddedIAP: I,
        renewalInvoice: T,
        paymentSourceType: S,
        hide: A,
        purchaseType: C,
        productLine: N,
        proratedAmount: R,
        basePrice: P,
        currentSubscription: w,
        skuId: D
      } = e,
      x = (0, i.e7)([o.Z], () => o.Z.inReverseTrial());
    if (A) return null;
    let L = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
      let e = c.ZP.getIntervalForInvoice(T);
      t = e.intervalType, n = e.intervalCount, s = (0, u.og)((0, u.T4)(T.total, T.currency), t, n), E = (0, u.og)((0, u.T4)(T.subtotal, T.currency), t, n)
    } else null != b && (t = b.interval, n = b.intervalCount);
    let j = (0, a.K)({
        purchaseType: C || f.GZQ.SUBSCRIPTION,
        plan: b,
        premiumSubscription: null == w ? null : w,
        productLine: N,
        isGift: !!y,
        planGroup: L,
        isPrepaidPaymentSource: false
      }),
      k = h.intl.format(h.t.Y2Rkqa, {
        primaryText: j,
        paidURL: f.EYA.PAID_TERMS
      }),
      M = h.intl.format(h.t.H2uH5e, {
        primaryText: j,
        paidURL: f.EYA.PAID_TERMS
      }),
      U = "",
      G = "";
    if (v) {
      U = h.intl.format(h.t.xlJyOD, {
        virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.EYA.PAID_TERMS
      });
      let e = "";
      e = D === _.Vt.ORB_PROFILE_BADGE ? h.intl.string(h.t.APcKRk) : D === _.Vt.FRACTIONAL_PREMIUM ? h.intl.string(h.t.FhJ74u) : h.intl.string(h.t.jCRYDw), Array.isArray(U) ? U = [...U, " ".concat(e)] : U += " ".concat(e)
    } else if (I)
      if (null != s && (null == T ? true : T.subscriptionPeriodEnd) != null) U = h.intl.format(h.t["2VPTa2"], {
        subtotalRate: E
      });
      else switch (t) {
        case p.rV.MONTH:
          U = 1 === n ? h.intl.format(h.t["+ywPmZ"], {}) : h.intl.format(h.t.oBwZfn, {
            intervalCount: n
          });
          break;
        case p.rV.YEAR:
          U = h.intl.format(h.t.y9gsX1, {});
          break;
        case true:
          U = h.intl.format(h.t.UxGFHx, {});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else if (C === f.GZQ.ONE_TIME) switch (N) {
        case f.POd.COLLECTIBLES:
          G = k, U = y ? h.intl.format(h.t.ofqyUl, {
            paidURL: f.EYA.PAID_TERMS
          }) : h.intl.format(h.t.G3l0s7, {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        case f.POd.GUILD_PRODUCT:
          G = k, U = h.intl.format(h.t["GEAQ+v"], {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        default:
          G = M, U = h.intl.string(h.t["9/siSU"])
      } else if (null == b || y) switch (y && (G = k), t) {
        case p.rV.MONTH:
          U = y ? h.intl.string(h.t.IjNapq) : h.intl.string(h.t["/sGXPj"]), U = y ? h.intl.string(h.t.IjNapq) : 1 === n ? h.intl.string(h.t["/sGXPj"]) : h.intl.formatToPlainString(h.t.Fqjiho, {
            intervalCount: n
          });
          break;
        case p.rV.YEAR:
          U = y ? h.intl.string(h.t.vAfbGx) : h.intl.string(h.t.IGzFc3);
          break;
        case true:
          U = "";
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else {
        let e, r = (0, a.K)({
          productLine: N,
          purchaseType: f.GZQ.SUBSCRIPTION,
          plan: b,
          premiumSubscription: null == w ? null : w,
          isGift: false,
          planGroup: L,
          isPrepaidPaymentSource: false
        });
        O || (e = g(P, t, n, b.id)), U = (null == w ? true : w.isPausedAllowsResumeButNotUpdates) ? h.intl.format(h.t.B6oNwM, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : null != w && (0, d.GY)(w, b.id, L) ? h.intl.format(h.t.LyBQUV, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : x && N === f.POd.BOOST && null != P ? h.intl.format(h.t["2nKy//"], {
          price: (0, u.T4)(P.amount, P.currency),
          paidServiceTermsArticle: f.EYA.PAID_TERMS,
          contactUsArticle: f.EYA.CONTACT,
          subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : O ? h.intl.format(h.t["Hvo/Z2"], {
          buttonText: r,
          interval: c.ZP.formatInterval(null == b ? true : b.interval),
          cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
        }) : null != R && null != P ? h.intl.format(h.t.Kcieh4, {
          primaryText: r,
          proratedAmount: (0, u.T4)(R, P.currency),
          renewalAmount: (0, u.T4)(P.amount, P.currency),
          rateInterval: c.ZP.formatInterval(null == b ? true : b.interval),
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : h.intl.format(h.t.anJ7OT, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        })
      }
    return (0, r.jsxs)(r.Fragment, {
      children: ["" !== G && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          children: G
        }), (0, r.jsx)("div", {
          className: m.divider
        })]
      }), "" !== U && (0, r.jsx)("div", {
        children: U
      }), S === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
        className: m.paymentSourceNoticeCopy,
        children: h.intl.string(h.t.kj9VLC)
      }), S === f.HeQ.SOFORT && (0, r.jsxs)("div", {
        className: m.paymentSourceNoticeCopy,
        children: [h.intl.string(h.t["UYy1/v"]), " "]
      })]
    })
  }