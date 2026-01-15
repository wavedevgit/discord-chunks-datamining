/** Chunk was on web.js **/
/** chunk id: 224550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk664728 = require("./664728.js");
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
        rentalDuration: S,
        isEmbeddedIAP: I,
        renewalInvoice: T,
        paymentSourceType: C,
        hide: A,
        purchaseType: N,
        productLine: P,
        proratedAmount: w,
        basePrice: R,
        currentSubscription: D,
        skuId: x,
        applicationName: L,
        hasAlreadyLinked: j
      } = e,
      M = (0, i.e7)([o.Z], () => o.Z.inReverseTrial());
    if (A) return null;
    let k = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
      let e = c.ZP.getIntervalForInvoice(T);
      t = e.intervalType, n = e.intervalCount, s = (0, u.og)((0, u.T4)(T.total, T.currency), t, n), E = (0, u.og)((0, u.T4)(T.subtotal, T.currency), t, n)
    } else null != b && (t = b.interval, n = b.intervalCount);
    let U = (0, a.K)({
        purchaseType: N || f.GZQ.SUBSCRIPTION,
        plan: b,
        premiumSubscription: null == D ? null : D,
        productLine: P,
        isGift: !!y,
        planGroup: k,
        isPrepaidPaymentSource: false
      }),
      G = h.intl.format(h.t.Y2Rkqc, {
        primaryText: U,
        paidURL: f.EYA.PAID_TERMS
      }),
      Z = h.intl.format(h.t.H2uH5b, {
        primaryText: U,
        paidURL: f.EYA.PAID_TERMS
      }),
      F = "",
      B = "";
    if (v) {
      F = null != S && S > 0 ? h.intl.format(h.t.itoo7A, {
        days: S,
        virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.EYA.PAID_TERMS
      }) : h.intl.format(h.t.xlJyOM, {
        virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.EYA.PAID_TERMS
      });
      let e = "";
      x === p.Vt.ORB_PROFILE_BADGE ? e = h.intl.string(h.t.APcKRo) : x === p.Vt.FRACTIONAL_PREMIUM ? e = h.intl.string(h.t.FhJ74j) : null == S && (e = h.intl.string(h.t["Sxed/G"])), Array.isArray(F) ? F = [...F, " ".concat(e)] : F += " ".concat(e)
    } else if (I)
      if (null != s && (null == T ? true : T.subscriptionPeriodEnd) != null) F = h.intl.format(h.t["2VPTay"], {
        subtotalRate: E
      });
      else switch (t) {
        case _.rV.MONTH:
          F = 1 === n ? h.intl.format(h.t["+ywPmZ"], {}) : h.intl.format(h.t.oBwZfh, {
            intervalCount: n
          });
          break;
        case _.rV.YEAR:
          F = h.intl.format(h.t.y9gsX5, {});
          break;
        case true:
          F = h.intl.format(h.t.UxGFH4, {});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else if (N === f.GZQ.ONE_TIME) switch (P) {
        case f.POd.COLLECTIBLES:
          B = G, F = y ? h.intl.format(h.t.Amdf8X, {
            paidURL: f.EYA.PAID_TERMS
          }) : h.intl.format(h.t["40vM4o"], {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        case f.POd.GUILD_PRODUCT:
          B = G, F = h.intl.format(h.t["GEAQ+u"], {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        case f.POd.SOCIAL_LAYER_GAME_ITEM:
          B = G, F = y || true === j ? h.intl.format(h.t.VCR6hI, {
            applicationName: null != L ? L : "game's"
          }) : h.intl.format(h.t.CVITgq, {
            applicationName: null != L ? L : "game's"
          });
          break;
        default:
          B = Z, F = h.intl.string(h.t["9/siSQ"])
      } else if (null == b || y) switch (y && (B = G), t) {
        case _.rV.MONTH:
          F = y ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"]), F = y ? h.intl.string(h.t.IjNapk) : 1 === n ? h.intl.string(h.t["/sGXPr"]) : h.intl.formatToPlainString(h.t.Fqjihk, {
            intervalCount: n
          });
          break;
        case _.rV.YEAR:
          F = y ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
          break;
        case true:
          F = "";
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else {
        let e, r = (0, a.K)({
          productLine: P,
          purchaseType: f.GZQ.SUBSCRIPTION,
          plan: b,
          premiumSubscription: null == D ? null : D,
          isGift: false,
          planGroup: k,
          isPrepaidPaymentSource: false
        });
        O || (e = g(R, t, n, b.id)), F = (null == D ? true : D.isPausedAllowsResumeButNotUpdates) ? h.intl.format(h.t.B6oNwB, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : null != D && (0, d.GY)(D, b.id, k) ? h.intl.format(h.t.LyBQUW, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : M && P === f.POd.BOOST && null != R ? h.intl.format(h.t["2nKy/0"], {
          price: (0, u.T4)(R.amount, R.currency),
          paidServiceTermsArticle: f.EYA.PAID_TERMS,
          contactUsArticle: f.EYA.CONTACT,
          subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : O ? h.intl.format(h.t["Hvo/Z5"], {
          buttonText: r,
          interval: c.ZP.formatInterval(null == b ? true : b.interval),
          cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
        }) : null != w && null != R ? h.intl.format(h.t.Kcieh4, {
          primaryText: r,
          proratedAmount: (0, u.T4)(w, R.currency),
          renewalAmount: (0, u.T4)(R.amount, R.currency),
          rateInterval: c.ZP.formatInterval(null == b ? true : b.interval),
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : h.intl.format(h.t.anJ7OX, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        })
      }
    return (0, r.jsxs)("div", {
      className: m.legalFinePrint,
      children: ["" !== B && (0, r.jsx)("div", {
        children: B
      }), "" !== F && (0, r.jsx)("div", {
        children: F
      }), C === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
        children: h.intl.string(h.t.kj9VLI)
      }), C === f.HeQ.SOFORT && (0, r.jsx)("div", {
        children: h.intl.string(h.t["UYy1/h"])
      })]
    })
  }