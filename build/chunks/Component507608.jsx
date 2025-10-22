/** Chunk was on 77803 **/
/** chunk id: 507608, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  AF: () => U,
  hd: () => z,
  zz: () => B
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk683074 = require("./683074.jsx"),
  Chunk214805 = require("./214805.jsx"),
  Chunk621082 = require("./621082.jsx"),
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
  Chunk73346 = require("./73346.js"),
  Chunk624138 = require("./624138.js"),
  Chunk591759 = require("./591759.js"),
  Chunk601911 = require("./601911.js"),
  Chunk150414 = require("./150414.js"),
  Chunk110742 = require("./110742.js"),
  Chunk680005 = require("./680005.jsx"),
  Chunk955335 = require("./955335.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk101390 = require("./101390.js");

function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function C(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let F = new Intl.DateTimeFormat(Chunk388032.intl.currentLocale, {
  month: "short",
  day: "numeric"
});

function U(e) {
  let {
    app: n,
    guildId: t,
    subscriptions: s,
    otps: o
  } = e, a = i.useMemo(() => (0, N.y)(n, 100), [n]), {
    bot: m
  } = n, b = i.useMemo(() => {
    var e;
    if ((null == m ? true : m.banner) == null) return;
    let n = (0, I.aN)({
      id: m.id,
      banner: m.banner,
      size: 1024,
      canAnimate: false
    });
    return null != n && null != (e = w.Z.toURLSafe(n)) ? e : true
  }, [m]), v = i.useMemo(() => {
    var e;
    if ((null == m ? true : m.banner) == null) return;
    let n = (0, I.aN)({
      id: m.id,
      banner: m.banner,
      size: 1024,
      canAnimate: true
    });
    return null != n && null != (e = w.Z.toURLSafe(n)) ? e : true
  }, [m]), g = (0, u.e7)([c.Z], () => c.Z.useReducedMotion), j = i.useMemo(() => [...s.map(e => e.skuId), ...o.map(e => e.skuId)], [s, o]), {
    analyticsLocations: f
  } = (0, p.ZP)(d.Z.APP_STOREFRONT);
  return i.useEffect(() => {
    0 !== j.length && O.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: n.id,
      sku_ids: j,
      location_stack: f
    })
  }, [f, n.id, j]), (0, r.jsxs)("div", {
    className: _.wrapper,
    children: [(0, r.jsx)(l.j, {
      title: n.name,
      iconSrc: a,
      backgroundSrc: b,
      animatedBackgroundSrc: v,
      prefersReducedMotion: g
    }), (0, r.jsx)(L, {
      appId: n.id,
      subscriptions: s,
      otps: o,
      guildId: t
    })]
  })
}

function L(e) {
  let {
    appId: n,
    subscriptions: t,
    otps: i,
    guildId: l
  } = e;
  return (0, r.jsxs)("div", {
    className: _.productsContainer,
    children: [t.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(R.r, {
        subscriptions: t
      }), (0, r.jsx)("div", {
        className: _.productSection,
        children: t.map(e => (0, r.jsx)(B, {
          appId: n,
          guildId: l,
          listing: e,
          subscriptionType: (0, v.KW)(e.skuFlags) ? "user" : "guild"
        }, e.id))
      })]
    }), i.length > 0 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: D.intl.string(D.t.yUGTs8)
      }), (0, r.jsx)("div", {
        className: _.productSection,
        children: i.map(e => (0, r.jsx)(z, {
          skuId: e.skuId,
          appId: n
        }, e.id))
      })]
    })]
  })
}

function B(e) {
  var n, l;
  let {
    appId: s,
    guildId: c,
    listing: d,
    subscriptionType: p,
    onDetails: j
  } = e, {
    data: P
  } = (0, g.H)(d.skuId), O = null == P ? true : P[0], I = (0, u.e7)([y.Z], () => y.Z.get(d.skuId), [d.skuId]), k = (0, u.e7)([x.Z], () => x.Z.getGuild(c), [c]), S = (0, u.e7)([y.Z], () => y.Z.getParentSKU(d.skuId), [d.skuId]), w = (0, b.Ev)(S, c), N = null == w ? true : w.subscription, T = (0, b.cr)(S, c), R = null != N && (0, v.Jf)(N, I), U = null != T && (null == w || null == (n = w.subscriptionPlan) ? true : n.id) !== (null == T ? true : T.subscriptionPlan.id), L = false === R && (null == T ? true : T.subscriptionPlan.skuId) === d.skuId, B = (null == w ? true : w.subscriptionPlan.skuId) === d.skuId, {
    openModal: z,
    subscriptionPurchaseButtonState: G,
    isGuildSubscribed: V
  } = (0, h.Z)({
    skuId: d.skuId,
    initialSubscribeForGuild: c,
    analyticsLocation: M.Sbl.APP_STOREFRONT
  }), H = i.useMemo(() => {
    var e;
    return null == (e = d.benefits) ? true : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, f.n)(s, e.icon)
    }))
  }, [s, d.benefits]), K = i.useMemo(() => null != d.thumbnail ? (0, Z.q)(s, d.thumbnail, 256) : true, [s, d.thumbnail]), q = i.useCallback(e => (0, r.jsx)(E.pV, C(A({}, e), {
    appId: s,
    subscriptionType: p,
    skuId: d.skuId,
    subscriptionPlan: O,
    state: G
  })), [s, p, d.skuId, O, G]), W = i.useMemo(() => {
    if (U && (null == N ? true : N.currentPeriodEnd) != null) {
      let e = F.format(null == N ? true : N.currentPeriodEnd);
      if (B) return D.intl.formatToPlainString(D.t.EV2lZz, {
        date: e
      });
      if (L) return D.intl.formatToPlainString(D.t["2w6+NN"], {
        date: e
      })
    }
    if (V) return (0, r.jsxs)(r.Fragment, {
      children: [null != k && (0, r.jsx)(m.Z, {
        guild: k,
        size: m.Z.Sizes.MINI
      }), D.intl.string(D.t.l8ufqL)]
    })
  }, [null == N ? true : N.currentPeriodEnd, k, U, B, V, L]), J = null != W ? (0, r.jsx)(a.Text, {
    color: "header-secondary",
    variant: "text-sm/normal",
    className: _.subscriptionCardSubtext,
    children: W
  }) : true;
  return (0, r.jsx)(o.Uj, {
    title: d.summary,
    subtitle: J,
    maxBenefits: null != J ? o.ZI - 1 : o.ZI,
    description: null != (l = d.description) ? l : true,
    imgSrc: K,
    onPurchase: z,
    renderPurchaseButton: q,
    benefitItems: null != H ? H.map(e => (0, r.jsx)(o.Gm, {
      description: e.title,
      icon: e.icon
    }, e.id)) : true,
    onDetails: null != j ? j : null != H ? () => {
      (0, a.ZDy)(async () => {
        let {
          SubscriptionDetailsModal: e
        } = await Promise.resolve().then(t.bind(t, 519896));
        return n => (0, r.jsx)(e, A({
          appId: s,
          subscriptionType: p,
          skuId: d.skuId,
          guildId: c
        }, n))
      })
    } : true
  })
}

function z(e) {
  var n, i, l, o;
  let {
    skuId: c,
    appId: m,
    onDetails: b
  } = e, {
    analyticsLocations: v
  } = (0, p.ZP)(d.Z.APP_STOREFRONT), g = (0, u.e7)([P.Z], () => P.Z.getForSKU(c), [c]), f = (0, u.e7)([y.Z], () => y.Z.get(c), [c]), h = (0, T.M)(c);
  if (null == f) return null;
  let x = null != (i = f.name) ? i : "",
    O = null != (l = null == g || null == (n = g.description) ? true : n.trim()) ? l : true,
    I = (null == g ? true : g.headerBackground) != null && null != (o = w.Z.toURLSafe((0, k._W)(m, g.headerBackground, 256))) ? o : true,
    N = f.type === M.epS.DURABLE && h,
    Z = f.type === M.epS.DURABLE ? N ? D.intl.string(D.t.bm82mm) : D.intl.string(D.t["6gprwf"]) : true,
    {
      price: R
    } = f;
  return null == R ? null : (0, r.jsx)(s.I, {
    title: x,
    description: O,
    headerImage: I,
    availabilityLabel: Z,
    PurchaseButton: e => (0, r.jsx)(E.YG, C(A({}, e), {
      appId: m,
      sku: f
    })),
    onPurchase: () => {
      (0, j.r)({
        appId: m,
        skuId: f.id,
        analyticsLocations: v
      })
    },
    onDetails: null != b ? b : (0, S.Ew)(O) ? true : () => {
      (0, a.ZDy)(async () => {
        let {
          ItemDetailsModal: e
        } = await Promise.resolve().then(t.bind(t, 147496));
        return n => (0, r.jsx)(e, A({
          appId: m,
          skuId: c
        }, n))
      })
    }
  })
}