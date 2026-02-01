/** Chunk was on web.js **/
/** chunk id: 700974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk73825 = require("./73825.js"),
  Chunk241524 = require("./241524.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk202384 = require("./202384.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk51758 = require("./51758.js"),
  Chunk857071 = require("./857071.js"),
  Chunk728950 = require("./728950.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk975571 = require("./975571.js"),
  Chunk500345 = require("./500345.js"),
  Chunk599941 = require("./599941.js"),
  Chunk624456 = require("./624456.js"),
  Chunk700206 = require("./700206.js"),
  Chunk396695 = require("./396695.js"),
  Chunk916727 = require("./916727.jsx"),
  Chunk354033 = require("./354033.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let D = "MMM DD, YYYY",
  L = (e, t, n, a) => {
    let s, L = (0, c.bG)([E.A], () => E.A.isLurking(t)),
      x = (0, g.H)(t),
      M = (0, c.bG)([m.A], () => null != t ? m.A.getRequest(t) : null),
      j = (null == M ? true : M.applicationStatus) === h.B5.SUBMITTED,
      k = null == e ? true : e.subscription_plans[0],
      U = null == k ? true : k.id,
      G = (null == e ? true : e.published) === true,
      V = null == k ? true : k.sku_id,
      F = (0, c.bG)([b.A], () => null != U ? b.A.get(U) : null),
      {
        activeSubscription: B,
        activeSubscriptionPlanFromStore: H
      } = (0, S.A)(n),
      Y = null == B || null != H,
      W = (0, A.cY)(n, {
        includeSoftDeleted: true
      }).map(e => e.subscription_plans[0].id),
      K = (0, I.l)(B),
      z = null != K,
      q = !!(null == B ? true : B.hasActiveTrial),
      {
        loading: Z,
        getTrialPurchaseEligibility: Q
      } = (0, T.E)(),
      X = (0, A.dL)(null == e ? true : e.id),
      {
        analyticsLocations: J
      } = (0, p.Ay)(),
      $ = null == B ? true : B.isPurchasedViaAppleGeneric,
      ee = !L && null != F && Y && !j && !z && !q && !$;
    j || L && !x ? s = P.intl.string(P.t.pQK5ho) : K === U ? s = P.intl.formatToPlainString(P.t.UlBRTl, {
      changeDate: null != B ? l()(B.currentPeriodEnd).format(D) : ""
    }) : z ? s = P.intl.string(P.t.ePFYOS) : q ? s = P.intl.string(P.t["0lPoT2"]) : $ && (s = P.intl.string(P.t.cEMaCt));
    let et = (0, f.A)(w.Yl);
    i.useEffect(() => {
      G && null != V && u.h.wait(() => {
        (0, d.ur)(V)
      })
    }, [G, V]);
    let en = i.useCallback(async () => {
        let n, i;
        if (o()(null != e, "No subscription listing"), o()(null != k, "No subscription plan"), o()(G, "Cannot purchase this unpublished plan"), (null == X ? true : X.active_trial) != null) {
          let r = await Q(t, e.id, X.active_trial.id);
          if ((null == r ? true : r.is_eligible) === true) {
            var s;
            n = null == X || null == (s = X.active_trial) ? true : s.id
          } else i = P.intl.string(P.t.vuvsK5)
        }(0, y.A)({
          activeSubscription: B,
          analyticsSubscriptionType: R.rzx.GUILD,
          trialId: n,
          trialFooterMessageOverride: (null == X ? true : X.active_trial) != null ? P.intl.format(P.t.zyGyNk, {
            buttonText: P.intl.string(P.t.BEeXib),
            interval: (0, v.Gg)(k),
            days: 1,
            contactLink: R.X7G.CONTACT,
            cancelSubscriptionArticle: O.A.getArticleURL(R.MVz.ROLE_SUBSCRIPTION_CANCEL),
            helpdeskArticle: O.A.getArticleURL(R.MVz.ROLE_SUBSCRIPTION_TRIAL),
            paidServiceTermsArticle: O.A.getArticleURL(R.MVz.PAID_TERMS),
            tierName: k.name
          }) : true,
          analyticsLocations: J,
          analyticsLocation: a,
          renderHeader: (n, i, a) => (0, r.jsx)(N.Y, {
            onClose: i,
            listing: e,
            step: a,
            guildId: t
          }),
          initialPlanId: k.id,
          skuId: k.sku_id,
          planGroup: W,
          renderPurchaseConfirmation: (n, i) => et ? (0, r.jsx)(C.v, {
            listing: e,
            onClose: i,
            guildId: t
          }) : (0, r.jsx)(N.X, {
            listing: e,
            onClose: i,
            guildId: t
          }),
          reviewWarningMessage: i
        })
      }, [G, e, k, B, W, t, J, a, Q, X, et]),
      er = i.useCallback(() => {
        (0, _.Ze)(t)
      }, [t]);
    return {
      openModal: x ? er : en,
      canOpenModal: ee,
      cannotOpenReason: s,
      isCheckingTrialEligibility: Z
    }
  }