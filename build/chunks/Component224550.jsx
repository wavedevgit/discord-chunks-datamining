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
        isEmbeddedIAP: S,
        renewalInvoice: I,
        paymentSourceType: T,
        hide: A,
        purchaseType: C,
        productLine: N,
        proratedAmount: P,
        basePrice: R,
        currentSubscription: w,
        skuId: D,
        applicationName: x,
        hasAlreadyLinked: L
      } = e,
      j = (0, i.e7)([o.Z], () => o.Z.inReverseTrial());
    if (A) return null;
    let M = null == e.planGroup ? [] : e.planGroup;
    if (null != I) {
      let e = c.ZP.getIntervalForInvoice(I);
      t = e.intervalType, n = e.intervalCount, s = (0, u.og)((0, u.T4)(I.total, I.currency), t, n), E = (0, u.og)((0, u.T4)(I.subtotal, I.currency), t, n)
    } else null != b && (t = b.interval, n = b.intervalCount);
    let k = (0, a.K)({
        purchaseType: C || f.GZQ.SUBSCRIPTION,
        plan: b,
        premiumSubscription: null == w ? null : w,
        productLine: N,
        isGift: !!y,
        planGroup: M,
        isPrepaidPaymentSource: false
      }),
      U = m.intl.format(m.t.Y2Rkqc, {
        primaryText: k,
        paidURL: f.EYA.PAID_TERMS
      }),
      G = m.intl.format(m.t.H2uH5b, {
        primaryText: k,
        paidURL: f.EYA.PAID_TERMS
      }),
      Z = "",
      B = "";
    if (v) {
      Z = m.intl.format(m.t.xlJyOM, {
        virtualGoodsURL: f.EYA.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.EYA.PAID_TERMS
      });
      let e = "";
      e = D === p.Vt.ORB_PROFILE_BADGE ? m.intl.string(m.t.APcKRo) : D === p.Vt.FRACTIONAL_PREMIUM ? m.intl.string(m.t.FhJ74j) : m.intl.string(m.t["Sxed/G"]), Array.isArray(Z) ? Z = [...Z, " ".concat(e)] : Z += " ".concat(e)
    } else if (S)
      if (null != s && (null == I ? true : I.subscriptionPeriodEnd) != null) Z = m.intl.format(m.t["2VPTay"], {
        subtotalRate: E
      });
      else switch (t) {
        case _.rV.MONTH:
          Z = 1 === n ? m.intl.format(m.t["+ywPmZ"], {}) : m.intl.format(m.t.oBwZfh, {
            intervalCount: n
          });
          break;
        case _.rV.YEAR:
          Z = m.intl.format(m.t.y9gsX5, {});
          break;
        case true:
          Z = m.intl.format(m.t.UxGFH4, {});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else if (C === f.GZQ.ONE_TIME) switch (N) {
        case f.POd.COLLECTIBLES:
          B = U, Z = y ? m.intl.format(m.t.Amdf8X, {
            paidURL: f.EYA.PAID_TERMS
          }) : m.intl.format(m.t["40vM4o"], {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        case f.POd.GUILD_PRODUCT:
          B = U, Z = m.intl.format(m.t["GEAQ+u"], {
            paidURL: f.EYA.PAID_TERMS
          });
          break;
        case f.POd.SOCIAL_LAYER_GAME_ITEM:
          B = U, Z = y || true === L ? m.intl.format(m.t.VCR6hI, {
            applicationName: null != x ? x : "game's"
          }) : m.intl.format(m.t.CVITgq, {
            applicationName: null != x ? x : "game's"
          });
          break;
        default:
          B = G, Z = m.intl.string(m.t["9/siSQ"])
      } else if (null == b || y) switch (y && (B = U), t) {
        case _.rV.MONTH:
          Z = y ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"]), Z = y ? m.intl.string(m.t.IjNapk) : 1 === n ? m.intl.string(m.t["/sGXPr"]) : m.intl.formatToPlainString(m.t.Fqjihk, {
            intervalCount: n
          });
          break;
        case _.rV.YEAR:
          Z = y ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
          break;
        case true:
          Z = "";
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
          planGroup: M,
          isPrepaidPaymentSource: false
        });
        O || (e = g(R, t, n, b.id)), Z = (null == w ? true : w.isPausedAllowsResumeButNotUpdates) ? m.intl.format(m.t.B6oNwB, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : null != w && (0, d.GY)(w, b.id, M) ? m.intl.format(m.t.LyBQUW, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : j && N === f.POd.BOOST && null != R ? m.intl.format(m.t["2nKy/0"], {
          price: (0, u.T4)(R.amount, R.currency),
          paidServiceTermsArticle: f.EYA.PAID_TERMS,
          contactUsArticle: f.EYA.CONTACT,
          subscriptionFAQArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : O ? m.intl.format(m.t["Hvo/Z5"], {
          buttonText: r,
          interval: c.ZP.formatInterval(null == b ? true : b.interval),
          cancelSubscriptionArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: l.Z.getArticleURL(f.BhN.PAID_TERMS)
        }) : null != P && null != R ? m.intl.format(m.t.Kcieh4, {
          primaryText: r,
          proratedAmount: (0, u.T4)(P, R.currency),
          renewalAmount: (0, u.T4)(R.amount, R.currency),
          rateInterval: c.ZP.formatInterval(null == b ? true : b.interval),
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        }) : m.intl.format(m.t.anJ7OX, {
          primaryText: r,
          rate: e,
          paidURL: f.EYA.PAID_TERMS,
          contactLink: f.EYA.CONTACT,
          helpdeskArticle: l.Z.getArticleURL(f.BhN.BILLING)
        })
      }
    return (0, r.jsxs)("div", {
      className: h.legalFinePrint,
      children: ["" !== B && (0, r.jsx)("div", {
        children: B
      }), "" !== Z && (0, r.jsx)("div", {
        children: Z
      }), T === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
        children: m.intl.string(m.t.kj9VLI)
      }), T === f.HeQ.SOFORT && (0, r.jsx)("div", {
        children: m.intl.string(m.t["UYy1/h"])
      })]
    })
  }