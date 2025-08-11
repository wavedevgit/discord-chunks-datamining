/** Chunk was on 75708 **/
/** chunk id: 401786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.js"),
  Chunk374649 = require("./374649.js"),
  Chunk431369 = require("./431369.js"),
  Chunk811334 = require("./811334.js"),
  Chunk311821 = require("./311821.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk314884 = require("./314884.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk518062 = require("./518062.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk363405 = require("./363405.js");

function P(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: r,
    onNext: s,
    onClose: a
  } = e, l = y.intl.format(y.t.otHdfX, {
    endDate: t.currentPeriodEnd
  });
  return t.isPurchasedExternally && null != t.paymentGateway ? l = y.intl.format(y.t.HbpFLi, {
    paymentGatewayName: N.Vz[t.paymentGateway],
    subscriptionManagementLink: (0, v.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? l = y.intl.format(y.t["Hzqe6+"], {
    expirationDate: n.endsAt.toDate()
  }) : r && (l = y.intl.format(y.t.gXSnur, {
    endDate: t.currentPeriodEnd
  })), <i.Fragment>{<o.xBx separator={false}>{<o.vwX tag={o.RB0.H4}>{r ? y.intl.string(y.t.iIoSd3) : y.intl.string(y.t.Skzv0t)}</o.vwX>}{<o.olH onClick={a} />}</o.xBx>}{<o.hzk className={A.body}>{<div className={A.cancelImage} />}{<div>{l}</div>}</o.hzk>}{t.isPurchasedExternally ? null : <o.mzw justify={g.Z.Justify.START} align={g.Z.Align.CENTER}>{<o.zxk variant={"primary"} text={y.intl.string(y.t.PDTjLC)} onClick={s} />}{<div className={A.textButton}><o.Avr variant={"primary"} text={y.intl.string(y.t["ETE/oK"])} onClick={a} /></div>}</o.mzw>}</i.Fragment>
}
async function R(e, t, n, i) {
  let r = null != i ? i : function() {
    let e = Object.values(j.Z.boostSlots),
      t = a().sortBy(e.filter(e => !(0, O.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != t ? t.id : null
  }();
  if (null == r) throw Error("No slot to cancel");
  let s = (0, v.MY)(e, t);
  await (0, d.pD)(r), await (0, c.Mg)(e, {
    items: s
  }, {
    amount: 0,
    currency: e.currency
  }, (0, v.UX)(s, e.currency, e.paymentSourceId), n)
}

function D(e) {
  var t, n, s;
  let {
    premiumSubscription: a,
    guildBoostSlotId: c,
    fractionalPremiumInfo: d,
    onBack: p,
    onNext: j,
    onClose: C
  } = e, [O, N] = r.useState(false), [P, D] = r.useState(null), [Z, w] = r.useMemo(() => {
    try {
      return [(0, f.g)(a, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [a]), k = r.useRef(C);
  r.useEffect(() => {
    k.current = C
  }), r.useEffect(() => {
    w && k.current()
  }, [w]);
  let {
    premiumSubscriptionPlan: L,
    premiumGuildPlan: M
  } = (0, l.cj)([E.Z], () => {
    let e = E.Z.get(a.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? E.Z.getForSkuAndInterval((0, v.Wz)(I.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: B
  } = (0, m.ZP)(), [U] = (0, h.ED)({
    subscriptionId: a.id,
    renewal: true,
    currency: a.currency,
    paymentSourceId: a.paymentSourceId,
    analyticsLocations: B,
    analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), V = null != M ? (0, v.Zx)(a, null != (s = null == (t = Z[0]) ? true : t.quantity) ? s : 0, M.id) : null, [G] = (0, h.ED)({
    subscriptionId: a.id,
    items: V,
    renewal: true,
    analyticsLocations: B,
    analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == G || null == L || null == M || null == U) return <o.$jN />;
  let F = a.items.some(e => {
      let {
        planId: t
      } = e;
      return !I.Z1.has(t)
    }) && null == a.renewalMutations || (null == (n = a.renewalMutations) ? true : n.items.find(e => {
      let {
        planId: t
      } = e;
      return !I.Z1.has(t)
    })) != null,
    H = Z.some(e => {
      let {
        planId: t
      } = e;
      return I.Z1.has(t)
    }),
    z = F || H ? G.total - U.total : -U.total,
    {
      interval: W,
      intervalCount: Y
    } = L,
    K = y.intl.format(y.t["0W23cn"], {
      endDate: G.subscriptionPeriodStart
    });
  return a.isPausedForFractionalPremium && d.fetched && (K = y.intl.format(y.t.eb0xgY, {
    expirationDate: d.endsAt.toDate()
  })), <i.Fragment>{<T.Z onClose={C} />}{<o.hzk className={A.body}>{null !== P && <o.kzN className={A.error}>{P}</o.kzN>}{<div>{K}</div>}{<b.aO className={A.invoiceTable}>{<b.Z9>{y.intl.string(y.t.iqhIp6)}</b.Z9>}{<b.B1 label={y.intl.format(y.t["Vg+LRk"], {
            subscriptionCount: 1
          })} value={(0, S.og)((0, S.T4)(z, a.currency), W, Y)} className={A.invoiceCancelRow} />}{null != V && V.length > 0 ? <div>{<b.UN />}{<_.nd premiumSubscription={a} renewalInvoice={G} isUpdate={true} />}</div> : null}</b.aO>}</o.hzk>}{<o.mzw align={g.Z.Align.CENTER} justify={g.Z.Justify.BETWEEN}>{<o.zxk variant={"critical-primary"} text={y.intl.string(y.t["/AS/gI"])} disabled={O} onClick={async () => {
          try {
            N(true), D(null), await R(a, Z, B, c), j()
          } catch (e) {
            D(y.intl.string(y.t["5mlOCQ"])), N(false)
          }
        }} />}{<x.Z onClick={p} />}</o.mzw>}</i.Fragment>
}

function Z(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    onClose: r
  } = e, s = t.currentPeriodEnd;
  return t.isPausedForFractionalPremium && (s = n.endsAt.toDate()), <i.Fragment>{<o.xBx separator={false}>{<o.vwX tag={o.RB0.H4}>{y.intl.string(y.t["fZzV/P"])}</o.vwX>}{<o.olH onClick={r} />}</o.xBx>}{<o.hzk className={A.body}>{<div className={A.cancelImage} />}{<div>{y.intl.format(y.t["H+z0np"], {
          endDate: s
        })}</div>}</o.hzk>}{<o.mzw><o.zxk variant={"primary"} text={y.intl.string(y.t.BddRzc)} onClick={r} /></o.mzw>}</i.Fragment>
}

function w(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: s,
    onClose: a
  } = e;
  r.useEffect(() => {
    C.Z.hasFetchedSubscriptions() || (0, c.jg)()
  }, []);
  let d = (0, l.e7)([C.Z], () => C.Z.getPremiumTypeSubscription()),
    g = (0, p.Z)(),
    [h, f] = r.useState(1),
    {
      analyticsLocations: b
    } = (0, m.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == d) t = <o.hzk><o.$jN /></o.hzk>;
  else switch (h) {
    case 1:
      t = <P premiumSubscription={d} fractionalPremiumInfo={g} isInventory={null == n.premiumGuildSubscription} onNext={() => f(2)} onClose={a} />;
      break;
    case 2:
      t = <D premiumSubscription={d} guildBoostSlotId={n.id} fractionalPremiumInfo={g} onBack={() => f(1)} onNext={() => f(3)} onClose={a} />;
      break;
    case 3:
      t = <Z premiumSubscription={d} fractionalPremiumInfo={g} onClose={a} />;
      break;
    default:
      throw Error("Unexpected step: ".concat(h))
  }
  return <m.Gt value={b}><o.Y0X transitionState={s} parentComponent={"GuildBoostSlotCancellationModal"}>{t}</o.Y0X></m.Gt>
}