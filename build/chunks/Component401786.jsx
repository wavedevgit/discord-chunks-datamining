/** Chunk was on web.js **/
/** chunk id: 401786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => M
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk569319 = require("./569319.js");

function D(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: i,
    onNext: o,
    onClose: a,
    transitionState: s
  } = e, c = P.intl.format(P.t.otHdfX, {
    endDate: t.currentPeriodEnd
  });
  t.isPurchasedExternally && null != t.paymentGateway ? c = P.intl.format(P.t.HbpFLi, {
    paymentGatewayName: R.Vz[t.paymentGateway],
    subscriptionManagementLink: (0, S.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? c = P.intl.format(P.t["Hzqe6+"], {
    expirationDate: n.endsAt.toDate()
  }) : i && (c = P.intl.format(P.t.gXSnur, {
    endDate: t.currentPeriodEnd
  }));
  let u = i ? P.intl.string(P.t.iIoSd3) : P.intl.string(P.t.Skzv0t),
    d = t.isPurchasedExternally ? [] : [{
      variant: "secondary",
      text: P.intl.string(P.t["ETE/oK"]),
      onClick: a
    }, {
      variant: "primary",
      text: P.intl.string(P.t.PDTjLC),
      onClick: o
    }];
  return (0, r.jsx)(l.Modal, {
    transitionState: s,
    onClose: a,
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
  let e = Object.values(Chunk314884.Z.boostSlots),
    t = a().sortBy(module.filter(e => !(0, T.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
  return null != exports ? exports.id : null
}
async function L(e, t, n, r) {
  let i = null != r ? r : x();
  if (null == i) throw Error("No slot to cancel");
  let o = (0, S.MY)(e, t);
  await (0, d.pD)(i), await (0, u.Mg)(e, {
    items: o
  }, {
    amount: 0,
    currency: e.currency
  }, (0, S.UX)(o, e.currency, e.paymentSourceId), n)
}

function j(e) {
  var t, n, o;
  let {
    premiumSubscription: a,
    guildBoostSlotId: l,
    fractionalPremiumInfo: u,
    onBack: d,
    onNext: p,
    onClose: O
  } = e, [I, T] = i.useState(false), [R, D] = i.useState(null), [x, j] = i.useMemo(() => {
    try {
      return [(0, g.g)(a, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [a]), k = i.useRef(O);
  i.useEffect(() => {
    k.current = O
  }), i.useEffect(() => {
    j && k.current()
  }, [j]);
  let {
    premiumSubscriptionPlan: M,
    premiumGuildPlan: U
  } = (0, s.cj)([v.Z], () => {
    let e = v.Z.get(a.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? v.Z.getForSkuAndInterval((0, S.Wz)(N.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: G
  } = (0, _.ZP)(), [B] = (0, m.ED)({
    subscriptionId: a.id,
    renewal: true,
    currency: a.currency,
    paymentSourceId: a.paymentSourceId,
    analyticsLocations: G,
    analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), Z = null != U ? (0, S.Zx)(a, null != (o = null == (t = x[0]) ? true : t.quantity) ? o : 0, U.id) : null, [F] = (0, m.ED)({
    subscriptionId: a.id,
    items: Z,
    renewal: true,
    analyticsLocations: G,
    analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == F || null == M || null == U || null == B) return (0, r.jsx)(c.$jN, {});
  let V = a.items.some(e => {
      let {
        planId: t
      } = e;
      return !N.Z1.has(t)
    }) && null == a.renewalMutations || (null == (n = a.renewalMutations) ? true : n.items.find(e => {
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
    Y = V || H ? F.total - B.total : -B.total,
    {
      interval: W,
      intervalCount: K
    } = M,
    z = P.intl.format(P.t["0W23cn"], {
      endDate: F.subscriptionPeriodStart
    });
  return a.isPausedForFractionalPremium && u.fetched && (z = P.intl.format(P.t.eb0xgY, {
    expirationDate: u.endsAt.toDate()
  })), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.Z, {
      "data-migration-pending": true,
      onClose: O
    }), (0, r.jsxs)(c.hzk, {
      "data-migration-pending": true,
      className: w.body,
      children: [null !== R && (0, r.jsx)(c.kzN, {
        className: w.error,
        children: R
      }), (0, r.jsx)("div", {
        children: z
      }), (0, r.jsxs)(E.aO, {
        className: w.invoiceTable,
        children: [(0, r.jsx)(E.Z9, {
          children: P.intl.string(P.t.iqhIp6)
        }), (0, r.jsx)(E.B1, {
          label: P.intl.format(P.t["Vg+LRk"], {
            subscriptionCount: 1
          }),
          value: (0, A.og)((0, A.T4)(Y, a.currency), W, K),
          className: w.invoiceCancelRow
        }), null != Z && Z.length > 0 ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(E.UN, {}), (0, r.jsx)(y.nd, {
            premiumSubscription: a,
            renewalInvoice: F,
            isUpdate: true
          })]
        }) : null]
      })]
    }), (0, r.jsxs)(c.mzw, {
      "data-migration-pending": true,
      align: h.Z.Align.CENTER,
      justify: h.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(c.zxk, {
        variant: "critical-primary",
        text: P.intl.string(P.t["/AS/gI"]),
        disabled: I,
        onClick: async () => {
          try {
            T(true), D(null), await L(a, x, G, l), p()
          } catch (e) {
            D(P.intl.string(P.t["5mlOCQ"])), T(false)
          }
        }
      }), (0, r.jsx)(b.Z, {
        onClick: d
      })]
    })]
  })
}

function k(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    onClose: i,
    transitionState: o
  } = e, a = t.currentPeriodEnd;
  t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
  let s = [{
    variant: "primary",
    text: P.intl.string(P.t.BddRzc),
    onClick: i
  }];
  return (0, r.jsx)(l.Modal, {
    transitionState: o,
    onClose: i,
    size: "sm",
    title: P.intl.string(P.t["fZzV/P"]),
    actions: s,
    children: (0, r.jsxs)("div", {
      className: w.body,
      children: [(0, r.jsx)("div", {
        className: w.cancelImage
      }), (0, r.jsx)("div", {
        children: P.intl.format(P.t["H+z0np"], {
          endDate: a
        })
      })]
    })
  })
}

function M(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: o,
    onClose: a
  } = e;
  i.useEffect(() => {
    I.Z.hasFetchedSubscriptions() || (0, u.jg)()
  }, []);
  let l = (0, s.e7)([I.Z], () => I.Z.getPremiumTypeSubscription()),
    d = (0, p.Z)(),
    [h, m] = i.useState(1),
    {
      analyticsLocations: g
    } = (0, _.ZP)(f.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == l) t = (0, r.jsx)(c.hzk, {
    "data-migration-pending": true,
    children: (0, r.jsx)(c.$jN, {})
  });
  else switch (h) {
    case 1:
      t = (0, r.jsx)(D, {
        premiumSubscription: l,
        fractionalPremiumInfo: d,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => m(2),
        onClose: a,
        transitionState: o
      });
      break;
    case 2:
      t = (0, r.jsx)(c.Y0X, {
        "data-migration-pending": true,
        transitionState: o,
        parentComponent: "GuildBoostSlotCancellationModal",
        children: (0, r.jsx)(j, {
          premiumSubscription: l,
          guildBoostSlotId: n.id,
          fractionalPremiumInfo: d,
          onBack: () => m(1),
          onNext: () => m(3),
          onClose: a
        })
      });
      break;
    case 3:
      t = (0, r.jsx)(k, {
        premiumSubscription: l,
        fractionalPremiumInfo: d,
        onClose: a,
        transitionState: o
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(h))
  }
  return (0, r.jsx)(_.Gt, {
    value: g,
    children: t
  })
}