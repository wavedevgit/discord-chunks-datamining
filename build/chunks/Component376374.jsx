/** Chunk was on 13088 **/
/** chunk id: 376374, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $P: () => I,
  rc: () => g,
  wF: () => O
});
var l, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk323125 = require("./323125.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk897100 = require("./897100.js"),
  Chunk638643 = require("./638643.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk56754 = require("./56754.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  O = ((l = {})[l.AVAILABLE = 0] = "AVAILABLE", l[l.LOADING = 1] = "LOADING", l[l.UPCOMING_PLAN = 2] = "UPCOMING_PLAN", l[l.SUBSCRIBED = 3] = "SUBSCRIBED", l[l.UNAVAILABLE = 4] = "UNAVAILABLE", l);

function g(t) {
  let {
    appId: e,
    onClick: n,
    onHasClicked: l,
    skuId: i,
    subscriptionPlan: u,
    icon: o,
    state: s = 0
  } = t, a = null != u ? (0, f._J)(u) : null, c = 1 === s;
  return 0 === s || c ? (0, r.jsx)(m, {
    appId: e,
    skuId: i,
    onClick: t => {
      n(t), null == l || l()
    },
    loading: c,
    icon: o,
    text: null != a ? b.intl.formatToPlainString(b.t.i4T8vz, {
      rate: a
    }) : b.intl.string(b.t.uuzaAK)
  }) : (0, r.jsx)(v, {
    text: function(t, e) {
      switch (t) {
        case 2:
          return b.intl.formatToPlainString(b.t.k1ew5N, {
            rate: e
          });
        case 3:
          return b.intl.formatToPlainString(b.t["Hs3Y+I"], {
            rate: e
          });
        case 4:
          return b.intl.string(b.t.DLAKbi)
      }
    }(s, null != a ? a : "")
  })
}

function I(t) {
  let {
    appId: e,
    onClick: n,
    onHasClicked: l,
    sku: i,
    icon: u
  } = t, {
    analyticsLocations: a
  } = (0, s.Ay)(o.A.APP_STOREFRONT), d = (0, S.L)(i.id), p = i.type === A.Puh.DURABLE && d, {
    price: O
  } = i;
  return null == O ? null : p ? (0, r.jsx)(v, {
    text: b.intl.string(b.t["6cfuDj"])
  }) : (0, r.jsx)(m, {
    appId: e,
    skuId: i.id,
    onClick: t => {
      (null != n ? n : () => {
        (0, c.k)({
          appId: e,
          skuId: i.id,
          analyticsLocations: a
        })
      })(t), null == l || l()
    },
    text: b.intl.format(b.t.Xp5WTn, {
      price: (0, f.$g)(O.amount, O.currency)
    }),
    icon: u
  })
}

function m(t) {
  var e, n;
  let {
    appId: l,
    skuId: o,
    onClick: s
  } = t, c = function(t, e) {
    if (null == t) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(t); r < n.length; r++) l = n[r], !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
      return i
    }
    if (i = function(t, e) {
        if (null == t) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(t);
        for (l = 0; l < i.length; l++) n = i[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
        return r
      }(t, e), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) l = n[r], !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
    return i
  }(t, ["appId", "skuId", "onClick"]), f = (0, a.A)();
  return (0, r.jsx)(u.Button, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), l.forEach(function(e) {
        var l;
        l = n[e], e in t ? Object.defineProperty(t, e, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = l
      })
    }
    return t
  }({}, c), n = n = {
    onClick: t => {
      if (p.default.track(A.HAw.STOREFRONT_PURCHASE_CLICKED, {
          application_id: l,
          sku_id: o
        }), !f) {
        t.preventDefault(), t.stopPropagation();
        let e = A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(l, o),
          n = (0, i.T2)(e, false);
        (0, d.pX)(n);
        return
      }
      null == s || s(t)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
}

function v(t) {
  let {
    text: e
  } = t;
  return (0, r.jsx)(u.Button, {
    text: e,
    disabled: true,
    variant: "primary"
  })
}