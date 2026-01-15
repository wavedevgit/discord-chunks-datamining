/** Chunk was on web.js **/
/** chunk id: 81273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk131388 = require("./131388.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk305325 = require("./305325.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk281956 = require("./281956.js"),
  Chunk41776 = require("./41776.js"),
  Chunk738737 = require("./738737.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk63063 = require("./63063.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk697227 = require("./697227.js"),
  Chunk934826 = require("./934826.js"),
  Chunk896083 = require("./896083.js"),
  Chunk939872 = require("./939872.jsx"),
  Chunk265985 = require("./265985.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let D = "MMM DD, YYYY",
  x = (e, t, n, a) => {
    let s, x = (0, c.e7)([E.Z], () => E.Z.isLurking(t)),
      L = (0, g.J)(t),
      j = (0, c.e7)([m.Z], () => null != t ? m.Z.getRequest(t) : null),
      M = (null == j ? true : j.applicationStatus) === h.wB.SUBMITTED,
      k = null == e ? true : e.subscription_plans[0],
      U = null == k ? true : k.id,
      G = (null == e ? true : e.published) === true,
      Z = null == k ? true : k.sku_id,
      F = (0, c.e7)([y.Z], () => null != U ? y.Z.get(U) : null),
      {
        activeSubscription: B,
        activeSubscriptionPlanFromStore: V
      } = (0, T.Z)(n),
      H = null == B || null != V,
      Y = (0, S._k)(n, {
        includeSoftDeleted: true
      }).map(e => e.subscription_plans[0].id),
      W = (0, I.V)(B),
      K = null != W,
      z = !!(null == B ? true : B.hasActiveTrial),
      {
        loading: q,
        getTrialPurchaseEligibility: Q
      } = (0, C.F)(),
      X = (0, S.oC)(null == e ? true : e.id),
      {
        analyticsLocations: J
      } = (0, p.ZP)(),
      $ = null == B ? true : B.isPurchasedViaAppleGeneric,
      ee = !x && null != F && H && !M && !K && !z && !$;
    M || x && !L ? s = R.intl.string(R.t.pQK5ho) : W === U ? s = R.intl.formatToPlainString(R.t.UlBRTl, {
      changeDate: null != B ? l()(B.currentPeriodEnd).format(D) : ""
    }) : K ? s = R.intl.string(R.t.ePFYOS) : z ? s = R.intl.string(R.t["0lPoT2"]) : $ && (s = R.intl.string(R.t.cEMaCt));
    let et = (0, f.Z)(P.iP);
    i.useEffect(() => {
      G && null != Z && u.Z.wait(() => {
        (0, d.GZ)(Z)
      })
    }, [G, Z]);
    let en = i.useCallback(async () => {
        let n, i;
        if (o()(null != e, "No subscription listing"), o()(null != k, "No subscription plan"), o()(G, "Cannot purchase this unpublished plan"), (null == X ? true : X.active_trial) != null) {
          let r = await Q(t, e.id, X.active_trial.id);
          if ((null == r ? true : r.is_eligible) === true) {
            var s;
            n = null == X || null == (s = X.active_trial) ? true : s.id
          } else i = R.intl.string(R.t.vuvsK5)
        }(0, b.Z)({
          activeSubscription: B,
          analyticsSubscriptionType: w.NYc.GUILD,
          trialId: n,
          trialFooterMessageOverride: (null == X ? true : X.active_trial) != null ? R.intl.format(R.t.zyGyNk, {
            buttonText: R.intl.string(R.t.BEeXib),
            interval: (0, v.iG)(k),
            days: 1,
            contactLink: w.EYA.CONTACT,
            cancelSubscriptionArticle: O.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_CANCEL),
            helpdeskArticle: O.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_TRIAL),
            paidServiceTermsArticle: O.Z.getArticleURL(w.BhN.PAID_TERMS),
            tierName: k.name
          }) : true,
          analyticsLocations: J,
          analyticsLocation: a,
          renderHeader: (n, i, a) => (0, r.jsx)(N.h, {
            onClose: i,
            listing: e,
            step: a,
            guildId: t
          }),
          initialPlanId: k.id,
          skuId: k.sku_id,
          planGroup: Y,
          renderPurchaseConfirmation: (n, i) => et ? (0, r.jsx)(A.m, {
            listing: e,
            onClose: i,
            guildId: t
          }) : (0, r.jsx)(N.x, {
            listing: e,
            onClose: i,
            guildId: t
          }),
          reviewWarningMessage: i
        })
      }, [G, e, k, B, Y, t, J, a, Q, X, et]),
      er = i.useCallback(() => {
        (0, _.hk)(t)
      }, [t]);
    return {
      openModal: L ? er : en,
      canOpenModal: ee,
      cannotOpenReason: s,
      isCheckingTrialEligibility: q
    }
  }