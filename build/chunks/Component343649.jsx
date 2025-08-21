/** Chunk was on 24920 **/
/** chunk id: 343649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => el,
  default: () => eu
}), require("./388685.js"), require("./49124.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk723484 = require("./723484.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk493773 = require("./493773.js"),
  Chunk330726 = require("./330726.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk15640 = require("./15640.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk232127 = require("./232127.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk435020 = require("./435020.js"),
  Chunk98278 = require("./98278.js"),
  Chunk431369 = require("./431369.js"),
  Chunk176919 = require("./176919.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk185139 = require("./185139.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk430824 = require("./430824.js"),
  Chunk314884 = require("./314884.js"),
  Chunk975060 = require("./975060.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk518062 = require("./518062.jsx"),
  Chunk4434 = require("./4434.jsx"),
  Chunk333451 = require("./333451.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290136 = require("./290136.js");

function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function ei(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var el = 12633 == require.j ? ((i = {})[i.NONE = 0] = "NONE", i[i.LEVEL = 1] = "LEVEL", i[i.PERK = 2] = "PERK", i) : null;
let er = Chunk474936.Xh.NONE_MONTH,
  es = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  eo = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];
async function ea(e, t) {
  await (0, _.X8)();
  let n = (0, Y.vx)(Z.Z.boostSlots);
  return (0, _.W3)(e, n.map(e => e.id), t)
}

function ec(e) {
  let t, {
      transitionState: n,
      onClose: i,
      closeGuildPerksModal: s,
      analyticsLocations: a,
      analyticsLocation: _,
      analyticsSourceLocation: el,
      guildId: ec,
      onSubscribeComplete: eu,
      totalNumberOfSlotsToAssign: ed = 1,
      disablePremiumUpsell: ep = false,
      onSubscriptionConfirmation: eE,
      applicationId: em,
      intent: eP = 0
    } = e,
    {
      activeSubscription: e_,
      blockedPayments: eh,
      startingFractionalPremiumEndsAtRef: eS,
      invoicePreview: ey
    } = (0, M.JL)(),
    eI = (0, d.e7)([F.Z], () => F.Z.hasFetchedSubscriptions()),
    eg = null != e_ ? e_.paymentSourceId : null,
    ef = (0, d.e7)([z.Z], () => null != e_ ? (0, V.oE)(e_.planId) : null),
    eN = (0, d.e7)([z.Z], () => null == e_ || null != z.Z.get(e_.planId)),
    eO = (0, d.e7)([z.Z], () => null == ef ? z.Z.get(er) : ef),
    eb = (0, d.e7)([v.Z], () => v.Z.theme),
    ex = r.useRef((0, Y.vx)(Z.Z.boostSlots)).current,
    eM = (0, d.e7)([G.Z], () => G.Z.defaultPaymentSourceId),
    eL = (0, R.fL)(null != eg ? eg : eI ? eM : null),
    {
      paymentSources: eT,
      setPurchaseError: ej,
      paymentSourceId: eC,
      setIsSubmittingCurrentStep: eA,
      paymentAuthenticationState: ek,
      setPaymentSourceId: eR,
      isSubmittingCurrentStep: eD,
      paymentError: ev,
      purchaseError: ew,
      purchaseErrorBlockRef: eZ
    } = eL,
    eU = Object.keys(eT).length > 0,
    [eG, ez] = r.useState(ed - ex.length),
    [eF, eW] = r.useState(false),
    eY = (0, d.e7)([U.Z], () => U.Z.popupCallbackCalled),
    eB = (0, N.V)(),
    eH = r.useMemo(() => null != e_ && eN && eB ? (0, A.g)(e_, eG) : [{
      planId: J.Xh.PREMIUM_MONTH_GUILD,
      quantity: eG
    }], [e_, eN, eG, eB]),
    [eV, eX] = (0, S.Z)(() => [(0, u.Z)(), Date.now()]),
    {
      analyticsLocations: eK
    } = (0, f.ZP)(a, g.Z.GUILD_BOOST_PURCHASE_MODAL),
    e$ = r.useMemo(() => {
      var e, t;
      return {
        load_id: eV,
        payment_type: Q.Zu[Q.GZ.SUBSCRIPTION],
        sku_id: J.Si.GUILD,
        subscription_type: q.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = eH.find(e => {
          let {
            planId: t
          } = e;
          return J.Z1.has(t)
        })) ? true : e.planId) ? t : J.Xh.PREMIUM_MONTH_GUILD,
        quantity: eG,
        location: _,
        source: el,
        location_stack: eK
      }
    }, [eV, _, eK, el, eH, eG]);
  r.useEffect(() => {
    (0, H.i1)(eC)
  }, [eC]);
  let [eq, eJ] = r.useState(L.h8.PLAN_SELECT), eQ = r.useMemo(() => Date.now(), [eq]), e0 = r.useCallback((e, t) => {
    eJ(e), ej(null);
    let n = Date.now();
    W.default.track(q.rMx.PAYMENT_FLOW_STEP, ei(en({}, e$), {
      from_step: null != t ? t : eq,
      to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - eQ,
      flow_duration_ms: n - eX,
      guild_id: ec,
      application_id: em
    }))
  }, [ej, e$, eq, eQ, eX, ec, em]), e8 = {
    baseAnalyticsData: e$,
    flowStartTime: eX,
    guildId: ec,
    handleStepChange: e0,
    onSubscribeComplete: eu,
    paymentSourceId: eC,
    setIsSubmittingCurrentStep: eA,
    setPurchaseError: ej
  }, e3 = r.useRef(e8);
  r.useEffect(() => {
    e3.current = e8
  }), r.useEffect(() => {
    let {
      baseAnalyticsData: e,
      flowStartTime: t,
      guildId: n,
      handleStepChange: i,
      onSubscribeComplete: l,
      paymentSourceId: r,
      setIsSubmittingCurrentStep: s,
      setPurchaseError: o
    } = e3.current;
    (async () => {
      if (true === eY) try {
        if (null == U.Z.redirectedPaymentId) return;
        await (0, P.OP)(U.Z.redirectedPaymentId), i(L.h8.CONFIRM), e7(T.A.COMPLETED), null != n && await ea(n, 0 !== eP), null == l || l()
      } catch (n) {
        e7(T.A.FAIL), o(n), W.default.track(q.rMx.PAYMENT_FLOW_FAILED, ei(en({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: q.gg$.STRIPE,
          payment_source_id: r,
          duration_ms: Date.now() - t
        }))
      } finally {
        s(false), (0, P.K2)()
      }
    })()
  }, [eY, eP]), (0, y.ZP)(() => {
    F.Z.hasFetchedSubscriptions() || (0, P.jg)(), (0, x.U)(ei(en({}, e$), {
      guild_id: ec,
      application_id: em
    })), null != e_ && null != e_.renewalMutations && W.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: _,
      guild_id: ec
    })
  });
  let [e1, e2] = r.useState(es), [e4, e7] = r.useState(T.A.WAITING), [e6, e5] = r.useState(true), e9 = () => {
    i(e4 === T.A.COMPLETED)
  }, te = null != e_ && e_.isPurchasedExternally;
  r.useEffect(() => {
    ek !== k.wr.PENDING && eq !== L.h8.CONFIRM && null != eg && (e1 !== es && e2(es), es.includes(eq) || eq === L.h8.PREMIUM_UPSELL || e0(L.h8.REVIEW)), eq === L.h8.ADD_PAYMENT_STEPS && e1 !== eo && e2(eo), te && eq !== L.h8.PLAN_SELECT && eJ(L.h8.PLAN_SELECT)
  }, [eq, e0, te, ek, e_, eg, e1]), (0, k.bp)(eq, ek, e0, e7), (0, L.dZ)(eq, e4, e7);
  let tt = r.useRef(null),
    [tn, ti] = (0, I.Z)(false, 500),
    [tl, tr] = r.useState(null),
    [ts, to] = r.useState([]),
    [ta, tc] = r.useState(false),
    tu = r.useMemo(() => JSON.stringify(ts), [ts]);
  r.useEffect(() => {
    let e;
    eB && (null != z.Z.get(J.Xh.PREMIUM_MONTH_GUILD) && to(e = (0, H.DE)(J.Xh.PREMIUM_MONTH_GUILD, eC, false)), null == eC && null != e_ && null != e_.paymentSourceId ? tr(e_.currency) : null != e && tr(e[0]))
  }, [eC, e_, eB, tu]);
  let td = (0, R.vP)({
    paymentModalArgs: eL,
    initialStep: L.h8.PAYMENT_TYPE,
    prependSteps: [L.h8.PLAN_SELECT],
    appendSteps: [L.h8.REVIEW, L.h8.CONFIRM],
    breadcrumpSteps: e1,
    currentBreadcrumpStep: eq,
    onReturn: () => {
      e0(Object.values(eT).length < 1 ? L.h8.PLAN_SELECT : L.h8.REVIEW, L.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e0(L.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, i = Date.now();
      W.default.track(q.rMx.PAYMENT_FLOW_STEP, ei(en({}, e$), {
        from_step: t,
        to_step: n,
        step_duration_ms: i - eQ,
        flow_duration_ms: i - eX,
        guild_id: ec
      }))
    }
  });
  if (eh) t = (0, l.jsx)(O.Vq, {
    onClose: e9
  });
  else if (eI && eN && eB && null != tl && "" !== tl)
    if ((null == e_ ? true : e_.isPausedOrPausePending) && !e_.isPausedAllowsUpdatesButNotResume) t = (0, l.jsx)(m.hzk, {
      "data-migration-pending": true,
      children: (0, l.jsx)("p", {
        className: et.copy,
        children: ee.intl.string(ee.t.mOWsFx)
      })
    });
    else if (null != e_ && null != e_.renewalMutations) t = (0, l.jsx)(m.hzk, {
    "data-migration-pending": true,
    children: (0, l.jsx)("p", {
      className: et.copy,
      children: ee.intl.string(ee.t.npfhh4)
    })
  });
  else if (eq === L.h8.PREMIUM_UPSELL) {
    c()(null != eO, "Missing nextPremiumSubscriptionPlan"), c()(tl, "Currency not defined");
    let e = null != eC ? {
      paymentSourceId: eC,
      currency: tl
    } : {
      currency: tl
    };
    t = (0, l.jsx)($.Z, {
      premiumSubscriptionPlan: eO,
      analyticsLocation: _,
      analyticsSourceLocation: el,
      onClose: e9,
      onBack: () => e0(L.h8.PLAN_SELECT),
      onSkip: () => e0(null != eg || eU ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eE,
      priceOptions: e
    })
  } else {
    let e, n, i, r;
    c()(tl, "Currency not defined");
    let o = null != eC ? {
      paymentSourceId: eC,
      currency: tl
    } : {
      currency: tl
    };
    switch (eq) {
      case L.h8.PLAN_SELECT:
        c()(null != ec, "Missing guildId"), c()(null != eO, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(K.CP, {
          premiumSubscriptionPlan: eO,
          numGuildBoosts: eG,
          setNumGuildBoosts: ez,
          setForceDisableSubmitButton: e5,
          premiumSubscription: e_,
          existingAvailableSlots: ex,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            e9(), null != s && s(), (0, C.z)()
          },
          guildId: ec,
          priceOptions: o
        }), te && null != e_ && null != e_.paymentGateway && (e = (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(m.kzN, {
            className: et.externalErrorBlock,
            children: ee.intl.format(ee.t["/m3Y3t"], {
              paymentGatewayName: Q.Vz[e_.paymentGateway]
            })
          }), e]
        })), i = (0, l.jsx)(E.zx, {
          "data-migration-pending": true,
          look: E.zx.Looks.LINK,
          color: (0, p.ap)(eb) ? E.zx.Colors.PRIMARY : E.zx.Colors.WHITE,
          onClick: e9,
          children: ee.intl.string(ee.t.oEAioK)
        }), r = (0, l.jsx)(m.zxk, {
          variant: "primary",
          text: ee.intl.string(ee.t["3PatS0"]),
          type: "submit",
          disabled: e6 || 0 === eG || te,
          onClick: () => {
            if (!ep && (null == ef || ef.premiumSubscriptionType !== J.p9.TIER_2)) return void e0(L.h8.PREMIUM_UPSELL);
            e0(null != eg || eU ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS)
          }
        });
        break;
      case L.h8.ADD_PAYMENT_STEPS:
        break;
      case L.h8.AWAITING_AUTHENTICATION:
        e = (0, l.jsx)(h.F, {
          className: et.__invalid_body
        });
        break;
      case L.h8.REVIEW:
        c()(null != eO, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(K.Gq, {
          paymentSources: eT,
          priceOptions: o,
          currentPremiumSubscription: e_,
          premiumSubscriptionPaymentSourceId: eg,
          premiumSubscriptionPlan: eO,
          newAdditionalPlans: eH,
          onPaymentSourceChange: e => eR(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e0(L.h8.ADD_PAYMENT_STEPS), eR(null)
          },
          onPurchaseTermsChange: eW,
          legalTermsNodeRef: tt,
          hasLegalTermsFlash: tn
        }), n = L.h8.PLAN_SELECT, r = eF ? (0, l.jsx)(m.zxk, {
          variant: "active",
          text: ee.intl.string(ee.t.eUEeCg),
          type: "submit",
          loading: eD,
          onClick: async () => {
            c()(null != eH, "Missing newAdditionalPlans");
            let e = (0, j.m)(eT, eC);
            ej(null);
            try {
              e7(T.A.PURCHASING), eA(true), c()(null != eC, "Missing paymentSourceId"), c()(null != ey, "Missing invoicePreview");
              let t = {
                  amount: ey.total,
                  currency: ey.currency
                },
                n = (0, B.sG)(e_, eH, o.currency.toLowerCase(), o.paymentSourceId);
              if (W.default.track(q.rMx.PAYMENT_FLOW_COMPLETED, ei(en({}, e$), {
                  duration_ms: Date.now() - eX,
                  guild_id: ec,
                  application_id: em
                })), ta) return;
              if (null == e_ || null == ef) {
                c()(null != e, "Missing paymentSource");
                let i = await (0, P.XW)({
                  items: eH,
                  paymentSource: e,
                  currency: o.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (i.redirectConfirmation) return void tc(null != i.redirectURL)
              } else {
                let i = {
                  items: (0, B.MY)(e_, eH)
                };
                i.currency = e_.currency, null == i.currency && (i.currency = o.currency), i.paymentSource = null != eg ? eT[eg] : true, null == i.paymentSource && (c()(null != e, "Missing paymentSource"), i.paymentSource = e, i.currency = o.currency);
                let l = await (0, P.Mg)(e_, i, t, n, eK);
                if (l.redirectConfirmation) return void tc(null != l.redirectURL)
              }
              0 === eP && e0(L.h8.CONFIRM), e7(T.A.COMPLETED), null != ec && await ea(ec, 0 !== eP), 0 !== eP && e9(), null == eu || eu()
            } catch (t) {
              e7(T.A.FAIL), ej(t), W.default.track(q.rMx.PAYMENT_FLOW_FAILED, ei(en({}, e$), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE : null,
                payment_source_id: eC,
                duration_ms: Date.now() - eX
              }))
            } finally {
              ta || eA(false)
            }
          }
        }) : (0, l.jsx)(m.ua7, {
          text: ee.intl.string(ee.t.XdvBLS),
          children: e => (0, l.jsx)(m.zxk, ei(en({
            variant: "active",
            text: ee.intl.string(ee.t.eUEeCg)
          }, e), {
            onClick: () => {
              null != tt.current && (tt.current.scrollIntoView({
                behavior: "smooth"
              }), ti(true))
            },
            type: "submit"
          }))
        });
        break;
      case L.h8.CONFIRM:
        let a = w.Z.getGuild(ec),
          u = (0, j.$)(eT, eC),
          d = (0, V.qH)(eS.current) && null != ef && !J.F$.has(ef.id);
        e = (0, l.jsx)(K.R7, {
          guild: a,
          guildBoostQuantity: eG + ex.length,
          onClose: e9,
          withAnimation: false,
          paymentSourceType: u,
          didPurchaseOnFractionalPremium: d
        })
    }
    let _ = null != ev && null == (0, L.ly)(ev) ? ev : ew;
    t = eq === L.h8.ADD_PAYMENT_STEPS ? td : (0, l.jsx)(D.Z, {
      hideBreadcrumbs: eq === L.h8.CONFIRM,
      steps: e1,
      currentStep: eq,
      paymentError: _,
      purchaseErrorBlockRef: eZ,
      hasCurrencies: ts.length > 1,
      body: e,
      footer: eq !== L.h8.CONFIRM ? (0, l.jsxs)(m.mzw, {
        "data-migration-pending": true,
        direction: b.Z.Direction.HORIZONTAL,
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.END,
        children: [null != n ? (0, l.jsx)("div", {
          className: et.backStep,
          children: (0, l.jsx)(E.zx, {
            "data-migration-pending": true,
            color: (0, p.ap)(eb) ? E.zx.Colors.PRIMARY : E.zx.Colors.WHITE,
            look: E.zx.Looks.LINK,
            size: E.zx.Sizes.NONE,
            onClick: () => {
              null != n && e0(n)
            },
            children: ee.intl.string(ee.t["13/7kZ"])
          })
        }) : null, (0, l.jsxs)("div", {
          className: et.footerRight,
          children: [i, r]
        })]
      }) : null
    })
  } else t = (0, l.jsx)("div", {
    className: et.loadingWrapper,
    children: (0, l.jsx)(m.$jN, {})
  });
  let tp = null;
  return eh || eq === L.h8.PREMIUM_UPSELL || (tp = (0, l.jsx)(X.Z, {
    onClose: e9,
    currentStep: eq,
    purchaseState: e4
  })), (0, l.jsxs)(m.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: o()({
      [et.planSelectStep]: eq === L.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [tp, t]
  })
}

function eu(e) {
  let t = (0, d.e7)([F.Z], () => F.Z.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, f.ZP)(g.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, l.jsx)(f.Gt, {
    value: n,
    children: (0, l.jsx)(M.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, l.jsx)(ec, en({}, e))
    })
  })
}