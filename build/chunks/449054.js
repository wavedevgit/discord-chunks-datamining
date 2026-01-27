/** Chunk was on web.js **/
/** chunk id: 449054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => I,
  PU: () => E,
  Z2: () => m,
  br: () => O,
  cf: () => S,
  fd: () => b,
  gp: () => y,
  jE: () => g,
  jb: () => v,
  uf: () => A
}), require("./747238.js"), require("./228524.js"), require("./896048.js"), require("./488428.js"), require("./562465.js");
var Chunk686956 = require("./686956.js"),
  Chunk22007 = require("./22007.js"),
  Chunk857071 = require("./857071.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      channelId: a,
      onSuccess: l,
      joinSource: u,
      loadId: f,
      shouldNavigate: _ = true
    } = n,
    m = (0, o.JK)(),
    g = c.A.getGuild(e),
    E = {
      state: {
        analyticsSource: t
      }
    };
  null != g && null != g.joinedAt ? _ && (null == a ? (0, s.u)(e, E) : (0, i.A)(d.BVt.CHANNEL(e, a, n.messageId), h(p({}, E), {
    navigationReplace: true,
    openChannel: true
  }))) : (await r.A.joinGuild(e, {
    lurker: true,
    source: u,
    loadId: f,
    lurkLocation: null == t ? true : t.page
  }), _ && await r.A.transitionToGuildSync(e, h(p({}, E), {
    welcomeModalChannelId: a,
    navigationReplace: null != a,
    openChannel: null != a,
    search: m.location.search
  }), a, n.messageId)), null == l || l()
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
  u.default.track(d.HAw.GUILD_DISCOVERY_EXITED, {
    load_id: e,
    guild_ids_viewed: t,
    recommendations_source: n
  })
}

function y(e) {
  u.default.track(d.HAw.SEARCH_CLOSED, {
    load_id: e
  })
}

function b(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  u.default.track(d.HAw.SEARCH_STARTED, {
    search_type: d.I4_.GUILD_DISCOVERY,
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
  u.default.track(d.HAw.GUILD_DISCOVERY_SEARCH_START, {
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
  u.default.track(d.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
    category_id: t,
    request_status: n.status,
    request_error_code: n.code,
    will_request_retry: r,
    is_request_retry: i
  })
}

function A(e) {
  let {
    categoryId: t
  } = e;
  u.default.track(d.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, {
    category_id: t
  })
}

function I(e) {
  let {
    loadId: t,
    searchId: n,
    query: r,
    guildResults: i,
    analyticsContext: a,
    categoryId: o,
    isTagSearch: s
  } = e;
  u.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
    search_type: s ? d.I4_.GUILD_DISCOVERY_TAG : d.I4_.GUILD_DISCOVERY,
    load_id: t,
    search_id: n,
    total_results: true !== i ? i.length : null,
    guild_ids: true !== i ? i.map(e => e.id) : null,
    query: r,
    location: a.location,
    category_id: o
  })
}

function S(e) {
  let t = a.A.getLoadId(e);
  u.default.track(d.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
    guild_id: e,
    load_id: t,
    guild_size: l.A.getMemberCount(e)
  })
}