/** Chunk was on web.js **/
/** chunk id: 821891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk367921 = require("./367921.jsx"),
  Chunk938289 = require("./938289.js"),
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
let E = (e, t, n, r) => {
    if (null == e || null == t || null == n) {
      let e = Error("Missing base rate for legal fine print"),
        t = r || "none";
      return (0, l.pM)(e, {
        tags: {
          planId: t
        }
      }), null
    }
    return (0, d.CE)((0, d.$g)(e.amount, e.currency), t, n)
  },
  y = function(e) {
    let t, n, l, y, {
        subscriptionPlan: b,
        isGift: O,
        isTrial: v,
        isOrbCheckout: A,
        rentalDuration: I,
        isEmbeddedIAP: S,
        renewalInvoice: T,
        paymentSourceType: C,
        hide: N,
        purchaseType: w,
        productLine: R,
        proratedAmount: P,
        basePrice: D,
        currentSubscription: L,
        skuId: x,
        applicationName: M,
        hasAlreadyLinked: j
      } = e,
      k = (0, i.bG)([s.A], () => s.A.inReverseTrial()),
      U = (0, o.n)({
        location: "LegalFinePrint"
      });
    if (N) return null;
    let G = null == e.planGroup ? [] : e.planGroup;
    if (null != T) {
      let e = u.Ay.getIntervalForInvoice(T);
      t = e.intervalType, n = e.intervalCount, l = (0, d.CE)((0, d.$g)(T.total, T.currency), t, n), y = (0, d.CE)((0, d.$g)(T.subtotal, T.currency), t, n)
    } else null != b && (t = b.interval, n = b.intervalCount);
    let F = (0, a.Ro)({
        purchaseType: w || p.VVm.SUBSCRIPTION,
        plan: b,
        premiumSubscription: null == L ? null : L,
        productLine: R,
        isGift: !!O,
        planGroup: G,
        isPrepaidPaymentSource: false
      }),
      V = m.intl.format(m.t.Y2Rkqc, {
        primaryText: F,
        paidURL: p.X7G.PAID_TERMS
      }),
      B = m.intl.format(m.t.H2uH5b, {
        primaryText: F,
        paidURL: p.X7G.PAID_TERMS
      }),
      H = "",
      Y = "";
    if (A) {
      H = null != I && I > 0 ? m.intl.format(m.t.itoo7A, {
        days: I,
        virtualGoodsURL: p.X7G.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: p.X7G.PAID_TERMS
      }) : m.intl.format(m.t.xlJyOM, {
        virtualGoodsURL: p.X7G.PAID_TERMS_VIRTUAL_GOODS,
        paidURL: p.X7G.PAID_TERMS
      });
      let e = "";
      x === _.Dp.ORB_PROFILE_BADGE ? e = m.intl.string(m.t.APcKRo) : x === _.Dp.FRACTIONAL_PREMIUM ? e = m.intl.string(m.t.FhJ74j) : null == I && (e = m.intl.string(m.t["Sxed/G"])), Array.isArray(H) ? H = [...H, " ".concat(e)] : H += " ".concat(e)
    } else if (S)
      if (null != l && (null == T ? true : T.subscriptionPeriodEnd) != null) H = m.intl.format(m.t["2VPTay"], {
        subtotalRate: y
      });
      else switch (t) {
        case h.WT.MONTH:
          H = 1 === n ? m.intl.format(m.t["+ywPmZ"], {}) : m.intl.format(m.t.oBwZfh, {
            intervalCount: n
          });
          break;
        case h.WT.YEAR:
          H = m.intl.format(m.t.y9gsX5, {});
          break;
        case true:
          H = m.intl.format(m.t.UxGFH4, {});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else if (w === p.VVm.ONE_TIME) switch (R) {
        case p.EZt.COLLECTIBLES:
          Y = V, H = O ? m.intl.format(m.t.Amdf8X, {
            paidURL: p.X7G.PAID_TERMS
          }) : m.intl.format(m.t["40vM4o"], {
            paidURL: p.X7G.PAID_TERMS
          });
          break;
        case p.EZt.GUILD_PRODUCT:
          Y = V, H = m.intl.format(m.t["GEAQ+u"], {
            paidURL: p.X7G.PAID_TERMS
          });
          break;
        case p.EZt.SOCIAL_LAYER_GAME_ITEM:
          Y = V;
          let W = U ? m.t.f6Ngwm : m.t.VCR6hI,
            K = O || true === j ? W : m.t.CVITgq;
          H = m.intl.format(K, {
            applicationName: null != M ? M : "game's"
          });
          break;
        default:
          Y = B, H = m.intl.string(m.t["9/siSQ"])
      } else if (null == b || O) switch (O && (Y = V), t) {
        case h.WT.MONTH:
          H = O ? m.intl.string(m.t.IjNapk) : m.intl.string(m.t["/sGXPr"]), H = O ? m.intl.string(m.t.IjNapk) : 1 === n ? m.intl.string(m.t["/sGXPr"]) : m.intl.formatToPlainString(m.t.Fqjihk, {
            intervalCount: n
          });
          break;
        case h.WT.YEAR:
          H = O ? m.intl.string(m.t.vAfbG8) : m.intl.string(m.t.IGzFc5);
          break;
        case true:
          H = "";
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      } else {
        let e, r = (0, a.Ro)({
          productLine: R,
          purchaseType: p.VVm.SUBSCRIPTION,
          plan: b,
          premiumSubscription: null == L ? null : L,
          isGift: false,
          planGroup: G,
          isPrepaidPaymentSource: false
        });
        v || (e = E(D, t, n, b.id)), H = (null == L ? true : L.isPausedAllowsResumeButNotUpdates) ? m.intl.format(m.t.B6oNwB, {
          primaryText: r,
          rate: e,
          paidURL: p.X7G.PAID_TERMS,
          contactLink: p.X7G.CONTACT,
          helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING)
        }) : null != L && (0, f.vT)(L, b.id, G) ? m.intl.format(m.t.LyBQUW, {
          primaryText: r,
          rate: e,
          paidURL: p.X7G.PAID_TERMS,
          contactLink: p.X7G.CONTACT,
          helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING)
        }) : k && R === p.EZt.BOOST && null != D ? m.intl.format(m.t["2nKy/0"], {
          price: (0, d.$g)(D.amount, D.currency),
          paidServiceTermsArticle: p.X7G.PAID_TERMS,
          contactUsArticle: p.X7G.CONTACT,
          subscriptionFAQArticle: c.A.getArticleURL(p.MVz.BILLING)
        }) : v ? m.intl.format(m.t["Hvo/Z5"], {
          buttonText: r,
          interval: u.Ay.formatInterval(null == b ? true : b.interval),
          cancelSubscriptionArticle: c.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: c.A.getArticleURL(p.MVz.PAID_TERMS)
        }) : null != P && null != D ? m.intl.format(m.t.Kcieh4, {
          primaryText: r,
          proratedAmount: (0, d.$g)(P, D.currency),
          renewalAmount: (0, d.$g)(D.amount, D.currency),
          rateInterval: u.Ay.formatInterval(null == b ? true : b.interval),
          paidURL: p.X7G.PAID_TERMS,
          contactLink: p.X7G.CONTACT,
          helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING)
        }) : m.intl.format(m.t.anJ7OX, {
          primaryText: r,
          rate: e,
          paidURL: p.X7G.PAID_TERMS,
          contactLink: p.X7G.CONTACT,
          helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING)
        })
      }
    return (0, r.jsxs)("div", {
      className: g.F,
      children: ["" !== Y && (0, r.jsx)("div", {
        children: Y
      }), "" !== H && (0, r.jsx)("div", {
        children: H
      }), C === p.hes.PAYSAFE_CARD && (0, r.jsx)("div", {
        children: m.intl.string(m.t.kj9VLI)
      }), C === p.hes.SOFORT && (0, r.jsx)("div", {
        children: m.intl.string(m.t["UYy1/h"])
      })]
    })
  }