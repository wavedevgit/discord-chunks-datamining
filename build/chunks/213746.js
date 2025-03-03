/** Chunk was on 37697 **/
n.d(t, {
  Z: () => j
}), n(301563), n(789020);
var r = n(200651),
  i = n(192379),
  a = n(793030),
  l = n(442837),
  o = n(481060),
  s = n(794295),
  c = n(765717),
  d = n(283836),
  u = n(507608),
  p = n(955335),
  m = n(171246),
  h = n(55563),
  g = n(881294),
  f = n(133743),
  _ = n(979007),
  v = n(981631),
  b = n(388032),
  x = n(323300);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function j(e) {
  let {
    application: t
  } = e;
  return (0, r.jsxs)("div", {
    className: x.storeContainer,
    children: [(0, r.jsx)(y, {
      application: t
    }), (0, r.jsx)(O, {
      application: t
    })]
  })
}

function y(e) {
  let {
    application: t
  } = e, {
    subscriptions: n,
    otps: i
  } = (0, d.q)(t.id);
  return (0, r.jsxs)("div", {
    className: x.storeContainer,
    children: [n.length > 0 && (0, r.jsxs)("div", {
      className: x.productSection,
      children: [(0, r.jsx)(p.r, {
        subscriptions: n,
        color: "header-primary"
      }), (0, r.jsx)("div", {
        className: x.products,
        children: n.map(e => {
          let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
          return (0, r.jsx)(u.zz, {
            appId: t.id,
            listing: e,
            subscriptionType: n,
            onDetails: () => (0, f.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
          }, e.id)
        })
      })]
    }), i.length > 0 && (0, r.jsxs)("div", {
      className: x.productSection,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: b.NW.string(b.t.yUGTs7)
      }), (0, r.jsx)("div", {
        className: x.products,
        children: i.map(e => (0, r.jsx)(u.hd, {
          skuId: e.skuId,
          appId: t.id,
          onDetails: () => (0, f.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
        }, e.id))
      })]
    }), (0, r.jsx)(c.Z, {
      path: v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: !0,
      render: e => (0, r.jsx)(I, C({}, e))
    })]
  })
}

function I(e) {
  let {
    match: {
      params: {
        applicationId: t,
        skuId: a
      }
    }
  } = e, s = (0, l.e7)([h.Z], () => h.Z.get(a), [a]), c = (0, l.e7)([h.Z], () => null != a ? h.Z.getParentSKU(a) : void 0, [a]), d = i.useId(), u = i.useCallback(() => (0, f.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE)), [t]);
  return i.useLayoutEffect(() => {
    var e;
    switch (null == s ? void 0 : s.type) {
      case v.epS.CONSUMABLE:
      case v.epS.DURABLE:
        return void(0, o.ZDy)(async () => {
          let {
            ItemDetailsModal: e
          } = await Promise.all([n.e("97349"), n.e("10115")]).then(n.bind(n, 147496));
          return n => (0, r.jsx)(e, C({
            appId: t,
            skuId: a
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            N() || (0, f.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
          }
        });
      case v.epS.SUBSCRIPTION:
        if ((null == c ? void 0 : c.flags) == null) return;
        return e = (0, m.KW)(c.flags) ? "user" : "guild", void(0, o.ZDy)(async () => {
          let {
            SubscriptionDetailsModal: i
          } = await Promise.all([n.e("97349"), n.e("32717")]).then(n.bind(n, 519896));
          return n => (0, r.jsx)(i, C({
            appId: t,
            subscriptionType: e,
            skuId: a,
            guildId: void 0
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            N() || (0, f.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
          }
        })
    }
  }, [t, d, u, null == c ? void 0 : c.flags, null == s ? void 0 : s.flags, null == s ? void 0 : s.type, a]), i.useLayoutEffect(() => () => {
    (0, o.Mr3)(d)
  }, [d]), null
}

function O(e) {
  let {
    application: t
  } = e, n = (0, g.nu)(), i = t.terms_of_service_url, l = t.privacy_policy_url;
  if (null == i && null == l) return null;
  let o = (e, t) => (0, r.jsx)(s.Z, {
    href: t,
    trusted: !n,
    children: e
  });
  return (0, r.jsx)("div", {
    className: x.legalContainer,
    children: (0, r.jsx)(a.xv, {
      color: "header-primary",
      variant: "text-sm/normal",
      children: null != i && null != l ? b.NW.format(b.t.nylPOT, {
        termsHook: e => o(e, i),
        privacyHook: e => o(e, l)
      }) : null != i ? b.NW.format(b.t["0cPyDw"], {
        termsHook: e => o(e, i)
      }) : null != l ? b.NW.format(b.t.loYGCw, {
        privacyHook: e => o(e, l)
      }) : null
    })
  })
}

function N() {
  return window.location.pathname.startsWith("/login")
}