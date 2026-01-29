/** Chunk was on 2827 **/
/** chunk id: 983511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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

function R(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    isInventory: i,
    onNext: l,
    onClose: s,
    transitionState: o
  } = e, c = v.intl.format(v.t.otHdfR, {
    endDate: t.currentPeriodEnd
  });
  t.isPurchasedExternally && null != t.paymentGateway ? c = v.intl.format(v.t.HbpFLg, {
    paymentGatewayName: j.qm[t.paymentGateway],
    subscriptionManagementLink: (0, T.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
  }) : t.isPausedForFractionalPremium ? c = v.intl.format(v.t.Hzqe6y, {
    expirationDate: n.endsAt.toDate()
  }) : i && (c = v.intl.format(v.t.gXSnul, {
    endDate: t.currentPeriodEnd
  }));
  let d = i ? v.intl.string(v.t.iIoSd6) : v.intl.string(v.t.Skzv0u),
    u = t.isPurchasedExternally ? [] : [{
      variant: "secondary",
      text: v.intl.string(v.t["ETE/oC"]),
      onClick: s
    }, {
      variant: "primary",
      text: v.intl.string(v.t.PDTjLN),
      onClick: l
    }];
  return (0, r.jsx)(a.Modal, {
    transitionState: o,
    onClose: s,
    size: "sm",
    title: d,
    actions: u,
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
async function D(e, t, n, r) {
  let i, l, a = null != r ? r : (i = Object.values(O.A.boostSlots), null != (l = s().sortBy(i.filter(e => !(0, S.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
  if (null == a) throw Error("No slot to cancel");
  let o = (0, T.aE)(e, t);
  await (0, u.HJ)(a), await (0, d.nV)(e, {
    items: o
  }, {
    amount: 0,
    currency: e.currency
  }, (0, T.UC)(o, e.currency, e.paymentSourceId), n)
}

function L(e) {
  var t, n, l;
  let {
    premiumSubscription: s,
    guildBoostSlotId: a,
    fractionalPremiumInfo: d,
    onBack: u,
    onNext: m,
    onClose: O
  } = e, [x, S] = i.useState(false), [j, R] = i.useState(null), [L, w] = i.useMemo(() => {
    try {
      return [(0, f.v)(s, false), false]
    } catch (e) {
      return [
        [], true
      ]
    }
  }, [s]), M = i.useRef(O);
  i.useEffect(() => {
    M.current = O
  }), i.useEffect(() => {
    w && M.current()
  }, [w]);
  let {
    premiumSubscriptionPlan: G,
    premiumGuildPlan: U
  } = (0, o.cf)([C.A], () => {
    let e = C.A.get(s.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? C.A.getForSkuAndInterval((0, T.mH)(N.pe.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: k
  } = (0, p.Ay)(), [B] = (0, A.Kq)({
    subscriptionId: s.id,
    renewal: true,
    currency: s.currency,
    paymentSourceId: s.paymentSourceId,
    analyticsLocations: k,
    analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), H = null != U ? (0, T.Om)(s, null != (t = null == (n = L[0]) ? true : n.quantity) ? t : 0, U.id) : null, [V] = (0, A.Kq)({
    subscriptionId: s.id,
    items: H,
    renewal: true,
    analyticsLocations: k,
    analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == V || null == G || null == U || null == B) return (0, r.jsx)(c.y$y, {});
  let F = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !N.pW.has(t)
    }) && null == s.renewalMutations || (null == (l = s.renewalMutations) ? true : l.items.find(e => {
      let {
        planId: t
      } = e;
      return !N.pW.has(t)
    })) != null,
    Y = L.some(e => {
      let {
        planId: t
      } = e;
      return N.pW.has(t)
    }),
    W = F || Y ? V.total - B.total : -B.total,
    {
      interval: K,
      intervalCount: z
    } = G,
    Z = v.intl.format(v.t["0W23cu"], {
      endDate: V.subscriptionPeriodStart
    });
  return s.isPausedForFractionalPremium && d.fetched && (Z = v.intl.format(v.t.eb0xgS, {
    expirationDate: d.endsAt.toDate()
  })), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.A, {
      "data-migration-pending": true,
      onClose: O
    }), (0, r.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: P.rf,
      children: [null !== j && (0, r.jsx)("div", {
        className: P.z3,
        children: (0, r.jsx)(c.wx6, {
          type: "critical",
          children: j
        })
      }), (0, r.jsx)("div", {
        children: Z
      }), (0, r.jsxs)(b.Yx, {
        className: P.S,
        children: [(0, r.jsx)(b.Xd, {
          children: v.intl.string(v.t.iqhIp4)
        }), (0, r.jsx)(b.oR, {
          label: v.intl.format(v.t["Vg+LRr"], {
            subscriptionCount: 1
          }),
          value: (0, I.CE)((0, I.$g)(W, s.currency), K, z),
          className: P.Au
        }), null != H && H.length > 0 ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(b.pK, {}), (0, r.jsx)(E.m0, {
            premiumSubscription: s,
            renewalInvoice: V,
            isUpdate: true
          })]
        }) : null]
      })]
    }), (0, r.jsxs)(c.jlY, {
      "data-migration-pending": true,
      align: g.A.Align.CENTER,
      justify: g.A.Justify.BETWEEN,
      children: [(0, r.jsx)(c.Button, {
        variant: "critical-primary",
        text: v.intl.string(v.t["/AS/gM"]),
        disabled: x,
        onClick: async () => {
          try {
            S(true), R(null), await D(s, L, k, a), m()
          } catch (e) {
            R(v.intl.string(v.t["5mlOCW"])), S(false)
          }
        }
      }), (0, r.jsx)(h.A, {
        onClick: u
      })]
    })]
  })
}

function w(e) {
  let {
    premiumSubscription: t,
    fractionalPremiumInfo: n,
    onClose: i,
    transitionState: l
  } = e, s = t.currentPeriodEnd;
  t.isPausedForFractionalPremium && (s = n.endsAt.toDate());
  let o = [{
    variant: "primary",
    text: v.intl.string(v.t.BddRzS),
    onClick: i
  }];
  return (0, r.jsx)(a.Modal, {
    transitionState: l,
    onClose: i,
    size: "sm",
    title: v.intl.string(v.t["fZzV/B"]),
    actions: o,
    children: (0, r.jsxs)("div", {
      className: P.rf,
      children: [(0, r.jsx)("div", {
        className: P.OC
      }), (0, r.jsx)("div", {
        children: v.intl.format(v.t["H+z0ns"], {
          endDate: s
        })
      })]
    })
  })
}

function M(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: l,
    onClose: s
  } = e;
  i.useEffect(() => {
    x.A.hasFetchedSubscriptions() || (0, d.hP)()
  }, []);
  let a = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
    u = (0, m.A)(),
    [g, A] = i.useState(1),
    {
      analyticsLocations: f
    } = (0, p.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == a) t = (0, r.jsx)(c.$mQ, {
    "data-migration-pending": true,
    children: (0, r.jsx)(c.y$y, {})
  });
  else switch (g) {
    case 1:
      t = (0, r.jsx)(R, {
        premiumSubscription: a,
        fractionalPremiumInfo: u,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => A(2),
        onClose: s,
        transitionState: l
      });
      break;
    case 2:
      t = (0, r.jsx)(c.EOs, {
        "data-migration-pending": true,
        transitionState: l,
        parentComponent: "GuildBoostSlotCancellationModal",
        children: (0, r.jsx)(L, {
          premiumSubscription: a,
          guildBoostSlotId: n.id,
          fractionalPremiumInfo: u,
          onBack: () => A(1),
          onNext: () => A(3),
          onClose: s
        })
      });
      break;
    case 3:
      t = (0, r.jsx)(w, {
        premiumSubscription: a,
        fractionalPremiumInfo: u,
        onClose: s,
        transitionState: l
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(g))
  }
  return (0, r.jsx)(p.f5, {
    value: f,
    children: t
  })
}