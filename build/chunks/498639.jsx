/** Chunk was on 75708 **/
/** chunk id: 498639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk72924 = require("./72924.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk228624 = require("./228624.js"),
  Chunk883904 = require("./883904.js"),
  Chunk678558 = require("./678558.js"),
  Chunk730647 = require("./730647.js"),
  Chunk584825 = require("./584825.js"),
  Chunk305342 = require("./305342.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk963249 = require("./963249.js"),
  Chunk87484 = require("./87484.jsx"),
  Chunk736519 = require("./736519.js"),
  Chunk365943 = require("./365943.js"),
  Chunk43747 = require("./43747.js"),
  Chunk970815 = require("./970815.js"),
  Chunk430824 = require("./430824.js"),
  Chunk78839 = require("./78839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk951386 = require("./951386.js");

function D(e) {
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

function Z(e, t) {
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

function w(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, _.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? <div className={R.formItem}>{n.subscription_listings_ids.map(e => (0, i.jsx)(j.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))}</div> : null
}
let k = function() {
  let [e, t] = Chunk73800.useState(Chunk474936.Si.TIER_2), [n, _] = Chunk73800.useState(null), j = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [k] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]);
  Chunk73800.useEffect(() => {
    (0, Chunk365943.t)()
  }, []);
  let L = Chunk305342.map(e => ({
      value: e,
      label: e.name
    })),
    [M, B] = Chunk73800.useState(L.length > 0 ? L[0].value : null),
    [U, V] = Chunk73800.useState(""),
    [G, F] = Chunk73800.useState({
      plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    H = "true" !== G.gift && null != k,
    [z, W] = Chunk73800.useState(L.length > 0 ? L[0].value : null),
    {
      analyticsLocations: Y
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE),
    [K, q] = Chunk73800.useState(""),
    [X, J] = Chunk73800.useState(Chunk981631.lds),
    {
      balance: Q,
      isFetching: $,
      error: ee
    } = (0, Chunk43747.A)(),
    {
      isSubmitting: et,
      responseMessage: en,
      redeemVirtualCurrency: ei
    } = (0, Chunk43747.f)(),
    [er, es] = Chunk73800.useState(Chunk981631.lds),
    [ea, el] = Chunk73800.useState(""),
    [eo, ec] = Chunk73800.useState(Chunk981631.lds),
    [ed, eu] = Chunk73800.useState(Chunk981631.lds),
    em = (0, Chunk228624.hv)("PaymentFlowModalTestPage");
  return <Chunk906732.Gt value={Y}><Chunk481060.hjN title={"Payment Flow Modals"} tag={Chunk481060.RB0.H1}>{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Gift"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.q4e value={module} options={[{
              value: Chunk474936.Si.TIER_2,
              label: "Nitro"
            }, {
              value: Chunk474936.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              value: Chunk474936.Si.TIER_0,
              label: "Nitro Basic"
            }, {
              value: null,
              label: "None"
            }]} onChange={e => t(e)} />}{<Chunk736519.Z subscriptionTier={module} premiumModalAnalyticsLocation={{}} color={Chunk755721.Tt.PRIMARY} look={Chunk755721.iL.FILLED} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Premium Select Plan"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.q4e value={require} options={[{
              value: Chunk474936.Si.TIER_2,
              label: "Nitro"
            }, {
              value: Chunk474936.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              value: Chunk474936.Si.TIER_0,
              label: "Nitro Basic"
            }, {
              value: null,
              label: "None"
            }]} onChange={e => _(e)} />}{<Chunk481060.zxk variant={"primary"} text={"Select Plan"} onClick={() => (0, Chunk963249.Z)({
              subscriptionTier: require,
              analyticsLocations: Y
            })} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Boost"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.q4e value={M} options={L} onChange={e => B(e)} />}{null != M ? <Chunk678558.Z guild={M} analyticsLocation={{}} /> : <div>{"No Guild to boost"}</div>}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{<div>{"Standalone: Trial Promotion Redemption"}</div>}{<Chunk481060.eee href={"https://i.dis.gd/createPromo"}>{"How to create promotion"}</Chunk481060.eee>}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.oil placeholder={"Promotion Code"} value={U} onChange={e => V(e)} />}{<Chunk481060.ua7 text={"Need Promotion Code"} shouldShow={U.length < 1}>{e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, i.jsx)(c.zxk, {
                variant: "primary",
                text: "Open Link",
                disabled: U.length < 1,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: () => {
                  window.open(A.Z5c.BILLING_PROMOTION_REDEMPTION(U))
                }
              })
            }}</Chunk481060.ua7>}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Standalone: Gift/Subscription Purchase"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.q4e value={G.plan_id} options={[{
              value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
              label: "Nitro"
            }, {
              value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1,
              label: "Nitro Classic"
            }, {
              value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0,
              label: "Nitro Basic"
            }]} onChange={e => F(t => Z(D({}, t), {
              plan_id: e
            }))} />}{<Chunk481060.q4e value={G.gift} options={[{
              value: "true",
              label: "Gift"
            }, {
              value: "false",
              label: "Not Gift"
            }]} onChange={e => F(t => Z(D({}, t), {
              gift: e
            }))} />}{<Chunk481060.ua7 text={"Already subscribed"} shouldShow={H}>{e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, i.jsx)(c.zxk, {
                variant: "primary",
                text: "Open Link",
                onMouseLeave: n,
                onMouseEnter: t,
                disabled: H,
                onClick: () => {
                  window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + s.stringify(D({}, G)))
                }
              })
            }}</Chunk481060.ua7>}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Redeem Virtual Currency for SKU"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.Text variant={"text-sm/normal"}>{"Virtual Currency Balance:"}</Chunk481060.Text>}{$ ? <div className={Chunk951386.loader}><Chunk481060.$jN type={Chunk481060.RAz.SPINNING_CIRCLE} /></div> : <div className={Chunk951386.balanceWidgetPillContainer}>{null !== ee && <Chunk481060.Text variant={"text-sm/normal"}>{"Error fetching Virtual Currency Balance: "}{ee.message}</Chunk481060.Text>}{<Chunk970815.A4 balance={null != Q ? Q : 0} balanceWidgetMode={Chunk970815.b6.SELECTED} />}</div>}</Chunk481060.xJW>}{<Chunk481060.xJW className={Chunk951386.formItem}><Chunk481060.oil placeholder={"SKU ID"} value={er} onChange={e => es(e)} /></Chunk481060.xJW>}{<Chunk481060.xJW className={Chunk951386.formItem}><Chunk481060.zxk variant={"primary"} text={"Redeem Virtual Currency for SKU"} loading={et} onClick={() => ei(er, (0, Chunk772848.Z)())} /></Chunk481060.xJW>}{<Chunk481060.xJW className={Chunk951386.formItem}><Chunk481060.Text variant={"text-sm/normal"}>{en}</Chunk481060.Text></Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Creator Revenue"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.Text className={Chunk951386.guildServerDescription} variant={"text-sm/normal"}>{"Premium Server Subscription For"}</Chunk481060.Text>}{<Chunk481060.q4e value={z} options={L} onChange={e => W(e)} />}</Chunk481060.xJW>}{<Chunk730647.l guildId={null == z ? true : z.id}><w selectedGuildForGuildSub={z} /></Chunk730647.l>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Activities & Application Payment Modals"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.oil placeholder={"Application Id"} value={K} onChange={q} />}{<Chunk481060.oil placeholder={"Sku Id"} value={X} onChange={e => J(e)} />}{<Chunk481060.zxk variant={"primary"} text={"Open App Subs Modal for Activity"} onClick={() => (0, Chunk72924.S)({
              applicationId: K,
              skuId: X,
              openPremiumPaymentModal: () => true,
              analyticsLocations: [],
              analyticsLocationObject: {
                page: Chunk981631.ZY5.IN_APP
              },
              context: Chunk981631.IlC.APP
            })} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Standard Payment Modal Test"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.oil placeholder={"Application Id"} value={ea} onChange={el} />}{<Chunk481060.oil placeholder={"SKU ID"} value={eo} onChange={e => ec(e)} />}{<Chunk481060.zxk variant={"primary"} text={"Open Standard Payment Modal for SKU"} onClick={() => (0, Chunk87484.Z)({
              applicationId: ea,
              skuId: eo,
              analyticsLocations: Y
            })} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Collectibles Payment Modal Test"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.oil placeholder={"SKU ID"} value={ed} onChange={e => eu(e)} />}{<Chunk481060.zxk variant={"primary"} text={"Open Collectibles Payment Modal for SKU"} onClick={() => (0, Chunk333867.Z)({
              skuId: ed,
              analyticsLocations: Y,
              variantsReturnStyle: em
            })} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Helpers"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}>{<Chunk481060.zxk variant={"primary"} text={"Reset SubscriptionPlanStore"} onClick={() => (0, Chunk821849.mE)()} />}{<Chunk481060.zxk variant={"primary"} text={"Reset SubscriptionStore"} onClick={() => (0, Chunk355467.GM)()} />}</Chunk481060.xJW>}</div>}{<Chunk481060.$i$ className={Chunk951386.formDivider} />}{<div className={Chunk951386.formBlock}>{<Chunk481060.vwX>{"Dismissible Content Framework"}</Chunk481060.vwX>}{<Chunk481060.xJW className={Chunk951386.formItem}><Chunk481060.zxk variant={"primary"} text={"Reset DismissibleContentFrameworkStore"} onClick={() => (0, Chunk883904.EG)()} /></Chunk481060.xJW>}</div>}</Chunk481060.hjN></Chunk906732.Gt>
}