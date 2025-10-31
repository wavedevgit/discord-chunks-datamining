/** Chunk was on web.js **/
/** chunk id: 81273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
      M = (0, c.e7)([m.Z], () => null != t ? m.Z.getRequest(t) : null),
      j = (null == M ? true : M.applicationStatus) === h.wB.SUBMITTED,
      k = null == e ? true : e.subscription_plans[0],
      U = null == k ? true : k.id,
      G = (null == e ? true : e.published) === true,
      B = null == k ? true : k.sku_id,
      Z = (0, c.e7)([y.Z], () => null != U ? y.Z.get(U) : null),
      {
        activeSubscription: F,
        activeSubscriptionPlanFromStore: V
      } = (0, S.Z)(n),
      H = null == F || null != V,
      Y = (0, I._k)(n, {
        includeSoftDeleted: true
      }).map(e => e.subscription_plans[0].id),
      W = (0, T.V)(F),
      K = null != W,
      z = !!(null == F ? true : F.hasActiveTrial),
      {
        loading: q,
        getTrialPurchaseEligibility: X
      } = (0, A.F)(),
      Q = (0, I.oC)(null == e ? true : e.id),
      {
        analyticsLocations: J
      } = (0, _.ZP)(),
      $ = (null == F ? true : F.paymentGateway) === P.gg$.APPLE_PARTNER,
      ee = !x && null != Z && H && !j && !K && !z && !$;
    j || x && !L ? s = w.intl.string(w.t.pQK5ho) : W === U ? s = w.intl.formatToPlainString(w.t.UlBRTl, {
      changeDate: null != F ? l()(F.currentPeriodEnd).format(D) : ""
    }) : K ? s = w.intl.string(w.t.ePFYOS) : z ? s = w.intl.string(w.t["0lPoT2"]) : $ && (s = w.intl.string(w.t.cEMaCt));
    let et = (0, f.Z)(R.iP);
    i.useEffect(() => {
      G && null != B && u.Z.wait(() => {
        (0, d.GZ)(B)
      })
    }, [G, B]);
    let en = i.useCallback(async () => {
        let n, i;
        if (o()(null != e, "No subscription listing"), o()(null != k, "No subscription plan"), o()(G, "Cannot purchase this unpublished plan"), (null == Q ? true : Q.active_trial) != null) {
          let r = await X(t, e.id, Q.active_trial.id);
          if ((null == r ? true : r.is_eligible) === true) {
            var s;
            n = null == Q || null == (s = Q.active_trial) ? true : s.id
          } else i = w.intl.string(w.t.vuvsK5)
        }(0, b.Z)({
          activeSubscription: F,
          analyticsSubscriptionType: P.NYc.GUILD,
          trialId: n,
          trialFooterMessageOverride: (null == Q ? true : Q.active_trial) != null ? w.intl.format(w.t.zyGyNk, {
            buttonText: w.intl.string(w.t.BEeXib),
            interval: (0, v.iG)(k),
            days: 1,
            contactLink: P.EYA.CONTACT,
            cancelSubscriptionArticle: O.Z.getArticleURL(P.BhN.ROLE_SUBSCRIPTION_CANCEL),
            helpdeskArticle: O.Z.getArticleURL(P.BhN.ROLE_SUBSCRIPTION_TRIAL),
            paidServiceTermsArticle: O.Z.getArticleURL(P.BhN.PAID_TERMS),
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
          renderPurchaseConfirmation: (n, i) => et ? (0, r.jsx)(C.m, {
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
      }, [G, e, k, F, Y, t, J, a, X, Q, et]),
      er = i.useCallback(() => {
        (0, p.hk)(t)
      }, [t]);
    return {
      openModal: L ? er : en,
      canOpenModal: ee,
      cannotOpenReason: s,
      isCheckingTrialEligibility: q
    }
  }