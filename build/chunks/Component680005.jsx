/** Chunk was on 74891 **/
/** chunk id: 680005, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  YG: () => _,
  pV: () => g,
  rf: () => b
});
var i, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk860911 = require("./860911.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk349167 = require("./349167.js"),
  Chunk929011 = require("./929011.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk110742 = require("./110742.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  b = ((i = {})[i.AVAILABLE = 0] = "AVAILABLE", i[i.LOADING = 1] = "LOADING", i[i.UPCOMING_PLAN = 2] = "UPCOMING_PLAN", i[i.SUBSCRIBED = 3] = "SUBSCRIBED", i[i.UNAVAILABLE = 4] = "UNAVAILABLE", i);

function g(t) {
  let {
    appId: e,
    onClick: n,
    onHasClicked: i,
    skuId: l,
    subscriptionPlan: o,
    icon: a,
    state: u = 0
  } = t, s = null != o ? (0, f.xg)(o) : null, c = 1 === u;
  return 0 === u || c ? (0, r.jsx)(y, {
    appId: e,
    skuId: l,
    onClick: t => {
      n(t), null == i || i()
    },
    loading: c,
    icon: a,
    text: null != s ? I.intl.formatToPlainString(I.t.i4T8v7, {
      rate: s
    }) : I.intl.string(I.t.uuzaAA)
  }) : (0, r.jsx)(P, {
    text: function(t, e) {
      switch (t) {
        case 2:
          return I.intl.formatToPlainString(I.t.k1ew5O, {
            rate: e
          });
        case 3:
          return I.intl.formatToPlainString(I.t["Hs3Y+P"], {
            rate: e
          });
        case 4:
          return I.intl.string(I.t.DLAKbm)
      }
    }(u, null != s ? s : "")
  })
}

function _(t) {
  let {
    appId: e,
    onClick: n,
    onHasClicked: i,
    sku: l,
    icon: o
  } = t, {
    analyticsLocations: s
  } = (0, u.ZP)(a.Z.APP_STOREFRONT), d = (0, S.M)(l.id), p = l.type === O.epS.DURABLE && d, {
    price: b
  } = l;
  return null == b ? null : p ? (0, r.jsx)(P, {
    text: I.intl.string(I.t["6cfuDg"])
  }) : (0, r.jsx)(y, {
    appId: e,
    skuId: l.id,
    onClick: t => {
      (null != n ? n : () => {
        (0, c.r)({
          appId: e,
          skuId: l.id,
          analyticsLocations: s
        })
      })(t), null == i || i()
    },
    text: I.intl.format(I.t.Xp5WTk, {
      price: (0, f.T4)(b.amount, b.currency)
    }),
    icon: o
  })
}

function y(t) {
  var e, n, {
      appId: i,
      skuId: a,
      onClick: u
    } = t,
    c = function(t, e) {
      if (null == t) return {};
      var n, i, r = function(t, e) {
        if (null == t) return {};
        var n, i, r = {},
          l = Object.keys(t);
        for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
        return r
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(t);
        for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
      }
      return r
    }(t, ["appId", "skuId", "onClick"]);
  let f = (0, s.Z)();
  return (0, r.jsx)(o.zxk, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), i.forEach(function(e) {
        var i;
        i = n[e], e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = i
      })
    }
    return t
  }({}, c), n = n = {
    onClick: t => {
      if (p.default.track(O.rMx.STOREFRONT_PURCHASE_CLICKED, {
          application_id: i,
          sku_id: a
        }), !f) {
        t.preventDefault(), t.stopPropagation();
        let e = O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(i, a),
          n = (0, l.Ui)(e, false);
        (0, d.uL)(n);
        return
      }
      null == u || u(t)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
}

function P(t) {
  let {
    text: e
  } = t;
  return (0, r.jsx)(o.zxk, {
    text: e,
    disabled: true,
    variant: "primary"
  })
}