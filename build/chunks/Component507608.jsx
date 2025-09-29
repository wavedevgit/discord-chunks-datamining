/** Chunk was on 77803 **/
/** chunk id: 507608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AF: () => G,
  hd: () => q,
  zz: () => z
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk863650 = require("./863650.jsx"),
  Chunk78673 = require("./78673.jsx"),
  Chunk450911 = require("./450911.jsx"),
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
  Chunk164670 = require("./164670.js"),
  Chunk430824 = require("./430824.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
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

function U(e) {
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

function A(e, t) {
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
let B = new Intl.DateTimeFormat(Chunk388032.intl.currentLocale, {
  month: "short",
  day: "numeric"
});

function G(e) {
  let {
    app: t,
    guildId: n,
    subscriptions: s,
    otps: u
  } = e, a = i.useMemo(() => (0, Z.y)(t, 100), [t]), {
    bot: b
  } = t, m = i.useMemo(() => {
    var e;
    if ((null == b ? true : b.banner) == null) return;
    let t = (0, k.aN)({
      id: b.id,
      banner: b.banner,
      size: 1024,
      canAnimate: false
    });
    return null != t && null != (e = N.Z.toURLSafe(t)) ? e : true
  }, [b]), v = i.useMemo(() => {
    var e;
    if ((null == b ? true : b.banner) == null) return;
    let t = (0, k.aN)({
      id: b.id,
      banner: b.banner,
      size: 1024,
      canAnimate: true
    });
    return null != t && null != (e = N.Z.toURLSafe(t)) ? e : true
  }, [b]), j = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), f = i.useMemo(() => [...s.map(e => e.skuId), ...u.map(e => e.skuId)], [s, u]), {
    analyticsLocations: g
  } = (0, p.ZP)(d.Z.APP_STOREFRONT);
  return i.useEffect(() => {
    0 !== f.length && I.default.track(C.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: f,
      location_stack: g
    })
  }, [g, t.id, f]), (0, r.jsxs)("div", {
    className: _.wrapper,
    children: [(0, r.jsx)(o.j, {
      title: t.name,
      iconSrc: a,
      backgroundSrc: m,
      animatedBackgroundSrc: v,
      prefersReducedMotion: j
    }), (0, r.jsx)(L, {
      appId: t.id,
      subscriptions: s,
      otps: u,
      guildId: n
    })]
  })
}

function L(e) {
  let {
    appId: t,
    subscriptions: n,
    otps: i,
    guildId: l
  } = e;
  return (0, r.jsxs)("div", {
    className: _.productsContainer,
    children: [n.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(M.r, {
        subscriptions: n
      }), (0, r.jsx)("div", {
        className: _.productSection,
        children: n.map(e => (0, r.jsx)(z, {
          appId: t,
          guildId: l,
          listing: e,
          subscriptionType: (0, v.KW)(e.skuFlags) ? "user" : "guild"
        }, e.id))
      })]
    }), i.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: F.intl.string(F.t.yUGTs7)
      }), (0, r.jsx)("div", {
        className: _.productSection,
        children: i.map(e => (0, r.jsx)(q, {
          skuId: e.skuId,
          appId: t
        }, e.id))
      })]
    })]
  })
}

function z(e) {
  var t, o;
  let {
    appId: s,
    guildId: c,
    listing: d,
    subscriptionType: p,
    onDetails: f
  } = e, {
    data: O
  } = (0, j.H)(d.skuId), P = null == O ? true : O[0], I = (0, l.e7)([x.Z], () => x.Z.get(d.skuId), [d.skuId]), k = (0, l.e7)([h.Z], () => h.Z.getGuild(c), [c]), S = (0, l.e7)([x.Z], () => x.Z.getParentSKU(d.skuId), [d.skuId]), w = (0, m.Ev)(S, c), N = null == w ? true : w.subscription, Z = (0, m.cr)(S, c), E = null != N && (0, v.Jf)(N, I), D = null != Z && (null == w || null == (t = w.subscriptionPlan) ? true : t.id) !== (null == Z ? true : Z.subscriptionPlan.id), M = false === E && (null == Z ? true : Z.subscriptionPlan.skuId) === d.skuId, G = (null == w ? true : w.subscriptionPlan.skuId) === d.skuId, {
    openModal: L,
    subscriptionPurchaseButtonState: z,
    isGuildSubscribed: q
  } = (0, y.Z)({
    skuId: d.skuId,
    initialSubscribeForGuild: c,
    analyticsLocation: C.Sbl.APP_STOREFRONT
  }), K = i.useMemo(() => {
    var e;
    return null == (e = d.benefits) ? true : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.n)(s, e.icon)
    }))
  }, [s, d.benefits]), V = i.useMemo(() => null != d.thumbnail ? (0, T.q)(s, d.thumbnail, 256) : true, [s, d.thumbnail]), J = i.useCallback(e => (0, r.jsx)(R.pV, A(U({}, e), {
    appId: s,
    subscriptionType: p,
    skuId: d.skuId,
    subscriptionPlan: P,
    state: z
  })), [s, p, d.skuId, P, z]), W = i.useMemo(() => {
    if (D && (null == N ? true : N.currentPeriodEnd) != null) {
      let e = B.format(null == N ? true : N.currentPeriodEnd);
      if (G) return F.intl.formatToPlainString(F.t.EV2lZ2, {
        date: e
      });
      if (M) return F.intl.formatToPlainString(F.t["2w6+ND"], {
        date: e
      })
    }
    if (q) return (0, r.jsxs)(r.Fragment, {
      children: [null != k && (0, r.jsx)(b.Z, {
        guild: k,
        size: b.Z.Sizes.MINI
      }), F.intl.string(F.t.l8ufqK)]
    })
  }, [null == N ? true : N.currentPeriodEnd, k, D, G, q, M]), X = null != W ? (0, r.jsx)(a.Text, {
    color: "header-secondary",
    variant: "text-sm/normal",
    className: _.subscriptionCardSubtext,
    children: W
  }) : true;
  return (0, r.jsx)(u.Uj, {
    title: d.summary,
    subtitle: X,
    maxBenefits: null != X ? u.ZI - 1 : u.ZI,
    description: null != (o = d.description) ? o : true,
    imgSrc: V,
    onPurchase: L,
    renderPurchaseButton: J,
    benefitItems: null != K ? K.map(e => (0, r.jsx)(u.Gm, {
      description: e.title,
      icon: e.icon
    }, e.id)) : true,
    onDetails: null != f ? f : null != K ? () => {
      (0, a.ZDy)(async () => {
        let {
          SubscriptionDetailsModal: e
        } = await Promise.resolve().then(n.bind(n, 519896));
        return t => (0, r.jsx)(e, U({
          appId: s,
          subscriptionType: p,
          skuId: d.skuId,
          guildId: c
        }, t))
      })
    } : true
  })
}

function q(e) {
  var t, i, o, u;
  let {
    skuId: c,
    appId: b,
    onDetails: m
  } = e, {
    analyticsLocations: v
  } = (0, p.ZP)(d.Z.APP_STOREFRONT), j = (0, l.e7)([P.Z], () => P.Z.getForSKU(c), [c]), g = (0, l.e7)([x.Z], () => x.Z.get(c), [c]), y = (0, E.M)(c);
  if (null == g) return null;
  let h = null != (i = g.name) ? i : "",
    I = null != (o = null == j || null == (t = j.description) ? true : t.trim()) ? o : true,
    k = (null == j ? true : j.headerBackground) != null && null != (u = N.Z.toURLSafe((0, S._W)(b, j.headerBackground, 256))) ? u : true,
    Z = g.type === C.epS.DURABLE && y,
    T = g.type === C.epS.DURABLE ? Z ? F.intl.string(F.t.bm82mp) : F.intl.string(F.t["6gprwc"]) : true,
    {
      price: M
    } = g;
  if (null == M) return null;
  let _ = e => {
    e.stopPropagation(), (0, f.r)({
      appId: b,
      skuId: g.id,
      analyticsLocations: v,
      isGift: true
    })
  };
  return (0, r.jsx)(s.I, {
    title: h,
    description: I,
    headerImage: k,
    availabilityLabel: T,
    PurchaseButton: e => (0, r.jsx)(R.YG, A(U({}, e), {
      appId: b,
      sku: g
    })),
    GiftButton: (0, O.K)(g) ? () => (0, r.jsx)(D.Z, {
      onGift: _,
      tooltipDelay: 250
    }) : true,
    onPurchase: () => {
      (0, f.r)({
        appId: b,
        skuId: g.id,
        analyticsLocations: v
      })
    },
    onDetails: null != m ? m : (0, w.Ew)(I) ? true : () => {
      (0, a.ZDy)(async () => {
        let {
          ItemDetailsModal: e
        } = await Promise.resolve().then(n.bind(n, 147496));
        return t => (0, r.jsx)(e, U({
          appId: b,
          skuId: c
        }, t))
      })
    }
  })
}