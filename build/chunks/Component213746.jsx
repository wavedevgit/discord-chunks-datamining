/** Chunk was on 84283 **/
/** chunk id: 213746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./35282.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk765717 = require("./765717.jsx"),
  Chunk283836 = require("./283836.js"),
  Chunk507608 = require("./507608.jsx"),
  Chunk955335 = require("./955335.jsx"),
  Chunk171246 = require("./171246.js"),
  Chunk55563 = require("./55563.js"),
  Chunk881294 = require("./881294.js"),
  Chunk133743 = require("./133743.js"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk51324 = require("./51324.js");

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
        enumerable: true,
        configurable: true,
        writable: true
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
    className: v.storeContainer,
    children: [(0, r.jsx)(y, {
      application: t
    }), (0, r.jsx)(S, {
      application: t
    })]
  })
}

function y(e) {
  let {
    application: t
  } = e, {
    subscriptions: n,
    otps: a
  } = (0, d.q)(t.id);
  return (0, r.jsxs)("div", {
    className: v.storeContainer,
    children: [n.length > 0 && (0, r.jsxs)("div", {
      className: v.productSection,
      children: [(0, r.jsx)(p.r, {
        subscriptions: n,
        color: "header-primary"
      }), (0, r.jsx)("div", {
        className: v.products,
        children: n.map(e => {
          let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
          return (0, r.jsx)(u.zz, {
            appId: t.id,
            listing: e,
            subscriptionType: n,
            onDetails: () => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
          }, e.id)
        })
      })]
    }), a.length > 0 && (0, r.jsxs)("div", {
      className: v.productSection,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: x.intl.string(x.t.yUGTs8)
      }), (0, r.jsx)("div", {
        className: v.products,
        children: a.map(e => (0, r.jsx)(u.hd, {
          skuId: e.skuId,
          appId: t.id,
          onDetails: () => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
        }, e.id))
      })]
    }), (0, r.jsx)(c.Z, {
      path: b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: true,
      render: e => (0, r.jsx)(I, C({}, e))
    })]
  })
}

function I(e) {
  let {
    match: {
      params: {
        applicationId: t,
        skuId: i
      }
    }
  } = e, o = (0, l.e7)([h.Z], () => h.Z.get(i), [i]), c = (0, l.e7)([h.Z], () => null != i ? h.Z.getParentSKU(i) : true, [i]), d = a.useId(), u = a.useCallback(() => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE)), [t]);
  return a.useLayoutEffect(() => {
    var e;
    switch (null == o ? true : o.type) {
      case b.epS.CONSUMABLE:
      case b.epS.DURABLE:
        return void(0, s.ZDy)(async () => {
          let {
            ItemDetailsModal: e
          } = await Promise.resolve().then(n.bind(n, 147496));
          return n => (0, r.jsx)(e, C({
            appId: t,
            skuId: i
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            P() || (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE))
          }
        });
      case b.epS.SUBSCRIPTION:
        if ((null == c ? true : c.flags) == null) return;
        return e = (0, m.KW)(c.flags) ? "user" : "guild", void(0, s.ZDy)(async () => {
          let {
            SubscriptionDetailsModal: a
          } = await Promise.resolve().then(n.bind(n, 519896));
          return n => (0, r.jsx)(a, C({
            appId: t,
            subscriptionType: e,
            skuId: i,
            guildId: true
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            P() || (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE))
          }
        })
    }
  }, [t, d, u, null == c ? true : c.flags, null == o ? true : o.flags, null == o ? true : o.type, i]), a.useLayoutEffect(() => () => {
    (0, s.Mr3)(d)
  }, [d]), null
}

function S(e) {
  let {
    application: t
  } = e, n = (0, g.nu)(), a = t.terms_of_service_url, l = t.privacy_policy_url;
  if (null == a && null == l) return null;
  let s = (e, t) => (0, r.jsx)(o.Z, {
    href: t,
    trusted: !n,
    children: e
  });
  return (0, r.jsx)("div", {
    className: v.legalContainer,
    children: (0, r.jsx)(i.xvT, {
      color: "header-primary",
      variant: "text-sm/normal",
      children: null != a && null != l ? x.intl.format(x.t.nylPOT, {
        termsHook: e => s(e, a),
        privacyHook: e => s(e, l)
      }) : null != a ? x.intl.format(x.t["0cPyDz"], {
        termsHook: e => s(e, a)
      }) : null != l ? x.intl.format(x.t["loYGC/"], {
        privacyHook: e => s(e, l)
      }) : null
    })
  })
}

function P() {
  return window.location.pathname.startsWith("/login")
}