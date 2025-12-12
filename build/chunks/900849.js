/** Chunk was on web.js **/
/** chunk id: 900849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Az: () => E,
  IZ: () => b,
  PP: () => g,
  Ub: () => h,
  c6: () => I,
  m9: () => v,
  mT: () => T,
  qn: () => O,
  rC: () => S,
  tI: () => y
}), require("./35282.js"), require("./953529.js"), require("./388685.js"), require("./664751.js"), require("./544891.js");
var Chunk749210 = require("./749210.js"),
  Chunk336197 = require("./336197.js"),
  Chunk41776 = require("./41776.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      channelId: o,
      onSuccess: l,
      joinSource: u,
      loadId: f,
      shouldNavigate: _ = true
    } = n,
    h = (0, a.s1)(),
    g = c.Z.getGuild(e),
    E = {
      state: {
        analyticsSource: t
      }
    };
  null != g && null != g.joinedAt ? _ && (null == o ? (0, s.X)(e, E) : (0, i.Z)(d.Z5c.CHANNEL(e, o, n.messageId), m(p({}, E), {
    navigationReplace: true,
    openChannel: true
  }))) : (await r.Z.joinGuild(e, {
    lurker: true,
    source: u,
    loadId: f,
    lurkLocation: null == t ? true : t.page
  }), _ && await r.Z.transitionToGuildSync(e, m(p({}, E), {
    welcomeModalChannelId: o,
    navigationReplace: null != o,
    openChannel: null != o,
    search: h.location.search
  }), o, n.messageId)), null == l || l()
}

function g(e) {
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
    emojiCount: e.emoji_count,
    stickers: e.stickers,
    stickerCount: e.sticker_count,
    keywords: e.keywords
  }
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  u.default.track(d.rMx.GUILD_DISCOVERY_EXITED, {
    load_id: e,
    guild_ids_viewed: t,
    recommendations_source: n
  })
}

function b(e) {
  u.default.track(d.rMx.SEARCH_CLOSED, {
    load_id: e
  })
}

function y(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  u.default.track(d.rMx.SEARCH_STARTED, {
    search_type: d.aib.GUILD_DISCOVERY,
    load_id: e,
    location: n.location,
    category_id: t
  })
}

function O(e) {
  let {
    withCounts: t,
    offset: n
  } = e;
  u.default.track(d.rMx.GUILD_DISCOVERY_SEARCH_START, {
    with_counts: t,
    offset: n
  })
}

function v(e) {
  let {
    categoryId: t,
    error: n,
    willRequestRetry: r,
    isRequestRetry: i
  } = e;
  u.default.track(d.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
    category_id: t,
    request_status: n.status,
    request_error_code: n.code,
    will_request_retry: r,
    is_request_retry: i
  })
}

function S(e) {
  let {
    categoryId: t
  } = e;
  u.default.track(d.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, {
    category_id: t
  })
}

function I(e) {
  let {
    loadId: t,
    searchId: n,
    query: r,
    guildResults: i,
    analyticsContext: o,
    categoryId: a,
    isTagSearch: s
  } = e;
  u.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
    search_type: s ? d.aib.GUILD_DISCOVERY_TAG : d.aib.GUILD_DISCOVERY,
    load_id: t,
    search_id: n,
    total_results: true !== i ? i.length : null,
    guild_ids: true !== i ? i.map(e => e.id) : null,
    query: r,
    location: o.location,
    category_id: a
  })
}

function T(e) {
  let t = o.Z.getLoadId(e);
  u.default.track(d.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
    guild_id: e,
    load_id: t,
    guild_size: l.Z.getMemberCount(e)
  })
}