/** Chunk was on web.js **/
/** chunk id: 152007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./938796.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk544743 = require("./544743.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js");

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
let h = {},
  m = new Chunk544743.Ay,
  g = new Set;

function E(e) {
  h = a()(h).reject(t => t.guildId === e).keyBy("threadId").value()
}

function y(e) {
  var t;
  null == (t = e.threads) || t.forEach(b)
}

function b(e) {
  c.A_.has(e.type) && null != e.member && (h[e.id] = {
    threadId: e.id,
    guildId: e.guild_id,
    flags: e.member.flags,
    muted: e.member.muted,
    muteConfig: e.member.muteConfig,
    joinTimestamp: new Date(e.member.joinTimestamp)
  }, O(e.id))
}

function O(e) {
  let t = h[e];
  m.clearTimer(e), true === t.muted ? ((g = new Set(g)).add(e), m.setTimer(e, t.muteConfig, () => {
    h[e].muted = false, (g = new Set(g)).delete(e), x.emitChange()
  }) && (h[e].muted = false, (g = new Set(g)).delete(e))) : (g = new Set(g)).delete(e)
}

function v(e) {
  m.reset(), g = new Set, h = {}, e.guilds.forEach(e => {
    y(e)
  })
}

function A(e) {
  let {
    joinedThreads: t
  } = e;
  h = a()(t).map(e => _(f({}, e), {
    joinTimestamp: new Date(e.joinTimestamp)
  })).keyBy("threadId").value()
}

function I(e) {
  let {
    guild: t
  } = e;
  E(t.id), y(t)
}

function S(e) {
  let {
    guild: t
  } = e;
  E(t.id)
}

function T(e) {
  let {
    channel: t
  } = e;
  b(t)
}

function C(e) {
  let {
    guildId: t,
    members: n
  } = e;
  null != t && null != n && n.forEach(e => {
    h[e.id] = {
      threadId: e.id,
      guildId: t,
      flags: e.flags,
      muted: e.muted,
      muteConfig: e.muteConfig,
      joinTimestamp: new Date(e.joinTimestamp)
    }, O(e.id)
  })
}

function N(e) {
  let {
    guildId: t,
    data: n
  } = e;
  null != t && n.forEach(e => {
    let {
      members: n
    } = e;
    n.forEach(e => {
      h[e.id] = {
        threadId: e.id,
        guildId: t,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
      }, O(e.id)
    })
  })
}

function w(e) {
  let {
    channel: t
  } = e;
  if (!(t.id in h)) returnfalse;
  h = f({}, h), delete h[t.id]
}

function R(e) {
  if (u.default.getId() !== e.userId) returnfalse;
  h[e.id] = {
    threadId: e.id,
    guildId: e.guildId,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.muteConfig,
    joinTimestamp: new Date(e.joinTimestamp)
  }, O(e.id)
}

function P(e) {
  let {
    id: t,
    userId: n,
    guildId: r,
    isJoining: i
  } = e;
  if (u.default.getId() !== n || null === r) returnfalse;
  i ? h[t] = {
    threadId: t,
    guildId: r,
    flags: 0,
    muted: true,
    muteConfig: {
      end_time: true
    },
    joinTimestamp: new Date
  } : delete h[t]
}

function D(e) {
  var t, n;
  let r = false;
  return (null == (t = e.removedMemberIds) ? true : t.includes(u.default.getId())) && e.id in h && (h = f({}, h), delete h[e.id], r = true), null == (n = e.addedMembers) || n.forEach(t => {
    t.userId === u.default.getId() && ((h = f({}, h))[e.id] = {
      threadId: e.id,
      guildId: e.guildId,
      flags: t.flags,
      muted: t.muted,
      muteConfig: t.muteConfig,
      joinTimestamp: new Date(t.joinTimestamp)
    }, O(e.id), r = true)
  }), r
}
class L extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  hasJoined(e) {
    return e in h
  }
  joinTimestamp(e) {
    var t;
    return null == (t = h[e]) ? true : t.joinTimestamp
  }
  flags(e) {
    var t;
    return null == (t = h[e]) ? true : t.flags
  }
  getInitialOverlayState() {
    return Object.values(h)
  }
  getMuteConfig(e) {
    var t;
    return null == (t = h[e]) ? true : t.muteConfig
  }
  getMutedThreads() {
    return g
  }
  isMuted(e) {
    return g.has(e)
  }
}
d(L, "displayName", "JoinedThreadsStore");
let x = new L(Chunk73153.h, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: A,
    GUILD_CREATE: I,
    GUILD_DELETE: S,
    THREAD_CREATE: T,
    THREAD_LIST_SYNC: C,
    SEARCH_MESSAGES_SUCCESS: N,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    THREAD_DELETE: w,
    THREAD_MEMBER_UPDATE: R,
    THREAD_MEMBER_LOCAL_UPDATE: P,
    THREAD_MEMBERS_UPDATE: D
  }),
  M = x