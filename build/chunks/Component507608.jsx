/** Chunk was on 77803 **/
/** chunk id: 507608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AF: () => G,
  hd: () => q,
  zz: () => z
}), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk905322 = require("./905322.jsx"),
  Chunk200207 = require("./200207.jsx"),
  Chunk269210 = require("./269210.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk270144 = require("./270144.js"),
  Chunk171246 = require("./171246.js"),
  Chunk930155 = require("./930155.js"),
  Chunk929011 = require("./929011.jsx"),
  Chunk889989 = require("./889989.jsx"),
  Chunk263519 = require("./263519.js"),
  Chunk430824 = require("./430824.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk73346 = require("./73346.js"),
  Chunk624138 = require("./624138.js"),
  Chunk591759 = require("./591759.js"),
  Chunk601911 = require("./601911.js"),
  Chunk150414 = require("./150414.js"),
  Chunk110742 = require("./110742.js"),
  Chunk277941 = require("./277941.jsx"),
  Chunk680005 = require("./680005.jsx"),
  Chunk955335 = require("./955335.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk101390 = require("./101390.js");

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = new Intl.DateTimeFormat(Chunk388032.intl.currentLocale, {
  month: "short",
  day: "numeric"
});

function G(e) {
  let {
    app: t,
    guildId: n,
    subscriptions: o,
    otps: s
  } = e, u = i.useMemo(() => (0, Z.y)(t, 100), [t]), {
    bot: b
  } = t, m = i.useMemo(() => {
    var e;
    if ((null == b ? true : b.banner) == null) return;
    let t = (0, I.aN)({
      id: b.id,
      banner: b.banner,
      size: 1024,
      canAnimate: false
    });
    return null != t && null != (e = N.Z.toURLSafe(t)) ? e : true
  }, [b]), f = i.useMemo(() => {
    var e;
    if ((null == b ? true : b.banner) == null) return;
    let t = (0, I.aN)({
      id: b.id,
      banner: b.banner,
      size: 1024,
      canAnimate: true
    });
    return null != t && null != (e = N.Z.toURLSafe(t)) ? e : true
  }, [b]), j = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), v = i.useMemo(() => [...o.map(e => e.skuId), ...s.map(e => e.skuId)], [o, s]), {
    analyticsLocations: g
  } = (0, p.ZP)(d.Z.APP_STOREFRONT);
  return i.useEffect(() => {
    0 !== v.length && P.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: v,
      location_stack: g
    })
  }, [g, t.id, v]), (0, r.jsxs)("div", {
    className: C.wrapper,
    children: [(0, r.jsx)(l.j, {
      title: t.name,
      iconSrc: u,
      backgroundSrc: m,
      animatedBackgroundSrc: f,
      prefersReducedMotion: j
    }), (0, r.jsx)(B, {
      appId: t.id,
      subscriptions: o,
      otps: s,
      guildId: n
    })]
  })
}

function B(e) {
  let {
    appId: t,
    subscriptions: n,
    otps: i,
    guildId: l
  } = e;
  return (0, r.jsxs)("div", {
    className: C.productsContainer,
    children: [n.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(A.r, {
        subscriptions: n
      }), (0, r.jsx)("div", {
        className: C.productSection,
        children: n.map(e => (0, r.jsx)(z, {
          appId: t,
          guildId: l,
          listing: e,
          subscriptionType: (0, f.KW)(e.skuFlags) ? "user" : "guild"
        }, e.id))
      })]
    }), i.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(u.X6q, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t.yUGTs7)
      }), (0, r.jsx)("div", {
        className: C.productSection,
        children: i.map(e => (0, r.jsx)(q, {
          skuId: e.skuId,
          appId: t
        }, e.id))
      })]
    })]
  })
}

function z(e) {
  var t, l;
  let {
    appId: o,
    guildId: c,
    listing: d,
    subscriptionType: p,
    onDetails: v
  } = e, {
    data: x
  } = (0, j.H)(d.skuId), P = null == x ? true : x[0], I = (0, a.e7)([h.Z], () => h.Z.get(d.skuId), [d.skuId]), k = (0, a.e7)([O.Z], () => O.Z.getGuild(c), [c]), S = (0, a.e7)([h.Z], () => h.Z.getParentSKU(d.skuId), [d.skuId]), w = (0, m.Ev)(S, c), N = null == w ? true : w.subscription, Z = (0, m.cr)(S, c), T = null != N && (0, f.Jf)(N, I), D = null != Z && (null == w || null == (t = w.subscriptionPlan) ? true : t.id) !== (null == Z ? true : Z.subscriptionPlan.id), A = false === T && (null == Z ? true : Z.subscriptionPlan.skuId) === d.skuId, G = (null == w ? true : w.subscriptionPlan.skuId) === d.skuId, {
    openModal: B,
    subscriptionPurchaseButtonState: z,
    isGuildSubscribed: q
  } = (0, y.Z)({
    skuId: d.skuId,
    initialSubscribeForGuild: c,
    analyticsLocation: M.Sbl.APP_STOREFRONT
  }), V = i.useMemo(() => {
    var e;
    return null == (e = d.benefits) ? true : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.n)(o, e.icon)
    }))
  }, [o, d.benefits]), K = i.useMemo(() => null != d.thumbnail ? (0, E.q)(o, d.thumbnail, 256) : true, [o, d.thumbnail]), J = i.useCallback(e => (0, r.jsx)(R.pV, L(F({}, e), {
    appId: o,
    subscriptionType: p,
    skuId: d.skuId,
    subscriptionPlan: P,
    state: z
  })), [o, p, d.skuId, P, z]), W = i.useMemo(() => {
    if (D && (null == N ? true : N.currentPeriodEnd) != null) {
      let e = U.format(null == N ? true : N.currentPeriodEnd);
      if (G) return _.intl.formatToPlainString(_.t.EV2lZ2, {
        date: e
      });
      if (A) return _.intl.formatToPlainString(_.t["2w6+ND"], {
        date: e
      })
    }
    if (q) return (0, r.jsxs)(r.Fragment, {
      children: [null != k && (0, r.jsx)(b.Z, {
        guild: k,
        size: b.Z.Sizes.MINI
      }), _.intl.string(_.t.l8ufqK)]
    })
  }, [null == N ? true : N.currentPeriodEnd, k, D, G, q, A]), X = null != W ? (0, r.jsx)(u.Text, {
    color: "header-secondary",
    variant: "text-sm/normal",
    className: C.subscriptionCardSubtext,
    children: W
  }) : true;
  return (0, r.jsx)(s.Uj, {
    title: d.summary,
    subtitle: X,
    maxBenefits: null != X ? s.ZI - 1 : s.ZI,
    description: null != (l = d.description) ? l : true,
    imgSrc: K,
    onPurchase: B,
    renderPurchaseButton: J,
    benefitItems: null != V ? V.map(e => (0, r.jsx)(s.Gm, {
      description: e.title,
      icon: e.icon
    }, e.id)) : true,
    onDetails: null != v ? v : null != V ? () => {
      (0, u.ZDy)(async () => {
        let {
          SubscriptionDetailsModal: e
        } = await Promise.resolve().then(n.bind(n, 519896));
        return t => (0, r.jsx)(e, F({
          appId: o,
          subscriptionType: p,
          skuId: d.skuId,
          guildId: c
        }, t))
      })
    } : true
  })
}

function q(e) {
  var t, i, l, s;
  let {
    skuId: c,
    appId: b,
    onDetails: m
  } = e, {
    analyticsLocations: f
  } = (0, p.ZP)(d.Z.APP_STOREFRONT), j = (0, a.e7)([x.Z], () => x.Z.getForSKU(c), [c]), g = (0, a.e7)([h.Z], () => h.Z.get(c), [c]), y = (0, T.M)(c);
  if (null == g) return null;
  let O = null != (i = g.name) ? i : "",
    P = null != (l = null == j || null == (t = j.description) ? true : t.trim()) ? l : true,
    I = (null == j ? true : j.headerBackground) != null && null != (s = N.Z.toURLSafe((0, S._W)(b, j.headerBackground, 256))) ? s : true,
    Z = g.type === M.epS.DURABLE && y,
    E = g.type === M.epS.DURABLE ? Z ? _.intl.string(_.t.bm82mp) : _.intl.string(_.t["6gprwc"]) : true,
    {
      price: A
    } = g;
  if (null == A) return null;
  let C = e => {
    e.stopPropagation(), (0, v.r)({
      appId: b,
      skuId: g.id,
      analyticsLocations: f,
      isGift: true
    })
  };
  return (0, r.jsx)(o.I, {
    title: O,
    description: P,
    headerImage: I,
    availabilityLabel: E,
    PurchaseButton: e => (0, r.jsx)(R.YG, L(F({}, e), {
      appId: b,
      sku: g
    })),
    GiftButton: (0, k.yE)(g.flags, M.l4R.AVAILABLE_FOR_APPLICATION_GIFTING) ? () => (0, r.jsx)(D.Z, {
      onGift: C,
      tooltipDelay: 250
    }) : true,
    onPurchase: () => {
      (0, v.r)({
        appId: b,
        skuId: g.id,
        analyticsLocations: f
      })
    },
    onDetails: null != m ? m : (0, w.Ew)(P) ? true : () => {
      (0, u.ZDy)(async () => {
        let {
          ItemDetailsModal: e
        } = await Promise.resolve().then(n.bind(n, 147496));
        return t => (0, r.jsx)(e, F({
          appId: b,
          skuId: c
        }, t))
      })
    }
  })
}