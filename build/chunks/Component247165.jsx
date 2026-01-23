/** Chunk was on 28636 **/
/** chunk id: 247165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./747238.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk549711 = require("./549711.jsx"),
  Chunk123791 = require("./123791.js"),
  Chunk55926 = require("./55926.jsx"),
  Chunk311321 = require("./311321.jsx"),
  Chunk163437 = require("./163437.js"),
  Chunk67480 = require("./67480.js"),
  Chunk412461 = require("./412461.js"),
  Chunk656106 = require("./656106.js"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70345 = require("./70345.js");

function j(e) {
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

function A(e) {
  let {
    application: t
  } = e;
  return (0, r.jsxs)("div", {
    className: v.ZM,
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
    otps: l
  } = (0, d.C)(t.id);
  return (0, r.jsxs)("div", {
    className: v.ZM,
    children: [n.length > 0 && (0, r.jsxs)("div", {
      className: v.dD,
      children: [(0, r.jsx)(p.A, {
        subscriptions: n,
        color: "text-strong"
      }), (0, r.jsx)("div", {
        className: v.ZE,
        children: n.map(e => {
          let n = (0, h.bg)(e.skuFlags) ? "user" : "guild";
          return (0, r.jsx)(u.B4, {
            appId: t.id,
            listing: e,
            subscriptionType: n,
            onDetails: () => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
          }, e.id)
        })
      })]
    }), l.length > 0 && (0, r.jsxs)("div", {
      className: v.dD,
      children: [(0, r.jsx)(i.DZT, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: x.intl.string(x.t.yUGTs8)
      }), (0, r.jsx)("div", {
        className: v.ZE,
        children: l.map(e => (0, r.jsx)(u.B8, {
          skuId: e.skuId,
          appId: t.id,
          onDetails: () => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
        }, e.id))
      })]
    }), (0, r.jsx)(c.A, {
      path: f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: true,
      render: e => (0, r.jsx)(C, j({}, e))
    })]
  })
}

function C(e) {
  let {
    match: {
      params: {
        applicationId: t,
        skuId: i
      }
    }
  } = e, o = (0, a.bG)([m.A], () => m.A.get(i), [i]), c = (0, a.bG)([m.A], () => null != i ? m.A.getParentSKU(i) : true, [i]), d = l.useId(), u = l.useCallback(() => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE)), [t]);
  return l.useLayoutEffect(() => {
    var e;
    switch (null == o ? true : o.type) {
      case f.Puh.CONSUMABLE:
      case f.Puh.DURABLE:
        return void(0, s.mMO)(async () => {
          let {
            ItemDetailsModal: e
          } = await Promise.resolve().then(n.bind(n, 963179));
          return n => (0, r.jsx)(e, j({
            appId: t,
            skuId: i
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            S() || (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE))
          }
        });
      case f.Puh.SUBSCRIPTION:
        if ((null == c ? true : c.flags) == null) return;
        return e = (0, h.bg)(c.flags) ? "user" : "guild", void(0, s.mMO)(async () => {
          let {
            SubscriptionDetailsModal: l
          } = await Promise.resolve().then(n.bind(n, 168393));
          return n => (0, r.jsx)(l, j({
            appId: t,
            subscriptionType: e,
            skuId: i,
            guildId: true
          }, n))
        }, {
          modalKey: d,
          onCloseCallback: () => {
            S() || (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE))
          }
        })
    }
  }, [t, d, u, null == c ? true : c.flags, null == o ? true : o.flags, null == o ? true : o.type, i]), l.useLayoutEffect(() => () => {
    (0, s.OoC)(d)
  }, [d]), null
}

function O(e) {
  let {
    application: t
  } = e, n = (0, g.DB)(), l = t.terms_of_service_url, a = t.privacy_policy_url;
  if (null == l && null == a) return null;
  let s = (e, t) => (0, r.jsx)(o.A, {
    href: t,
    trusted: !n,
    children: e
  });
  return (0, r.jsx)("div", {
    className: v.V6,
    children: (0, r.jsx)(i.EYj, {
      color: "text-strong",
      variant: "text-sm/normal",
      children: null != l && null != a ? x.intl.format(x.t.nylPOT, {
        termsHook: e => s(e, l),
        privacyHook: e => s(e, a)
      }) : null != l ? x.intl.format(x.t["0cPyDz"], {
        termsHook: e => s(e, l)
      }) : null != a ? x.intl.format(x.t["loYGC/"], {
        privacyHook: e => s(e, a)
      }) : null
    })
  })
}

function S() {
  return window.location.pathname.startsWith("/login")
}