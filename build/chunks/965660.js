/** Chunk was on web.js **/
/** chunk id: 965660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kv: () => A,
  M9: () => b,
  MC: () => O,
  Ot: () => g,
  UW: () => E,
  Ub: () => y,
  Wl: () => I,
  YP: () => S,
  jR: () => h,
  kc: () => m,
  uk: () => v
}), require("./65821.js"), require("./228524.js"), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk835245 = require("./835245.js"),
  Chunk773669 = require("./773669.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk449054 = require("./449054.js");
require("./670412.js"), require("./351022.js");
var Chunk324580 = require("./324580.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  switch (e) {
    case l.o.FEATURED:
      return u.intl.string(u.t["RU+DCe"]);
    case l.o.GAMING:
      return u.intl.string(u.t["CD/USA"]);
    case l.o.MUSIC:
      return u.intl.string(u.t["nt9PL+"]);
    case l.o.ENTERTAINMENT:
      return u.intl.string(u.t.gSbmdt);
    case l.o.TECH:
      return u.intl.string(u.t["0A0By5"]);
    case l.o.EDUCATION:
      return u.intl.string(u.t.Gy9woq);
    case l.o.HUBS:
      return u.intl.string(u.t["q469/Z"])
  }
}

function m(e) {
  switch (e) {
    case l.o.FEATURED:
      return u.intl.string(u.t.OlDfzP);
    case l.o.GAMING:
      return u.intl.string(u.t["CD/USA"]);
    case l.o.MUSIC:
      return u.intl.string(u.t["nt9PL+"]);
    case l.o.ENTERTAINMENT:
      return u.intl.string(u.t.gSbmdt);
    case l.o.TECH:
      return u.intl.string(u.t["0A0By5"]);
    case l.o.EDUCATION:
      return u.intl.string(u.t.Gy9woq);
    case l.o.HUBS:
      return u.intl.string(u.t.X5xPlb);
    default:
      throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e))
  }
}

function g(e) {
  switch (e) {
    case l.o.FEATURED:
      return u.intl.string(u.t.SdMhrk);
    case l.o.GAMING:
      return u.intl.string(u.t.AAJ5ov);
    case l.o.MUSIC:
      return u.intl.string(u.t["SOio+D"]);
    case l.o.ENTERTAINMENT:
      return u.intl.string(u.t.R09vf0);
    case l.o.TECH:
      return u.intl.string(u.t.Ew4d56);
    case l.o.EDUCATION:
      return u.intl.string(u.t.sasIWU);
    case l.o.HUBS:
      return u.intl.string(u.t["F/IQCI"]);
    default:
      throw Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: ".concat(e))
  }
}

function E(e) {
  switch (e) {
    case l.o.FEATURED:
      return u.intl.string(u.t.crt84X);
    case l.o.GAMING:
      return u.intl.string(u.t.fWbIpf);
    case l.o.MUSIC:
      return u.intl.string(u.t.nfgDzz);
    case l.o.ENTERTAINMENT:
      return u.intl.string(u.t.k1CYxv);
    case l.o.TECH:
      return u.intl.string(u.t["4dawps"]);
    case l.o.EDUCATION:
      return u.intl.string(u.t.uexPgT);
    default:
      return null
  }
}

function y(e) {
  switch (e) {
    case l.o.FEATURED:
      return l.Iq;
    case l.o.GAMING:
      return l.wz.Activity;
    case l.o.MUSIC:
      return l.wz.Music;
    case l.o.ENTERTAINMENT:
      return l.wz.Television;
    case l.o.TECH:
      return l.wz.Science;
    case l.o.EDUCATION:
      return l.wz.Education;
    case l.o.HUBS:
      return l.Us;
    default:
      (0, o.xb)(e)
  }
}

function b(e) {
  return null == e || Date.now() - e > l.WV
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

function A() {
  var e;
  let [t] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [i.default], n = (0, l.tO)(), r = t.locale;
  return (null != (e = n.find(e => e.code === r)) ? e : n[0]).code
}
async function I(e) {
  let {
    loadId: t,
    guildId: n,
    index: r,
    categoryId: i,
    analyticsLocation: o,
    options: l
  } = e, u = _(f({}, l), {
    loadId: t
  });
  await s.Z2(n, o, u), a.default.track(c.HAw.GUILD_DISCOVERY_GUILD_SELECTED, {
    guild_id: n,
    load_id: t,
    card_index: r,
    category_id: i,
    location: o
  })
}

function S() {
  return (0, r.A)().replace(/-/g, "")
}