/** Chunk was on web.js **/
/** chunk id: 401786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => k
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk374649 = require("./374649.js"),
  Chunk431369 = require("./431369.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk314884 = require("./314884.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk518062 = require("./518062.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk190271 = require("./190271.js");

function D(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: i,
    onNext: a,
    onClose: o,
    transitionState: l
  } = e, c = R.intl.format(R.t.otHdfR, {
    endDate: t.currentPeriodEnd
  });
  t.isPurchasedExternally && null != t.paymentGateway ? c = R.intl.format(R.t.HbpFLg, {
    paymentGatewayName: P.Vz[t.paymentGateway],
    subscriptionManagementLink: (0, T.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? c = R.intl.format(R.t.Hzqe6y, {
    expirationDate: n.endsAt.toDate()
  }) : i && (c = R.intl.format(R.t.gXSnul, {
    endDate: t.currentPeriodEnd
  }));
  let u = i ? R.intl.string(R.t.iIoSd6) : R.intl.string(R.t.Skzv0u),
    d = t.isPurchasedExternally ? [] : [{
      variant: "secondary",
      text: R.intl.string(R.t["ETE/oC"]),
      onClick: o
    }, {
      variant: "primary",
      text: R.intl.string(R.t.PDTjLN),
      onClick: a
    }];
  return (0, r.jsx)(s.Modal, {
    transitionState: l,
    onClose: o,
    size: "sm",
    title: u,
    actions: d,
    children: (0, r.jsxs)("div", {
      className: w.body,
      children: [(0, r.jsx)("div", {
        className: w.cancelImage
      }), (0, r.jsx)("div", {
        children: c
      })]
    })
  })
}

function x() {
  let e = Object.values(O.Z.boostSlots),
    t = o().sortBy(e.filter(e => !(0, I.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
  return null != t ? t.id : null
}
async function L(e, t, n, r) {
  let i = null != r ? r : x();
  if (null == i) throw Error("No slot to cancel");
  let a = (0, T.MY)(e, t);
  await (0, d.pD)(i), await (0, u.Mg)(e, {
    items: a
  }, {
    amount: 0,
    currency: e.currency
  }, (0, T.UX)(a, e.currency, e.paymentSourceId), n)
}

function j(e) {
  var t, n, a;
  let {
    premiumSubscription: o,
    guildBoostSlotId: s,
    fractionalPremiumInfo: u,
    onBack: d,
    onNext: _,
    onClose: O
  } = e, [S, I] = i.useState(false), [P, D] = i.useState(null), [x, j] = i.useMemo(() => {
    try {
      return [(0, g.g)(o, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [o]), M = i.useRef(O);
  i.useEffect(() => {
    M.current = O
  }), i.useEffect(() => {
    j && M.current()
  }, [j]);
  let {
    premiumSubscriptionPlan: k,
    premiumGuildPlan: U
  } = (0, l.cj)([v.Z], () => {
    let e = v.Z.get(o.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? v.Z.getForSkuAndInterval((0, T.Wz)(N.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: G
  } = (0, p.ZP)(), [Z] = (0, h.ED)({
    subscriptionId: o.id,
    renewal: true,
    currency: o.currency,
    paymentSourceId: o.paymentSourceId,
    analyticsLocations: G,
    analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), F = null != U ? (0, T.Zx)(o, null != (a = null == (t = x[0]) ? true : t.quantity) ? a : 0, U.id) : null, [B] = (0, h.ED)({
    subscriptionId: o.id,
    items: F,
    renewal: true,
    analyticsLocations: G,
    analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == B || null == k || null == U || null == Z) return (0, r.jsx)(c.$jN, {});
  let V = o.items.some(e => {
      let {
        planId: t
      } = e;
      return !N.Z1.has(t)
    }) && null == o.renewalMutations || (null == (n = o.renewalMutations) ? true : n.items.find(e => {
      let {
        planId: t
      } = e;
      return !N.Z1.has(t)
    })) != null,
    H = x.some(e => {
      let {
        planId: t
      } = e;
      return N.Z1.has(t)
    }),
    Y = V || H ? B.total - Z.total : -Z.total,
    {
      interval: W,
      intervalCount: K
    } = k,
    z = R.intl.format(R.t["0W23cu"], {
      endDate: B.subscriptionPeriodStart
    });
  return o.isPausedForFractionalPremium && u.fetched && (z = R.intl.format(R.t.eb0xgS, {
    expirationDate: u.endsAt.toDate()
  })), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.Z, {
      "data-migration-pending": true,
      onClose: O
    }), (0, r.jsxs)(c.hzk, {
      "data-migration-pending": true,
      className: w.body,
      children: [null !== P && (0, r.jsx)("div", {
        className: w.error,
        children: (0, r.jsx)(c.M14, {
          type: "critical",
          children: P
        })
      }), (0, r.jsx)("div", {
        children: z
      }), (0, r.jsxs)(E.aO, {
        className: w.invoiceTable,
        children: [(0, r.jsx)(E.Z9, {
          children: R.intl.string(R.t.iqhIp4)
        }), (0, r.jsx)(E.B1, {
          label: R.intl.format(R.t["Vg+LRr"], {
            subscriptionCount: 1
          }),
          value: (0, C.og)((0, C.T4)(Y, o.currency), W, K),
          className: w.invoiceCancelRow
        }), null != F && F.length > 0 ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(E.UN, {}), (0, r.jsx)(y.nd, {
            premiumSubscription: o,
            renewalInvoice: B,
            isUpdate: true
          })]
        }) : null]
      })]
    }), (0, r.jsxs)(c.mzw, {
      "data-migration-pending": true,
      align: m.Z.Align.CENTER,
      justify: m.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(c.Button, {
        variant: "critical-primary",
        text: R.intl.string(R.t["/AS/gM"]),
        disabled: S,
        onClick: async () => {
          try {
            I(true), D(null), await L(o, x, G, s), _()
          } catch (e) {
            D(R.intl.string(R.t["5mlOCW"])), I(false)
          }
        }
      }), (0, r.jsx)(b.Z, {
        onClick: d
      })]
    })]
  })
}

function M(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    onClose: i,
    transitionState: a
  } = e, o = t.currentPeriodEnd;
  t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
  let l = [{
    variant: "primary",
    text: R.intl.string(R.t.BddRzS),
    onClick: i
  }];
  return (0, r.jsx)(s.Modal, {
    transitionState: a,
    onClose: i,
    size: "sm",
    title: R.intl.string(R.t["fZzV/B"]),
    actions: l,
    children: (0, r.jsxs)("div", {
      className: w.body,
      children: [(0, r.jsx)("div", {
        className: w.cancelImage
      }), (0, r.jsx)("div", {
        children: R.intl.format(R.t["H+z0ns"], {
          endDate: o
        })
      })]
    })
  })
}

function k(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: a,
    onClose: o
  } = e;
  i.useEffect(() => {
    S.Z.hasFetchedSubscriptions() || (0, u.jg)()
  }, []);
  let s = (0, l.e7)([S.Z], () => S.Z.getPremiumTypeSubscription()),
    d = (0, _.Z)(),
    [m, h] = i.useState(1),
    {
      analyticsLocations: g
    } = (0, p.ZP)(f.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == s) t = (0, r.jsx)(c.hzk, {
    "data-migration-pending": true,
    children: (0, r.jsx)(c.$jN, {})
  });
  else switch (m) {
    case 1:
      t = (0, r.jsx)(D, {
        premiumSubscription: s,
        fractionalPremiumInfo: d,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => h(2),
        onClose: o,
        transitionState: a
      });
      break;
    case 2:
      t = (0, r.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: a,
        parentComponent: "GuildBoostSlotCancellationModal",
        children: (0, r.jsx)(j, {
          premiumSubscription: s,
          guildBoostSlotId: n.id,
          fractionalPremiumInfo: d,
          onBack: () => h(1),
          onNext: () => h(3),
          onClose: o
        })
      });
      break;
    case 3:
      t = (0, r.jsx)(M, {
        premiumSubscription: s,
        fractionalPremiumInfo: d,
        onClose: o,
        transitionState: a
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(m))
  }
  return (0, r.jsx)(p.Gt, {
    value: g,
    children: t
  })
}