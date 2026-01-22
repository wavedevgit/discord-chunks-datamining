/** Chunk was on web.js **/
/** chunk id: 983511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => k
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk923408 = require("./923408.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk543767 = require("./543767.js"),
  Chunk253390 = require("./253390.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk683433 = require("./683433.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk178368 = require("./178368.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk802790 = require("./802790.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk397415 = require("./397415.js");

function D(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: i,
    onNext: a,
    onClose: s,
    transitionState: l
  } = e, c = w.intl.format(w.t.otHdfR, {
    endDate: t.currentPeriodEnd
  });
  t.isPurchasedExternally && null != t.paymentGateway ? c = w.intl.format(w.t.HbpFLg, {
    paymentGatewayName: R.qm[t.paymentGateway],
    subscriptionManagementLink: (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? c = w.intl.format(w.t.Hzqe6y, {
    expirationDate: n.endsAt.toDate()
  }) : i && (c = w.intl.format(w.t.gXSnul, {
    endDate: t.currentPeriodEnd
  }));
  let u = i ? w.intl.string(w.t.iIoSd6) : w.intl.string(w.t.Skzv0u),
    d = t.isPurchasedExternally ? [] : [{
      variant: "secondary",
      text: w.intl.string(w.t["ETE/oC"]),
      onClick: s
    }, {
      variant: "primary",
      text: w.intl.string(w.t.PDTjLN),
      onClick: a
    }];
  return (0, r.jsx)(o.Modal, {
    transitionState: l,
    onClose: s,
    size: "sm",
    title: u,
    actions: d,
    children: (0, r.jsxs)("div", {
      className: P.rf,
      children: [(0, r.jsx)("div", {
        className: P.OC
      }), (0, r.jsx)("div", {
        children: c
      })]
    })
  })
}

function x() {
  let e = Object.values(O.A.boostSlots),
    t = s().sortBy(e.filter(e => !(0, S.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
  return null != t ? t.id : null
}
async function L(e, t, n, r) {
  let i = null != r ? r : x();
  if (null == i) throw Error("No slot to cancel");
  let a = (0, I.aE)(e, t);
  await (0, d.HJ)(i), await (0, u.nV)(e, {
    items: a
  }, {
    amount: 0,
    currency: e.currency
  }, (0, I.UC)(a, e.currency, e.paymentSourceId), n)
}

function j(e) {
  var t, n, a;
  let {
    premiumSubscription: s,
    guildBoostSlotId: o,
    fractionalPremiumInfo: u,
    onBack: d,
    onNext: _,
    onClose: O
  } = e, [v, S] = i.useState(false), [R, D] = i.useState(null), [x, j] = i.useMemo(() => {
    try {
      return [(0, g.v)(s, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [s]), M = i.useRef(O);
  i.useEffect(() => {
    M.current = O
  }), i.useEffect(() => {
    j && M.current()
  }, [j]);
  let {
    premiumSubscriptionPlan: k,
    premiumGuildPlan: U
  } = (0, l.cf)([A.A], () => {
    let e = A.A.get(s.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? A.A.getForSkuAndInterval((0, I.mH)(N.pe.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: G
  } = (0, p.Ay)(), [V] = (0, m.Kq)({
    subscriptionId: s.id,
    renewal: true,
    currency: s.currency,
    paymentSourceId: s.paymentSourceId,
    analyticsLocations: G,
    analyticsLocation: f.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), F = null != U ? (0, I.Om)(s, null != (t = null == (n = x[0]) ? true : n.quantity) ? t : 0, U.id) : null, [B] = (0, m.Kq)({
    subscriptionId: s.id,
    items: F,
    renewal: true,
    analyticsLocations: G,
    analyticsLocation: f.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == B || null == k || null == U || null == V) return (0, r.jsx)(c.y$y, {});
  let H = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !N.pW.has(t)
    }) && null == s.renewalMutations || (null == (a = s.renewalMutations) ? true : a.items.find(e => {
      let {
        planId: t
      } = e;
      return !N.pW.has(t)
    })) != null,
    Y = x.some(e => {
      let {
        planId: t
      } = e;
      return N.pW.has(t)
    }),
    W = H || Y ? B.total - V.total : -V.total,
    {
      interval: K,
      intervalCount: z
    } = k,
    q = w.intl.format(w.t["0W23cu"], {
      endDate: B.subscriptionPeriodStart
    });
  return s.isPausedForFractionalPremium && u.fetched && (q = w.intl.format(w.t.eb0xgS, {
    expirationDate: u.endsAt.toDate()
  })), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.A, {
      "data-migration-pending": true,
      onClose: O
    }), (0, r.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: P.rf,
      children: [null !== R && (0, r.jsx)("div", {
        className: P.z3,
        children: (0, r.jsx)(c.wx6, {
          type: "critical",
          children: R
        })
      }), (0, r.jsx)("div", {
        children: q
      }), (0, r.jsxs)(E.Yx, {
        className: P.S,
        children: [(0, r.jsx)(E.Xd, {
          children: w.intl.string(w.t.iqhIp4)
        }), (0, r.jsx)(E.oR, {
          label: w.intl.format(w.t["Vg+LRr"], {
            subscriptionCount: 1
          }),
          value: (0, T.CE)((0, T.$g)(W, s.currency), K, z),
          className: P.Au
        }), null != F && F.length > 0 ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(E.pK, {}), (0, r.jsx)(y.m0, {
            premiumSubscription: s,
            renewalInvoice: B,
            isUpdate: true
          })]
        }) : null]
      })]
    }), (0, r.jsxs)(c.jlY, {
      "data-migration-pending": true,
      align: h.A.Align.CENTER,
      justify: h.A.Justify.BETWEEN,
      children: [(0, r.jsx)(c.Button, {
        variant: "critical-primary",
        text: w.intl.string(w.t["/AS/gM"]),
        disabled: v,
        onClick: async () => {
          try {
            S(true), D(null), await L(s, x, G, o), _()
          } catch (e) {
            D(w.intl.string(w.t["5mlOCW"])), S(false)
          }
        }
      }), (0, r.jsx)(b.A, {
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
  } = e, s = t.currentPeriodEnd;
  t.isPausedForFractionalPremium && (s = n.endsAt.toDate());
  let l = [{
    variant: "primary",
    text: w.intl.string(w.t.BddRzS),
    onClick: i
  }];
  return (0, r.jsx)(o.Modal, {
    transitionState: a,
    onClose: i,
    size: "sm",
    title: w.intl.string(w.t["fZzV/B"]),
    actions: l,
    children: (0, r.jsxs)("div", {
      className: P.rf,
      children: [(0, r.jsx)("div", {
        className: P.OC
      }), (0, r.jsx)("div", {
        children: w.intl.format(w.t["H+z0ns"], {
          endDate: s
        })
      })]
    })
  })
}

function k(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: a,
    onClose: s
  } = e;
  i.useEffect(() => {
    v.A.hasFetchedSubscriptions() || (0, u.hP)()
  }, []);
  let o = (0, l.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
    d = (0, _.A)(),
    [h, m] = i.useState(1),
    {
      analyticsLocations: g
    } = (0, p.Ay)(f.A.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == o) t = (0, r.jsx)(c.$mQ, {
    "data-migration-pending": true,
    children: (0, r.jsx)(c.y$y, {})
  });
  else switch (h) {
    case 1:
      t = (0, r.jsx)(D, {
        premiumSubscription: o,
        fractionalPremiumInfo: d,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => m(2),
        onClose: s,
        transitionState: a
      });
      break;
    case 2:
      t = (0, r.jsx)(c.EOs, {
        "data-migration-pending": true,
        transitionState: a,
        parentComponent: "GuildBoostSlotCancellationModal",
        children: (0, r.jsx)(j, {
          premiumSubscription: o,
          guildBoostSlotId: n.id,
          fractionalPremiumInfo: d,
          onBack: () => m(1),
          onNext: () => m(3),
          onClose: s
        })
      });
      break;
    case 3:
      t = (0, r.jsx)(M, {
        premiumSubscription: o,
        fractionalPremiumInfo: d,
        onClose: s,
        transitionState: a
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(h))
  }
  return (0, r.jsx)(p.f5, {
    value: g,
    children: t
  })
}