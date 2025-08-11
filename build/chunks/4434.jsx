/** Chunk was on 22646 **/
/** chunk id: 4434, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  CP: () => er,
  Gq: () => ea,
  R7: () => es
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.js"),
  Chunk490504 = require("./490504.js"),
  Chunk275850 = require("./275850.js"),
  Chunk672971 = require("./672971.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk436774 = require("./436774.js"),
  Chunk563132 = require("./563132.js"),
  Chunk435020 = require("./435020.js"),
  Chunk374649 = require("./374649.js"),
  Chunk591548 = require("./591548.js"),
  Chunk847903 = require("./847903.js"),
  Chunk639119 = require("./639119.js"),
  Chunk53900 = require("./53900.js"),
  Chunk811334 = require("./811334.js"),
  Chunk110818 = require("./110818.js"),
  Chunk553797 = require("./553797.js"),
  Chunk741245 = require("./741245.js"),
  Chunk346071 = require("./346071.js"),
  Chunk314182 = require("./314182.js"),
  Chunk42818 = require("./42818.js"),
  Chunk900683 = require("./900683.js"),
  Chunk706454 = require("./706454.js"),
  Chunk430824 = require("./430824.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk588797 = require("./588797.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk599919 = require("./599919.js");

function en(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function et(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function ei(e) {
  let {
    endDate: n,
    className: t
  } = e;
  return <div className={t}>{<div className={ee.reverseTrialContextInfoDivider} />}{<p.Text variant={"text-sm/normal"} className={ee.reverseTrialContextText}>{$.intl.format($.t.IeaYqq, {
        endDate: n
      })}</p.Text>}{<div className={ee.reverseTrialContextInfoDivider} />}</div>
}

function er(e) {
  var n, t;
  let {
    guildId: l,
    premiumSubscriptionPlan: s,
    numGuildBoosts: o,
    setNumGuildBoosts: m,
    setForceDisableSubmitButton: x,
    premiumSubscription: P,
    onClickPremiumSubscriptionLink: g,
    existingAvailableSlots: T = [],
    priceOptions: E
  } = e, {
    setInvoicePreview: O
  } = (0, j.JL)(), R = (0, Z.Z)(), D = s.interval, w = s.intervalCount, M = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, q.Wz)(z.Si.GUILD), D, w)), G = (0, u.e7)([B.default], () => B.default.getCurrentUser()), k = (0, u.e7)([A.Z], () => A.Z.getGuild(l), [l]), er = (0, y.Z)({
    forceFetch: false
  });
  c()(null != M, "Missing guildBoostingSubscriptionPlan"), c()(null != k, "Unknown guild: ".concat(l));
  let el = [{
      planId: M.id,
      quantity: 1
    }],
    ea = null == P ? true : P.items.find(e => e.planId === z.Xh.PREMIUM_MONTH_TIER_2 || e.planId === z.Xh.PREMIUM_YEAR_TIER_2);
  null != ea && el.push(ea);
  let es = null == P ? true : P.items.find(e => e.planId === z.Xh.PREMIUM_MONTH_GUILD || e.planId === z.Xh.PREMIUM_YEAR_GUILD),
    {
      enabled: ec
    } = X.Z.useExperiment({
      location: "32b64a_1"
    }),
    eo = !ec || null == R || !z.Tp.has(R) || null == es,
    {
      analyticsLocations: eu
    } = (0, v.ZP)(),
    [ed, ep] = (0, h.ED)({
      subscriptionId: null == P ? true : P.id,
      items: el,
      renewal: true,
      paymentSourceId: null == P ? true : P.paymentSourceId,
      currency: E.currency,
      preventFetch: eo,
      analyticsLocations: eu,
      analyticsLocation: f.Z.GUILD_BOOSTING_PLAN_SELECT
    });
  r.useEffect(() => {
    O(ed)
  }, [O, ed]);
  let em = !eo && null == ed && null == ep,
    eS = (null == (t = (0, N.N)()) || null == (n = t.subscription_trial) ? true : n.sku_id) === z.Si.TIER_2,
    ex = q.ZP.hasBoostDiscount(G, er.fractionalState),
    eP = null == ed ? true : ed.invoiceItems.find(e => e.subscriptionPlanId === M.id),
    ef = null != eP ? {
      amount: eP.amount,
      tax: 0,
      taxInclusive: true,
      currency: E.currency
    } : q.ZP.getPrice(M.id, ex, false, E),
    ev = o * ef.amount,
    ey = (0, u.e7)([Y.Z], () => Y.Z.inReverseTrial() && q.ZP.hasBoostDiscount(G, er.fractionalState) && null != P),
    eI = q.ZP.hasBoostDiscount(G, er.fractionalState) && null != P && q.ZP.getPremiumType(P.planId) === z.p9.TIER_2 ? $.intl.format($.t.hf6YOT, {
      planName: q.ZP.getDisplayPremiumType(P.planId)
    }) : $.intl.format(eS ? $.t["ba1L7+"] : $.t.fkffDQ, {
      onPremiumSubscriptionClick: g,
      discountPercentage: (0, K.T3)(U.default.locale, z.Rr / 100),
      freeSubscriptionCount: z.cb
    }),
    ej = T.filter(e => (0, F.tl)(e)).length,
    eg = (0, q.Ap)(E.paymentSourceId),
    {
      ipCountryCode: eh
    } = (0, b.Z)(),
    eT = "HR" === eh && ef.currency === Q.pK.EUR,
    eb = er.fractionalState === z.a$.FP_SUB_PAUSED;
  return x(em), <div>{eb && <C.n fractionalPremiumInfo={er} />}{ey && null != P ? <ei endDate={P.currentPeriodEnd} /> : <div className={a()(ee.planSelectText, ee.bodyText)}>{$.intl.string($.t.jNY1FB)}</div>}{T.length > 0 ? <div className={ee.existingSlotNotice}>{<p.$Eu className={ee.existingSlotIcon} color={d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK} />}{<div>{$.intl.format($.t.F8xlho, {
          slotCount: T.length
        })}{ej > 0 && null != P ? <p.ua7 text={$.intl.formatToPlainString($.t.SFpsCA, {
            canceledCount: ej,
            date: P.currentPeriodEnd
          })}>{e => (0, i.jsx)(p.Mgn, et(en({
            size: "custom",
            width: 20,
            height: 20
          }, e), {
            className: ee.existingSlotTooltipWarningIcon,
            color: d.Z.unsafe_rawColors.YELLOW_300.css
          }))}</p.ua7> : null}</div>}</div> : null}{<div className={ee.planSelectRow}>{<div className={ee.planSelectorWrapper}>{<p.FiK value={o} onChange={e => m(e)} className={ee.__invalid_planSelector} minValue={1} maxValue={30} />}{<div className={ee.planSelectorLabel}>{eg ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === z.rV.YEAR ? $.intl.string($.t.YDpAzc) : n === z.rV.MONTH && 1 === t ? $.intl.string($.t["6ZR3Bw"]) : null
          }({
            intervalType: D,
            intervalCount: w
          }) : $.intl.string($.t.K9Bmzc)}</div>}</div>}{<div className={a()(ee.planSelectorPreviewPrice, {
          [ee.loadingSpinner]: em
        })}>{em ? (0, i.jsx)(p.$jN, {}) : eg ? (0, H.T4)(ef.amount, ef.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: r = 1
          } = e, l = (0, H.T4)(n, t);
          return i === z.rV.YEAR ? $.intl.formatToPlainString($.t["8M04YG"], {
            price: l
          }) : i === z.rV.MONTH && 1 === r ? $.intl.formatToPlainString($.t.VStWCQ, {
            price: l
          }) : i === z.rV.MONTH && r > 1 ? $.intl.formatToPlainString($.t.xJvAFR, {
            price: l
          }) : null
        }({
          intervalType: D,
          intervalCount: w,
          amount: ef.amount,
          currency: ef.currency
        })}</div>}</div>}{<div className={ee.planSelectDivider} />}{<div className={ee.planSelectRow}>{<div className={ee.planSelectorSubtotal}>{$.intl.string($.t.RtA7nZ)}</div>}{<div className={a()(ee.__invalid_planSelectorSubtotalPrice, {
          [ee.loadingSpinner]: em
        })}>{em ? (0, i.jsx)(p.$jN, {}) : (0, i.jsx)(_.Z, {
          price: ev,
          currency: ef.currency,
          intervalType: D,
          intervalCount: w,
          isPrepaidPaymentSource: eg
        })}</div>}</div>}{eT && <S.Z message={$.intl.formatToPlainString($.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, H.T4)(7.5345 * ev, Q.pK.HRK)
      })} />}{<S.Z message={$.intl.format($.t.Om31w8, {
        documentationLink: V.Z.getArticleURL(J.BhN.LOCALIZED_PRICING)
      })} />}{ey ? <L.e /> : <L.Z text={eI} color={I.JX.PREMIUM_TIER_2} />}</div>
}

function el(e) {
  let {
    premiumSubscription: n,
    premiumSubscriptionPlan: t,
    proratedInvoicePreview: r,
    renewalInvoicePreview: l,
    priceOptions: a
  } = e, s = t.interval, o = t.intervalCount, d = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, q.Wz)(z.Si.GUILD), s, o));
  c()(null != d, "Missing guildBoostingSubscriptionPlan");
  let p = e => (0, T.j)(r.invoiceItems).find(n => z.Z1.has(n.subscriptionPlanId) && e(n)),
    m = p(e => e.amount >= 0);
  c()(null != m, "Missing guild boosting invoice item");
  let S = p(e => e.amount < 0),
    x = null != S ? m.quantity - S.quantity : m.quantity,
    P = r.invoiceItems.filter(e => (0, q.uZ)(e.subscriptionPlanId)),
    f = P.reduce((e, n) => e + n.amount, 0),
    v = (0, h.pV)(m) * x,
    y = (0, H.T4)(v, r.currency),
    I = (0, H.og)(y, s, o),
    j = (0, H.T4)(r.total, r.currency) + (r.currency !== Q.pK.USD ? "*" : ""),
    g = r.total - v - f,
    b = m.discounts.map(e => {
      let n = e.amount / m.quantity;
      return et(en({}, e), {
        amount: n * x
      })
    }),
    N = (0, q.Ap)(a.paymentSourceId),
    Z = (0, u.e7)([Y.Z], () => Y.Z.inReverseTrial());
  return <i.Fragment>{N ? null : Z && null != n ? <ei endDate={n.currentPeriodEnd} className={ee.reverseTrialContextMarginBottom} /> : <w.hG proratedInvoice={r} renewalInvoice={l} />}{<E.aO>{<E.Z9>{$.intl.string($.t.CWIwmp)}</E.Z9>}{<E.i$ label={$.intl.formatToPlainString($.t.a3cAOj, {
          numGuildSubscriptions: x,
          planName: (0, q.Gf)(d.id, false, N)
        })} value={N ? y : I} discounts={b} originalAmount={m.subscriptionPlanPrice * x} currency={r.currency} interval={d.interval} intervalCount={d.intervalCount} />}{0 !== f ? <E.B1 label={(0, i.jsx)(w.As, {
          label: $.intl.formatToPlainString($.t.ZSVgeX, {
            planName: (0, q.aq)(P[0].subscriptionPlanId)
          }),
          tooltipText: $.intl.string($.t.JmwQJC)
        })} value={(0, H.T4)(f, r.currency)} /> : null}{0 !== g ? <E.B1 label={(0, i.jsx)(w.As, {
          label: $.intl.string($.t["+as5ZW"]),
          tooltipText: $.intl.string($.t.JmwQJC)
        })} value={(0, H.T4)(g, r.currency)} /> : null}{<E.UN />}{<E.az label={$.intl.format(r.taxInclusive ? N ? $.t.BqdxQk : $.t.XH4raG : $.t.RUI48P, {})} value={j} />}{null != n ? <w.nd premiumSubscription={n} proratedInvoice={r} renewalInvoice={l} isUpdate={true} isPrepaidPaymentSource={N} isTrial={Z} /> : <w.nd renewalInvoice={l} priceOptions={a} isPrepaidPaymentSource={N} />}</E.aO>}</i.Fragment>
}

function ea(e) {
  var n;
  let t, l, {
      paymentSources: a,
      priceOptions: s,
      currentPremiumSubscription: c,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: S,
      newAdditionalPlans: y,
      onPaymentSourceChange: I,
      onPaymentSourceAdd: T,
      onPurchaseTermsChange: b,
      legalTermsNodeRef: N,
      hasLegalTermsFlash: Z
    } = e,
    {
      setInvoicePreview: E
    } = (0, j.JL)(),
    O = s.paymentSourceId,
    _ = (0, g.$)(a, O),
    R = (0, u.e7)([k.Z], () => null != d ? k.Z.getPaymentSource(d) : null),
    C = (0, u.e7)([M.Z], () => M.Z.hidePersonalInformation);
  t = null != c ? (0, q.Zx)(c, y[0].quantity, y[0].planId) : y;
  let {
    analyticsLocations: w
  } = (0, v.ZP)(), [L] = (0, h.ED)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: O,
    currency: s.currency,
    analyticsLocations: w,
    analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_PRORATED
  }), [U] = (0, h.ED)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: true,
    paymentSourceId: O,
    currency: s.currency,
    analyticsLocations: w,
    analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != U && (l = {
    amount: U.subtotal,
    currency: U.currency,
    tax: U.tax,
    taxInclusive: false
  });
  let A = o.M.EEA_COUNTRIES.has(G.Z.ipCountryCodeWithFallback);
  return r.useEffect(() => {
    E(L)
  }, [E, L]), <div>{null != L && null != U ? <el premiumSubscription={c} premiumSubscriptionPlan={S} proratedInvoicePreview={L} renewalInvoicePreview={U} priceOptions={s} /> : null}{<div className={ee.paymentSourceWrapper}>{<p.vwX tag={p.RB0.H5}>{$.intl.string($.t.mmDvV1)}</p.vwX>}{null != d ? null != R ? <p.DY3 text={$.intl.string($.t.XiuuV1)}><x.ZP paymentSources={[R]} selectedPaymentSourceId={R.id} hidePersonalInformation={C} disabled={true} /></p.DY3> : <div><p.$jN /></div> : <x.ZP paymentSources={Object.values(a)} selectedPaymentSourceId={O} onChange={I} onPaymentSourceAdd={T} hidePersonalInformation={C} />}</div>}{<D.Z isActive={Z} ref={N}>{null != l && (0, i.jsx)(P.Z, {
        onChange: b,
        forceShow: true,
        finePrint: (0, i.jsx)(m.Z, {
          subscriptionPlan: S,
          paymentSourceType: _,
          proratedAmount: null != L ? L.total : true,
          basePrice: l,
          productLine: J.POd.BOOST
        }),
        showPricingLink: (null != (n = null == L ? true : L.currency) ? n : Q.pK.USD) !== Q.pK.USD,
        showWithdrawalWaiver: A,
        subscriptionPlan: S
      })}</D.Z>}</div>
}

function es(e) {
  let n, {
      onClose: t,
      guild: l,
      guildBoostQuantity: a,
      isTransfer: s = false,
      withAnimation: c = true,
      paymentSourceType: o,
      didPurchaseOnFractionalPremium: u = false
    } = e,
    {
      theme: d
    } = (0, p.TCT)(),
    [m, S] = r.useState(O.fe.Scenes.ENTRY),
    [x, P] = r.useState(false);
  return n = s ? null == l ? $.intl.format($.t.P52e1t, {}) : $.intl.format($.t["4UnIk5"], {
    guildName: l.name
  }) : u ? $.intl.format($.t.gFaKd3, {
    helpCenterLink: V.Z.getArticleURL(J.BhN.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == l ? $.intl.format($.t.SZ5ohY, {
    guildSubscriptionQuantity: a
  }) : $.intl.format($.t.GxK3Mj, {
    guildName: l.name,
    guildSubscriptionQuantity: a
  }), <div className={ee.confirmationContainer}>{c ? <O.fe className={ee.confirmationAnimation} nextScene={m} onScenePlay={e => {
        if (!x) switch (e) {
          case O.fe.Scenes.ENTRY:
            return S(O.fe.Scenes.IDLE);
          case O.fe.Scenes.IDLE:
            return S(O.fe.Scenes.SUCCESS);
          case O.fe.Scenes.SUCCESS:
            return P(true), S(O.fe.Scenes.IDLE)
        }
      }} pauseWhileUnfocused={false} /> : null}{<R.ZP className={ee.confirmationUpgradedBanner} theme={d} premiumType={z.p9.TIER_2} type={Q.X7.has(null != o ? o : Q.He.UNKNOWN) ? R.ZP.Types.PREMIUM_PAYMENT_STARTED : R.ZP.Types.GUILD_BOOST_APPLIED} />}{<div className={ee.confirmationText}>{n}</div>}{<p.zxk variant={"primary"} text={$.intl.string($.t["/iTxg4"])} onClick={t} />}</div>
}