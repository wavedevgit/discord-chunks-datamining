/** Chunk was on web.js **/
/** chunk id: 847521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ar: () => m,
  CO: () => p,
  Dh: () => h,
  MT: () => f,
  bB: () => E,
  hD: () => d,
  n1: () => g
}), require("./457529.js"), require("./735438.js"), require("./975807.js"), require("./15285.js");
var Chunk477394 = require("./477394.js");
require("./206626.js");
var Chunk227309 = require("./227309.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  if (e.distributor === a.d3x.ROBLOX && null != e.sku) {
    var t, n;
    return "".concat(e.sku, ":").concat(null != (t = null == (n = e.gameMetadata) ? true : n[i.IO.PLACE_ID]) ? t : "")
  }
  return null
}

function f(e) {
  return e.distributor === a.d3x.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.IO.PLACE_ID] ? JSON.stringify({
    placeId: e.gameMetadata[i.IO.PLACE_ID]
  }) : null
}

function p(e) {
  return e.distributor !== a.d3x.ROBLOX || null == e.gameMetadata || null == e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] || e.id === i.a7 || null == e.gameName ? {} : {
    name: e.gameName,
    sync_id: e.gameMetadata[i.IO.ROBLOX_TIME_STARTED]
  }
}

function _(e) {
  var t;
  return (null == (t = e.metadata) ? true : t.distributor) === a.d3x.ROBLOX && e.application_id !== i.a7
}

function h(e) {
  if (!_(e)) return e;
  let t = r.a.getConfig({
    location: "transformRobloxSubgameNames"
  }).alternativeTitle ? s.t.HjVwG3 : s.t.G6BGdx;
  return u(l({}, e), {
    name: s.intl.formatToPlainString(t, {
      subgameName: e.name
    })
  })
}

function m(e) {
  if (e.type !== a.$pd.PLAYING || !_(e)) return e;
  let t = Number(e.sync_id),
    n = l({}, e);
  return n.application_id = i.a7, n.name = a.gG4[a.d3x.ROBLOX], isNaN(t) || (n.timestamps = {
    start: t
  }), n
}

function g(e) {
  return e.distributor === a.d3x.ROBLOX && e.id !== i.a7
}

function E(e) {
  return e.thirdPartySkus.some(e => e.distributor === a.d3x.ROBLOX)
}