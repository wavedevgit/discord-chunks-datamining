/** Chunk was on 31505 **/
/** chunk id: 846464, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  q: () => L
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140465 = require("./140465.js"),
  Chunk47280 = require("./47280.js"),
  Chunk639119 = require("./639119.js"),
  Chunk973007 = require("./973007.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk48175 = require("./48175.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677163 = require("./677163.js");

function L(e) {
  let {
    handleStepChange: r,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: o,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: h,
    priceOptions: j,
    defaultPlanId: L
  } = (0, u.JL)(), {
    isGift: b,
    claimableRewards: y
  } = (0, p.wD)(), S = b && null != y && y.length > 0, v = (0, C.N)(i), E = (0, l.Nx)(), I = (0, s.Z)({
    location: "PremiumPaymentSelect"
  });
  return <g selectSku={e => (function(e) {
      let {
        activeSubscription: r,
        newSkuId: n,
        setSelectedSkuId: t,
        handleStepChange: i,
        isGift: o,
        userTrialOffer: a,
        setSelectedPlanId: l,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: C
      } = e;
      t(n);
      let d = _.h8.PLAN_SELECT,
        p = (0, c.k5)(r);
      p !== m.Si.TIER_1 && p !== m.Si.TIER_2 || n !== m.Si.TIER_0 || o || (d = _.h8.WHAT_YOU_LOSE);
      let u = (0, f.T)({
          userTrialOffer: a,
          isGift: o,
          skuId: n
        }),
        h = (0, x.Kp)({
          isTrial: u,
          isGift: o,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      d !== _.h8.WHAT_YOU_LOSE && h && (d = _.h8.REVIEW, l((0, x.nA)(n, r, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: o,
      handleStepChange: r,
      isGift: b,
      userTrialOffer: v,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: h,
      defaultPlanId: L
    })} onClose={n} isGift={b} inOfferExperience={E} priceOptions={j} showPromotionalGiftBanner={S} enablePremiumBrandRefresh={I} />
}

function g(e) {
  let {
    selectSku: r,
    onClose: n,
    isGift: i,
    inOfferExperience: l,
    priceOptions: s,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: p
  } = e, u = p ? <a.X6q variant={"heading-lg/bold"}>{h.intl.string(h.t["r+SebW"])}</a.X6q> : <a.vwX tag={a.RB0.H4}>{h.intl.string(h.t["r+SebW"])}</a.vwX>;
  return <t.Fragment>{<a.xBx data-migration-pending={true} className={o()(j.skuSelectModalHeader, {
        [j.premiumBrandRefreshHeader]: p
      })} separator={false}>{u}{<a.olH className={j.close} innerClassName={j.closeInner} onClick={n} />}</a.xBx>}{<a.hzk data-migration-pending={true} className={o()(j.skuSelectModalContent, {
        [j.modalSize]: !p,
        [j.modalPadding]: l && !p,
        [j.premiumBrandRefreshContent]: p
      })}><d.Z onSelectSku={e => r((0, c.Wz)(e))} isGift={i} priceOptions={s} showPromotionalGiftBanner={C} enablePremiumBrandRefresh={p} /></a.hzk>}</t.Fragment>
}