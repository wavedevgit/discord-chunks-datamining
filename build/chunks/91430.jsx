/** Chunk was on 75708 **/
/** chunk id: 91430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MM: () => H,
  Yn: () => Y,
  ZP: () => K,
  eS: () => W
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk17894 = require("./17894.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.js"),
  Chunk925329 = require("./925329.js"),
  Chunk963249 = require("./963249.js"),
  Chunk301766 = require("./301766.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk374649 = require("./374649.js"),
  Chunk160913 = require("./160913.js"),
  Chunk987997 = require("./987997.js"),
  Chunk393411 = require("./393411.js"),
  Chunk908951 = require("./908951.js"),
  Chunk592889 = require("./592889.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk388032 = require("./388032.js"),
  Chunk772526 = require("./772526.js");

function B(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: r,
      fractionalPremiumInfo: s,
      fromStandaloneBillingPage: l = true,
      className: c
    } = e,
    d = (0, u.e7)([v.default], () => {
      let e = v.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, I.uV)(n.additionalPlans)) return null;
  let {
    status: m
  } = n, f = (0, I.v6)(n);
  if (f) t = M.guildBoostingSubscriptionRowCanceled;
  else switch (m) {
    case w.O0b.PAST_DUE:
    case w.O0b.ACCOUNT_HOLD:
    case w.O0b.BILLING_RETRY:
      t = M.guildBoostingSubscriptionRowFailedPayment;
      break;
    case w.O0b.PAUSE_PENDING:
    case w.O0b.PAUSED:
      t = n.pauseReason !== k.Id.FRACTIONAL_PREMIUM ? M.guildBoostingSubscriptionRowPaused : M.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = M.guildBoostingSubscriptionRowActive
  }
  return <i.Fragment>{<div className={a()(t, c)}>{<div className={M.guildBoostingSubscriptionRowBackground} />}{<div className={M.guildBoostingImage} />}{<div className={M.guildBoostingSubscriptionRowBody}>{<div className={a()(M.guildBoostingWordmark, {
            [M.canceled]: f
          })} />}{<div>{(0, I.bt)({
            subscription: n,
            renewalInvoicePreview: r,
            user: d,
            fractionalPremiumInfo: s
          })}</div>}</div>}{l && <P.Z color={p.zx.Colors.BRAND} onClick={() => h.Z.open(w.oAB.GUILD_BOOSTING)}>{L.intl.string(L.t["NQ5g/f"])}</P.Z>}</div>}{!l && <g.Text className={M.boostingDesktopAppBlurb} variant={"text-sm/normal"}>{L.intl.format(L.t.k6haR0, {
        openAppHook: () => (0, x.Z)("app")
      })}</g.Text>}</i.Fragment>
}

function U() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), <div className={Chunk772526.paymentBanner}>{<Chunk481060.Mgn size={"custom"} width={20} height={20} className={Chunk772526.paymentBannerIcon} color={Chunk692547.Z.unsafe_rawColors.YELLOW_260.css} />}{<Chunk481060.Text className={Chunk772526.paymentBannerText} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.xFHEMT)}</Chunk481060.Text>}</div>
}

function V() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), <div className={Chunk772526.paymentBanner}>{<Chunk481060.Mgn size={"custom"} width={20} height={20} className={Chunk772526.paymentBannerIcon} color={Chunk692547.Z.unsafe_rawColors.RED_360.css} />}{<Chunk481060.Text className={Chunk772526.paymentBannerText} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["j+nuQU"])}</Chunk481060.Text>}</div>
}

function G(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: s
  } = e, {
    analyticsLocations: a
  } = (0, b.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return r.useEffect(() => {
    S.default.track(w.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), <div className={M.paymentBanner}>{<g.Mgn size={"custom"} width={20} height={20} className={M.paymentBannerIcon} color={m.Z.unsafe_rawColors.YELLOW_260.css} />}{<g.Text className={M.paymentBannerText} variant={"text-sm/normal"}>{L.intl.format(L.t["0nbf/P"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, C.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: s,
            analyticsLocations: a
          })
        }
      })}</g.Text>}</div>
}

function F(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: r,
    className: s,
    fractionalPremiumInfo: l
  } = e;
  return <div className={a()(M.billingInformation, s)}>{<g.vwX tag={"h3"} className={M.detailBlockHeader}>{L.intl.string(L.t.KXQjfX)}</g.vwX>}{<div>{I.ZP.getBillingInformationString(t, n, r, false, l)}</div>}</div>
}

function H() {
  return <div>{<Chunk481060.vwX className={Chunk772526.sectionTitle} tag={"h1"}>{Chunk388032.intl.string(Chunk388032.t["/gs+Pz"])}</Chunk481060.vwX>}{<p className={Chunk772526.sectionDescription}>{Chunk388032.intl.string(Chunk388032.t.D8UpUl)}</p>}{<Chunk481060.Zbd className={Chunk772526.noItemsCard} type={Chunk481060.Zbd.Types.CUSTOM}><Chunk600164.Z align={Chunk600164.Z.Align.CENTER}>{<Chunk925329.Z game={null} size={Chunk925329.Z.Sizes.SMALL} className={Chunk772526.noItemsIcon} />}{<span className={Chunk772526.cardText}>{Chunk388032.intl.string(Chunk388032.t.xCRgr6)}</span>}</Chunk600164.Z></Chunk481060.Zbd>}</div>
}

function z(e) {
  let {
    subscription: t,
    analyticsLocation: n,
    paymentSource: r,
    busy: s,
    fromStandaloneBillingPage: l,
    showInvalidPaymentMethod: o,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: u,
    fetchedOpenInvoice: m
  } = e, {
    analyticsLocations: p
  } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS), h = null != d ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: p,
    analyticsLocation: n
  }, [x] = (0, y.ED)(h);
  x = null != d ? d : x;
  let j = null != u ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: p,
      analyticsLocation: n
    },
    [E] = (0, y.ED)(j);
  E = null != u ? u : E;
  let C = (0, _.Z)();
  return null == x || null == E ? <g.$jN /> : <i.Fragment>{<div className={M.subscriptionRows}>{<R.Z subscription={t} renewalInvoicePreview={x} paymentSource={r} busy={s} analyticsLocation={n} />}{<B subscription={t} renewalInvoicePreview={x} fromStandaloneBillingPage={l} className={M.guildSubscriptionRow} fractionalPremiumInfo={C} />}</div>}{<div><g.y5t component={(0, i.jsx)(g.vwX, {
          tag: "h5",
          children: L.intl.string(L.t.Sb6wIy)
        })}><div className={M.details}>{<F subscription={t} renewalInvoicePreview={E} className={M.detailsBlock} fractionalPremiumInfo={C} openInvoice={m} />}{<div className={a()(M.detailsBlock, {
              [M.redBorder]: o
            })}>{<g.vwX tag={"h3"} className={M.detailBlockHeader}>{t.isPurchasedExternally && null != t.paymentGateway ? L.intl.formatToPlainString(L.t.rTk9v7, {
                paymentGatewayName: w.Vzj[t.paymentGateway]
              }) : L.intl.string(L.t.iRzXKS)}</g.vwX>}{<D.Z subscription={t} onPaymentSourceAdded={N.i1} highlightAddPaymentMethodButton={c || o} analyticsLocation={n} currentInvoicePreview={x} dropdownClassName={M.paymentDropdown} />}</div>}</div></g.y5t></div>}</i.Fragment>
}
let W = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function Y() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), <div className={Chunk772526.duplicateSubscriptionsBanner}>{<Chunk481060.Mgn size={"custom"} width={20} height={20} color={Chunk692547.Z.unsafe_rawColors.RED_360.css} />}{<Chunk481060.Text className={Chunk772526.duplicateSubscriptionsBannerText} variant={"text-sm/normal"}>{Chunk388032.intl.format(Chunk388032.t["6eXiiI"], {
        helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NITRO)
      })}</Chunk481060.Text>}</div>
}

function K(e) {
  var t;
  let n, {
    subscription: r,
    subscriptions: s,
    paymentSource: a,
    busy: l,
    fromStandaloneBillingPage: o = true,
    analyticsLocation: c
  } = e;
  null != s && null != s[0] && (r = s[0]);
  let {
    analyticsLocations: m
  } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS), p = null != s ? s.slice(1) : [], [h] = (0, y.ED)({
    subscriptionId: r.id,
    renewal: true,
    analyticsLocations: m,
    analyticsLocation: c
  }), [x] = (0, y.ED)({
    subscriptionId: r.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: m,
    analyticsLocation: c
  }), _ = null == a ? true : a.invalid, j = (0, u.e7)([v.default], () => {
    var e;
    return null == (e = v.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), E = d()(r.currentPeriodEnd), C = null != r.paymentSourceId, S = null != (t = null == x ? true : x.total) ? t : 0, T = !C && S > 0 && (7 >= E.diff(d()(), "days") || r.status === w.O0b.PAST_DUE) && !j && !r.isPurchasedExternally, I = _ && r.status === w.O0b.PAST_DUE && !j && !r.isPurchasedExternally, N = (0, A.U)(), P = !j && N, R = (null == r ? true : r.status) === w.O0b.PAST_DUE, D = R ? d()().diff(d()(r.currentPeriodStart), "days") : 0, [k] = (0, y.Ox)({
    subscriptionId: r.id,
    preventFetch: !(P || R)
  });
  return null == h || null == x ? <g.$jN /> : (null != r.renewalMutations && (r.renewalMutations.planId !== r.planId && !(0, O.Q0)(r.renewalMutations.planId) || r.hasExternalPlanChange) && (n = <Z.Z subscription={r} renewalMutations={r.renewalMutations} className={M.renewalMutationNotice} analyticsLocation={c} />), <div><g.y5t component={(0, i.jsx)(g.vwX, {
        className: M.sectionTitle,
        tag: "h1",
        children: L.intl.string(L.t["/gs+Pz"])
      })}>{T ? <U /> : null}{I ? <V /> : null}{P && null != k ? <G daysPastDue={D} subscription={r} openInvoiceId={k.id} /> : null}{n}{<div><p className={M.sectionDescription}>{L.intl.string(L.t.D8UpUl)}</p></div>}{<div>{<div className={p.length > 0 ? M.dupSubscriptionRow : M.__invalid_singleSubscription}><z subscription={r} analyticsLocation={c} paymentSource={a} busy={l} fromStandaloneBillingPage={o} showNoPaymentMethod={T} showInvalidPaymentMethod={I} fetchedCurrentInvoicePreview={h} fetchedRenewalInvoicePreview={x} fetchedOpenInvoice={k} /></div>}{p.map((e, t) => <div className={M.dupSubscriptionRow}>{<g.vwX tag={"h2"} className={M.duplicateHeader}>{"Duplicate Subscriptions"}</g.vwX>}{<z subscription={e} analyticsLocation={c} paymentSource={a} busy={l} fromStandaloneBillingPage={o} showNoPaymentMethod={T} showInvalidPaymentMethod={I} fetchedCurrentInvoicePreview={null} fetchedRenewalInvoicePreview={null} fetchedOpenInvoice={null} />}</div>)}</div>}</g.y5t></div>)
}