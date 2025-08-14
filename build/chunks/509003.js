/** Chunk was on web.js **/
/** chunk id: 509003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I8: () => y,
  Jc: () => I,
  LK: () => v,
  ON: () => b,
  bP: () => S,
  le: () => T,
  oK: () => C,
  sD: () => O,
  x3: () => g,
  xr: () => A,
  yA: () => E,
  yb: () => N
}), require("./49124.js"), require("./415506.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk782568 = require("./782568.js"),
  Chunk594190 = require("./594190.js"),
  Chunk104755 = require("./104755.js"),
  Chunk210817 = require("./210817.js"),
  Chunk817788 = require("./817788.js"),
  Chunk543696 = require("./543696.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  if (e.distributor === d.GQo.ROBLOX && null != e.sku) {
    var t, n;
    return "".concat(e.sku, ":").concat(null != (n = null == (t = e.gameMetadata) ? true : t[c.wF.PLACE_ID]) ? n : "")
  }
  return null
}

function E(e, t) {
  return null == e && null != t || null != e && null == t || null != e && null != t && !i().isEqual(e, t)
}

function b(e, t) {
  var n, r, i;
  let o = p({}, e),
    s = t.subgameInfo,
    l = t.application,
    u = Number(null == (n = e.gameMetadata) ? true : n[c.wF.ROBLOX_TIME_STARTED]);
  if ((isNaN(u) || 0 === u) && (u = null != (r = e.start) ? r : Date.now()), null == s) T(e) && (o.id = c.eB, o.name = d.EOG[d.GQo.ROBLOX]), o.gameMetadata = true, o.sku = true, o.start = u, o.lastFocused = Math.floor(u / 1e3);
  else {
    let t = {};
    null != l && (0, a.ik)({
      exePath: e.exePath,
      name: l.name,
      id: l.id,
      distributor: d.GQo.ROBLOX
    }) && (0, a.ik)({
      exePath: e.exePath,
      name: d.EOG[d.GQo.ROBLOX],
      id: c.eB,
      distributor: d.GQo.ROBLOX
    }) ? (o.id = l.id, o.name = l.name, o.gameName = l.name, o.start = Date.now(), o.lastFocused = Math.floor(Date.now() / 1e3)) : (o.id = c.eB, o.name = d.EOG[d.GQo.ROBLOX], o.start = u), t[c.wF.ROBLOX_TIME_STARTED] = u.toString(), o.sku = null != (i = s.universeId) ? i : true, null != s.placeId && (t[c.wF.PLACE_ID] = s.placeId), null != s.jobId && (t[c.wF.JOB_ID] = s.jobId), null != s.robloxUserId && (t[c.wF.ROBLOX_USER_ID] = s.robloxUserId), o.gameMetadata = Object.keys(t).length > 0 ? t : true
  }
  return o
}

function y(e) {
  return null == e[c.SQ.UNIVERSE_ID] || null == e[c.SQ.PLACE_ID] || null == e[c.SQ.JOB_ID] || null == e[c.SQ.USER_ID] ? null : {
    universeId: e[c.SQ.UNIVERSE_ID],
    placeId: e[c.SQ.PLACE_ID],
    jobId: e[c.SQ.JOB_ID],
    robloxUserId: e[c.SQ.USER_ID]
  }
}

function O(e) {
  return e.distributor === d.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[c.wF.PLACE_ID] ? JSON.stringify({
    placeId: e.gameMetadata[c.wF.PLACE_ID]
  }) : null
}

function v(e) {
  return e.distributor !== d.GQo.ROBLOX || null == e.gameMetadata || null == e.gameMetadata[c.wF.ROBLOX_TIME_STARTED] || e.id === c.eB || null == e.gameName ? {} : {
    name: f.intl.formatToPlainString(f.t.G6BGd3, {
      subgameName: e.gameName
    }),
    sync_id: e.gameMetadata[c.wF.ROBLOX_TIME_STARTED]
  }
}

function I(e) {
  var t;
  if (e.type !== d.IIU.PLAYING || (null == (t = e.metadata) ? true : t.distributor) !== d.GQo.ROBLOX || e.application_id === c.eB) return e;
  let n = Number(e.sync_id),
    r = p({}, e);
  return r.application_id = c.eB, r.name = d.EOG[d.GQo.ROBLOX], isNaN(n) || (r.timestamps = {
    start: n
  }), r
}

function T(e) {
  return e.distributor === d.GQo.ROBLOX && e.id !== c.eB
}

function S(e) {
  return e.thirdPartySkus.some(e => e.distributor === d.GQo.ROBLOX)
}
async function A(e) {
  var t;
  let n = null == (t = u.Z.getSupplementalData(e)) ? true : t.rootPlaceId;
  if (null != n) return await N(n);
  try {
    let t = await (0, s.v)([e]);
    if (null != t[e] && null != t[e].rootPlaceId) return await N(t[e].rootPlaceId)
  } catch (e) {
    return Promise.reject(e)
  }
  return Promise.reject(Error("Failed to find root place id for activity"))
}
async function N(e) {
  let t = await l.Z.getRobloxSubgameURL(e);
  return await (0, o.Z)(t)
}

function C(e) {
  return e.distributor !== d.GQo.ROBLOX || e.id === c.eB ? e : m(p({}, e), {
    id: c.eB,
    name: d.EOG[d.GQo.ROBLOX]
  })
}