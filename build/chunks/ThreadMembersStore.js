/** Chunk was on web.js **/
/** chunk id: 260483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {};

function _(e) {
  f = a().omitBy(f, t => t.guildId === e)
}

function p(e) {
  f = a().omitBy(f, t => t.parentId === e)
}

function h(e) {
  var t;
  null == (t = e.threads) || t.forEach(g)
}

function m(e) {
  if (!(e.id in f)) {
    var t, n;
    f[e.id] = {
      guildId: e.guild_id,
      parentId: e.parent_id,
      memberCount: null != (t = e.memberCount) ? t : 0,
      memberIdsPreview: null != (n = e.memberIdsPreview) ? n : []
    }
  }
  return f[e.id]
}

function g(e) {
  if (!l.AW.has(e.type)) returnfalse;
  let t = m(e);
  null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
}

function E(e) {
  f = {}, e.guilds.forEach(h)
}

function b(e) {
  let {
    threadMembers: t
  } = e;
  f = d({}, t)
}

function y(e) {
  let {
    guild: t
  } = e;
  h(t)
}

function O(e) {
  let {
    guild: t
  } = e;
  _(t.id)
}

function v(e) {
  let {
    channel: t
  } = e;
  return g(t)
}

function I(e) {
  let {
    threads: t
  } = e;
  t.forEach(g)
}

function T(e) {
  let {
    threads: t
  } = e;
  t.forEach(R)
}

function S(e) {
  let {
    channel: t
  } = e;
  p(t.id)
}

function A(e) {
  let {
    channel: t
  } = e;
  delete f[t.id]
}

function C(e) {
  let t = false;
  for (let n of e.messages) t = R(n.thread) || t;
  return t
}

function N(e) {
  let {
    data: t
  } = e, n = false;
  return t.forEach(e => {
    let {
      threads: t,
      messages: r
    } = e;
    r.forEach(e => {
      e.forEach(e => {
        n = R(e.thread) || n
      })
    }), t.forEach(e => {
      n = R(e) || n
    })
  }), n
}

function R(e) {
  if (null != e && !(e.id in f)) {
    let t = c.Z.getChannel(e.id);
    if (null != t) return g(t), true
  }
  returnfalse
}

function P(e) {
  let t = f[e.id];
  if (null == t) returnfalse;
  null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  getMemberCount(e) {
    var t, n;
    return null != (n = null == (t = f[e]) ? true : t.memberCount) ? n : null
  }
  getMemberIdsPreview(e) {
    var t, n;
    return null != (n = null == (t = f[e]) ? true : t.memberIdsPreview) ? n : null
  }
  getInitialOverlayState() {
    return f
  }
}
u(w, "displayName", "ThreadMembersStore");
let D = new w(Chunk570140.Z, {
  CONNECTION_OPEN: E,
  OVERLAY_INITIALIZE: b,
  GUILD_CREATE: y,
  GUILD_DELETE: O,
  CHANNEL_DELETE: S,
  THREAD_CREATE: v,
  THREAD_UPDATE: v,
  THREAD_LIST_SYNC: I,
  THREAD_MEMBERS_UPDATE: P,
  SEARCH_MESSAGES_SUCCESS: N,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
  LOAD_THREADS_SUCCESS: T,
  LOAD_ARCHIVED_THREADS_SUCCESS: T,
  THREAD_DELETE: A,
  LOAD_MESSAGES_SUCCESS: C
})