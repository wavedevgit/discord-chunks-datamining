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
  Chunk290136 = require("./290136.js");

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
      invoicePreview: ef,
      customCheckoutFlow: eI
    } = (0, T.JL)(),
    eN = (0, d.e7)([Y.Z], () => Y.Z.hasFetchedSubscriptions()),
    eO = null != eS ? eS.paymentSourceId : null,
    eb = (0, d.e7)([W.Z], () => null != eS ? (0, K.oE)(eS.planId) : null),
    ex = (0, d.e7)([W.Z], () => null == eS || null != W.Z.get(eS.planId)),
    eM = (0, d.e7)([W.Z], () => null == eb ? W.Z.get(eo) : eb),
    eL = (0, d.e7)([w.Z], () => w.Z.theme),
    eT = r.useRef((0, H.vx)(G.Z.boostSlots)).current,
    ej = (0, d.e7)([L.Z], () => null != ed ? L.Z.getGuild(ed) : true, [ed]),
    eC = (0, d.e7)([F.Z], () => F.Z.defaultPaymentSourceId),
    eA = (0, D.fL)(null != eO ? eO : eN ? eC : null),
    {
      paymentSources: ek,
      setPurchaseError: eR,
      paymentSourceId: ev,
      setIsSubmittingCurrentStep: eD,
      paymentAuthenticationState: eZ,
      setPaymentSourceId: ew,
      isSubmittingCurrentStep: eU,
      paymentError: eG,
      purchaseError: ez,
      purchaseErrorBlockRef: eF
    } = eA,
    eW = Object.keys(ek).length > 0,
    [eY, eB] = r.useState(em - eT.length),
    [eH, eV] = r.useState(false),
    eX = (0, d.e7)([z.Z], () => z.Z.popupCallbackCalled),
    eK = (0, N.V)(),
    e$ = r.useMemo(() => null != eS && ex && eK ? (0, R.g)(eS, eY) : [{
      planId: ee.Xh.PREMIUM_MONTH_GUILD,
      quantity: eY
    }], [eS, ex, eY, eK]),
    [eq, eJ] = (0, S.Z)(() => [(0, u.Z)(), Date.now()]),
    {
      analyticsLocations: eQ
    } = (0, I.ZP)(a, f.Z.GUILD_BOOST_PURCHASE_MODAL),
    e0 = r.useMemo(() => {
      var e, t;
      return {
        load_id: eq,
        payment_type: et.Zu[et.GZ.SUBSCRIPTION],
        sku_id: ee.Si.GUILD,
        subscription_type: Q.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = e$.find(e => {
          let {
            planId: t
          } = e;
          return ee.Z1.has(t)
        })) ? true : e.planId) ? t : ee.Xh.PREMIUM_MONTH_GUILD,
        quantity: eY,
        location: _,
        source: es,
        location_stack: eQ
      }
    }, [eq, _, eQ, es, e$, eY]);
  r.useEffect(() => {
    (0, X.i1)(ev)
  }, [ev]);
  let [e8, e3] = r.useState(j.h8.PLAN_SELECT), e1 = r.useMemo(() => Date.now(), [e8]), e2 = r.useCallback((e, t) => {
    e3(e), eR(null);
    let n = Date.now();
    B.default.track(Q.rMx.PAYMENT_FLOW_STEP, er(ei({}, e0), {
      from_step: null != t ? t : e8,
      to_step: e === j.h8.ADD_PAYMENT_STEPS ? j.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - e1,
      flow_duration_ms: n - eJ,
      guild_id: ed,
      application_id: e_
    }))
  }, [eR, e0, e8, e1, eJ, ed, e_]), e4 = {
    baseAnalyticsData: e0,
    flowStartTime: eJ,
    guildId: ed,
    handleStepChange: e2,
    onSubscribeComplete: ep,
    paymentSourceId: ev,
    setIsSubmittingCurrentStep: eD,
    setPurchaseError: eR
  }, e7 = r.useRef(e4);
  r.useEffect(() => {
    e7.current = e4
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
    } = e7.current;
    (async () => {
      if (true === eX) try {
        if (null == z.Z.redirectedPaymentId) return;
        await (0, P.OP)(z.Z.redirectedPaymentId), l(j.h8.CONFIRM), te(C.A.COMPLETED), null != n && await eu(n, 0 !== eh), null == i || i()
      } catch (n) {
        te(C.A.FAIL), o(n), B.default.track(Q.rMx.PAYMENT_FLOW_FAILED, er(ei({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: Q.gg$.STRIPE,
          payment_source_id: r,
          duration_ms: Date.now() - t
        }))
      } finally {
        s(false), (0, P.K2)()
      }
    })()
  }, [eX, eh]), (0, y.ZP)(() => {
    Y.Z.hasFetchedSubscriptions() || (0, P.jg)(), null != ed && null == U.Z.getGuild(ed) && null == L.Z.getGuild(ed) && (0, M.Q)(ed), (0, x.U)(er(ei({}, e0), {
      guild_id: ed,
      application_id: e_,
      custom_checkout_flow: eI
    })), null != eS && null != eS.renewalMutations && B.default.track(Q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: _,
      guild_id: ed
    })
  });
  let [e6, e5] = r.useState(ea), [e9, te] = r.useState(C.A.WAITING), [tt, tn] = r.useState(true), tl = () => {
    l(e9 === C.A.COMPLETED)
  }, ti = null != eS && eS.isPurchasedExternally;
  r.useEffect(() => {
    eZ !== v.wr.PENDING && e8 !== j.h8.CONFIRM && null != eO && (e6 !== ea && e5(ea), ea.includes(e8) || e8 === j.h8.PREMIUM_UPSELL || e2(j.h8.REVIEW)), e8 === j.h8.ADD_PAYMENT_STEPS && e6 !== ec && e5(ec), ti && e8 !== j.h8.PLAN_SELECT && e3(j.h8.PLAN_SELECT)
  }, [e8, e2, ti, eZ, eS, eO, e6]), (0, v.bp)(e8, eZ, e2, te), (0, j.dZ)(e8, e9, te);
  let tr = r.useRef(null),
    [ts, to] = (0, g.Z)(false, 500),
    [ta, tc] = r.useState(null),
    [tu, td] = r.useState([]),
    [tp, tm] = r.useState(false),
    tE = r.useMemo(() => JSON.stringify(tu), [tu]);
  r.useEffect(() => {
    let e;
    eK && (null != W.Z.get(ee.Xh.PREMIUM_MONTH_GUILD) && td(e = (0, X.DE)(ee.Xh.PREMIUM_MONTH_GUILD, ev, false)), null == ev && null != eS && null != eS.paymentSourceId ? tc(eS.currency) : null != e && tc(e[0]))
  }, [ev, eS, eK, tE]);
  let tP = (0, D.vP)({
    paymentModalArgs: eA,
    initialStep: j.h8.PAYMENT_TYPE,
    prependSteps: [j.h8.PLAN_SELECT],
    appendSteps: [j.h8.REVIEW, j.h8.CONFIRM],
    breadcrumpSteps: e6,
    currentBreadcrumpStep: e8,
    onReturn: () => {
      e2(Object.values(ek).length < 1 ? j.h8.PLAN_SELECT : j.h8.REVIEW, j.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e2(j.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, l = Date.now();
      B.default.track(Q.rMx.PAYMENT_FLOW_STEP, er(ei({}, e0), {
        from_step: t,
        to_step: n,
        step_duration_ms: l - e1,
        flow_duration_ms: l - eJ,
        guild_id: ed
      }))
    }
  });
  if (ey) t = (0, i.jsx)(O.Vq, {
    onClose: tl
  });
  else if (eN && ex && eK && null != ta && "" !== ta)
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
  else if (e8 === j.h8.PREMIUM_UPSELL) {
    c()(null != eM, "Missing nextPremiumSubscriptionPlan"), c()(ta, "Currency not defined");
    let e = null != ev ? {
      paymentSourceId: ev,
      currency: ta
    } : {
      currency: ta
    };
    t = (0, i.jsx)(J.Z, {
      premiumSubscriptionPlan: eM,
      analyticsLocation: _,
      analyticsSourceLocation: es,
      onClose: tl,
      onBack: () => e2(j.h8.PLAN_SELECT),
      onSkip: () => e2(null != eO || eW ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eP,
      priceOptions: e
    })
  } else {
    let e, n, l, r;
    c()(ta, "Currency not defined");
    let o = null != ev ? {
      paymentSourceId: ev,
      currency: ta
    } : {
      currency: ta
    };
    switch (e8) {
      case j.h8.PLAN_SELECT:
        c()(null != ed, "Missing guildId"), c()(null != eM, "Missing nextPremiumSubscriptionPlan"), e = (0, i.jsx)(q.CP, {
          premiumSubscriptionPlan: eM,
          numGuildBoosts: eY,
          setNumGuildBoosts: eB,
          setForceDisableSubmitButton: tn,
          premiumSubscription: eS,
          existingAvailableSlots: eT,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            tl(), null != s && s(), (0, k.z)()
          },
          priceOptions: o
        }), ti && null != eS && null != eS.paymentGateway && (e = (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(E.kzN, {
            className: el.externalErrorBlock,
            children: en.intl.format(en.t["/m3Y3t"], {
              paymentGatewayName: et.Vz[eS.paymentGateway]
            })
          }), e]
        })), l = (0, i.jsx)(m.zx, {
          "data-migration-pending": true,
          look: m.zx.Looks.LINK,
          color: (0, p.ap)(eL) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
          onClick: tl,
          children: en.intl.string(en.t.oEAioK)
        }), r = (0, i.jsx)(E.zxk, {
          variant: "primary",
          text: en.intl.string(en.t["3PatS0"]),
          type: "submit",
          disabled: tt || 0 === eY || ti,
          onClick: () => {
            if (!eE && (null == eb || eb.premiumSubscriptionType !== ee.p9.TIER_2)) return void e2(j.h8.PREMIUM_UPSELL);
            e2(null != eO || eW ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS)
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
        c()(null != eM, "Missing nextPremiumSubscriptionPlan"), e = (0, i.jsx)(q.Gq, {
          paymentSources: ek,
          priceOptions: o,
          currentPremiumSubscription: eS,
          premiumSubscriptionPaymentSourceId: eO,
          premiumSubscriptionPlan: eM,
          newAdditionalPlans: e$,
          onPaymentSourceChange: e => ew(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e2(j.h8.ADD_PAYMENT_STEPS), ew(null)
          },
          onPurchaseTermsChange: eV,
          legalTermsNodeRef: tr,
          hasLegalTermsFlash: ts
        }), n = j.h8.PLAN_SELECT, r = eH ? (0, i.jsx)(E.zxk, {
          variant: "active",
          text: en.intl.string(en.t.eUEeCg),
          type: "submit",
          loading: eU,
          onClick: async () => {
            c()(null != e$, "Missing newAdditionalPlans");
            let e = (0, A.m)(ek, ev);
            eR(null);
            try {
              te(C.A.PURCHASING), eD(true), c()(null != ev, "Missing paymentSourceId"), c()(null != ef, "Missing invoicePreview");
              let t = {
                  amount: ef.total,
                  currency: ef.currency
                },
                n = (0, V.sG)(eS, e$, o.currency.toLowerCase(), o.paymentSourceId);
              if (B.default.track(Q.rMx.PAYMENT_FLOW_COMPLETED, er(ei({}, e0), {
                  duration_ms: Date.now() - eJ,
                  guild_id: ed,
                  application_id: e_
                })), tp) return;
              if (null == eS || null == eb) {
                c()(null != e, "Missing paymentSource");
                let l = await (0, P.XW)({
                  items: e$,
                  paymentSource: e,
                  currency: o.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (l.redirectConfirmation) return void tm(null != l.redirectURL)
              } else {
                let l = {
                  items: (0, V.MY)(eS, e$)
                };
                l.currency = eS.currency, null == l.currency && (l.currency = o.currency), l.paymentSource = null != eO ? ek[eO] : true, null == l.paymentSource && (c()(null != e, "Missing paymentSource"), l.paymentSource = e, l.currency = o.currency);
                let i = await (0, P.Mg)(eS, l, t, n, eQ);
                if (i.redirectConfirmation) return void tm(null != i.redirectURL)
              }
              0 === eh && e2(j.h8.CONFIRM), te(C.A.COMPLETED), null != ed && await eu(ed, 0 !== eh), 0 !== eh && tl(), null == ep || ep()
            } catch (t) {
              te(C.A.FAIL), eR(t), B.default.track(Q.rMx.PAYMENT_FLOW_FAILED, er(ei({}, e0), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === Q.HeQ.CARD ? Q.gg$.STRIPE : Q.gg$.BRAINTREE : null,
                payment_source_id: ev,
                duration_ms: Date.now() - eJ
              }))
            } finally {
              tp || eD(false)
            }
          }
        }) : (0, i.jsx)(E.ua7, {
          text: en.intl.string(en.t.XdvBLS),
          children: e => (0, i.jsx)(E.zxk, er(ei({
            variant: "active",
            text: en.intl.string(en.t.eUEeCg)
          }, e), {
            onClick: () => {
              null != tr.current && (tr.current.scrollIntoView({
                behavior: "smooth"
              }), to(true))
            },
            type: "submit"
          }))
        });
        break;
      case j.h8.CONFIRM:
        var t_;
        let a = U.Z.getGuild(ed),
          u = null != (t_ = null == a ? true : a.name) ? t_ : null == ej ? true : ej.name,
          d = (0, A.$)(ek, ev),
          _ = (0, K.qH)(eg.current) && null != eb && !ee.F$.has(eb.id);
        e = (0, i.jsx)(q.R7, {
          guild: a,
          guildBoostQuantity: eY + eT.length,
          onClose: tl,
          withAnimation: false,
          paymentSourceType: d,
          fallbackGuildName: u,
          didPurchaseOnFractionalPremium: _,
          customCheckoutFlow: eI
        })
    }
    let S = null != eG && null == (0, j.ly)(eG) ? eG : ez;
    t = e8 === j.h8.ADD_PAYMENT_STEPS ? tP : (0, i.jsx)(Z.Z, {
      hideBreadcrumbs: e8 === j.h8.CONFIRM,
      steps: e6,
      currentStep: e8,
      paymentError: S,
      purchaseErrorBlockRef: eF,
      hasCurrencies: tu.length > 1,
      body: e,
      footer: e8 !== j.h8.CONFIRM ? (0, i.jsxs)(E.mzw, {
        "data-migration-pending": true,
        direction: b.Z.Direction.HORIZONTAL,
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.END,
        children: [null != n ? (0, i.jsx)("div", {
          className: el.backStep,
          children: (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            color: (0, p.ap)(eL) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            look: m.zx.Looks.LINK,
            size: m.zx.Sizes.NONE,
            onClick: () => {
              null != n && e2(n)
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
  let th = null;
  return ey || e8 === j.h8.PREMIUM_UPSELL || (th = (0, i.jsx)($.Z, {
    onClose: tl,
    currentStep: e8,
    purchaseState: e9
  })), (0, i.jsxs)(E.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: o()({
      [el.planSelectStep]: e8 === j.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [th, t]
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