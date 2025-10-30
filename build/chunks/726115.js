/** Chunk was on web.js **/
/** chunk id: 726115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ew: () => y,
  Iv: () => v,
  Mf: () => m,
  PM: () => T,
  QW: () => E,
  Uv: () => O,
  Xp: () => I,
  a$: () => g,
  lg: () => b,
  vL: () => S,
  vb: () => h
}), require("./415506.js"), require("./953529.js"), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk772848 = require("./772848.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk900849 = require("./900849.js");
require("./275131.js"), require("./356164.js");
var Chunk128449 = require("./128449.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  switch (e) {
    case l.vf.FEATURED:
      return u.intl.string(u.t["RU+DCe"]);
    case l.vf.GAMING:
      return u.intl.string(u.t["CD/USA"]);
    case l.vf.MUSIC:
      return u.intl.string(u.t["nt9PL+"]);
    case l.vf.ENTERTAINMENT:
      return u.intl.string(u.t.gSbmdt);
    case l.vf.TECH:
      return u.intl.string(u.t["0A0By5"]);
    case l.vf.EDUCATION:
      return u.intl.string(u.t.Gy9woq);
    case l.vf.HUBS:
      return u.intl.string(u.t["q469/Z"])
  }
}

function m(e) {
  switch (e) {
    case l.vf.FEATURED:
      return u.intl.string(u.t.OlDfzP);
    case l.vf.GAMING:
      return u.intl.string(u.t["CD/USA"]);
    case l.vf.MUSIC:
      return u.intl.string(u.t["nt9PL+"]);
    case l.vf.ENTERTAINMENT:
      return u.intl.string(u.t.gSbmdt);
    case l.vf.TECH:
      return u.intl.string(u.t["0A0By5"]);
    case l.vf.EDUCATION:
      return u.intl.string(u.t.Gy9woq);
    case l.vf.HUBS:
      return u.intl.string(u.t.X5xPlb);
    default:
      throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e))
  }
}

function g(e) {
  switch (e) {
    case l.vf.FEATURED:
      return u.intl.string(u.t.SdMhrk);
    case l.vf.GAMING:
      return u.intl.string(u.t.AAJ5ov);
    case l.vf.MUSIC:
      return u.intl.string(u.t["SOio+D"]);
    case l.vf.ENTERTAINMENT:
      return u.intl.string(u.t.R09vf0);
    case l.vf.TECH:
      return u.intl.string(u.t.Ew4d56);
    case l.vf.EDUCATION:
      return u.intl.string(u.t.sasIWU);
    case l.vf.HUBS:
      return u.intl.string(u.t["F/IQCI"]);
    default:
      throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e))
  }
}

function E(e) {
  switch (e) {
    case l.vf.FEATURED:
      return u.intl.string(u.t.crt84X);
    case l.vf.GAMING:
      return u.intl.string(u.t.fWbIpf);
    case l.vf.MUSIC:
      return u.intl.string(u.t.nfgDzz);
    case l.vf.ENTERTAINMENT:
      return u.intl.string(u.t.k1CYxv);
    case l.vf.TECH:
      return u.intl.string(u.t["4dawps"]);
    case l.vf.EDUCATION:
      return u.intl.string(u.t.uexPgT);
    default:
      return null
  }
}

function b(e) {
  switch (e) {
    case l.vf.FEATURED:
      return l.Hk;
    case l.vf.GAMING:
      return l.Gj.Activity;
    case l.vf.MUSIC:
      return l.Gj.Music;
    case l.vf.ENTERTAINMENT:
      return l.Gj.Television;
    case l.vf.TECH:
      return l.Gj.Science;
    case l.vf.EDUCATION:
      return l.Gj.Education;
    case l.vf.HUBS:
      return l.gU;
    default:
      (0, o.vE)(e)
  }
}

function y(e) {
  return null == e || Date.now() - e > l.AF
}

function O(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    splash: e.splash,
    banner: e.banner,
    icon: e.icon,
    features: new Set(e.features),
    presenceCount: e.approximate_presence_count,
    memberCount: e.approximate_member_count,
    premiumSubscriptionCount: e.premium_subscription_count,
    preferredLocale: e.preferred_locale,
    discoverySplash: e.discovery_splash,
    emojis: e.emojis,
    emojiCount: e.emoji_count
  }
}

function v(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    splash: e.splash,
    banner: e.banner,
    icon: e.icon,
    features: new Set(e.features),
    presenceCount: e.approximate_presence_count,
    memberCount: e.approximate_member_count,
    premiumSubscriptionCount: true,
    preferredLocale: true,
    discoverySplash: e.discovery_splash,
    emojis: []
  }
}

function I() {
  var e;
  let [t] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [Chunk706454.default], n = (0, Chunk128449.Cf)(), r = exports.locale;
  return (null != (e = require.find(e => e.code === r)) ? module : require[0]).code
}
async function S(e) {
  let {
    loadId: t,
    guildId: n,
    index: r,
    categoryId: i,
    analyticsLocation: o,
    options: l
  } = e, u = p(f({}, l), {
    loadId: t
  });
  await s.Ub(n, o, u), a.default.track(c.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
    guild_id: n,
    load_id: t,
    card_index: r,
    category_id: i,
    location: o
  })
}

function T() {
  return (0, Chunk772848.Z)().replace(/-/g, "")
}