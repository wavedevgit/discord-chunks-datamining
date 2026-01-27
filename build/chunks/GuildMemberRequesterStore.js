/** Chunk was on web.js **/
/** chunk id: 256587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk546885 = require("./546885.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk546885.A(Chunk696451.Ay.isMember, (e, t) => {
  a.h.dispatch({
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
  } = e, r = s.A.getChannel(t);
  return null != r && null != r.guild_id && h(r.guild_id, n)
}

function g(e) {
  let {
    pins: t,
    channelId: n
  } = e, r = s.A.getChannel(n);
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
class y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A, l.Ay)
  }
  requestMember(e, t) {
    _(e, t)
  }
  getDebugState(e) {
    return u.getDebugState(e)
  }
}
c(y, "displayName", "GuildMemberRequesterStore");
let b = new y(Chunk73153.h, {
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