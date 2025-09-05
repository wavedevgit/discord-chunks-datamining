/** Chunk was on 24920 **/
/** chunk id: 343649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => es,
  default: () => ep
}), require("./388685.js"), require("./49124.js");
var l, Chunk951288 = require("./951288.js"),
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
  Chunk31996 = require("./31996.js"),
  Chunk356264 = require("./356264.js"),
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
  Chunk940277 = require("./940277.js");

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var es = 12633 == require.j ? ((l = {})[l.NONE = 0] = "NONE", l[l.LEVEL = 1] = "LEVEL", l[l.PERK = 2] = "PERK", l) : null;
let eo = Chunk474936.Xh.NONE_MONTH,
  ea = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  ec = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];
async function eu(e, t) {
  await (0, _.X8)();
  let n = (0, H.vx)(G.Z.boostSlots);
  return (0, _.W3)(e, n.map(e => e.id), t)
}

function ed(e) {
  let t, {
      transitionState: n,
      onClose: l,
      closeGuildPerksModal: s,
      analyticsLocations: a,
      analyticsLocation: _,
      analyticsSourceLocation: es,
      guildId: ed,
      onSubscribeComplete: ep,
      totalNumberOfSlotsToAssign: em = 1,
      disablePremiumUpsell: eE = false,
      onSubscriptionConfirmation: eP,
      applicationId: e_,
      intent: eh = 0
    } = e,
    {
      activeSubscription: eS,
      blockedPayments: ey,
      startingFractionalPremiumEndsAtRef: eg,
      invoicePreview: ef
    } = (0, T.JL)(),
    eI = (0, d.e7)([Y.Z], () => Y.Z.hasFetchedSubscriptions()),
    eN = null != eS ? eS.paymentSourceId : null,
    eO = (0, d.e7)([W.Z], () => null != eS ? (0, K.oE)(eS.planId) : null),
    eb = (0, d.e7)([W.Z], () => null == eS || null != W.Z.get(eS.planId)),
    ex = (0, d.e7)([W.Z], () => null == eO ? W.Z.get(eo) : eO),
    eM = (0, d.e7)([w.Z], () => w.Z.theme),
    eL = r.useRef((0, H.vx)(G.Z.boostSlots)).current,
    eT = (0, d.e7)([L.Z], () => null != ed ? L.Z.getGuild(ed) : true, [ed]),
    ej = (0, d.e7)([F.Z], () => F.Z.defaultPaymentSourceId),
    eC = (0, D.fL)(null != eN ? eN : eI ? ej : null),
    {
      paymentSources: eA,
      setPurchaseError: ek,
      paymentSourceId: eR,
      setIsSubmittingCurrentStep: ev,
      paymentAuthenticationState: eD,
      setPaymentSourceId: eZ,
      isSubmittingCurrentStep: ew,
      paymentError: eU,
      purchaseError: eG,
      purchaseErrorBlockRef: ez
    } = eC,
    eF = Object.keys(eA).length > 0,
    [eW, eY] = r.useState(em - eL.length),
    [eB, eH] = r.useState(false),
    eV = (0, d.e7)([z.Z], () => z.Z.popupCallbackCalled),
    eX = (0, N.V)(),
    eK = r.useMemo(() => null != eS && eb && eX ? (0, R.g)(eS, eW) : [{
      planId: ee.Xh.PREMIUM_MONTH_GUILD,
      quantity: eW
    }], [eS, eb, eW, eX]),
    [e$, eq] = (0, S.Z)(() => [(0, u.Z)(), Date.now()]),
    {
      analyticsLocations: eJ
    } = (0, I.ZP)(a, f.Z.GUILD_BOOST_PURCHASE_MODAL),
    eQ = r.useMemo(() => {
      var e, t;
      return {
        load_id: e$,
        payment_type: et.Zu[et.GZ.SUBSCRIPTION],
        sku_id: ee.Si.GUILD,
        subscription_type: Q.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = eK.find(e => {
          let {
            planId: t
          } = e;
          return ee.Z1.has(t)
        })) ? true : e.planId) ? t : ee.Xh.PREMIUM_MONTH_GUILD,
        quantity: eW,
        location: _,
        source: es,
        location_stack: eJ
      }
    }, [e$, _, eJ, es, eK, eW]);
  r.useEffect(() => {
    (0, X.i1)(eR)
  }, [eR]);
  let [e0, e8] = r.useState(j.h8.PLAN_SELECT), e3 = r.useMemo(() => Date.now(), [e0]), e1 = r.useCallback((e, t) => {
    e8(e), ek(null);
    let n = Date.now();
    B.default.track(Q.rMx.PAYMENT_FLOW_STEP, er(ei({}, eQ), {
      from_step: null != t ? t : e0,
      to_step: e === j.h8.ADD_PAYMENT_STEPS ? j.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - e3,
      flow_duration_ms: n - eq,
      guild_id: ed,
      application_id: e_
    }))
  }, [ek, eQ, e0, e3, eq, ed, e_]), e2 = {
    baseAnalyticsData: eQ,
    flowStartTime: eq,
    guildId: ed,
    handleStepChange: e1,
    onSubscribeComplete: ep,
    paymentSourceId: eR,
    setIsSubmittingCurrentStep: ev,
    setPurchaseError: ek
  }, e4 = r.useRef(e2);
  r.useEffect(() => {
    e4.current = e2
  }), r.useEffect(() => {
    let {
      baseAnalyticsData: e,
      flowStartTime: t,
      guildId: n,
      handleStepChange: l,
      onSubscribeComplete: i,
      paymentSourceId: r,
      setIsSubmittingCurrentStep: s,
      setPurchaseError: o
    } = e4.current;
    (async () => {
      if (true === eV) try {
        if (null == z.Z.redirectedPaymentId) return;
        await (0, P.OP)(z.Z.redirectedPaymentId), l(j.h8.CONFIRM), e9(C.A.COMPLETED), null != n && await eu(n, 0 !== eh), null == i || i()
      } catch (n) {
        e9(C.A.FAIL), o(n), B.default.track(Q.rMx.PAYMENT_FLOW_FAILED, er(ei({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: Q.gg$.STRIPE,
          payment_source_id: r,
          duration_ms: Date.now() - t
        }))
      } finally {
        s(false), (0, P.K2)()
      }
    })()
  }, [eV, eh]), (0, y.ZP)(() => {
    Y.Z.hasFetchedSubscriptions() || (0, P.jg)(), null != ed && null == U.Z.getGuild(ed) && null == L.Z.getGuild(ed) && (0, M.Q)(ed), (0, x.U)(er(ei({}, eQ), {
      guild_id: ed,
      application_id: e_
    })), null != eS && null != eS.renewalMutations && B.default.track(Q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: _,
      guild_id: ed
    })
  });
  let [e7, e6] = r.useState(ea), [e5, e9] = r.useState(C.A.WAITING), [te, tt] = r.useState(true), tn = () => {
    l(e5 === C.A.COMPLETED)
  }, tl = null != eS && eS.isPurchasedExternally;
  r.useEffect(() => {
    eD !== v.wr.PENDING && e0 !== j.h8.CONFIRM && null != eN && (e7 !== ea && e6(ea), ea.includes(e0) || e0 === j.h8.PREMIUM_UPSELL || e1(j.h8.REVIEW)), e0 === j.h8.ADD_PAYMENT_STEPS && e7 !== ec && e6(ec), tl && e0 !== j.h8.PLAN_SELECT && e8(j.h8.PLAN_SELECT)
  }, [e0, e1, tl, eD, eS, eN, e7]), (0, v.bp)(e0, eD, e1, e9), (0, j.dZ)(e0, e5, e9);
  let ti = r.useRef(null),
    [tr, ts] = (0, g.Z)(false, 500),
    [to, ta] = r.useState(null),
    [tc, tu] = r.useState([]),
    [td, tp] = r.useState(false),
    tm = r.useMemo(() => JSON.stringify(tc), [tc]);
  r.useEffect(() => {
    let e;
    eX && (null != W.Z.get(ee.Xh.PREMIUM_MONTH_GUILD) && tu(e = (0, X.DE)(ee.Xh.PREMIUM_MONTH_GUILD, eR, false)), null == eR && null != eS && null != eS.paymentSourceId ? ta(eS.currency) : null != e && ta(e[0]))
  }, [eR, eS, eX, tm]);
  let tE = (0, D.vP)({
    paymentModalArgs: eC,
    initialStep: j.h8.PAYMENT_TYPE,
    prependSteps: [j.h8.PLAN_SELECT],
    appendSteps: [j.h8.REVIEW, j.h8.CONFIRM],
    breadcrumpSteps: e7,
    currentBreadcrumpStep: e0,
    onReturn: () => {
      e1(Object.values(eA).length < 1 ? j.h8.PLAN_SELECT : j.h8.REVIEW, j.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e1(j.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, l = Date.now();
      B.default.track(Q.rMx.PAYMENT_FLOW_STEP, er(ei({}, eQ), {
        from_step: t,
        to_step: n,
        step_duration_ms: l - e3,
        flow_duration_ms: l - eq,
        guild_id: ed
      }))
    }
  });
  if (ey) t = (0, i.jsx)(O.Vq, {
    onClose: tn
  });
  else if (eI && eb && eX && null != to && "" !== to)
    if ((null == eS ? true : eS.isPausedOrPausePending) && !eS.isPausedAllowsUpdatesButNotResume) t = (0, i.jsx)(E.hzk, {
      "data-migration-pending": true,
      children: (0, i.jsx)("p", {
        className: el.copy,
        children: en.intl.string(en.t.mOWsFx)
      })
    });
    else if (null != eS && null != eS.renewalMutations) t = (0, i.jsx)(E.hzk, {
    "data-migration-pending": true,
    children: (0, i.jsx)("p", {
      className: el.copy,
      children: en.intl.string(en.t.npfhh4)
    })
  });
  else if (e0 === j.h8.PREMIUM_UPSELL) {
    c()(null != ex, "Missing nextPremiumSubscriptionPlan"), c()(to, "Currency not defined");
    let e = null != eR ? {
      paymentSourceId: eR,
      currency: to
    } : {
      currency: to
    };
    t = (0, i.jsx)(J.Z, {
      premiumSubscriptionPlan: ex,
      analyticsLocation: _,
      analyticsSourceLocation: es,
      onClose: tn,
      onBack: () => e1(j.h8.PLAN_SELECT),
      onSkip: () => e1(null != eN || eF ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eP,
      priceOptions: e
    })
  } else {
    let e, n, l, r;
    c()(to, "Currency not defined");
    let o = null != eR ? {
      paymentSourceId: eR,
      currency: to
    } : {
      currency: to
    };
    switch (e0) {
      case j.h8.PLAN_SELECT:
        c()(null != ed, "Missing guildId"), c()(null != ex, "Missing nextPremiumSubscriptionPlan"), e = (0, i.jsx)(q.CP, {
          premiumSubscriptionPlan: ex,
          numGuildBoosts: eW,
          setNumGuildBoosts: eY,
          setForceDisableSubmitButton: tt,
          premiumSubscription: eS,
          existingAvailableSlots: eL,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            tn(), null != s && s(), (0, k.z)()
          },
          priceOptions: o
        }), tl && null != eS && null != eS.paymentGateway && (e = (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(E.kzN, {
            className: el.externalErrorBlock,
            children: en.intl.format(en.t["/m3Y3t"], {
              paymentGatewayName: et.Vz[eS.paymentGateway]
            })
          }), e]
        })), l = (0, i.jsx)(m.zx, {
          "data-migration-pending": true,
          look: m.zx.Looks.LINK,
          color: (0, p.ap)(eM) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
          onClick: tn,
          children: en.intl.string(en.t.oEAioK)
        }), r = (0, i.jsx)(E.zxk, {
          variant: "primary",
          text: en.intl.string(en.t["3PatS0"]),
          type: "submit",
          disabled: te || 0 === eW || tl,
          onClick: () => {
            if (!eE && (null == eO || eO.premiumSubscriptionType !== ee.p9.TIER_2)) return void e1(j.h8.PREMIUM_UPSELL);
            e1(null != eN || eF ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS)
          }
        });
        break;
      case j.h8.ADD_PAYMENT_STEPS:
        break;
      case j.h8.AWAITING_AUTHENTICATION:
        e = (0, i.jsx)(h.F, {
          className: el.__invalid_body
        });
        break;
      case j.h8.REVIEW:
        c()(null != ex, "Missing nextPremiumSubscriptionPlan"), e = (0, i.jsx)(q.Gq, {
          paymentSources: eA,
          priceOptions: o,
          currentPremiumSubscription: eS,
          premiumSubscriptionPaymentSourceId: eN,
          premiumSubscriptionPlan: ex,
          newAdditionalPlans: eK,
          onPaymentSourceChange: e => eZ(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e1(j.h8.ADD_PAYMENT_STEPS), eZ(null)
          },
          onPurchaseTermsChange: eH,
          legalTermsNodeRef: ti,
          hasLegalTermsFlash: tr
        }), n = j.h8.PLAN_SELECT, r = eB ? (0, i.jsx)(E.zxk, {
          variant: "active",
          text: en.intl.string(en.t.eUEeCg),
          type: "submit",
          loading: ew,
          onClick: async () => {
            c()(null != eK, "Missing newAdditionalPlans");
            let e = (0, A.m)(eA, eR);
            ek(null);
            try {
              e9(C.A.PURCHASING), ev(true), c()(null != eR, "Missing paymentSourceId"), c()(null != ef, "Missing invoicePreview");
              let t = {
                  amount: ef.total,
                  currency: ef.currency
                },
                n = (0, V.sG)(eS, eK, o.currency.toLowerCase(), o.paymentSourceId);
              if (B.default.track(Q.rMx.PAYMENT_FLOW_COMPLETED, er(ei({}, eQ), {
                  duration_ms: Date.now() - eq,
                  guild_id: ed,
                  application_id: e_
                })), td) return;
              if (null == eS || null == eO) {
                c()(null != e, "Missing paymentSource");
                let l = await (0, P.XW)({
                  items: eK,
                  paymentSource: e,
                  currency: o.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (l.redirectConfirmation) return void tp(null != l.redirectURL)
              } else {
                let l = {
                  items: (0, V.MY)(eS, eK)
                };
                l.currency = eS.currency, null == l.currency && (l.currency = o.currency), l.paymentSource = null != eN ? eA[eN] : true, null == l.paymentSource && (c()(null != e, "Missing paymentSource"), l.paymentSource = e, l.currency = o.currency);
                let i = await (0, P.Mg)(eS, l, t, n, eJ);
                if (i.redirectConfirmation) return void tp(null != i.redirectURL)
              }
              0 === eh && e1(j.h8.CONFIRM), e9(C.A.COMPLETED), null != ed && await eu(ed, 0 !== eh), 0 !== eh && tn(), null == ep || ep()
            } catch (t) {
              e9(C.A.FAIL), ek(t), B.default.track(Q.rMx.PAYMENT_FLOW_FAILED, er(ei({}, eQ), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === Q.HeQ.CARD ? Q.gg$.STRIPE : Q.gg$.BRAINTREE : null,
                payment_source_id: eR,
                duration_ms: Date.now() - eq
              }))
            } finally {
              td || ev(false)
            }
          }
        }) : (0, i.jsx)(E.ua7, {
          text: en.intl.string(en.t.XdvBLS),
          children: e => (0, i.jsx)(E.zxk, er(ei({
            variant: "active",
            text: en.intl.string(en.t.eUEeCg)
          }, e), {
            onClick: () => {
              null != ti.current && (ti.current.scrollIntoView({
                behavior: "smooth"
              }), ts(true))
            },
            type: "submit"
          }))
        });
        break;
      case j.h8.CONFIRM:
        var tP;
        let a = U.Z.getGuild(ed),
          u = null != (tP = null == a ? true : a.name) ? tP : null == eT ? true : eT.name,
          d = (0, A.$)(eA, eR),
          _ = (0, K.qH)(eg.current) && null != eO && !ee.F$.has(eO.id);
        e = (0, i.jsx)(q.R7, {
          guild: a,
          guildBoostQuantity: eW + eL.length,
          onClose: tn,
          withAnimation: false,
          paymentSourceType: d,
          fallbackGuildName: u,
          didPurchaseOnFractionalPremium: _
        })
    }
    let S = null != eU && null == (0, j.ly)(eU) ? eU : eG;
    t = e0 === j.h8.ADD_PAYMENT_STEPS ? tE : (0, i.jsx)(Z.Z, {
      hideBreadcrumbs: e0 === j.h8.CONFIRM,
      steps: e7,
      currentStep: e0,
      paymentError: S,
      purchaseErrorBlockRef: ez,
      hasCurrencies: tc.length > 1,
      body: e,
      footer: e0 !== j.h8.CONFIRM ? (0, i.jsxs)(E.mzw, {
        "data-migration-pending": true,
        direction: b.Z.Direction.HORIZONTAL,
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.END,
        children: [null != n ? (0, i.jsx)("div", {
          className: el.backStep,
          children: (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            color: (0, p.ap)(eM) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            look: m.zx.Looks.LINK,
            size: m.zx.Sizes.NONE,
            onClick: () => {
              null != n && e1(n)
            },
            children: en.intl.string(en.t["13/7kZ"])
          })
        }) : null, (0, i.jsxs)("div", {
          className: el.footerRight,
          children: [l, r]
        })]
      }) : null
    })
  } else t = (0, i.jsx)("div", {
    className: el.loadingWrapper,
    children: (0, i.jsx)(E.$jN, {})
  });
  let t_ = null;
  return ey || e0 === j.h8.PREMIUM_UPSELL || (t_ = (0, i.jsx)($.Z, {
    onClose: tn,
    currentStep: e0,
    purchaseState: e5
  })), (0, i.jsxs)(E.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: o()({
      [el.planSelectStep]: e0 === j.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [t_, t]
  })
}

function ep(e) {
  let t = (0, d.e7)([Y.Z], () => Y.Z.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, I.ZP)(f.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, i.jsx)(I.Gt, {
    value: n,
    children: (0, i.jsx)(T.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, i.jsx)(ed, ei({}, e))
    })
  })
}