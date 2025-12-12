/** Chunk was on web.js **/
/** chunk id: 343649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => ec,
  default: () => eh
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk885910 = require("./885910.js");

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var ec = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.LEVEL = 1] = "LEVEL", e[e.PERK = 2] = "PERK", e
}({});
let eu = Chunk474936.Xh.NONE_MONTH,
  ed = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  ef = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM],
  ep = 500;
async function e_(e, t) {
  await (0, h.X8)();
  let n = (0, K.vx)(F.Z.boostSlots);
  return (0, h.W3)(e, n.map(e => e.id), t)
}

function em(e) {
  let t, {
      transitionState: n,
      onClose: a,
      closeGuildPerksModal: s,
      analyticsLocations: h,
      analyticsLocation: ea,
      analyticsSourceLocation: es,
      guildId: ec,
      onSubscribeComplete: em,
      totalNumberOfSlotsToAssign: eh = 1,
      disablePremiumUpsell: eg = false,
      onSubscriptionConfirmation: eE,
      applicationId: eb,
      intent: ey = 0
    } = e,
    {
      activeSubscription: eO,
      blockedPayments: ev,
      startingFractionalPremiumEndsAtRef: eS,
      invoicePreview: eI,
      customCheckoutFlow: eT
    } = (0, P.JL)(),
    eC = (0, u.e7)([Y.Z], () => Y.Z.hasFetchedSubscriptions()),
    eA = null != eO ? eO.paymentSourceId : null,
    eN = (0, u.e7)([H.Z], () => null != eO ? (0, Q.oE)(eO.planId) : null),
    eP = (0, u.e7)([H.Z], () => null == eO || null != H.Z.get(eO.planId)),
    eR = (0, u.e7)([H.Z], () => null == eN ? H.Z.get(eu) : eN),
    ew = (0, u.e7)([G.Z], () => G.Z.theme),
    eD = i.useRef((0, K.vx)(F.Z.boostSlots)).current,
    ex = (0, u.e7)([N.Z], () => null != ec ? N.Z.getGuild(ec) : true, [ec]),
    eL = (0, u.e7)([V.Z], () => V.Z.defaultPaymentSourceId),
    ej = (0, k.fL)(null != eA ? eA : eC ? eL : null),
    {
      paymentSources: eM,
      setPurchaseError: ek,
      paymentSourceId: eU,
      setIsSubmittingCurrentStep: eG,
      paymentAuthenticationState: eZ,
      setPaymentSourceId: eF,
      isSubmittingCurrentStep: eB,
      paymentError: eV,
      purchaseError: eH,
      purchaseErrorBlockRef: eY
    } = ej,
    eW = Object.keys(eM).length > 0,
    [eK, ez] = i.useState(eh - eD.length),
    [eq, eQ] = i.useState(false),
    eX = (0, u.e7)([B.Z], () => B.Z.popupCallbackCalled),
    eJ = (0, S.V)(),
    e$ = i.useMemo(() => null != eO && eP && eJ ? (0, j.g)(eO, eK) : [{
      planId: et.Xh.PREMIUM_MONTH_GUILD,
      quantity: eK
    }], [eO, eP, eK, eJ]),
    e0 = i.useMemo(() => (0, x.b)(), []),
    [e1, e3] = (0, E.Z)(() => [null != e0 ? e0 : (0, c.Z)(), Date.now()]),
    {
      analyticsLocations: e2
    } = (0, v.ZP)(h, O.Z.GUILD_BOOST_PURCHASE_MODAL),
    e4 = i.useMemo(() => {
      var e, t;
      return {
        load_id: e1,
        payment_type: en.Zu[en.GZ.SUBSCRIPTION],
        sku_id: et.Si.GUILD,
        subscription_type: ee.NYc.PREMIUM,
        subscription_plan_id: null != (t = null == (e = e$.find(e => {
          let {
            planId: t
          } = e;
          return et.Z1.has(t)
        })) ? true : e.planId) ? t : et.Xh.PREMIUM_MONTH_GUILD,
        quantity: eK,
        location: ea,
        source: es,
        location_stack: e2
      }
    }, [e1, ea, e2, es, e$, eK]);
  i.useEffect(() => {
    (0, q.i1)(eU)
  }, [eU]);
  let [e5, e8] = i.useState(R.h8.PLAN_SELECT), e6 = i.useMemo(() => Date.now(), [e5]), e7 = i.useCallback((e, t) => {
    e8(e), ek(null);
    let n = Date.now();
    W.default.track(ee.rMx.PAYMENT_FLOW_STEP, el(eo({}, e4), {
      from_step: null != t ? t : e5,
      to_step: e === R.h8.ADD_PAYMENT_STEPS ? R.h8.PAYMENT_TYPE : e,
      step_duration_ms: n - e6,
      flow_duration_ms: n - e3,
      guild_id: ec,
      application_id: eb
    }))
  }, [ek, e4, e5, e6, e3, ec, eb]), e9 = {
    baseAnalyticsData: e4,
    flowStartTime: e3,
    guildId: ec,
    handleStepChange: e7,
    onSubscribeComplete: em,
    paymentSourceId: eU,
    setIsSubmittingCurrentStep: eG,
    setPurchaseError: ek
  }, te = i.useRef(e9);
  i.useEffect(() => {
    te.current = e9
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
    } = te.current;
    (async () => {
      if (true === eX) try {
        if (null == B.Z.redirectedPaymentId) return;
        await (0, m.OP)(B.Z.redirectedPaymentId), r(R.h8.CONFIRM), ti(w.A.COMPLETED), null != n && await e_(n, 0 !== ey), null == i || i()
      } catch (n) {
        ti(w.A.FAIL), s(n), W.default.track(ee.rMx.PAYMENT_FLOW_FAILED, el(eo({}, e), {
          payment_error_code: null == n ? true : n.code,
          payment_gateway: ee.gg$.STRIPE,
          payment_source_id: a,
          duration_ms: Date.now() - t
        }))
      } finally {
        o(false), (0, m.K2)()
      }
    })()
  }, [eX, ey]), (0, b.ZP)(() => {
    Y.Z.hasFetchedSubscriptions() || (0, m.jg)(), null == ec || null != Z.Z.getGuild(ec) || null != N.Z.getGuild(ec) || N.Z.isGuildFetching(ec) || (0, A.Q)(ec), (0, C.U)(el(eo({}, e4), {
      guild_id: ec,
      application_id: eb,
      custom_checkout_flow: eT
    })), null != eO && null != eO.renewalMutations && W.default.track(ee.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: ea,
      guild_id: ec
    })
  });
  let [tt, tn] = i.useState(ed), [tr, ti] = i.useState(w.A.WAITING), [ta, to] = i.useState(true), ts = () => {
    a(tr === w.A.COMPLETED)
  }, tl = null != eO && eO.isPurchasedExternally;
  i.useEffect(() => {
    eZ !== M.wr.PENDING && e5 !== R.h8.CONFIRM && null != eA && (tt !== ed && tn(ed), ed.includes(e5) || e5 === R.h8.PREMIUM_UPSELL || e7(R.h8.REVIEW)), e5 === R.h8.ADD_PAYMENT_STEPS && tt !== ef && tn(ef), tl && e5 !== R.h8.PLAN_SELECT && e8(R.h8.PLAN_SELECT)
  }, [e5, e7, tl, eZ, eO, eA, tt]), (0, M.bp)(e5, eZ, e7, ti), (0, R.dZ)(e5, tr, ti);
  let tc = i.useRef(null),
    [tu, td] = (0, y.Z)(false, ep),
    [tf, tp] = i.useState(null),
    [t_, tm] = i.useState([]),
    [th, tg] = i.useState(false),
    tE = i.useMemo(() => JSON.stringify(t_), [t_]);
  i.useEffect(() => {
    let e;
    eJ && (null != H.Z.get(et.Xh.PREMIUM_MONTH_GUILD) && tm(e = (0, q.DE)(et.Xh.PREMIUM_MONTH_GUILD, eU, false)), null == eU && null != eO && null != eO.paymentSourceId ? tp(eO.currency) : null != e && tp(e[0]))
  }, [eU, eO, eJ, tE]);
  let tb = (0, k.vP)({
    paymentModalArgs: ej,
    initialStep: R.h8.PAYMENT_TYPE,
    prependSteps: [R.h8.PLAN_SELECT],
    appendSteps: [R.h8.REVIEW, R.h8.CONFIRM],
    breadcrumpSteps: tt,
    currentBreadcrumpStep: e5,
    onReturn: () => {
      e7(Object.values(eM).length < 1 ? R.h8.PLAN_SELECT : R.h8.REVIEW, R.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      e7(R.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, r = Date.now();
      W.default.track(ee.rMx.PAYMENT_FLOW_STEP, el(eo({}, e4), {
        from_step: t,
        to_step: n,
        step_duration_ms: r - e6,
        flow_duration_ms: r - e3,
        guild_id: ec
      }))
    }
  });
  if (ev) t = (0, r.jsx)(I.Vq, {
    onClose: ts
  });
  else if (eC && eP && eJ && null != tf && "" !== tf)
    if ((null == eO ? true : eO.isPausedOrPausePending) && !eO.isPausedAllowsUpdatesButNotResume) t = (0, r.jsx)(_.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsx)("p", {
        className: ei.copy,
        children: er.intl.string(er.t.mOWsF1)
      })
    });
    else if (null != eO && null != eO.renewalMutations) t = (0, r.jsx)(_.hzk, {
    "data-migration-pending": true,
    children: (0, r.jsx)("p", {
      className: ei.copy,
      children: er.intl.string(er.t.npfhh0)
    })
  });
  else if (e5 === R.h8.PREMIUM_UPSELL) {
    l()(null != eR, "Missing nextPremiumSubscriptionPlan"), l()(tf, "Currency not defined");
    let e = null != eU ? {
      paymentSourceId: eU,
      currency: tf
    } : {
      currency: tf
    };
    t = (0, r.jsx)($.Z, {
      premiumSubscriptionPlan: eR,
      analyticsLocation: ea,
      analyticsSourceLocation: es,
      onClose: ts,
      onBack: () => e7(R.h8.PLAN_SELECT),
      onSkip: () => e7(null != eA || eW ? R.h8.REVIEW : R.h8.ADD_PAYMENT_STEPS),
      onSubscriptionConfirmation: eE,
      priceOptions: e
    })
  } else {
    let e, n, i, a;
    l()(tf, "Currency not defined");
    let o = null != eU ? {
        paymentSourceId: eU,
        currency: tf
      } : {
        currency: tf
      },
      c = Z.Z.getGuild(ec),
      u = null == ex && null == c;
    switch (e5) {
      case R.h8.PLAN_SELECT:
        l()(null != ec, "Missing guildId"), l()(null != eR, "Missing nextPremiumSubscriptionPlan"), e = (0, r.jsx)(J.CP, {
          premiumSubscriptionPlan: eR,
          numGuildBoosts: eK,
          setNumGuildBoosts: ez,
          setForceDisableSubmitButton: to,
          premiumSubscription: eO,
          existingAvailableSlots: eD,
          onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
              window.location.href = "discord://app/settings/nitro";
              return
            }
            ts(), null != s && s(), (0, L.z)()
          },
          priceOptions: o
        }), tl && null != eO && null != eO.paymentGateway ? e = (0, r.jsxs)("div", {
          className: ei.externalErrorBlock,
          children: [(0, r.jsx)(_.M14, {
            type: "critical",
            children: er.intl.format(er.t["/m3Y3s"], {
              paymentGatewayName: en.Vz[eO.paymentGateway]
            })
          }), e]
        }) : !N.Z.isGuildFetching(ec) && u && (e = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(_.Wn, {
            messageType: _.QYI.ERROR,
            className: ei.helpMessageWrapper,
            children: er.intl.string(er.t.eAn6z2)
          }), e]
        })), i = (0, r.jsx)(p.zx, {
          "data-migration-pending": true,
          look: p.zx.Looks.LINK,
          color: (0, f.ap)(ew) ? p.zx.Colors.PRIMARY : p.zx.Colors.WHITE,
          onClick: ts,
          children: er.intl.string(er.t.oEAioF)
        }), a = (0, r.jsx)(_.Button, {
          variant: "primary",
          text: er.intl.string(er.t["3PatSz"]),
          type: "submit",
          disabled: ta || 0 === eK || tl || u,
          onClick: () => {
            if (!eg && (null == eN || eN.premiumSubscriptionType !== et.PremiumTypes.TIER_2)) return void e7(R.h8.PREMIUM_UPSELL);
            e7(null != eA || eW ? R.h8.REVIEW : R.h8.ADD_PAYMENT_STEPS)
          }
        });
        break;
      case R.h8.ADD_PAYMENT_STEPS:
        break;
      case R.h8.AWAITING_AUTHENTICATION:
        e = (0, r.jsx)(g.F, {
          className: ei.__invalid_body
        });
        break;
      case R.h8.REVIEW:
        l()(null != eR, "Missing nextPremiumSubscriptionPlan"), e = (0, r.jsx)(J.Gq, {
          paymentSources: eM,
          priceOptions: o,
          currentPremiumSubscription: eO,
          premiumSubscriptionPaymentSourceId: eA,
          premiumSubscriptionPlan: eR,
          newAdditionalPlans: e$,
          onPaymentSourceChange: e => eF(null != e ? e.id : null),
          onPaymentSourceAdd: () => {
            e7(R.h8.ADD_PAYMENT_STEPS), eF(null)
          },
          onPurchaseTermsChange: eQ,
          legalTermsNodeRef: tc,
          hasLegalTermsFlash: tu
        }), n = R.h8.PLAN_SELECT, a = eq ? (0, r.jsx)(_.Button, {
          variant: "active",
          text: er.intl.string(er.t.eUEeCt),
          type: "submit",
          loading: eB,
          onClick: async () => {
            l()(null != e$, "Missing newAdditionalPlans");
            let e = (0, D.m)(eM, eU);
            ek(null);
            try {
              ti(w.A.PURCHASING), eG(true), l()(null != eU, "Missing paymentSourceId"), l()(null != eI, "Missing invoicePreview");
              let t = {
                  amount: eI.total,
                  currency: eI.currency
                },
                n = (0, z.sG)(eO, e$, o.currency.toLowerCase(), o.paymentSourceId);
              if (W.default.track(ee.rMx.PAYMENT_FLOW_COMPLETED, el(eo({}, e4), {
                  duration_ms: Date.now() - e3,
                  guild_id: ec,
                  application_id: eb
                })), th) return;
              if (null == eO || null == eN) {
                l()(null != e, "Missing paymentSource");
                let r = await (0, m.XW)({
                  items: e$,
                  paymentSource: e,
                  currency: o.currency,
                  expectedInvoicePrice: t,
                  expectedRenewalPrice: n
                });
                if (r.redirectConfirmation) return void tg(null != r.redirectURL)
              } else {
                let r = {
                  items: (0, z.MY)(eO, e$)
                };
                r.currency = eO.currency, null == r.currency && (r.currency = o.currency), r.paymentSource = null != eA ? eM[eA] : true, null == r.paymentSource && (l()(null != e, "Missing paymentSource"), r.paymentSource = e, r.currency = o.currency);
                let i = await (0, m.Mg)(eO, r, t, n, e2);
                if (i.redirectConfirmation) return void tg(null != i.redirectURL)
              }
              0 === ey && e7(R.h8.CONFIRM), ti(w.A.COMPLETED), null != ec && await e_(ec, 0 !== ey), 0 !== ey && ts(), null == em || em()
            } catch (t) {
              ti(w.A.FAIL), ek(t), W.default.track(ee.rMx.PAYMENT_FLOW_FAILED, el(eo({}, e4), {
                payment_error_code: null == t ? true : t.code,
                payment_gateway: null != e ? e.type === ee.HeQ.CARD ? ee.gg$.STRIPE : ee.gg$.BRAINTREE : null,
                payment_source_id: eU,
                duration_ms: Date.now() - e3
              }))
            } finally {
              th || eG(false)
            }
          }
        }) : (0, r.jsx)(d.u, {
          text: er.intl.string(er.t.XdvBLS),
          children: (0, r.jsx)(_.Button, {
            variant: "active",
            text: er.intl.string(er.t.eUEeCt),
            onClick: () => {
              null != tc.current && (tc.current.scrollIntoView({
                behavior: "smooth"
              }), td(true))
            },
            type: "submit"
          })
        });
        break;
      case R.h8.CONFIRM:
        var ty;
        let h = null != (ty = null == c ? true : c.name) ? ty : null == ex ? true : ex.name,
          E = (0, D.$)(eM, eU),
          b = (0, Q.qH)(eS.current) && null != eN && !et.F$.has(eN.id);
        e = (0, r.jsx)(J.R7, {
          guild: c,
          guildBoostQuantity: eK + eD.length,
          onClose: ts,
          withAnimation: false,
          paymentSourceType: E,
          fallbackGuildName: h,
          didPurchaseOnFractionalPremium: b,
          customCheckoutFlow: eT
        })
    }
    let y = null != eV && null == (0, R.ly)(eV) ? eV : eH;
    t = e5 === R.h8.ADD_PAYMENT_STEPS ? tb : (0, r.jsx)(U.Z, {
      hideBreadcrumbs: e5 === R.h8.CONFIRM,
      steps: tt,
      currentStep: e5,
      paymentError: y,
      purchaseErrorBlockRef: eY,
      hasCurrencies: t_.length > 1,
      body: e,
      footer: e5 !== R.h8.CONFIRM ? (0, r.jsxs)(_.mzw, {
        "data-migration-pending": true,
        direction: T.Z.Direction.HORIZONTAL,
        align: T.Z.Align.CENTER,
        justify: T.Z.Justify.END,
        children: [null != n ? (0, r.jsx)("div", {
          className: ei.backStep,
          children: (0, r.jsx)(p.zx, {
            "data-migration-pending": true,
            color: (0, f.ap)(ew) ? p.zx.Colors.PRIMARY : p.zx.Colors.WHITE,
            look: p.zx.Looks.LINK,
            size: p.zx.Sizes.NONE,
            onClick: () => {
              null != n && e7(n)
            },
            children: er.intl.string(er.t["13/7kX"])
          })
        }) : null, (0, r.jsxs)("div", {
          className: ei.footerRight,
          children: [i, a]
        })]
      }) : null
    })
  } else t = (0, r.jsx)("div", {
    className: ei.loadingWrapper,
    children: (0, r.jsx)(_.$jN, {})
  });
  let tO = null;
  return ev || e5 === R.h8.PREMIUM_UPSELL || (tO = (0, r.jsx)(X.Z, {
    onClose: ts,
    currentStep: e5,
    purchaseState: tr
  })), (0, r.jsxs)(_.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    className: o()({
      [ei.planSelectStep]: e5 === R.h8.PLAN_SELECT
    }),
    parentComponent: "GuildBoostPurchaseModal",
    children: [tO, t]
  })
}

function eh(e) {
  let t = (0, u.e7)([Y.Z], () => Y.Z.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, v.ZP)(O.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, r.jsx)(v.Gt, {
    value: n,
    children: (0, r.jsx)(P.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(em, eo({}, e))
    })
  })
}