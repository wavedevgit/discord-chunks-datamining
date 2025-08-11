/** Chunk was on 25548 **/
/** chunk id: 81273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
let w = (e, t, n, l) => {
  let s, w = (0, c.e7)([j.Z], () => j.Z.isLurking(t)),
    L = (0, p.J)(t),
    k = (0, c.e7)([v.Z], () => null != t ? v.Z.getRequest(t) : null),
    z = (null == k ? true : k.applicationStatus) === g.wB.SUBMITTED,
    A = null == e ? true : e.subscription_plans[0],
    M = null == A ? true : A.id,
    R = (null == e ? true : e.published) === true,
    D = null == A ? true : A.sku_id,
    B = (0, c.e7)([x.Z], () => null != M ? x.Z.get(M) : null),
    {
      activeSubscription: F,
      activeSubscriptionPlanFromStore: G
    } = (0, O.Z)(n),
    U = null == F || null != G,
    H = (0, N._k)(n, {
      includeSoftDeleted: true
    }).map(e => e.subscription_plans[0].id),
    W = (0, Z.V)(F),
    Y = null != W,
    K = !!(null == F ? true : F.hasActiveTrial),
    {
      loading: V,
      getTrialPurchaseEligibility: X
    } = (0, I.F)(),
    q = (0, N.oC)(null == e ? true : e.id),
    {
      analyticsLocations: J
    } = (0, f.ZP)(),
    Q = (null == F ? true : F.paymentGateway) === S.gg$.APPLE_PARTNER,
    $ = !w && null != B && U && !z && !Y && !K && !Q;
  z || w && !L ? s = E.intl.string(E.t.pQK5ho) : W === M ? s = E.intl.formatToPlainString(E.t.UlBRTk, {
    changeDate: null != F ? o()(F.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : Y ? s = E.intl.string(E.t.ePFYOT) : K ? s = E.intl.string(E.t["0lPoT0"]) : Q && (s = E.intl.string(E.t.cEMaCg));
  let ee = (0, m.Z)(P.iP);
  r.useEffect(() => {
    R && null != D && d.Z.wait(() => {
      (0, u.GZ)(D)
    })
  }, [R, D]);
  let et = r.useCallback(async () => {
      let n, r;
      if (a()(null != e, "No subscription listing"), a()(null != A, "No subscription plan"), a()(R, "Cannot purchase this unpublished plan"), (null == q ? true : q.active_trial) != null) {
        let i = await X(t, e.id, q.active_trial.id);
        if ((null == i ? true : i.is_eligible) === true) {
          var s;
          n = null == q || null == (s = q.active_trial) ? true : s.id
        } else r = E.intl.string(E.t.vuvsKy)
      }(0, b.Z)({
        activeSubscription: F,
        analyticsSubscriptionType: S.NYc.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == q ? true : q.active_trial) != null ? E.intl.format(E.t.zyGyNj, {
          buttonText: E.intl.string(E.t.BEeXiY),
          interval: (0, y.iG)(A),
          days: 1,
          contactLink: S.EYA.CONTACT,
          cancelSubscriptionArticle: _.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: _.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: _.Z.getArticleURL(S.BhN.PAID_TERMS),
          tierName: A.name
        }) : true,
        analyticsLocations: J,
        analyticsLocation: l,
        renderHeader: (n, r, l) => (0, i.jsx)(T.h, {
          onClose: r,
          listing: e,
          step: l,
          guildId: t
        }),
        initialPlanId: A.id,
        skuId: A.sku_id,
        planGroup: H,
        renderPurchaseConfirmation: (n, r) => ee ? (0, i.jsx)(C.m, {
          listing: e,
          onClose: r,
          guildId: t
        }) : (0, i.jsx)(T.x, {
          listing: e,
          onClose: r,
          guildId: t
        }),
        reviewWarningMessage: r
      })
    }, [R, e, A, F, H, t, J, l, X, q, ee]),
    en = r.useCallback(() => {
      (0, h.hk)(t)
    }, [t]);
  return {
    openModal: L ? en : et,
    canOpenModal: $,
    cannotOpenReason: s,
    isCheckingTrialEligibility: V
  }
}