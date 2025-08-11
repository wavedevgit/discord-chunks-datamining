/** Chunk was on 31505 **/
/** chunk id: 7305, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => U,
  default: () => H
}), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk367074 = require("./367074.js"),
  Chunk717401 = require("./717401.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.js"),
  Chunk791785 = require("./791785.js"),
  Chunk276442 = require("./276442.js"),
  Chunk793541 = require("./793541.js"),
  Chunk380898 = require("./380898.js"),
  Chunk710094 = require("./710094.js"),
  Chunk518727 = require("./518727.js"),
  Chunk293858 = require("./293858.js"),
  Chunk183813 = require("./183813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk174827 = require("./174827.js"),
  Chunk846464 = require("./846464.js"),
  Chunk184160 = require("./184160.js"),
  Chunk48175 = require("./48175.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk236691 = require("./236691.js");

function B(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = null != arguments[r] ? arguments[r] : {},
      t = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), t.forEach(function(r) {
      var t;
      t = n[r], r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t
    })
  }
  return e
}
let N = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function k(e) {
  let {
    analyticsLocation: r,
    analyticsObject: n,
    analyticsSourceLocation: o,
    onComplete: s,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: h,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: b,
    openInvoiceId: y,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: E,
    postSuccessGuild: I,
    followupSKUInfo: P,
    renderHeader: T,
    applicationId: O,
    guildId: w,
    referralTrialOfferId: A,
    skuId: R,
    returnRef: B,
    skipConfirm: N = false,
    continueSessionToInitialStep: k
  } = e, {
    analyticsLocations: F
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, l.Y2)())
  }, []);
  let {
    step: U
  } = (0, f.JL)(), {
    isGift: H,
    giftMessage: G,
    giftRecipient: D
  } = (0, x.wD)(), z = H && (0, _.pO)(D) && U === m.h8.PLAN_SELECT;
  return <S.Z isConfirmationStep={U === m.h8.CONFIRM}><j.PaymentModal analyticsLocations={F} analyticsLocation={r} analyticsObject={n} analyticsSourceLocation={o} analyticsSubscriptionType={Z.NYc.PREMIUM} onComplete={s} transitionState={d} initialPlanId={c} giftMessage={G} subscriptionTier={u} onClose={h} trialId={L} isGift={H} trialFooterMessageOverride={g} reviewWarningMessage={b} planGroup={M.Y1} openInvoiceId={y} onSubscriptionConfirmation={v} renderPurchaseConfirmation={E} postSuccessGuild={I} followupSKUInfo={P} renderHeader={T} applicationId={O} guildId={w} referralTrialOfferId={A} skuId={R} shakeWhilePurchasing={true} isDynamicModal={z} returnRef={B} skipConfirm={N} continueSessionToInitialStep={k} /></S.Z>
}

function F(e) {
  var r, n;
  let {
    initialPlanId: i,
    handleStepChange: o,
    referralTrialOfferId: a
  } = e, {
    paymentSources: l,
    selectedSkuId: s,
    selectedPlan: C
  } = (0, f.JL)(), {
    isGift: d,
    claimableRewards: p
  } = (0, x.wD)(), u = (0, w.Z)({
    isGift: d,
    skuId: s,
    referralTrialOfferId: a
  }), _ = (0, I.Fv)(u), h = (0, c.id)(C, d, p);
  return <L.J{...r = B({}, e), n = n = {
    breadcrumbSteps: N,
    onReturn: () => {
      let e = Object.values(l),
        r = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
      _ && (r = m.h8.REVIEW), h && e.length < 1 && (r = m.h8.SELECT_FREE_SKU), o(r, {
        trackedFromStep: m.h8.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      n.push.apply(n, t)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
  }), r} />
}
let U = [{
  key: null,
  renderStep: e => <j.I{...B({}, e)} />
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => <T.q{...B({}, e)} />,
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => <O.x{...B({}, e)} />,
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => <P.x{...B({}, e)} />,
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : A.intl.string(A.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => <F{...B({}, e)} />,
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => <Chunk380898.Z />
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => <Chunk793541.Z />
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => <y.l{...B({}, e)} />,
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => <v.b{...B({}, e)} />
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => <E.S{...B({}, e)} />,
  options: {
    bodyClassName: Chunk236691.selectFreeSku,
    isDynamicModal: true
  }
}];

function H(e) {
  let r = (0, o.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? M.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: l,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: _,
      giftStyle: m,
      isGift: j,
      loadId: L,
      paymentModalBanner: g,
      referralCode: b,
      subscriptionTier: y
    } = e;
  if (null != y && !Object.values(M.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  return <C.Gt value={i}><f.PaymentContextProvider loadId={L} activeSubscription={null != e.subscription ? e.subscription : r} stepConfigs={U} skuIDs={[...M.YQ]} isGift={j} defaultPlanId={null != n ? n : l} referralCode={b} wasTier2PremiumBeforePurchase={e.wasTier2PremiumBeforePurchase}><h.c1 confirmationFooter={a} paymentModalBanner={g}><x.KB isGift={j} giftRecipient={null == _ ? true : _} giftMessage={p} giftStyle={m} giftingOrigin={c}><k{...B({}, e)} /></x.KB></h.c1></f.PaymentContextProvider></C.Gt>
}