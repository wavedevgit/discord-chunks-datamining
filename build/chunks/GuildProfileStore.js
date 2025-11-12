/** Chunk was on web.js **/
/** chunk id: 314852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  a: () => f
}), require("./388685.js"), require("./953529.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk406218 = require("./406218.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var f = function(e) {
  return e.NOT_FETCHED = "NOT_FETCHED", e.FETCHING = "FETCHING", e.FETCHED = "FETCHED", e
}({});
let _ = new Map,
  p = {
    profile: null,
    lastSyncTimestamp: null,
    fetchStatus: "NOT_FETCHED",
    isUpdating: false,
    error: null
  };

function h(e) {
  let {
    guildId: t
  } = e, n = _.get(t);
  null == n ? _.set(t, d(c({}, p), {
    fetchStatus: "FETCHING"
  })) : _.set(t, d(c({}, n), {
    fetchStatus: "FETCHING"
  }))
}

function m(e) {
  let {
    guildId: t,
    profile: n
  } = e, r = _.get(t);
  null == r ? _.set(t, d(c({}, p), {
    profile: n,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  })) : _.set(t, d(c({}, r), {
    profile: n,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  }))
}

function g(e) {
  let {
    guildId: t,
    error: n
  } = e, r = _.get(t);
  null == r ? _.set(t, d(c({}, p), {
    error: n,
    fetchStatus: "FETCHED"
  })) : _.set(t, d(c({}, r), {
    error: n,
    fetchStatus: "FETCHED"
  }))
}

function E(e) {
  let {
    guildId: t
  } = e, n = _.get(t);
  null == n ? _.set(t, d(c({}, p), {
    isUpdating: true
  })) : _.set(t, d(c({}, n), {
    isUpdating: true
  }))
}

function b(e) {
  let {
    guildId: t,
    profile: n
  } = e, r = _.get(t);
  null == r ? _.set(t, d(c({}, p), {
    profile: n
  })) : _.set(t, d(c({}, r), {
    profile: n,
    isUpdating: false
  }))
}

function y(e) {
  let {
    guildId: t,
    error: n
  } = e, r = _.get(t);
  null == r ? _.set(t, d(c({}, p), {
    error: n
  })) : _.set(t, d(c({}, r), {
    error: n,
    isUpdating: false
  }))
}

function O(e) {
  let {
    guildId: t,
    visibility: n
  } = e, r = _.get(t), i = null == r ? true : r.profile;
  null != r && null != i && _.set(t, d(c({}, r), {
    isUpdating: false,
    profile: d(c({}, i), {
      visibility: n
    })
  }))
}

function v(e) {
  let {
    form: t,
    guildId: n
  } = e, r = null == t ? true : t.profile;
  if (null == r) return;
  let i = _.get(n);
  null == i ? _.set(n, d(c({}, p), {
    profile: r,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  })) : _.set(n, d(c({}, i), {
    profile: r,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  }))
}

function I(e) {
  let {
    invite: t
  } = e, {
    profile: n
  } = t;
  if (null == n) return;
  let r = _.get(n.id),
    i = (0, o.xo)(n);
  null == r ? _.set(n.id, d(c({}, p), {
    profile: i,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  })) : _.set(n.id, d(c({}, r), {
    profile: i,
    lastSyncTimestamp: Date.now(),
    fetchStatus: "FETCHED"
  }))
}

function T(e) {
  let {
    channel: t
  } = e;
  t.type === s.d4z.GUILD_ANNOUNCEMENT && null != t.guild_id && _.delete(t.guild_id)
}

function S(e) {
  let {
    guildId: t,
    enabled: n
  } = e;
  null != t && n && _.delete(t)
}

function A(e) {
  var t, n, r;
  let {
    guild: i
  } = e, a = _.get(i.id);
  if (null == a || null == a.profile) returnfalse;
  let o = d(c({}, a.profile), {
    name: i.name,
    icon: null != (t = i.icon) ? t : null,
    description: null != (n = i.description) ? n : "",
    customBanner: null != (r = i.discovery_splash) ? r : null
  });
  _.set(i.id, d(c({}, a), {
    profile: o
  }))
}
class C extends(r = Chunk442837.ZP.Store) {
  getProfile(e) {
    var t, n;
    return null == e ? null : null != (n = null == (t = _.get(e)) ? true : t.profile) ? n : null
  }
  getFetchStatus(e) {
    var t, n;
    return null == e ? "NOT_FETCHED" : null != (n = null == (t = _.get(e)) ? true : t.fetchStatus) ? n : "NOT_FETCHED"
  }
  getLastSyncTimestamp(e) {
    var t, n;
    return null == e ? null : null != (n = null == (t = _.get(e)) ? true : t.lastSyncTimestamp) ? n : null
  }
  getIsUpdating(e) {
    var t, n;
    return null != e && null != (n = null == (t = _.get(e)) ? true : t.isUpdating) && n
  }
  getErrorCode(e) {
    var t, n, r;
    return null == e ? null : null != (r = null == (n = _.get(e)) || null == (t = n.error) ? true : t.code) ? r : null
  }
}
l(C, "displayName", "GuildProfileStore");
let N = new C(Chunk570140.Z, {
  GUILD_PROFILE_FETCH: h,
  GUILD_PROFILE_FETCH_SUCCESS: m,
  GUILD_PROFILE_FETCH_FAILURE: g,
  GUILD_PROFILE_UPDATE: E,
  GUILD_PROFILE_UPDATE_SUCCESS: b,
  GUILD_PROFILE_UPDATE_FAILURE: y,
  MEMBER_VERIFICATION_FORM_UPDATE: v,
  INVITE_RESOLVE_SUCCESS: I,
  INSTANT_INVITE_CREATE_SUCCESS: I,
  CHANNEL_CREATE: T,
  GUILD_SETTINGS_SET_WIDGET: S,
  GUILD_UPDATE: A,
  GUILD_PROFILE_UPDATE_VISIBILITY: E,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: O,
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: y
})