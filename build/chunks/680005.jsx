/** Chunk was on web.js **/
/** chunk id: 680005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YG: () => S,
  pV: () => T,
  rf: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk860911 = require("./860911.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk349167 = require("./349167.js"),
  Chunk929011 = require("./929011.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk110742 = require("./110742.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var v = function(e) {
  return e[e.AVAILABLE = 0] = "AVAILABLE", e[e.LOADING = 1] = "LOADING", e[e.UPCOMING_PLAN = 2] = "UPCOMING_PLAN", e[e.SUBSCRIBED = 3] = "SUBSCRIBED", e[e.UNAVAILABLE = 4] = "UNAVAILABLE", e
}({});

function I(e, t) {
  switch (e) {
    case 2:
      return h.intl.formatToPlainString(h.t.k1ew5O, {
        rate: t
      });
    case 3:
      return h.intl.formatToPlainString(h.t["Hs3Y+P"], {
        rate: t
      });
    case 4:
      return h.intl.string(h.t.DLAKbm)
  }
}

function T(e) {
  let {
    appId: t,
    onClick: n,
    onHasClicked: i,
    skuId: o,
    subscriptionPlan: a,
    icon: s,
    state: l = 0
  } = e, c = e => {
    n(e), null == i || i()
  }, u = null != a ? (0, f.xg)(a) : null, d = 1 === l;
  return 0 === l || d ? <A appId={t} skuId={o} onClick={c} loading={d} icon={s} text={null != u ? h.intl.formatToPlainString(h.t.i4T8v7, {
      rate: u
    }) : h.intl.string(h.t.uuzaAA)} /> : <N text={I(l, null != u ? u : "")} />
}

function S(e) {
  let {
    appId: t,
    onClick: n,
    onHasClicked: i,
    sku: o,
    icon: l
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(a.Z.APP_STOREFRONT), d = () => {
    (0, c.r)({
      appId: t,
      skuId: o.id,
      analyticsLocations: u
    })
  }, m = (0, _.M)(o.id), g = o.type === p.epS.DURABLE && m, {
    price: E
  } = o;
  if (null == E) return null;
  let b = e => {
    (null != n ? n : d)(e), null == i || i()
  };
  return g ? <N text={h.intl.string(h.t["6cfuDg"])} /> : <A appId={t} skuId={o.id} onClick={b} text={h.intl.format(h.t.Xp5WTk, {
      price: (0, f.T4)(E.amount, E.currency)
    })} icon={l} />
}

function A(e) {
  var {
    appId: t,
    skuId: n,
    onClick: a
  } = e, s = y(e, ["appId", "skuId", "onClick"]);
  let c = (0, l.Z)(),
    f = e => {
      if (d.default.track(p.rMx.STOREFRONT_PURCHASE_CLICKED, {
          application_id: t,
          sku_id: n
        }), !c) {
        e.preventDefault(), e.stopPropagation();
        let r = p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n),
          o = (0, i.Ui)(r, false);
        (0, u.uL)(o);
        return
      }
      null == a || a(e)
    };
  return <o.zxk{...b(g({}, s), {
    onClick: f
  })} />
}

function N(e) {
  let {
    text: t
  } = e;
  return <o.zxk text={t} disabled={true} variant={"primary"} />
}