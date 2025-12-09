/** Chunk was on web.js **/
/** chunk id: 343649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => el,
  default: () => em
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk31996 = require("./31996.js"),
  Chunk356264 = require("./356264.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk435020 = require("./435020.js"),
  Chunk845220 = require("./845220.js"),
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

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function es(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eo(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var el = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.LEVEL = 1] = "LEVEL", e[e.PERK = 2] = "PERK", e
}({});
let ec = Chunk474936.Xh.NONE_MONTH,
  eu = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  ed = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  ef = 500;
async function ep(e, t) {
  await (0, m.X8)();
  let n = (0, W.vx)(Z.Z.boostSlots);
  return (0, m.W3)(e, n.map(e => e.id), t)
}

function e_(e) {
  let t, {
      transitionState: n,
      onClose: a,
      closeGuildPerksModal: s,
      analyticsLocations: m,
      analyticsLocation: ei,
      analyticsSourceLocation: eo,
      guildId: el,
      onSubscribeComplete: e_,
      totalNumberOfSlotsToAssign: em = 1,
      disablePremiumUpsell: eh = false,
      onSubscriptionConfirmation: eg,
      applicationId: eE,
      intent: eb = 0
    } = e,
    {
      activeSubscription: ey,
      blockedPayments: eO,
      startingFractionalPremiumEndsAtRef: ev,
      invoicePreview: eS,
      customCheckoutFlow: eI
    } = (0, N.JL)(),
    eT = (0, u.e7)([H.Z], () => H.Z.hasFetchedSubscriptions()),
    eA = null != ey ? ey.paymentSourceId : null,
    eC = (0, u.e7)([V.Z], () => null != ey ? (0, q.oE)(ey.planId) : null),
    eN = (0, u.e7)([V.Z], () => null == ey || null != V.Z.get(ey.planId)),
    eP = (0, u.e7)([V.Z], () => null == eC ? V.Z.get(ec) : eC),
    eR = (0, u.e7)([U.Z], () => U.Z.theme),
    eD = i.useRef((0, W.vx)(Z.Z.boostSlots)).current,
    ew = (0, u.e7)([C.Z], () => null != el ? C.Z.getGuild(el) : true, [el]),
    ex = (0, u.e7)([F.Z], () => F.Z.defaultPaymentSourceId),
    eL = (0, M.fL)(null != eA ? eA : eT ? ex : null),
    {
      paymentSources: ej,
      setPurchaseError: eM,
      paymentSourceId: ek,
      setIsSubmittingCurrentStep: eU,
      paymentAuthenticationState: eG,
      setPaymentSourceId: eZ,
      isSubmittingCurrentStep: eB,
      paymentError: eF,
      purchaseError: eV,
      purchaseErrorBlockRef: eH
    } = eL,
    eY = Object.keys(ej).length > 0,
    [eW, eK] = i.useState(em - eD.length),
    [ez, eq] = i.useState(false),
    eQ = (0, u.e7)([B.Z], () => B.Z.popupCallbackCalled),
    eX = (0, v.V)(),
    eJ = i.useMemo(() => null != ey && eN && eX ? (0, L.g)(ey, eW) : [{
      planId: ee.Xh.PREMIUM_MONTH_GUILD,
      quantity: eW
    }], [ey, eN, eW, eX]),
    e$ = i.useMemo(() => (0, w.b)(), []),
    [e0, e1] = (0, g.Z)(() => [null != e$ ? e$ : (0, c.Z)(), Date.now()]),
    {
      analyticsLocations: e3
    } = (0, O.ZP)(m, y.Z.GUILD_BOOST_PURCHASE_MODAL),
    e2 = i.useMemo(() => {
      var e, t;
      return {
        load_id: e0,
        payment_type: et.Zu[et.GZ.SUBSCRIPTION],
        sku_id: ee.Si.GUILD,
        subscription_type: $.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = eJ.find(e => {
          let {
            planId: t
          } = e;
          return ee.Z1.has(t)
        })) ? true : e.planId) ? t : ee.Xh.PREMIUM_MONTH_GUILD,
        quantity: eW,
        location: ei,
        source: eo,
        location_stack: e3
      }
    }, [e0, ei, e3, eo, eJ, eW]);
  i.useEffect(() => {
    (0, z.i1)(ek)
  }, [ek]);
  let [e4, e5] = i.useState(P.h8.PLAN_SELECT), e8 = i.useMemo(() => Date.now(), [e4]), e6 = i.useCallback((e, t) => {
    e5(e), eM(null);
    let n = Date.now();
    Y.default.track($.rMx.PAYMENT_FLOW_STEP, es(ea({}, e2), {
      from_step: null != t ? t : e4,
      to_step: e === P.h8.ADD_PAYMENT_STEPS ? P.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - e8,
      flow_duration_ms: n - e1,
      guild_id: el,
      application_id: eE
    }))
  }, [eM, e2, e4, e8, e1, el, eE]), e7 = {
    baseAnalyticsData: e2,
    flowStartTime: e1,
    guildId: el,
    handleStepChange: e6,
    onSubscribeComplete: e_,
    paymentSourceId: ek,
    setIsSubmittingCurrentStep: eU,
    setPurchaseError: eM
  }, e9 = i.useRef(e7);
  i.useEffect(() => {
    e9.current = e7
  }), i.useEffect(() => {
    let {
      baseAnalyticsData: e,
      flowStartTime: t,
      guildId: n,
      handleStepChange: r,
      onSubscribeComplete: i,
      paymentSourceId: a,
      setIsSubmittingCurrentStep: o,
      setPurchaseError: s
    } = e9.current;
    (async () => {
      if (true === eQ) try {
        if (null == B.Z.redirectedPaymentId) return;
        await (0, _.OP)(B.Z.redirectedPaymentId), r(P.h8.CONFIRM), tr(R.A.COMPLETED), null != n && await ep(n, 0 !== eb), null == i || i()
      } catch (n) {
        tr(R.A.FAIL), s(n), Y.default.track($.rMx.PAYMENT_FLOW_FAILED, es(ea({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: $.gg$.STRIPE,
          payment_source_id: a,
          duration_ms: Date.now() - t
        }))
      } finally {
        o(false), (0, _.K2)()
      }
    })()
  }, [eQ, eb]), (0, E.ZP)(() => {
    H.Z.hasFetchedSubscriptions() || (0, _.jg)(), null == el || null != G.Z.getGuild(el) || null != C.Z.getGuild(el) || C.Z.isGuildFetching(el) || (0, A.Q)(el), (0, T.U)(es(ea({}, e2), {
      guild_id: el,
      application_id: eE,
      custom_checkout_flow: eI
    })), null != ey && null != ey.renewalMutations && Y.default.track($.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: ei,
      guild_id: el
    })
  });
  let [te, tt] = i.useState(eu), [tn, tr] = i.useState(R.A.WAITING), [ti, ta] = i.useState(true), to = () => {
    a(tn === R.A.COMPLETED)
  }, ts = null != ey && ey.isPurchasedExternally;
  i.useEffect(() => {
    eG !== j.wr.PENDING && e4 !== P.h8.CONFIRM && null != eA && (te !== eu && tt(eu), eu.includes(e4) || e4 === P.h8.PREMIUM_UPSELL || e6(P.h8.REVIEW)), e4 === P.h8.ADD_PAYMENT_STEPS && te !== ed && tt(ed), ts && e4 !== P.h8.PLAN_SELECT && e5(P.h8.PLAN_SELECT)
  }, [e4, e6, ts, eG, ey, eA, te]), (0, j.bp)(e4, eG, e6, tr), (0, P.dZ)(e4, tn, tr);
  let tl = i.useRef(null),
    [tc, tu] = (0, b.Z)(false, ef),
    [td, tf] = i.useState(null),
    [tp, t_] = i.useState([]),
    [tm, th] = i.useState(false),
    tg = i.useMemo(() => JSON.stringify(tp), [tp]);
  i.useEffect(() => {
    let e;
    eX && (null != V.Z.get(ee.Xh.PREMIUM_MONTH_GUILD) && t_(e = (0, z.DE)(ee.Xh.PREMIUM_MONTH_GUILD, ek, false)), null == ek && null != ey && null != ey.paymentSourceId ? tf(ey.currency) : null != e && tf(e[0]))
  }, [ek, ey, eX, tg]);
  let tE = (0, M.vP)({
    paymentModalArgs: eL,
    initialStep: P.h8.PAYMENT_TYPE,
    prependSteps: [P.h8.PLAN_SELECT],
    appendSteps: [P.h8.REVIEW, P.h8.CONFIRM],
    breadcrumpSteps: te,
    currentBreadcrumpStep: e4,
    onReturn: () => {
      e6(Object.values(ej).length < 1 ? P.h8.PLAN_SELECT : P.h8.REVIEW, P.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e6(P.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, r = Date.now();
      Y.default.track($.rMx.PAYMENT_FLOW_STEP, es(ea({}, e2), {
        from_step: t,
        to_step: n,
        step_duration_ms: r - e8,
        flow_duration_ms: r - e1,
        guild_id: el
      }))
    }
  });
  if (eO) t = (0, r.jsx)(S.Vq, {
    onClose: to
  });
  else if (eT && eN && eX && null != td && "" !== td)
    if ((null == ey ? true : ey.isPausedOrPausePending) && !ey.isPausedAllowsUpdatesButNotResume) t = (0, r.jsx)(p.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsx)("p", {
        className: er.copy,
        children: en.intl.string(en.t.mOWsF1)
      })
    });
    else if (null != ey && null != ey.renewalMutations) t = (0, r.jsx)(p.hzk, {
    "data-migration-pending": true,
    children: (0, r.jsx)("p", {
      className: er.copy,
      children: en.intl.string(en.t.npfhh0)
    })
  });
  else if (e4 === P.h8.PREMIUM_UPSELL) {
    l()(null != eP, "Missing nextPremiumSubscriptionPlan"), l()(td, "Currency not defined");
    let e = null != ek ? {
      paymentSourceId: ek,
      currency: td
    } : {
      currency: td
    };
    t = (0, r.jsx)(J.Z, {
      premiumSubscriptionPlan: eP,
      analyticsLocation: ei,
      analyticsSourceLocation: eo,
      onClose: to,
      onBack: () => e6(P.h8.PLAN_SELECT),
      onSkip: () => e6(null != eA || eY ? P.h8.REVIEW : P.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eg,
      priceOptions: e
    })
  } else {
    let e, n, i, a;
    l()(td, "Currency not defined");
    let o = null != ek ? {
        paymentSourceId: ek,
        currency: td
      } : {
        currency: td
      },
      c = G.Z.getGuild(el),
      u = null == ew && null == c;
    switch (e4) {
      case P.h8.PLAN_SELECT:
        l()(null != el, "Missing guildId"), l()(null != eP, "Missing nextPremiumSubscriptionPlan"), e = (0, r.jsx)(X.CP, {
          premiumSubscriptionPlan: eP,
          numGuildBoosts: eW,
          setNumGuildBoosts: eK,
          setForceDisableSubmitButton: ta,
          premiumSubscription: ey,
          existingAvailableSlots: eD,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            to(), null != s && s(), (0, x.z)()
          },
          priceOptions: o
        }), ts && null != ey && null != ey.paymentGateway ? e = (0, r.jsxs)("div", {
          className: er.externalErrorBlock,
          children: [(0, r.jsx)(p.M14, {
            type: "critical",
            children: en.intl.format(en.t["/m3Y3s"], {
              paymentGatewayName: et.Vz[ey.paymentGateway]
            })
          }), e]
        }) : !C.Z.isGuildFetching(el) && u && (e = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.Wn, {
            messageType: p.QYI.ERROR,
            className: er.helpMessageWrapper,
            children: en.intl.string(en.t.eAn6z2)
          }), e]
        })), i = (0, r.jsx)(f.zx, {
          "data-migration-pending": true,
          look: f.zx.Looks.LINK,
          color: (0, d.ap)(eR) ? f.zx.Colors.PRIMARY : f.zx.Colors.WHITE,
          onClick: to,
          children: en.intl.string(en.t.oEAioF)
        }), a = (0, r.jsx)(p.Button, {
          variant: "primary",
          text: en.intl.string(en.t["3PatSz"]),
          type: "submit",
          disabled: ti || 0 === eW || ts || u,
          onClick: () => {
            if (!eh && (null == eC || eC.premiumSubscriptionType !== ee.PremiumTypes.TIER_2)) return void e6(P.h8.PREMIUM_UPSELL);
            e6(null != eA || eY ? P.h8.REVIEW : P.h8.ADD_PAYMENT_STEPS)
          }
        });
        break;
      case P.h8.ADD_PAYMENT_STEPS:
        break;
      case P.h8.AWAITING_AUTHENTICATION:
        e = (0, r.jsx)(h.F, {
          className: er.__invalid_body
        });
        break;
      case P.h8.REVIEW:
        l()(null != eP, "Missing nextPremiumSubscriptionPlan"), e = (0, r.jsx)(X.Gq, {
          paymentSources: ej,
          priceOptions: o,
          currentPremiumSubscription: ey,
          premiumSubscriptionPaymentSourceId: eA,
          premiumSubscriptionPlan: eP,
          newAdditionalPlans: eJ,
          onPaymentSourceChange: e => eZ(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e6(P.h8.ADD_PAYMENT_STEPS), eZ(null)
          },
          onPurchaseTermsChange: eq,
          legalTermsNodeRef: tl,
          hasLegalTermsFlash: tc
        }), n = P.h8.PLAN_SELECT, a = ez ? (0, r.jsx)(p.Button, {
          variant: "active",
          text: en.intl.string(en.t.eUEeCt),
          type: "submit",
          loading: eB,
          onClick: async () => {
            l()(null != eJ, "Missing newAdditionalPlans");
            let e = (0, D.m)(ej, ek);
            eM(null);
            try {
              tr(R.A.PURCHASING), eU(true), l()(null != ek, "Missing paymentSourceId"), l()(null != eS, "Missing invoicePreview");
              let t = {
                  amount: eS.total,
                  currency: eS.currency
                },
                n = (0, K.sG)(ey, eJ, o.currency.toLowerCase(), o.paymentSourceId);
              if (Y.default.track($.rMx.PAYMENT_FLOW_COMPLETED, es(ea({}, e2), {
                  duration_ms: Date.now() - e1,
                  guild_id: el,
                  application_id: eE
                })), tm) return;
              if (null == ey || null == eC) {
                l()(null != e, "Missing paymentSource");
                let r = await (0, _.XW)({
                  items: eJ,
                  paymentSource: e,
                  currency: o.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (r.redirectConfirmation) return void th(null != r.redirectURL)
              } else {
                let r = {
                  items: (0, K.MY)(ey, eJ)
                };
                r.currency = ey.currency, null == r.currency && (r.currency = o.currency), r.paymentSource = null != eA ? ej[eA] : true, null == r.paymentSource && (l()(null != e, "Missing paymentSource"), r.paymentSource = e, r.currency = o.currency);
                let i = await (0, _.Mg)(ey, r, t, n, e3);
                if (i.redirectConfirmation) return void th(null != i.redirectURL)
              }
              0 === eb && e6(P.h8.CONFIRM), tr(R.A.COMPLETED), null != el && await ep(el, 0 !== eb), 0 !== eb && to(), null == e_ || e_()
            } catch (t) {
              tr(R.A.FAIL), eM(t), Y.default.track($.rMx.PAYMENT_FLOW_FAILED, es(ea({}, e2), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === $.HeQ.CARD ? $.gg$.STRIPE : $.gg$.BRAINTREE : null,
                payment_source_id: ek,
                duration_ms: Date.now() - e1
              }))
            } finally {
              tm || eU(false)
            }
          }
        }) : (0, r.jsx)(p.aML, {
          "data-migration-pending": true,
          text: en.intl.string(en.t.XdvBLS),
          children: e => (0, r.jsx)(p.Button, es(ea({
            variant: "active",
            text: en.intl.string(en.t.eUEeCt)
          }, e), {
            onClick: () => {
              null != tl.current && (tl.current.scrollIntoView({
                behavior: "smooth"
              }), tu(true))
            },
            type: "submit"
          }))
        });
        break;
      case P.h8.CONFIRM:
        var tb;
        let m = null != (tb = null == c ? true : c.name) ? tb : null == ew ? true : ew.name,
          g = (0, D.$)(ej, ek),
          E = (0, q.qH)(ev.current) && null != eC && !ee.F$.has(eC.id);
        e = (0, r.jsx)(X.R7, {
          guild: c,
          guildBoostQuantity: eW + eD.length,
          onClose: to,
          withAnimation: false,
          paymentSourceType: g,
          fallbackGuildName: m,
          didPurchaseOnFractionalPremium: E,
          customCheckoutFlow: eI
        })
    }
    let b = null != eF && null == (0, P.ly)(eF) ? eF : eV;
    t = e4 === P.h8.ADD_PAYMENT_STEPS ? tE : (0, r.jsx)(k.Z, {
      hideBreadcrumbs: e4 === P.h8.CONFIRM,
      steps: te,
      currentStep: e4,
      paymentError: b,
      purchaseErrorBlockRef: eH,
      hasCurrencies: tp.length > 1,
      body: e,
      footer: e4 !== P.h8.CONFIRM ? (0, r.jsxs)(p.mzw, {
        "data-migration-pending": true,
        direction: I.Z.Direction.HORIZONTAL,
        align: I.Z.Align.CENTER,
        justify: I.Z.Justify.END,
        children: [null != n ? (0, r.jsx)("div", {
          className: er.backStep,
          children: (0, r.jsx)(f.zx, {
            "data-migration-pending": true,
            color: (0, d.ap)(eR) ? f.zx.Colors.PRIMARY : f.zx.Colors.WHITE,
            look: f.zx.Looks.LINK,
            size: f.zx.Sizes.NONE,
            onClick: () => {
              null != n && e6(n)
            },
            children: en.intl.string(en.t["13/7kX"])
          })
        }) : null, (0, r.jsxs)("div", {
          className: er.footerRight,
          children: [i, a]
        })]
      }) : null
    })
  } else t = (0, r.jsx)("div", {
    className: er.loadingWrapper,
    children: (0, r.jsx)(p.$jN, {})
  });
  let ty = null;
  return eO || e4 === P.h8.PREMIUM_UPSELL || (ty = (0, r.jsx)(Q.Z, {
    onClose: to,
    currentStep: e4,
    purchaseState: tn
  })), (0, r.jsxs)(p.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: o()({
      [er.planSelectStep]: e4 === P.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [ty, t]
  })
}

function em(e) {
  let t = (0, u.e7)([H.Z], () => H.Z.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, O.ZP)(y.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, r.jsx)(O.Gt, {
    value: n,
    children: (0, r.jsx)(N.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(e_, ea({}, e))
    })
  })
}