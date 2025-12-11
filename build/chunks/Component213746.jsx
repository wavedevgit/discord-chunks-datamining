/** Chunk was on 92504 **/
/** chunk id: 213746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk156870 = require("./156870.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function _(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: C.storeContainer,
    children: [(0, a.jsx)(y, {
      application: t
    }), (0, a.jsx)(S, {
      application: t
    })]
  })
}

function y(e) {
  let {
    application: t
  } = e, {
    subscriptions: n,
    otps: r
  } = (0, d.q)(t.id);
  return (0, a.jsxs)("div", {
    className: C.storeContainer,
    children: [n.length > 0 && (0, a.jsxs)("div", {
      className: C.productSection,
      children: [(0, a.jsx)(p.r, {
        subscriptions: n,
        color: "header-primary"
      }), (0, a.jsx)("div", {
        className: C.products,
        children: n.map(e => {
          let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
          return (0, a.jsx)(u.zz, {
            appId: t.id,
            listing: e,
            subscriptionType: n,
            onDetails: () => (0, b.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
          }, e.id)
        })
      })]
    }), r.length > 0 && (0, a.jsxs)("div", {
      className: C.productSection,
      children: [(0, a.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: v.intl.string(v.t.yUGTs8)
      }), (0, a.jsx)("div", {
        className: C.products,
        children: r.map(e => (0, a.jsx)(u.hd, {
          skuId: e.skuId,
          appId: t.id,
          onDetails: () => (0, b.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
        }, e.id))
      })]
    }), (0, a.jsx)(c.Z, {
      path: x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: true,
      render: e => (0, a.jsx)(I, j({}, e))
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
  } = e, o = (0, l.e7)([h.Z], () => h.Z.get(i), [i]), c = (0, l.e7)([h.Z], () => null != i ? h.Z.getParentSKU(i) : true, [i]), d = r.useId(), u = r.useCallback(() => (0, b.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, g.GlobalDiscoveryAppsSections.STORE)), [t]);
  return r.useLayoutEffect(() => {
    var e;
    switch (null == o ? true : o.type) {
      case x.epS.CONSUMABLE:
      case x.epS.DURABLE:
        return void(0, s.ZDy)(async () => {
          let {
            ItemDetailsModal: e
          } = await Promise.resolve().then(n.bind(n, 147496));
          return n => (0, a.jsx)(e, j({
            appId: t,
            skuId: i
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            P() || (0, b.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, g.GlobalDiscoveryAppsSections.STORE))
          }
        });
      case x.epS.SUBSCRIPTION:
        if ((null == c ? true : c.flags) == null) return;
        return e = (0, m.KW)(c.flags) ? "user" : "guild", void(0, s.ZDy)(async () => {
          let {
            SubscriptionDetailsModal: r
          } = await Promise.resolve().then(n.bind(n, 519896));
          return n => (0, a.jsx)(r, j({
            appId: t,
            subscriptionType: e,
            skuId: i,
            guildId: true
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            P() || (0, b.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, g.GlobalDiscoveryAppsSections.STORE))
          }
        })
    }
  }, [t, d, u, null == c ? true : c.flags, null == o ? true : o.flags, null == o ? true : o.type, i]), r.useLayoutEffect(() => () => {
    (0, s.Mr3)(d)
  }, [d]), null
}

function S(e) {
  let {
    application: t
  } = e, n = (0, f.nu)(), r = t.terms_of_service_url, l = t.privacy_policy_url;
  if (null == r && null == l) return null;
  let s = (e, t) => (0, a.jsx)(o.Z, {
    href: t,
    trusted: !n,
    children: e
  });
  return (0, a.jsx)("div", {
    className: C.legalContainer,
    children: (0, a.jsx)(i.xvT, {
      color: "header-primary",
      variant: "text-sm/normal",
      children: null != r && null != l ? v.intl.format(v.t.nylPOT, {
        termsHook: e => s(e, r),
        privacyHook: e => s(e, l)
      }) : null != r ? v.intl.format(v.t["0cPyDz"], {
        termsHook: e => s(e, r)
      }) : null != l ? v.intl.format(v.t["loYGC/"], {
        privacyHook: e => s(e, l)
      }) : null
    })
  })
}

function P() {
  return window.location.pathname.startsWith("/login")
}