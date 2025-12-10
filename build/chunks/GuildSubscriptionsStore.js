/** Chunk was on web.js **/
/** chunk id: 797316, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk177523 = require("./177523.js"),
  Chunk353926 = require("./353926.js"),
  Chunk768419 = require("./768419.js"),
  Chunk314897 = require("./314897.js"),
  Chunk439170 = require("./439170.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk486472 = require("./486472.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = new Chunk177523.ZP(e => {
  for (let t in e) null != E.Z.getGuild(t) || h.Z.isUnavailable(t) || delete e[t];
  l.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: e
  })
});

function C(e, t) {
  let n = {};
  T.forEach(i => {
    var a;
    i !== v.Z.getGuildId() && i !== b.Z.getGuildId() && i !== (null == (a = m.Z.getChannel(O.Z.getChannelId())) ? true : a.getGuildId()) && (null == r || r.guildId !== i) && (T.clearWithoutFlushing(i, e), t && (n[i] = T.get(i)))
  }), o().isEmpty(n) || l.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: n
  })
}

function A(e, t) {
  return T.subscribeToGuild(e), null != t && _.ZP.getSection(t) === S.ULH.MEMBERS && N(e, t, c.KV)
}

function N(e, t, n) {
  if (t === p.oL) return T.subscribeChannel(e, t, n);
  let r = m.Z.getChannel(t);
  if (null == r) returnfalse;
  let i = r.getGuildId();
  return (i !== e && e === S.I_8 && T.subscribeToGuild(i), null != r && r.isThread()) ? r.type === S.d4z.ANNOUNCEMENT_THREAD ? T.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && T.subscribeThreadMemberList(i, t, O.Z.getChannelId()) : T.subscribeChannel(i, t, n)
}

function P(e) {
  let {
    type: t
  } = e;
  "CONNECTION_OPEN" === t && C(true, false);
  let n = v.Z.getGuildId();
  null != n && A(n, O.Z.getChannelId(n));
  let r = {};
  T.forEach(e => {
    null == E.Z.getGuild(e) ? T.clearWithoutFlushing(e, true) : r[e] = T.get(e)
  }), o().isEmpty(r) || l.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: r
  })
}

function R() {
  C(false, false)
}

function w(e) {
  let {
    idle: t
  } = e;
  if (!t) returnfalse;
  C(false, true)
}

function D() {
  T.reset()
}

function x(e) {
  let {
    guild: t
  } = e;
  t.id === v.Z.getGuildId() && V()
}

function L(e) {
  let {
    guild: t
  } = e;
  T.clearWithoutFlushing(t.id, true)
}

function j(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    e !== f.default.getId() && T.subscribeUser(t, e)
  }), false
}

function M(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return n.forEach(e => {
    T.unsubscribeUser(t, e)
  }), false
}

function k(e) {
  let {
    guildId: t
  } = e;
  T.subscribeToMemberUpdates(t)
}

function U(e) {
  let {
    guildId: t
  } = e;
  T.unsubscribeFromMemberUpdates(t)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return T.subscribeToGuild(t)
}

function Z(e) {
  let {
    guildId: t,
    channelId: n,
    ranges: r
  } = e;
  return N(t, n, r)
}

function B(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return A(t, n)
}

function F(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return !h.Z.isUnavailable(t) && A(t, n)
}

function V() {
  return A(Chunk914010.Z.getGuildId(), Chunk944486.Z.getChannelId())
}

function H(e) {
  let {
    channel: t
  } = e;
  return t.isArchivedThread() ? T.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.Z.getChannelId() === t.id && void T.subscribeThreadMemberList(t.guild_id, t.id, O.Z.getChannelId())
}

function Y(e) {
  let {
    channel: t
  } = e;
  return T.unsubscribeThreadMemberList(t.guild_id, t.id)
}

function W() {
  let e = Chunk768419.Z.getSyncingWith();
  if (null == module) null != r && (T.unsubscribeUser(r.guildId, r.userId), r = null);
  else {
    let {
      userId: t
    } = module;
    if (null != r && r.userId === exports || Chunk699516.Z.isFriend(exports)) returnfalse;
    let n = Chunk271383.ZP.memberOf(exports);
    if (0 === require.length) returnfalse;
    let [i] = require;
    r = {
      guildId: i,
      userId: exports
    }, T.subscribeUser(i, exports)
  }
  returnfalse
}

function K(e) {
  let {
    guildIds: t
  } = e;
  for (let e of t) null != e && T.subscribeToGuild(e);
  returnfalse
}
class z extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk433355.ZP, Chunk592125.Z, Chunk353926.Z, Chunk486472.Z, Chunk271383.ZP, Chunk430824.Z, Chunk19780.Z, Chunk699516.Z, Chunk944486.Z, Chunk914010.Z, Chunk768419.Z), this.syncWith([Chunk768419.Z], W), this.syncWith([Chunk433355.ZP], V)
  }
  getSubscribedThreadIds() {
    return T.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return T.isSubscribedToThreads(e)
  }
  isSubscribedToAnyMember(e) {
    return T.isSubscribedToAnyMember(e)
  }
  isSubscribedToMemberUpdates(e) {
    return T.isSubscribedToMemberUpdates(e)
  }
  isSubscribedToAnyGuildChannel(e) {
    let t = T.get(e).channels;
    return null != t && Object.keys(t).length > 0
  }
}
I(z, "displayName", "GuildSubscriptionsStore");
let q = new z(Chunk570140.Z, {
  CONNECTION_OPEN: P,
  CONNECTION_RESUMED: P,
  CONNECTION_CLOSED: R,
  IDLE: w,
  LOGOUT: D,
  VOICE_CHANNEL_SELECT: F,
  CHANNEL_SELECT: F,
  GUILD_CREATE: x,
  GUILD_DELETE: L,
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: j,
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: M,
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
  GUILD_SUBSCRIPTIONS_CHANNEL: Z,
  GUILD_SUBSCRIPTIONS: G,
  CHANNEL_PRELOAD: B,
  INBOX_OPEN: K,
  THREAD_UPDATE: H,
  THREAD_DELETE: Y,
  THREAD_LIST_SYNC: V
})