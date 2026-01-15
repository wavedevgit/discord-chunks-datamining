/** Chunk was on web.js **/
/** chunk id: 720202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk537986 = require("./537986.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk537986.Z(Chunk271383.ZP.isMember, (e, t) => {
  a.Z.dispatch({
    type: "GUILD_MEMBERS_REQUEST",
    guildIds: [e],
    userIds: t
  })
});

function d() {
  u.reset()
}

function f(e) {
  let {
    chunks: t
  } = e;
  for (let e of t) e.members.forEach(t => {
    u.acknowledge(e.guildId, t.user.id)
  }), null != e.notFound && e.notFound.forEach(t => u.acknowledge(e.guildId, t));
  returnfalse
}

function p() {
  return u.requestUnacknowledged(), false
}

function _(e, t) {
  return u.request(e, t), false
}

function h(e, t) {
  return t.forEach(t => {
    let {
      author: n,
      mentions: r
    } = t;
    null != n && _(e, n.id), null == r || r.forEach(t => _(e, t.id))
  }), false
}

function m(e) {
  let {
    channelId: t,
    messages: n
  } = e, r = s.Z.getChannel(t);
  return null != r && null != r.guild_id && h(r.guild_id, n)
}

function g(e) {
  let {
    pins: t,
    channelId: n
  } = e, r = s.Z.getChannel(n);
  return null != r && null != r.guild_id && h(r.guild_id, t.map(e => {
    let {
      message: t
    } = e;
    return t
  }))
}

function E(e) {
  let {
    guildId: t,
    data: n
  } = e;
  if (null == t) returnfalse;
  let r = [];
  return n.forEach(e => {
    let {
      messages: t
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        r.push(e)
      })
    })
  }), h(t, r)
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, l.ZP)
  }
  requestMember(e, t) {
    _(e, t)
  }
  getDebugState(e) {
    return u.getDebugState(e)
  }
}
c(b, "displayName", "GuildMemberRequesterStore");
let y = new b(Chunk570140.Z, {
  CONNECTION_CLOSED: d,
  CONNECTION_OPEN: d,
  CONNECTION_RESUMED: p,
  GUILD_MEMBERS_CHUNK_BATCH: f,
  SEARCH_MESSAGES_SUCCESS: E,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: E,
  LOCAL_MESSAGES_LOADED: m,
  LOAD_MESSAGES_SUCCESS: m,
  LOAD_MESSAGES_AROUND_SUCCESS: m,
  LOAD_RECENT_MENTIONS_SUCCESS: m,
  LOAD_PINNED_MESSAGES_SUCCESS: g
})