/** Chunk was on 33563 **/
/** chunk id: 55926, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  B4: () => C,
  B8: () => z,
  Mp: () => G
}), require("./896048.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk206111 = require("./206111.jsx"),
  Chunk216410 = require("./216410.jsx"),
  Chunk885996 = require("./885996.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk915043 = require("./915043.js"),
  Chunk163437 = require("./163437.js"),
  Chunk955440 = require("./955440.js"),
  Chunk638643 = require("./638643.jsx"),
  Chunk3432 = require("./3432.jsx"),
  Chunk185438 = require("./185438.js"),
  Chunk71393 = require("./71393.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk371794 = require("./371794.js"),
  Chunk240248 = require("./240248.js"),
  Chunk998218 = require("./998218.js"),
  Chunk943775 = require("./943775.js"),
  Chunk237218 = require("./237218.js"),
  Chunk56754 = require("./56754.js"),
  Chunk376374 = require("./376374.jsx"),
  Chunk311321 = require("./311321.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk807128 = require("./807128.js");

function L(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function U(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let F = new Intl.DateTimeFormat(Chunk985018.intl.currentLocale, {
  month: "short",
  day: "numeric"
});

function G(e) {
  let {
    app: n,
    guildId: t,
    subscriptions: s,
    otps: u
  } = e, a = r.useMemo(() => (0, E.A)(n, 100), [n]), {
    bot: m
  } = n, b = r.useMemo(() => {
    var e;
    if ((null == m ? true : m.banner) == null) return;
    let n = (0, k.z)({
      id: m.id,
      banner: m.banner,
      size: 1024,
      canAnimate: false
    });
    return null != n && null != (e = S.A.toURLSafe(n)) ? e : true
  }, [m]), j = r.useMemo(() => {
    var e;
    if ((null == m ? true : m.banner) == null) return;
    let n = (0, k.z)({
      id: m.id,
      banner: m.banner,
      size: 1024,
      canAnimate: true
    });
    return null != n && null != (e = S.A.toURLSafe(n)) ? e : true
  }, [m]), v = (0, o.bG)([c.A], () => c.A.useReducedMotion), g = r.useMemo(() => [...s.map(e => e.skuId), ...u.map(e => e.skuId)], [s, u]), {
    analyticsLocations: f
  } = (0, p.Ay)(d.A.APP_STOREFRONT);
  return r.useEffect(() => {
    0 !== g.length && P.default.track(D.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: n.id,
      sku_ids: g,
      location_stack: f
    })
  }, [f, n.id, g]), (0, l.jsxs)("div", {
    className: _.iE,
    children: [(0, l.jsx)(i.l, {
      title: n.name,
      iconSrc: a,
      backgroundSrc: b,
      animatedBackgroundSrc: j,
      prefersReducedMotion: v
    }), (0, l.jsx)(B, {
      appId: n.id,
      subscriptions: s,
      otps: u,
      guildId: t
    })]
  })
}

function B(e) {
  let {
    appId: n,
    subscriptions: t,
    otps: r,
    guildId: i
  } = e;
  return (0, l.jsxs)("div", {
    className: _.q4,
    children: [t.length > 0 && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(R.A, {
        subscriptions: t
      }), (0, l.jsx)("div", {
        className: _.dD,
        children: t.map(e => (0, l.jsx)(C, {
          appId: n,
          guildId: i,
          listing: e,
          subscriptionType: (0, j.bg)(e.skuFlags) ? "user" : "guild"
        }, e.id))
      })]
    }), r.length > 0 && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: M.intl.string(M.t.yUGTs8)
      }), (0, l.jsx)("div", {
        className: _.dD,
        children: r.map(e => (0, l.jsx)(z, {
          skuId: e.skuId,
          appId: n
        }, e.id))
      })]
    })]
  })
}

function C(e) {
  var n, i;
  let {
    appId: s,
    guildId: c,
    listing: d,
    subscriptionType: p,
    onDetails: g
  } = e, {
    data: O
  } = (0, v.A)(d.skuId), P = null == O ? true : O[0], k = (0, o.bG)([y.A], () => y.A.get(d.skuId), [d.skuId]), I = (0, o.bG)([x.A], () => x.A.getGuild(c), [c]), A = (0, o.bG)([y.A], () => y.A.getParentSKU(d.skuId), [d.skuId]), S = (0, b.GD)(A, c), E = null == S ? true : S.subscription, w = (0, b.Ko)(A, c), R = null != E && (0, j.Uo)(E, k), G = null != w && (null == S || null == (i = S.subscriptionPlan) ? true : i.id) !== (null == w ? true : w.subscriptionPlan.id), B = false === R && (null == w ? true : w.subscriptionPlan.skuId) === d.skuId, C = (null == S ? true : S.subscriptionPlan.skuId) === d.skuId, {
    openModal: z,
    subscriptionPurchaseButtonState: Y,
    isGuildSubscribed: K
  } = (0, h.A)({
    skuId: d.skuId,
    initialSubscribeForGuild: c,
    analyticsLocation: D.ThZ.APP_STOREFRONT
  }), q = r.useMemo(() => {
    var e;
    return null == (e = d.benefits) ? true : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, f.N)(s, e.icon)
    }))
  }, [s, d.benefits]), H = r.useMemo(() => null != d.thumbnail ? (0, N.t)(s, d.thumbnail, 256) : true, [s, d.thumbnail]), V = r.useCallback(e => (0, l.jsx)(T.rc, U(L({}, e), {
    appId: s,
    subscriptionType: p,
    skuId: d.skuId,
    subscriptionPlan: P,
    state: Y
  })), [s, p, d.skuId, P, Y]), Z = r.useMemo(() => {
    if (G && (null == E ? true : E.currentPeriodEnd) != null) {
      let e = F.format(null == E ? true : E.currentPeriodEnd);
      if (C) return M.intl.formatToPlainString(M.t.EV2lZz, {
        date: e
      });
      if (B) return M.intl.formatToPlainString(M.t["2w6+NN"], {
        date: e
      })
    }
    if (K) return (0, l.jsxs)(l.Fragment, {
      children: [null != I && (0, l.jsx)(m.A, {
        guild: I,
        size: m.A.Sizes.MINI
      }), M.intl.string(M.t.l8ufqL)]
    })
  }, [null == E ? true : E.currentPeriodEnd, I, G, C, K, B]), J = null != Z ? (0, l.jsx)(a.Text, {
    color: "text-default",
    variant: "text-sm/normal",
    className: _.BJ,
    children: Z
  }) : true;
  return (0, l.jsx)(u.OP, {
    title: d.summary,
    subtitle: J,
    maxBenefits: null != J ? u.GS - 1 : u.GS,
    description: null != (n = d.description) ? n : true,
    imgSrc: H,
    onPurchase: z,
    renderPurchaseButton: V,
    benefitItems: null != q ? q.map(e => (0, l.jsx)(u.FY, {
      description: e.title,
      icon: e.icon
    }, e.id)) : true,
    onDetails: null != g ? g : null != q ? () => {
      (0, a.mMO)(async () => {
        let {
          SubscriptionDetailsModal: e
        } = await t.e("64850").then(t.bind(t, 168393));
        return n => (0, l.jsx)(e, L({
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
  var n, r, i, u;
  let {
    skuId: c,
    appId: m,
    onDetails: b
  } = e, {
    analyticsLocations: j
  } = (0, p.Ay)(d.A.APP_STOREFRONT), v = (0, o.bG)([O.A], () => O.A.getForSKU(c), [c]), f = (0, o.bG)([y.A], () => y.A.get(c), [c]), h = (0, w.L)(c);
  if (null == f) return null;
  let x = null != (n = f.name) ? n : "",
    P = null != (r = null == v || null == (u = v.description) ? true : u.trim()) ? r : true,
    k = (null == v ? true : v.headerBackground) != null && null != (i = S.A.toURLSafe((0, I.YE)(m, v.headerBackground, 256))) ? i : true,
    E = f.type === D.Puh.DURABLE && h,
    N = f.type === D.Puh.DURABLE ? E ? M.intl.string(M.t.bm82mm) : M.intl.string(M.t["6gprwf"]) : true,
    {
      price: R
    } = f;
  return null == R ? null : (0, l.jsx)(s.A, {
    title: x,
    description: P,
    headerImage: k,
    availabilityLabel: N,
    PurchaseButton: e => (0, l.jsx)(T.$P, U(L({}, e), {
      appId: m,
      sku: f
    })),
    onPurchase: () => {
      (0, g.k)({
        appId: m,
        skuId: f.id,
        analyticsLocations: j
      })
    },
    onDetails: null != b ? b : (0, A.uJ)(P) ? true : () => {
      (0, a.mMO)(async () => {
        let {
          ItemDetailsModal: e
        } = await t.e("70104").then(t.bind(t, 963179));
        return n => (0, l.jsx)(e, L({
          appId: m,
          skuId: c
        }, n))
      })
    }
  })
}