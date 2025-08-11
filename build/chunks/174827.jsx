/** Chunk was on 31505 **/
/** chunk id: 174827, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  x: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975608 = require("./975608.js"),
  Chunk600164 = require("./600164.js"),
  Chunk711459 = require("./711459.js"),
  Chunk374649 = require("./374649.js"),
  Chunk717401 = require("./717401.js"),
  Chunk286961 = require("./286961.js"),
  Chunk572517 = require("./572517.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk642530 = require("./642530.js"),
  Chunk381507 = require("./381507.js"),
  Chunk314404 = require("./314404.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk51499 = require("./51499.jsx"),
  Chunk456251 = require("./456251.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk809144 = require("./809144.js"),
  Chunk698708 = require("./698708.js"),
  Chunk844068 = require("./844068.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk428523 = require("./428523.js");

function H(e) {
  var r, n, o, H;
  let {
    handleStepChange: G,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: Y,
    trialId: W,
    referralTrialOfferId: K,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: Q,
    paymentSources: X,
    selectedSkuId: $,
    selectedPlan: ee,
    step: er,
    defaultPlanId: en,
    priceOptions: et,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: eo
  } = (0, I.JL)(), {
    isGift: ea,
    giftRecipient: el,
    giftMessage: es,
    claimableRewards: eC
  } = (0, E.wD)(), {
    paymentModalBanner: ed
  } = (0, T.zb)(), ec = (0, u.a5)(ee), ep = (null == (r = (0, _.Z)()) ? true : r.planSelectionBanner) != null, eu = ea && ec && null != eC && eC.length > 0 && ep, e_ = (0, M.m)(X, Q), {
    newPlans: ex
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ef = (0, l.e7)([g.default], () => g.default.getCurrentUser()), em = !ea && null != $ && $ === k.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(e_), eh = (0, m.N)(K), ej = !ea && null != eh && null != $ && k.nG[eh.trial_id].skus.includes($), eL = (0, f.Ng)(), eg = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => k.GP[e].skuId === $), eb = !ea && null != eL && null != $ && eg, ey = null != (o = ej || eb) && o, eS = i.useMemo(() => (0, v.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: em ? ex : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, ex, q, em, en]), ev = eb && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0], eE = (0, l.e7)([b.Z], () => b.Z.get(ev)), eI = [{
    planId: null == eE ? true : eE.id,
    quantity: 1
  }], [eP, eT] = i.useState(ey), [eO, ew] = (0, p.ED)({
    items: eI,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: et.paymentSourceId,
    currency: et.currency
  });
  i.useEffect(() => {
    ey && eT((null == eO ? true : eO.subscriptionPeriodEnd) == null)
  }, [eO, ey]), (0, C.Z)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: ew,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eZ = null != (H = null == ew ? true : ew.message) ? H : F.intl.string(F.t.R0RpRU),
    eM = ey && null == ew,
    eA = ey && null != ew,
    eR = eM && null == q && !!ey && (null == eO ? true : eO.subscriptionPeriodEnd) == null,
    eB = !ea && (null == eE ? true : eE.skuId) === k.Si.TIER_2 && (null == eh ? true : eh.referrer_id) != null,
    eN = null;
  return (eN = null != ed ? ed : eB ? <j.Z /> : <h.Z />, eR) ? <w.Z /> : (a()(null != er, "Step should be set"), a()(eS.length > 0, "Premium plan options should be set"), <t.Fragment>{<A.P giftMessage={es} />}{!(ea && (0, y.pO)(el)) && <O.Z isEligibleForTrial={ej} />}{<Z.C3>{eM && <hr className={U.planSelectSeparatorUpper} />}{eN}{<B.Z />}{<R.Z />}{eA ? <s.kzN>{eZ}</s.kzN> : <L.O planOptions={eS} eligibleForMultiMonthPlans={em} referralTrialOfferId={K} selectedPlanId={null == ee ? true : ee.id} planGroup={z} subscriptionPeriodEnd={null == eO ? true : eO.subscriptionPeriodEnd} discountInvoiceItems={eb ? null == eO ? true : eO.invoiceItems : true} useCompactGiftComponents={eu} handleClose={V} />}{eM && <t.Fragment>{<hr className={U.planSelectSeparatorLower} />}{<s.Text variant={"text-xs/normal"}>{F.intl.format(F.t.BHtnqK, {
            link: S.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })}</s.Text>}</t.Fragment>}</Z.C3>}{<Z.O3>{eu && <x.c />}{<s.mzw data-migration-pending={true} justify={d.Z.Justify.BETWEEN} align={d.Z.Align.CENTER} className={eo}><L.y onStepChange={G} onBackClick={() => G(P.h8.SKU_SELECT)} showBackButton={null == D && null == Y} planOptions={eS} shouldRenderUpdatedPaymentModal={eM} isTrial={ej} /></s.mzw>}</Z.O3>}</t.Fragment>)
}