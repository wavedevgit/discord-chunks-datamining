/** Chunk was on web.js **/
/** chunk id: 931260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk439372 = require("./439372.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {},
  _ = 0,
  h = 15 * Chunk927813.A.Millis.SECOND;

function m() {
  p = u({}, a.A.getCollapsedCategories())
}

function g() {
  __OVERLAY__ || (clearTimeout(_), _ = setTimeout(() => y({}), h))
}
async function E(e, t) {
  null == e || e === l.ME ? await r.Bo.patch({
    url: l.Rsh.USER_GUILD_SETTINGS(l.ME),
    body: t,
    rejectWithError: false
  }) : await y(null != t ? {
    [null != e ? e : l.ME]: t
  } : {})
}
async function y(e) {
  clearTimeout(_);
  let t = 0 !== Object.keys(e).length,
    n = a.A.getCollapsedCategories(),
    i = b();
  for (let r in i) {
    let i = o.A.getChannel(r);
    null != i && null != i.guild_id && (i.guild_id in e || (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = f(u({}, e[i.guild_id].channel_overrides[i.id]), {
      collapsed: i.id in n
    }), t = true)
  }
  return t ? (p = u({}, n), delete e[l.YYv], (await r.Bo.patch({
    url: l.Rsh.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    },
    rejectWithError: false
  })).body) : []
}

function b() {
  let e = {},
    t = a.A.getCollapsedCategories();
  for (let n in t) t[n] !== p[n] && (e[n] = true);
  for (let n in p) t[n] !== p[n] && (e[n] = true);
  return e
}

function O() {
  p = u({}, a.A.getCollapsedCategories())
}
class v extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      CATEGORY_COLLAPSE: g,
      CATEGORY_EXPAND: g,
      CATEGORY_COLLAPSE_ALL: g,
      CATEGORY_EXPAND_ALL: g,
      POST_CONNECTION_OPEN: m,
      USER_GUILD_SETTINGS_FULL_UPDATE: O
    }), c(this, "saveUserGuildSettings", E), c(this, "saveUserGuildSettingsBulk", y)
  }
}
let A = new v