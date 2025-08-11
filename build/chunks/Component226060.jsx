/** Chunk was on web.js **/
/** chunk id: 226060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk430824 = require("./430824.js"),
  Chunk506071 = require("./506071.js"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk57949 = require("./57949.jsx"),
  Chunk400916 = require("./400916.jsx"),
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

function y(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: i
  } = e, m = (0, a.e7)([f.Z], () => f.Z.getGuildProduct(n)), E = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), y = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), O = (0, u.n)();
  if (o()(null != E, "guild cannot be null"), o()(null != m, "guildProductListing cannot be null"), (0, d.SO)(E)) return (0, r.jsx)(s.ua7, {
    text: h.intl.string(h.t.sAJr9f),
    children: e => (0, r.jsx)(s.zxk, b(g({
      variant: "primary",
      text: h.intl.string(h.t.xUi3BA)
    }, e), {
      disabled: true
    }))
  });
  if (m.has_entitlement) return null != m.attachments ? (0, r.jsx)(p.Z, {
    guildId: E.id,
    productId: m.id
  }) : (0, r.jsx)(s.zxk, {
    variant: "secondary",
    text: h.intl.string(h.t.RcTOGB),
    disabled: true
  });
  {
    let e = () => (0, _.z)({
      guildProductListing: m,
      guildId: E.id,
      sourceAnalyticsLocations: i
    });
    return (0, r.jsx)(s.gtL, {
      shineSize: s.gtL.ShineSizes.SMALL,
      pauseAnimation: y || !O,
      onClick: e,
      children: h.intl.string(h.t.xUi3BA)
    })
  }
}