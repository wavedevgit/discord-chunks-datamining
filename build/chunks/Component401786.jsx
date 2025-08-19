/** Chunk was on 66181 **/
/** chunk id: 401786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
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

function R(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: r,
    onNext: s,
    onClose: a,
    transitionState: l
  } = e, c = A.intl.format(A.t.otHdfX, {
    endDate: t.currentPeriodEnd
  });
  t.isPurchasedExternally && null != t.paymentGateway ? c = A.intl.format(A.t.HbpFLi, {
    paymentGatewayName: y.Vz[t.paymentGateway],
    subscriptionManagementLink: (0, S.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? c = A.intl.format(A.t["Hzqe6+"], {
    expirationDate: n.endsAt.toDate()
  }) : r && (c = A.intl.format(A.t.gXSnur, {
    endDate: t.currentPeriodEnd
  }));
  let d = r ? A.intl.string(A.t.iIoSd3) : A.intl.string(A.t.Skzv0t),
    u = t.isPurchasedExternally ? [] : [{
      variant: "secondary",
      text: A.intl.string(A.t["ETE/oK"]),
      onClick: a
    }, {
      variant: "primary",
      text: A.intl.string(A.t.PDTjLC),
      onClick: s
    }];
  return (0, i.jsx)(o.Modal, {
    transitionState: l,
    onClose: a,
    size: "sm",
    title: d,
    actions: u,
    children: (0, i.jsxs)("div", {
      className: P.body,
      children: [(0, i.jsx)("div", {
        className: P.cancelImage
      }), (0, i.jsx)("div", {
        children: c
      })]
    })
  })
}
async function D(e, t, n, i) {
  let r = null != i ? i : function() {
    let e = Object.values(E.Z.boostSlots),
      t = a().sortBy(e.filter(e => !(0, v.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != t ? t.id : null
  }();
  if (null == r) throw Error("No slot to cancel");
  let s = (0, S.MY)(e, t);
  await (0, u.pD)(r), await (0, d.Mg)(e, {
    items: s
  }, {
    amount: 0,
    currency: e.currency
  }, (0, S.UX)(s, e.currency, e.paymentSourceId), n)
}

function Z(e) {
  var t, n, s;
  let {
    premiumSubscription: a,
    guildBoostSlotId: o,
    fractionalPremiumInfo: d,
    onBack: u,
    onNext: g,
    onClose: E
  } = e, [O, v] = r.useState(false), [y, R] = r.useState(null), [Z, w] = r.useMemo(() => {
    try {
      return [(0, b.g)(a, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [a]), k = r.useRef(E);
  r.useEffect(() => {
    k.current = E
  }), r.useEffect(() => {
    w && k.current()
  }, [w]);
  let {
    premiumSubscriptionPlan: L,
    premiumGuildPlan: B
  } = (0, l.cj)([C.Z], () => {
    let e = C.Z.get(a.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? C.Z.getForSkuAndInterval((0, S.Wz)(I.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: M
  } = (0, p.ZP)(), [U] = (0, f.ED)({
    subscriptionId: a.id,
    renewal: true,
    currency: a.currency,
    paymentSourceId: a.paymentSourceId,
    analyticsLocations: M,
    analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), V = null != B ? (0, S.Zx)(a, null != (s = null == (t = Z[0]) ? true : t.quantity) ? s : 0, B.id) : null, [G] = (0, f.ED)({
    subscriptionId: a.id,
    items: V,
    renewal: true,
    analyticsLocations: M,
    analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == G || null == L || null == B || null == U) return (0, i.jsx)(c.$jN, {});
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
    K = A.intl.format(A.t["0W23cn"], {
      endDate: G.subscriptionPeriodStart
    });
  return a.isPausedForFractionalPremium && d.fetched && (K = A.intl.format(A.t.eb0xgY, {
    expirationDate: d.endsAt.toDate()
  })), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(N.Z, {
      onClose: E
    }), (0, i.jsxs)(c.hzk, {
      className: P.body,
      children: [null !== y && (0, i.jsx)(c.kzN, {
        className: P.error,
        children: y
      }), (0, i.jsx)("div", {
        children: K
      }), (0, i.jsxs)(x.aO, {
        className: P.invoiceTable,
        children: [(0, i.jsx)(x.Z9, {
          children: A.intl.string(A.t.iqhIp6)
        }), (0, i.jsx)(x.B1, {
          label: A.intl.format(A.t["Vg+LRk"], {
            subscriptionCount: 1
          }),
          value: (0, T.og)((0, T.T4)(z, a.currency), W, Y),
          className: P.invoiceCancelRow
        }), null != V && V.length > 0 ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(x.UN, {}), (0, i.jsx)(j.nd, {
            premiumSubscription: a,
            renewalInvoice: G,
            isUpdate: true
          })]
        }) : null]
      })]
    }), (0, i.jsxs)(c.mzw, {
      align: h.Z.Align.CENTER,
      justify: h.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(c.zxk, {
        variant: "critical-primary",
        text: A.intl.string(A.t["/AS/gI"]),
        disabled: O,
        onClick: async () => {
          try {
            v(true), R(null), await D(a, Z, M, o), g()
          } catch (e) {
            R(A.intl.string(A.t["5mlOCQ"])), v(false)
          }
        }
      }), (0, i.jsx)(_.Z, {
        onClick: u
      })]
    })]
  })
}

function w(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    onClose: r,
    transitionState: s
  } = e, a = t.currentPeriodEnd;
  t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
  let l = [{
    variant: "primary",
    text: A.intl.string(A.t.BddRzc),
    onClick: r
  }];
  return (0, i.jsx)(o.Modal, {
    transitionState: s,
    onClose: r,
    size: "sm",
    title: A.intl.string(A.t["fZzV/P"]),
    actions: l,
    children: (0, i.jsxs)("div", {
      className: P.body,
      children: [(0, i.jsx)("div", {
        className: P.cancelImage
      }), (0, i.jsx)("div", {
        children: A.intl.format(A.t["H+z0np"], {
          endDate: a
        })
      })]
    })
  })
}

function k(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: s,
    onClose: a
  } = e;
  r.useEffect(() => {
    O.Z.hasFetchedSubscriptions() || (0, d.jg)()
  }, []);
  let o = (0, l.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
    u = (0, g.Z)(),
    [h, f] = r.useState(1),
    {
      analyticsLocations: b
    } = (0, p.ZP)(m.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == o) t = (0, i.jsx)(c.hzk, {
    children: (0, i.jsx)(c.$jN, {})
  });
  else switch (h) {
    case 1:
      t = (0, i.jsx)(R, {
        premiumSubscription: o,
        fractionalPremiumInfo: u,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => f(2),
        onClose: a,
        transitionState: s
      });
      break;
    case 2:
      t = (0, i.jsx)(c.Y0X, {
        transitionState: s,
        parentComponent: "GuildBoostSlotCancellationModal",
        children: (0, i.jsx)(Z, {
          premiumSubscription: o,
          guildBoostSlotId: n.id,
          fractionalPremiumInfo: u,
          onBack: () => f(1),
          onNext: () => f(3),
          onClose: a
        })
      });
      break;
    case 3:
      t = (0, i.jsx)(w, {
        premiumSubscription: o,
        fractionalPremiumInfo: u,
        onClose: a,
        transitionState: s
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(h))
  }
  return (0, i.jsx)(p.Gt, {
    value: b,
    children: t
  })
}