/** Chunk was on 93886 **/
/** chunk id: 604776, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  D: () => j,
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk314794 = require("./314794.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk246992 = require("./246992.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk123393 = require("./123393.js"),
  Chunk546147 = require("./546147.js"),
  Chunk616257 = require("./616257.js");
let v = {
    [Chunk981631.kNB.QUEST_REWARD]: "Quest Reward",
    [Chunk981631.kNB.DEVELOPER_GIFT]: "Developer Gift",
    [Chunk981631.kNB.INVOICE]: "Invoice",
    [Chunk981631.kNB.REVERSE_TRIAL]: "Reverse Trial",
    [Chunk981631.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback"
  },
  j = e => {
    var t;
    let {
      entitlement: a,
      active: r,
      onDelete: l
    } = e, s = e => null != e ? (0, u.vc)(e, "LLL") : "---";
    return <div className={i()(p.card, r ? b.gradientWrapperTier2 : "")}>{<c.Text variant={"text-md/normal"}>{"ID: "}{a.id}{" "}</c.Text>}{!r && <c.Text variant={"text-md/normal"}>{"SKU: "}{null == (t = g.find(e => e.value === a.skuId)) ? true : t.label}</c.Text>}{null != a.startsAt && null != a.endsAt && <n.Fragment>{<c.Text variant={"text-md/normal"}>{"Start: "}{s(a.startsAt)}{" "}</c.Text>}{<c.Text variant={"text-md/normal"}>{"End: "}{s(a.endsAt)}{" "}</c.Text>}</n.Fragment>}{<c.Text variant={"text-md/normal"}>{"Entitlement source type: "}{(() => {
          let e = a.sourceType;
          return null != e && e in v ? v[e] : "Unknown source type ".concat(e)
        })()}</c.Text>}{r && null != l && <o.zx className={p.deleteEntitlementButton} size={o.zx.Sizes.TINY} color={o.zx.Colors.RED} look={o.zx.Looks.OUTLINED} onClick={l}>{"Delete"}</o.zx>}</div>
  },
  g = [{
    label: "1 hour",
    value: Chunk314794.a.PREMIUM_TIER_2_1_HOUR
  }, {
    label: "1 day",
    value: Chunk314794.a.PREMIUM_TIER_2_1_DAY
  }, {
    label: "3 days",
    value: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  }];

function _() {
  let [e, t] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(Chunk314794.a.PREMIUM_TIER_2_1_HOUR), [u, v] = Chunk73800.useState([]), [_, y] = Chunk73800.useState([]), {
    refreshEntitlementList: C,
    grantFractionalPremium: N,
    deleteFractionalPremium: O,
    triggerNextEntitlementFulfillment: T,
    entitlements: E,
    loading: S
  } = (0, Chunk232867.m)();
  Chunk73800.useEffect(() => {
    C()
  }, [C]);
  let P = e => e.filter(e => null != e.endsAt && e.endsAt > new Date && e.type === h.qc2.FRACTIONAL_REDEMPTION),
    w = e => e.filter(e => Object.values(s.a).includes(e.skuId) && null == e.startsAt);
  return Chunk73800.useEffect(() => {
    v(P(E)), y(w(E))
  }, [E]), <Chunk481060.zJl className={Chunk616257.panel}><div className={Chunk546147.panelInner}>{<div className={Chunk546147.headerWrapper}>{<Chunk481060.Text style={{
            marginBottom: "8px"
          }} variant={"text-lg/bold"}>{"Manage Fractional Nitro"}</Chunk481060.Text>}{<Chunk481060.P3F onClick={() => exports(!module)} className={Chunk123393.clickableGroup}>{<div><Chunk481060.Text variant={"text-md/normal"}>{"Info"}</Chunk481060.Text></div>}{<Chunk259580.Z direction={module ? Chunk259580.Z.Directions.UP : Chunk259580.Z.Directions.DOWN} />}</Chunk481060.P3F>}</div>}{module && <div style={{
          margin: "8px 0"
        }}>{<Chunk481060.Text variant={"text-md/normal"} style={{
            fontStyle: "italic"
          }} color={"text-muted"}>{"Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin."}</Chunk481060.Text>}{<br />}{<Chunk481060.Text variant={"text-md/normal"} style={{
            fontStyle: "italic"
          }} color={"text-muted"}>{"Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."}</Chunk481060.Text>}</div>}{<section style={{
          marginBottom: "8px"
        }} className={i()([Chunk123393.section, Chunk546147.buttons])}>{<Chunk481060.Text variant={"text-md/normal"}>{" Fractional Premium SKU "}</Chunk481060.Text>}{<Chunk481060.PhF serialize={e => e} isSelected={e => e === a} options={g} select={Chunk120356} popoutLayerContext={Chunk246992.O$} />}{<Chunk481060.zxk variant={"primary"} text={"Grant Fractional Nitro"} onClick={() => N(require)} />}</section>}{<section className={Chunk123393.section}>{<div style={{
            flexWrap: "wrap"
          }} className={Chunk546147.headerWrapper}>{<Chunk481060.Text style={{
              marginBottom: "8px"
            }} variant={"text-lg/semibold"}>{"Entitlements"}</Chunk481060.Text>}{<div className={Chunk123393.buttonGroup}>{<Chunk755721.zx disabled={S} size={Chunk755721.zx.Sizes.TINY} color={Chunk755721.zx.Colors.PRIMARY} look={Chunk755721.zx.Looks.OUTLINED} onClick={() => T()}>{"Run fulfillment"}</Chunk755721.zx>}{<Chunk755721.zx disabled={S} size={Chunk755721.zx.Sizes.TINY} color={Chunk755721.zx.Colors.RED} look={Chunk755721.zx.Looks.OUTLINED} onClick={() => O()}>{"Delete all"}</Chunk755721.zx>}{<Chunk755721.zx disabled={S} look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.ICON} onClick={C}><span title={"Refresh"}><Chunk481060.DuK size={"xs"} color={"currentColor"} /></span></Chunk755721.zx>}</div>}</div>}{Chunk55935.length > 0 && <div>{<Chunk481060.Text style={{
              marginTop: "15px"
            }} variant={"text-md/bold"}>{"Active premium"}</Chunk481060.Text>}{<div>{Chunk55935.map(e => (0, n.jsx)(j, {
              entitlement: e,
              active: true,
              onDelete: () => O(e.id)
            }, e.id))}</div>}</div>}{_.length > 0 && <div>{<Chunk481060.Text style={{
              marginTop: "15px"
            }} variant={"text-md/bold"}>{"Unconsumed Fractional Premium"}</Chunk481060.Text>}{<div>{_.map(e => (0, n.jsx)(j, {
              entitlement: e
            }, e.id))}</div>}</div>}</section>}</div></Chunk481060.zJl>
}