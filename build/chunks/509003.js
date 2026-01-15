/** Chunk was on web.js **/
/** chunk id: 509003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FT: () => h,
  Jc: () => m,
  LK: () => p,
  bP: () => E,
  le: () => g,
  sD: () => f,
  x3: () => d
}), require("./49124.js"), require("./392711.js"), require("./782568.js"), require("./594190.js");
var Chunk355281 = require("./355281.js");
require("./210817.js");
var Chunk817788 = require("./817788.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  if (e.distributor === a.GQo.ROBLOX && null != e.sku) {
    var t, n;
    return "".concat(e.sku, ":").concat(null != (n = null == (t = e.gameMetadata) ? true : t[i.wF.PLACE_ID]) ? n : "")
  }
  return null
}

function f(e) {
  return e.distributor === a.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.wF.PLACE_ID] ? JSON.stringify({
    placeId: e.gameMetadata[i.wF.PLACE_ID]
  }) : null
}

function p(e) {
  return e.distributor !== a.GQo.ROBLOX || null == e.gameMetadata || null == e.gameMetadata[i.wF.ROBLOX_TIME_STARTED] || e.id === i.eB || null == e.gameName ? {} : {
    name: e.gameName,
    sync_id: e.gameMetadata[i.wF.ROBLOX_TIME_STARTED]
  }
}

function _(e) {
  var t;
  return (null == (t = e.metadata) ? true : t.distributor) === a.GQo.ROBLOX && e.application_id !== i.eB
}

function h(e) {
  if (!_(e)) return e;
  let t = r.m.getConfig({
    location: "transformRobloxSubgameNames"
  }).alternativeTitle ? o.t.HjVwG3 : o.t.G6BGdx;
  return u(l({}, e), {
    name: o.intl.formatToPlainString(t, {
      subgameName: e.name
    })
  })
}

function m(e) {
  if (e.type !== a.IIU.PLAYING || !_(e)) return e;
  let t = Number(e.sync_id),
    n = l({}, e);
  return n.application_id = i.eB, n.name = a.EOG[a.GQo.ROBLOX], isNaN(t) || (n.timestamps = {
    start: t
  }), n
}

function g(e) {
  return e.distributor === a.GQo.ROBLOX && e.id !== i.eB
}

function E(e) {
  return e.thirdPartySkus.some(e => e.distributor === a.GQo.ROBLOX)
}