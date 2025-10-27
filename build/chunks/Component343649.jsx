/** Chunk was on 24920 **/
/** chunk id: 343649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => ea,
  default: () => em
}), require("./388685.js"), require("./49124.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function er(e) {
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

function es(e, t) {
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
var ea = 12633 == require.j ? ((i = {})[i.NONE = 0] = "NONE", i[i.LEVEL = 1] = "LEVEL", i[i.PERK = 2] = "PERK", i) : null;
let eo = Chunk474936.Xh.NONE_MONTH,
  ec = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  eu = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];
async function ed(e, t) {
  await (0, h.X8)();
  let n = (0, V.vx)(F.Z.boostSlots);
  return (0, h.W3)(e, n.map(e => e.id), t)
}

function ep(e) {
  let t, {
      transitionState: n,
      onClose: i,
      closeGuildPerksModal: s,
      analyticsLocations: o,
      analyticsLocation: h,
      analyticsSourceLocation: ea,
      guildId: ep,
      onSubscribeComplete: em,
      totalNumberOfSlotsToAssign: eE = 1,
      disablePremiumUpsell: eP = false,
      onSubscriptionConfirmation: eh,
      applicationId: e_,
      intent: eS = 0
    } = e,
    {
      activeSubscription: eg,
      blockedPayments: ey,
      startingFractionalPremiumEndsAtRef: ef,
      invoicePreview: eI,
      customCheckoutFlow: eN
    } = (0, x.JL)(),
    eO = (0, d.e7)([Y.Z], () => Y.Z.hasFetchedSubscriptions()),
    eb = null != eg ? eg.paymentSourceId : null,
    eM = (0, d.e7)([W.Z], () => null != eg ? (0, q.oE)(eg.planId) : null),
    eL = (0, d.e7)([W.Z], () => null == eg || null != W.Z.get(eg.planId)),
    eT = (0, d.e7)([W.Z], () => null == eM ? W.Z.get(eo) : eM),
    ex = (0, d.e7)([U.Z], () => U.Z.theme),
    ej = r.useRef((0, V.vx)(F.Z.boostSlots)).current,
    eC = (0, d.e7)([T.Z], () => null != ep ? T.Z.getGuild(ep) : true, [ep]),
    eA = (0, d.e7)([B.Z], () => B.Z.defaultPaymentSourceId),
    eR = (0, Z.fL)(null != eb ? eb : eO ? eA : null),
    {
      paymentSources: ev,
      setPurchaseError: ek,
      paymentSourceId: eD,
      setIsSubmittingCurrentStep: eZ,
      paymentAuthenticationState: ew,
      setPaymentSourceId: eU,
      isSubmittingCurrentStep: eG,
      paymentError: eF,
      purchaseError: ez,
      purchaseErrorBlockRef: eB
    } = eR,
    eW = Object.keys(ev).length > 0,
    [eY, eH] = r.useState(eE - ej.length),
    [eV, eX] = r.useState(false),
    eK = (0, d.e7)([z.Z], () => z.Z.popupCallbackCalled),
    eq = (0, N.V)(),
    e$ = r.useMemo(() => null != eg && eL && eq ? (0, k.g)(eg, eY) : [{
      planId: et.Xh.PREMIUM_MONTH_GUILD,
      quantity: eY
    }], [eg, eL, eY, eq]),
    eQ = r.useMemo(() => (0, R.b)(), []),
    [eJ, e0] = (0, S.Z)(() => [null != eQ ? eQ : (0, u.Z)(), Date.now()]),
    {
      analyticsLocations: e8
    } = (0, I.ZP)(o, f.Z.GUILD_BOOST_PURCHASE_MODAL),
    e3 = r.useMemo(() => {
      var e, t;
      return {
        load_id: eJ,
        payment_type: en.Zu[en.GZ.SUBSCRIPTION],
        sku_id: et.Si.GUILD,
        subscription_type: ee.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = e$.find(e => {
          let {
            planId: t
          } = e;
          return et.Z1.has(t)
        })) ? true : e.planId) ? t : et.Xh.PREMIUM_MONTH_GUILD,
        quantity: eY,
        location: h,
        source: ea,
        location_stack: e8
      }
    }, [eJ, h, e8, ea, e$, eY]);
  r.useEffect(() => {
    (0, K.i1)(eD)
  }, [eD]);
  let [e1, e2] = r.useState(j.h8.PLAN_SELECT), e4 = r.useMemo(() => Date.now(), [e1]), e7 = r.useCallback((e, t) => {
    e2(e), ek(null);
    let n = Date.now();
    H.default.track(ee.rMx.PAYMENT_FLOW_STEP, es(er({}, e3), {
      from_step: null != t ? t : e1,
      to_step: e === j.h8.ADD_PAYMENT_STEPS ? j.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - e4,
      flow_duration_ms: n - e0,
      guild_id: ep,
      application_id: e_
    }))
  }, [ek, e3, e1, e4, e0, ep, e_]), e6 = {
    baseAnalyticsData: e3,
    flowStartTime: e0,
    guildId: ep,
    handleStepChange: e7,
    onSubscribeComplete: em,
    paymentSourceId: eD,
    setIsSubmittingCurrentStep: eZ,
    setPurchaseError: ek
  }, e5 = r.useRef(e6);
  r.useEffect(() => {
    e5.current = e6
  }), r.useEffect(() => {
    let {
      baseAnalyticsData: e,
      flowStartTime: t,
      guildId: n,
      handleStepChange: i,
      onSubscribeComplete: l,
      paymentSourceId: r,
      setIsSubmittingCurrentStep: s,
      setPurchaseError: a
    } = e5.current;
    (async () => {
      if (true === eK) try {
        if (null == z.Z.redirectedPaymentId) return;
        await (0, P.OP)(z.Z.redirectedPaymentId), i(j.h8.CONFIRM), tn(C.A.COMPLETED), null != n && await ed(n, 0 !== eS), null == l || l()
      } catch (n) {
        tn(C.A.FAIL), a(n), H.default.track(ee.rMx.PAYMENT_FLOW_FAILED, es(er({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: ee.gg$.STRIPE,
          payment_source_id: r,
          duration_ms: Date.now() - t
        }))
      } finally {
        s(false), (0, P.K2)()
      }
    })()
  }, [eK, eS]), (0, g.ZP)(() => {
    Y.Z.hasFetchedSubscriptions() || (0, P.jg)(), null == ep || null != G.Z.getGuild(ep) || null != T.Z.getGuild(ep) || T.Z.isGuildFetching(ep) || (0, L.Q)(ep), (0, M.U)(es(er({}, e3), {
      guild_id: ep,
      application_id: e_,
      custom_checkout_flow: eN
    })), null != eg && null != eg.renewalMutations && H.default.track(ee.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: h,
      guild_id: ep
    })
  });
  let [e9, te] = r.useState(ec), [tt, tn] = r.useState(C.A.WAITING), [ti, tl] = r.useState(true), tr = () => {
    i(tt === C.A.COMPLETED)
  }, ts = null != eg && eg.isPurchasedExternally;
  r.useEffect(() => {
    ew !== D.wr.PENDING && e1 !== j.h8.CONFIRM && null != eb && (e9 !== ec && te(ec), ec.includes(e1) || e1 === j.h8.PREMIUM_UPSELL || e7(j.h8.REVIEW)), e1 === j.h8.ADD_PAYMENT_STEPS && e9 !== eu && te(eu), ts && e1 !== j.h8.PLAN_SELECT && e2(j.h8.PLAN_SELECT)
  }, [e1, e7, ts, ew, eg, eb, e9]), (0, D.bp)(e1, ew, e7, tn), (0, j.dZ)(e1, tt, tn);
  let ta = r.useRef(null),
    [to, tc] = (0, y.Z)(false, 500),
    [tu, td] = r.useState(null),
    [tp, tm] = r.useState([]),
    [tE, tP] = r.useState(false),
    th = r.useMemo(() => JSON.stringify(tp), [tp]);
  r.useEffect(() => {
    let e;
    eq && (null != W.Z.get(et.Xh.PREMIUM_MONTH_GUILD) && tm(e = (0, K.DE)(et.Xh.PREMIUM_MONTH_GUILD, eD, false)), null == eD && null != eg && null != eg.paymentSourceId ? td(eg.currency) : null != e && td(e[0]))
  }, [eD, eg, eq, th]);
  let t_ = (0, Z.vP)({
    paymentModalArgs: eR,
    initialStep: j.h8.PAYMENT_TYPE,
    prependSteps: [j.h8.PLAN_SELECT],
    appendSteps: [j.h8.REVIEW, j.h8.CONFIRM],
    breadcrumpSteps: e9,
    currentBreadcrumpStep: e1,
    onReturn: () => {
      e7(Object.values(ev).length < 1 ? j.h8.PLAN_SELECT : j.h8.REVIEW, j.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e7(j.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, i = Date.now();
      H.default.track(ee.rMx.PAYMENT_FLOW_STEP, es(er({}, e3), {
        from_step: t,
        to_step: n,
        step_duration_ms: i - e4,
        flow_duration_ms: i - e0,
        guild_id: ep
      }))
    }
  });
  if (ey) t = (0, l.jsx)(O.Vq, {
    onClose: tr
  });
  else if (eO && eL && eq && null != tu && "" !== tu)
    if ((null == eg ? true : eg.isPausedOrPausePending) && !eg.isPausedAllowsUpdatesButNotResume) t = (0, l.jsx)(E.hzk, {
      "data-migration-pending": true,
      children: (0, l.jsx)("p", {
        className: el.copy,
        children: ei.intl.string(ei.t.mOWsF1)
      })
    });
    else if (null != eg && null != eg.renewalMutations) t = (0, l.jsx)(E.hzk, {
    "data-migration-pending": true,
    children: (0, l.jsx)("p", {
      className: el.copy,
      children: ei.intl.string(ei.t.npfhh0)
    })
  });
  else if (e1 === j.h8.PREMIUM_UPSELL) {
    c()(null != eT, "Missing nextPremiumSubscriptionPlan"), c()(tu, "Currency not defined");
    let e = null != eD ? {
      paymentSourceId: eD,
      currency: tu
    } : {
      currency: tu
    };
    t = (0, l.jsx)(J.Z, {
      premiumSubscriptionPlan: eT,
      analyticsLocation: h,
      analyticsSourceLocation: ea,
      onClose: tr,
      onBack: () => e7(j.h8.PLAN_SELECT),
      onSkip: () => e7(null != eb || eW ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eh,
      priceOptions: e
    })
  } else {
    let e, n, i, r;
    c()(tu, "Currency not defined");
    let a = null != eD ? {
        paymentSourceId: eD,
        currency: tu
      } : {
        currency: tu
      },
      o = G.Z.getGuild(ep),
      u = null == eC && null == o;
    switch (e1) {
      case j.h8.PLAN_SELECT:
        c()(null != ep, "Missing guildId"), c()(null != eT, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(Q.CP, {
          premiumSubscriptionPlan: eT,
          numGuildBoosts: eY,
          setNumGuildBoosts: eH,
          setForceDisableSubmitButton: tl,
          premiumSubscription: eg,
          existingAvailableSlots: ej,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            tr(), null != s && s(), (0, v.z)()
          },
          priceOptions: a
        }), ts && null != eg && null != eg.paymentGateway ? e = (0, l.jsxs)("div", {
          className: el.externalErrorBlock,
          children: [(0, l.jsx)(E.M14, {
            type: "critical",
            children: ei.intl.format(ei.t["/m3Y3s"], {
              paymentGatewayName: en.Vz[eg.paymentGateway]
            })
          }), e]
        }) : !T.Z.isGuildFetching(ep) && u && (e = (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(E.Wn, {
            messageType: E.QYI.ERROR,
            className: el.helpMessageWrapper,
            children: ei.intl.string(ei.t.eAn6z2)
          }), e]
        })), i = (0, l.jsx)(m.zx, {
          "data-migration-pending": true,
          look: m.zx.Looks.LINK,
          color: (0, p.ap)(ex) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
          onClick: tr,
          children: ei.intl.string(ei.t.oEAioF)
        }), r = (0, l.jsx)(E.Button, {
          variant: "primary",
          text: ei.intl.string(ei.t["3PatSz"]),
          type: "submit",
          disabled: ti || 0 === eY || ts || u,
          onClick: () => {
            if (!eP && (null == eM || eM.premiumSubscriptionType !== et.PremiumTypes.TIER_2)) return void e7(j.h8.PREMIUM_UPSELL);
            e7(null != eb || eW ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS)
          }
        });
        break;
      case j.h8.ADD_PAYMENT_STEPS:
        break;
      case j.h8.AWAITING_AUTHENTICATION:
        e = (0, l.jsx)(_.F, {
          className: el.__invalid_body
        });
        break;
      case j.h8.REVIEW:
        c()(null != eT, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(Q.Gq, {
          paymentSources: ev,
          priceOptions: a,
          currentPremiumSubscription: eg,
          premiumSubscriptionPaymentSourceId: eb,
          premiumSubscriptionPlan: eT,
          newAdditionalPlans: e$,
          onPaymentSourceChange: e => eU(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e7(j.h8.ADD_PAYMENT_STEPS), eU(null)
          },
          onPurchaseTermsChange: eX,
          legalTermsNodeRef: ta,
          hasLegalTermsFlash: to
        }), n = j.h8.PLAN_SELECT, r = eV ? (0, l.jsx)(E.Button, {
          variant: "active",
          text: ei.intl.string(ei.t.eUEeCt),
          type: "submit",
          loading: eG,
          onClick: async () => {
            c()(null != e$, "Missing newAdditionalPlans");
            let e = (0, A.m)(ev, eD);
            ek(null);
            try {
              tn(C.A.PURCHASING), eZ(true), c()(null != eD, "Missing paymentSourceId"), c()(null != eI, "Missing invoicePreview");
              let t = {
                  amount: eI.total,
                  currency: eI.currency
                },
                n = (0, X.sG)(eg, e$, a.currency.toLowerCase(), a.paymentSourceId);
              if (H.default.track(ee.rMx.PAYMENT_FLOW_COMPLETED, es(er({}, e3), {
                  duration_ms: Date.now() - e0,
                  guild_id: ep,
                  application_id: e_
                })), tE) return;
              if (null == eg || null == eM) {
                c()(null != e, "Missing paymentSource");
                let i = await (0, P.XW)({
                  items: e$,
                  paymentSource: e,
                  currency: a.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (i.redirectConfirmation) return void tP(null != i.redirectURL)
              } else {
                let i = {
                  items: (0, X.MY)(eg, e$)
                };
                i.currency = eg.currency, null == i.currency && (i.currency = a.currency), i.paymentSource = null != eb ? ev[eb] : true, null == i.paymentSource && (c()(null != e, "Missing paymentSource"), i.paymentSource = e, i.currency = a.currency);
                let l = await (0, P.Mg)(eg, i, t, n, e8);
                if (l.redirectConfirmation) return void tP(null != l.redirectURL)
              }
              0 === eS && e7(j.h8.CONFIRM), tn(C.A.COMPLETED), null != ep && await ed(ep, 0 !== eS), 0 !== eS && tr(), null == em || em()
            } catch (t) {
              tn(C.A.FAIL), ek(t), H.default.track(ee.rMx.PAYMENT_FLOW_FAILED, es(er({}, e3), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === ee.HeQ.CARD ? ee.gg$.STRIPE : ee.gg$.BRAINTREE : null,
                payment_source_id: eD,
                duration_ms: Date.now() - e0
              }))
            } finally {
              tE || eZ(false)
            }
          }
        }) : (0, l.jsx)(E.aML, {
          "data-migration-pending": true,
          text: ei.intl.string(ei.t.XdvBLS),
          children: e => (0, l.jsx)(E.Button, es(er({
            variant: "active",
            text: ei.intl.string(ei.t.eUEeCt)
          }, e), {
            onClick: () => {
              null != ta.current && (ta.current.scrollIntoView({
                behavior: "smooth"
              }), tc(true))
            },
            type: "submit"
          }))
        });
        break;
      case j.h8.CONFIRM:
        var tS;
        let d = null != (tS = null == o ? true : o.name) ? tS : null == eC ? true : eC.name,
          h = (0, A.$)(ev, eD),
          S = (0, q.qH)(ef.current) && null != eM && !et.F$.has(eM.id);
        e = (0, l.jsx)(Q.R7, {
          guild: o,
          guildBoostQuantity: eY + ej.length,
          onClose: tr,
          withAnimation: false,
          paymentSourceType: h,
          fallbackGuildName: d,
          didPurchaseOnFractionalPremium: S,
          customCheckoutFlow: eN
        })
    }
    let g = null != eF && null == (0, j.ly)(eF) ? eF : ez;
    t = e1 === j.h8.ADD_PAYMENT_STEPS ? t_ : (0, l.jsx)(w.Z, {
      hideBreadcrumbs: e1 === j.h8.CONFIRM,
      steps: e9,
      currentStep: e1,
      paymentError: g,
      purchaseErrorBlockRef: eB,
      hasCurrencies: tp.length > 1,
      body: e,
      footer: e1 !== j.h8.CONFIRM ? (0, l.jsxs)(E.mzw, {
        "data-migration-pending": true,
        direction: b.Z.Direction.HORIZONTAL,
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.END,
        children: [null != n ? (0, l.jsx)("div", {
          className: el.backStep,
          children: (0, l.jsx)(m.zx, {
            "data-migration-pending": true,
            color: (0, p.ap)(ex) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
            look: m.zx.Looks.LINK,
            size: m.zx.Sizes.NONE,
            onClick: () => {
              null != n && e7(n)
            },
            children: ei.intl.string(ei.t["13/7kX"])
          })
        }) : null, (0, l.jsxs)("div", {
          className: el.footerRight,
          children: [i, r]
        })]
      }) : null
    })
  } else t = (0, l.jsx)("div", {
    className: el.loadingWrapper,
    children: (0, l.jsx)(E.$jN, {})
  });
  let tg = null;
  return ey || e1 === j.h8.PREMIUM_UPSELL || (tg = (0, l.jsx)($.Z, {
    onClose: tr,
    currentStep: e1,
    purchaseState: tt
  })), (0, l.jsxs)(E.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: a()({
      [el.planSelectStep]: e1 === j.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [tg, t]
  })
}

function em(e) {
  let t = (0, d.e7)([Y.Z], () => Y.Z.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, I.ZP)(f.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, l.jsx)(I.Gt, {
    value: n,
    children: (0, l.jsx)(x.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, l.jsx)(ep, er({}, e))
    })
  })
}