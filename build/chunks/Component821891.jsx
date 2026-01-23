/** Chunk was on web.js **/
/** chunk id: 821891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk658679 = require("./658679.jsx"),
  Chunk166403 = require("./166403.js"),
  Chunk739508 = require("./739508.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk615396 = require("./615396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk186119 = require("./186119.js");
let g = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
      let e = Error("Missing base rate for legal fine print"),
        t = r || "none";
      return (0, o.pM)(e, {
        tags: {
          planId: t
        }
      }), null
    }
    return (0, u.CE)((0, u.$g)(e.amount, e.currency), t, n)
  },
  E = function(e) {
    let t, n, o, E, {
        subscriptionPlan: y,
        isGift: b,
        isTrial: O,
        isOrbCheckout: v,
        rentalDuration: A,
        isEmbeddedIAP: I,
        renewalInvoice: S,
        paymentSourceType: T,
        hide: C,
        purchaseType: N,
        productLine: w,
        proratedAmount: R,
        basePrice: P,
        currentSubscription: D,
        skuId: x,
        applicationName: L,
        hasAlreadyLinked: j
      } = e,
      M = (0, i.bG)([s.A], () => s.A.inReverseTrial());
    if (C) return null;
    let k = null == e.planGroup ? [] : e.planGroup;
    if (null != S) {
      let e = c.Ay.getIntervalForInvoice(S);
      t = e.intervalType, n = e.intervalCount, o = (0, u.CE)((0, u.$g)(S.total, S.currency), t, n), E = (0, u.CE)((0, u.$g)(S.subtotal, S.currency), t, n)
    } else null != y && (t = y.interval, n = y.intervalCount);
    let U = (0, a.R)({
        purchaseType: N || f.VVm.SUBSCRIPTION,
        plan: y,
        premiumSubscription: null == D ? null : D,
        productLine: w,
        isGift: !!b,
        planGroup: k,
        isPrepaidPaymentSource: false
      }),
      G = h.intl.format(h.t.Y2Rkqc, {
        primaryText: U,
        paidURL: f.X7G.PAID_TERMS
      }),
      V = h.intl.format(h.t.H2uH5b, {
        primaryText: U,
        paidURL: f.X7G.PAID_TERMS
      }),
      F = "",
      B = "";
    if (v) {
      F = null != A && A > 0 ? h.intl.format(h.t.itoo7A, {
        days: A,
        virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.X7G.PAID_TERMS
      }) : h.intl.format(h.t.xlJyOM, {
        virtualGoodsURL: f.X7G.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: f.X7G.PAID_TERMS
      });
      let e = "";
      x === p.Dp.ORB_PROFILE_BADGE ? e = h.intl.string(h.t.APcKRo) : x === p.Dp.FRACTIONAL_PREMIUM ? e = h.intl.string(h.t.FhJ74j) : null == A && (e = h.intl.string(h.t["Sxed/G"])), Array.isArray(F) ? F = [...F, " ".concat(e)] : F += " ".concat(e)
    } else if (I)
      if (null != o && (null == S ? true : S.subscriptionPeriodEnd) != null) F = h.intl.format(h.t["2VPTay"], {
        subtotalRate: E
      });
      else switch (t) {
        case _.WT.MONTH:
          F = 1 === n ? h.intl.format(h.t["+ywPmZ"], {}) : h.intl.format(h.t.oBwZfh, {
            intervalCount: n
          });
          break;
        case _.WT.YEAR:
          F = h.intl.format(h.t.y9gsX5, {});
          break;
        case true:
          F = h.intl.format(h.t.UxGFH4, {});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else if (N === f.VVm.ONE_TIME) switch (w) {
        case f.EZt.COLLECTIBLES:
          B = G, F = b ? h.intl.format(h.t.Amdf8X, {
            paidURL: f.X7G.PAID_TERMS
          }) : h.intl.format(h.t["40vM4o"], {
            paidURL: f.X7G.PAID_TERMS
          });
          break;
        case f.EZt.GUILD_PRODUCT:
          B = G, F = h.intl.format(h.t["GEAQ+u"], {
            paidURL: f.X7G.PAID_TERMS
          });
          break;
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
          B = G, F = b || true === j ? h.intl.format(h.t.VCR6hI, {
            applicationName: null != L ? L : "game's"
          }) : h.intl.format(h.t.CVITgq, {
            applicationName: null != L ? L : "game's"
          });
          break;
        default:
          B = V, F = h.intl.string(h.t["9/siSQ"])
      } else if (null == y || b) switch (b && (B = G), t) {
        case _.WT.MONTH:
          F = b ? h.intl.string(h.t.IjNapk) : h.intl.string(h.t["/sGXPr"]), F = b ? h.intl.string(h.t.IjNapk) : 1 === n ? h.intl.string(h.t["/sGXPr"]) : h.intl.formatToPlainString(h.t.Fqjihk, {
            intervalCount: n
          });
          break;
        case _.WT.YEAR:
          F = b ? h.intl.string(h.t.vAfbG8) : h.intl.string(h.t.IGzFc5);
          break;
        case true:
          F = "";
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else {
        let e, r = (0, a.R)({
          productLine: w,
          purchaseType: f.VVm.SUBSCRIPTION,
          plan: y,
          premiumSubscription: null == D ? null : D,
          isGift: false,
          planGroup: k,
          isPrepaidPaymentSource: false
        });
        O || (e = g(P, t, n, y.id)), F = (null == D ? true : D.isPausedAllowsResumeButNotUpdates) ? h.intl.format(h.t.B6oNwB, {
          primaryText: r,
          rate: e,
          paidURL: f.X7G.PAID_TERMS,
          contactLink: f.X7G.CONTACT,
          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING)
        }) : null != D && (0, d.vT)(D, y.id, k) ? h.intl.format(h.t.LyBQUW, {
          primaryText: r,
          rate: e,
          paidURL: f.X7G.PAID_TERMS,
          contactLink: f.X7G.CONTACT,
          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING)
        }) : M && w === f.EZt.BOOST && null != P ? h.intl.format(h.t["2nKy/0"], {
          price: (0, u.$g)(P.amount, P.currency),
          paidServiceTermsArticle: f.X7G.PAID_TERMS,
          contactUsArticle: f.X7G.CONTACT,
          subscriptionFAQArticle: l.A.getArticleURL(f.MVz.BILLING)
        }) : O ? h.intl.format(h.t["Hvo/Z5"], {
          buttonText: r,
          interval: c.Ay.formatInterval(null == y ? true : y.interval),
          cancelSubscriptionArticle: l.A.getArticleURL(f.MVz.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: l.A.getArticleURL(f.MVz.PAID_TERMS)
        }) : null != R && null != P ? h.intl.format(h.t.Kcieh4, {
          primaryText: r,
          proratedAmount: (0, u.$g)(R, P.currency),
          renewalAmount: (0, u.$g)(P.amount, P.currency),
          rateInterval: c.Ay.formatInterval(null == y ? true : y.interval),
          paidURL: f.X7G.PAID_TERMS,
          contactLink: f.X7G.CONTACT,
          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING)
        }) : h.intl.format(h.t.anJ7OX, {
          primaryText: r,
          rate: e,
          paidURL: f.X7G.PAID_TERMS,
          contactLink: f.X7G.CONTACT,
          helpdeskArticle: l.A.getArticleURL(f.MVz.BILLING)
        })
      }
    return (0, r.jsxs)("div", {
      className: m.F,
      children: ["" !== B && (0, r.jsx)("div", {
        children: B
      }), "" !== F && (0, r.jsx)("div", {
        children: F
      }), T === f.hes.PAYSAFE_CARD && (0, r.jsx)("div", {
        children: h.intl.string(h.t.kj9VLI)
      }), T === f.hes.SOFORT && (0, r.jsx)("div", {
        children: h.intl.string(h.t["UYy1/h"])
      })]
    })
  }