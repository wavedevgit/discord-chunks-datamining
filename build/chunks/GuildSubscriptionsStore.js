/** Chunk was on web.js **/
/** chunk id: 82057, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => Z
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = new Chunk432703.Ay(e => {
  for (let t in e) null != E.A.getGuild(t) || m.A.isUnavailable(t) || delete e[t];
  l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: e
  })
});

function T(e, t) {
  let n = {};
  S.forEach(i => {
    var a;
    i !== v.A.getGuildId() && i !== y.A.getGuildId() && i !== (null == (a = h.A.getChannel(O.A.getChannelId())) ? true : a.getGuildId()) && (null == r || r.guildId !== i) && (S.clearWithoutFlushing(i, e), t && (n[i] = S.get(i)))
  }), s().isEmpty(n) || l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: n
  })
}

function C(e, t) {
  return S.subscribeToGuild(e), null != t && _.Ay.getSection(t) === A.YvQ.MEMBERS && N(e, t, c.LD)
}

function N(e, t, n) {
  if (t === p.sN) return S.subscribeChannel(e, t, n);
  let r = h.A.getChannel(t);
  if (null == r) returnfalse;
  let i = r.getGuildId();
  return (i !== e && e === A.YYv && S.subscribeToGuild(i), null != r && r.isThread()) ? r.type === A.rbe.ANNOUNCEMENT_THREAD ? S.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && S.subscribeThreadMemberList(i, t, O.A.getChannelId()) : S.subscribeChannel(i, t, n)
}

function w(e) {
  let {
    type: t
  } = e;
  "CONNECTION_OPEN" === t && T(true, false);
  let n = v.A.getGuildId();
  null != n && C(n, O.A.getChannelId(n));
  let r = {};
  S.forEach(e => {
    null == E.A.getGuild(e) ? S.clearWithoutFlushing(e, true) : r[e] = S.get(e)
  }), s().isEmpty(r) || l.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: r
  })
}

function R() {
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
  S.reset()
}

function x(e) {
  let {
    guild: t
  } = e;
  t.id === v.A.getGuildId() && H()
}

function L(e) {
  let {
    guild: t
  } = e;
  S.clearWithoutFlushing(t.id, true)
}

function j(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    e !== f.default.getId() && S.subscribeUser(t, e)
  }), false
}

function M(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    S.unsubscribeUser(t, e)
  }), false
}

function k(e) {
  let {
    guildId: t
  } = e;
  S.subscribeToMemberUpdates(t)
}

function U(e) {
  let {
    guildId: t
  } = e;
  S.unsubscribeFromMemberUpdates(t)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return S.subscribeToGuild(t)
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
  return C(v.A.getGuildId(), O.A.getChannelId())
}

function Y(e) {
  let {
    channel: t
  } = e;
  return t.isArchivedThread() ? S.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.A.getChannelId() === t.id && void S.subscribeThreadMemberList(t.guild_id, t.id, O.A.getChannelId())
}

function W(e) {
  let {
    channel: t
  } = e;
  return S.unsubscribeThreadMemberList(t.guild_id, t.id)
}

function K() {
  let e = d.A.getSyncingWith();
  if (null == e) null != r && (S.unsubscribeUser(r.guildId, r.userId), r = null);
  else {
    let {
      userId: t
    } = e;
    if (null != r && r.userId === t || b.A.isFriend(t)) returnfalse;
    let n = g.Ay.memberOf(t);
    if (0 === n.length) returnfalse;
    let [i] = n;
    r = {
      guildId: i,
      userId: t
    }, S.subscribeUser(i, t)
  }
  returnfalse
}

function z(e) {
  let {
    guildIds: t
  } = e;
  for (let e of t) null != e && S.subscribeToGuild(e);
  returnfalse
}
class q extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.default, _.Ay, h.A, u.A, m.A, g.Ay, E.A, y.A, b.A, O.A, v.A, d.A), this.syncWith([d.A], K), this.syncWith([_.Ay], H)
  }
  getSubscribedThreadIds() {
    return S.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return S.isSubscribedToThreads(e)
  }
  isSubscribedToAnyMember(e) {
    return S.isSubscribedToAnyMember(e)
  }
  isSubscribedToMemberUpdates(e) {
    return S.isSubscribedToMemberUpdates(e)
  }
  isSubscribedToAnyGuildChannel(e) {
    let t = S.get(e).channels;
    return null != t && Object.keys(t).length > 0
  }
}
I(q, "displayName", "GuildSubscriptionsStore");
let Z = new q(Chunk73153.h, {
  CONNECTION_OPEN: w,
  CONNECTION_RESUMED: w,
  CONNECTION_CLOSED: R,
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