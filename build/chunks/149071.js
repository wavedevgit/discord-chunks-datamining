/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(544891),
  i = n(147913),
  o = n(680089),
  a = n(592125),
  s = n(70956),
  l = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  h = 15 * s.Z.Millis.SECOND;

function m() {
  p = u({}, o.Z.getCollapsedCategories())
}

function g() {
  __OVERLAY__ || (clearTimeout(_), _ = setTimeout(() => v({}), h))
}
async function E(e, t) {
  null == e || e === l.ME ? await r.tn.patch({
    url: l.ANM.USER_GUILD_SETTINGS(l.ME),
    body: t,
    rejectWithError: !1
  }) : await v(null != t ? {
    [null != e ? e : l.ME]: t
  } : {})
}
async function v(e) {
  clearTimeout(_);
  let t = 0 !== Object.keys(e).length,
    n = o.Z.getCollapsedCategories(),
    i = b();
  for (let r in i) {
    let i = a.Z.getChannel(r);
    null != i && null != i.guild_id && (i.guild_id in e || (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = f(u({}, e[i.guild_id].channel_overrides[i.id]), {
      collapsed: i.id in n
    }), t = !0)
  }
  return t ? (p = u({}, n), delete e[l.I_8], (await r.tn.patch({
    url: l.ANM.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    },
    rejectWithError: !1
  })).body) : []
}

function b() {
  let e = {},
    t = o.Z.getCollapsedCategories();
  for (let n in t) t[n] !== p[n] && (e[n] = !0);
  for (let n in p) t[n] !== p[n] && (e[n] = !0);
  return e
}

function y() {
  p = u({}, o.Z.getCollapsedCategories())
}
class O extends i.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      CATEGORY_COLLAPSE: g,
      CATEGORY_EXPAND: g,
      CATEGORY_COLLAPSE_ALL: g,
      CATEGORY_EXPAND_ALL: g,
      POST_CONNECTION_OPEN: m,
      USER_GUILD_SETTINGS_FULL_UPDATE: y
    }), c(this, "saveUserGuildSettings", E), c(this, "saveUserGuildSettingsBulk", v)
  }
}
let S = new O