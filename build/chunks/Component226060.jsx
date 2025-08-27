/** Chunk was on web.js **/
/** chunk id: 226060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk57949 = require("./57949.jsx"),
  Chunk400916 = require("./400916.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: i
  } = e, h = (0, o.e7)([d.Z], () => d.Z.getGuildProduct(n)), g = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]);
  if (a()(null != g, "guild cannot be null"), a()(null != h, "guildProductListing cannot be null"), (0, u.SO)(g)) return (0, r.jsx)(l.ua7, {
    text: p.intl.string(p.t.sAJr9f),
    children: e => (0, r.jsx)(s.zx, E(m({
      variant: "primary",
      text: p.intl.string(p.t.xUi3BA)
    }, e), {
      disabled: true
    }))
  });
  if (h.has_entitlement) return null != h.attachments ? (0, r.jsx)(_.Z, {
    guildId: g.id,
    productId: h.id
  }) : (0, r.jsx)(s.zx, {
    variant: "secondary",
    text: p.intl.string(p.t.RcTOGB),
    disabled: true
  });
  {
    let e = () => (0, f.z)({
      guildProductListing: h,
      guildId: g.id,
      sourceAnalyticsLocations: i
    });
    return (0, r.jsx)(s.zx, {
      text: p.intl.string(p.t.xUi3BA),
      onClick: e
    })
  }
}