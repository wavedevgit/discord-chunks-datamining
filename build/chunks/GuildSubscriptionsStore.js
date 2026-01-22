/** Chunk was on web.js **/
/** chunk id: 82057, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => X
}), require("./896048.js");
var i, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk432703 = require("./432703.js"),
  Chunk49463 = require("./49463.js"),
  Chunk655116 = require("./655116.js"),
  Chunk961350 = require("./961350.js"),
  Chunk963307 = require("./963307.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk919638 = require("./919638.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk383501 = require("./383501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = new Chunk432703.Ay(e => {
  for (let t in e) null != E.A.getGuild(t) || m.A.isUnavailable(t) || delete e[t];
  l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: e
  })
});

function T(e, t) {
  let n = {};
  I.forEach(i => {
    var a;
    i !== A.A.getGuildId() && i !== b.A.getGuildId() && i !== (null == (a = h.A.getChannel(O.A.getChannelId())) ? true : a.getGuildId()) && (null == r || r.guildId !== i) && (I.clearWithoutFlushing(i, e), t && (n[i] = I.get(i)))
  }), s().isEmpty(n) || l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: n
  })
}

function C(e, t) {
  return I.subscribeToGuild(e), null != t && _.Ay.getSection(t) === v.YvQ.MEMBERS && N(e, t, c.LD)
}

function N(e, t, n) {
  if (t === p.sN) return I.subscribeChannel(e, t, n);
  let r = h.A.getChannel(t);
  if (null == r) returnfalse;
  let i = r.getGuildId();
  return (i !== e && e === v.YYv && I.subscribeToGuild(i), null != r && r.isThread()) ? r.type === v.rbe.ANNOUNCEMENT_THREAD ? I.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && I.subscribeThreadMemberList(i, t, O.A.getChannelId()) : I.subscribeChannel(i, t, n)
}

function R(e) {
  let {
    type: t
  } = e;
  "CONNECTION_OPEN" === t && T(true, false);
  let n = A.A.getGuildId();
  null != n && C(n, O.A.getChannelId(n));
  let r = {};
  I.forEach(e => {
    null == E.A.getGuild(e) ? I.clearWithoutFlushing(e, true) : r[e] = I.get(e)
  }), s().isEmpty(r) || l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: r
  })
}

function w() {
  T(false, false)
}

function P(e) {
  let {
    idle: t
  } = e;
  if (!t) returnfalse;
  T(false, true)
}

function D() {
  I.reset()
}

function x(e) {
  let {
    guild: t
  } = e;
  t.id === A.A.getGuildId() && H()
}

function L(e) {
  let {
    guild: t
  } = e;
  I.clearWithoutFlushing(t.id, true)
}

function j(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    e !== f.default.getId() && I.subscribeUser(t, e)
  }), false
}

function M(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    I.unsubscribeUser(t, e)
  }), false
}

function k(e) {
  let {
    guildId: t
  } = e;
  I.subscribeToMemberUpdates(t)
}

function U(e) {
  let {
    guildId: t
  } = e;
  I.unsubscribeFromMemberUpdates(t)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return I.subscribeToGuild(t)
}

function V(e) {
  let {
    guildId: t,
    channelId: n,
    ranges: r
  } = e;
  return N(t, n, r)
}

function F(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return C(t, n)
}

function B(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return !m.A.isUnavailable(t) && C(t, n)
}

function H() {
  return C(A.A.getGuildId(), O.A.getChannelId())
}

function Y(e) {
  let {
    channel: t
  } = e;
  return t.isArchivedThread() ? I.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.A.getChannelId() === t.id && void I.subscribeThreadMemberList(t.guild_id, t.id, O.A.getChannelId())
}

function W(e) {
  let {
    channel: t
  } = e;
  return I.unsubscribeThreadMemberList(t.guild_id, t.id)
}

function K() {
  let e = d.A.getSyncingWith();
  if (null == e) null != r && (I.unsubscribeUser(r.guildId, r.userId), r = null);
  else {
    let {
      userId: t
    } = e;
    if (null != r && r.userId === t || y.A.isFriend(t)) returnfalse;
    let n = g.Ay.memberOf(t);
    if (0 === n.length) returnfalse;
    let [i] = n;
    r = {
      guildId: i,
      userId: t
    }, I.subscribeUser(i, t)
  }
  returnfalse
}

function z(e) {
  let {
    guildIds: t
  } = e;
  for (let e of t) null != e && I.subscribeToGuild(e);
  returnfalse
}
class q extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.default, _.Ay, h.A, u.A, m.A, g.Ay, E.A, b.A, y.A, O.A, A.A, d.A), this.syncWith([d.A], K), this.syncWith([_.Ay], H)
  }
  getSubscribedThreadIds() {
    return I.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return I.isSubscribedToThreads(e)
  }
  isSubscribedToAnyMember(e) {
    return I.isSubscribedToAnyMember(e)
  }
  isSubscribedToMemberUpdates(e) {
    return I.isSubscribedToMemberUpdates(e)
  }
  isSubscribedToAnyGuildChannel(e) {
    let t = I.get(e).channels;
    return null != t && Object.keys(t).length > 0
  }
}
S(q, "displayName", "GuildSubscriptionsStore");
let X = new q(Chunk73153.h, {
  CONNECTION_OPEN: R,
  CONNECTION_RESUMED: R,
  CONNECTION_CLOSED: w,
  IDLE: P,
  LOGOUT: D,
  VOICE_CHANNEL_SELECT: B,
  CHANNEL_SELECT: B,
  GUILD_CREATE: x,
  GUILD_DELETE: L,
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: j,
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: M,
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
  GUILD_SUBSCRIPTIONS_CHANNEL: V,
  GUILD_SUBSCRIPTIONS: G,
  CHANNEL_PRELOAD: F,
  INBOX_OPEN: z,
  THREAD_UPDATE: Y,
  THREAD_DELETE: W,
  THREAD_LIST_SYNC: H
})