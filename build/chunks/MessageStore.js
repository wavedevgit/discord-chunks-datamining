/** Chunk was on web.js **/
/** chunk id: 375954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => em
}), require("./388685.js"), require("./997841.js"), require("./539854.js"), require("./583741.js"), require("./358797.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk89892 = require("./89892.js"),
  Chunk673750 = require("./673750.js"),
  Chunk710845 = require("./710845.js"),
  Chunk247206 = require("./247206.js"),
  Chunk723352 = require("./723352.js"),
  Chunk160404 = require("./160404.js"),
  Chunk786761 = require("./786761.js"),
  Chunk418476 = require("./418476.js"),
  g = (require("./739566.js"), require("./995774.js")),
  Chunk706454 = require("./706454.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk796974 = require("./796974.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = new Set,
  M = new Chunk710845.Z("MessageStore"),
  k = false;

function j() {
  Chunk89892.Z.forEach(e => {
    c.Z.commit(e.mutate({
      ready: false,
      loadingMore: false
    }))
  }), L.clear()
}

function U(e) {
  let {
    changesByChannelId: t
  } = e;
  for (let e in t) {
    let n = c.Z.get(e);
    if (null == n) continue;
    let r = false;
    if (!(n.cached || !r)) {
      M.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(r));
      continue
    }
    n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
  }
}

function G() {
  returntrue
}

function B(e) {
  let {
    channelId: t,
    truncateBottom: n,
    truncateTop: r
  } = e;
  M.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
  let i = c.Z.getOrCreate(t);
  i = i.truncate(n, r), c.Z.commit(i)
}

function Z(e) {
  let {
    channelId: t
  } = e;
  M.log("Clearing messages for ".concat(t)), c.Z.clear(t), L.clear()
}

function F(e) {
  let {
    channelId: t,
    jump: n,
    focus: r,
    before: i,
    after: a,
    limit: o,
    truncate: s
  } = e, l = c.Z.getOrCreate(t);
  (null == n ? true : n.present) ? l = l.jumpToPresent(o): (null == r ? true : r.messageId) != null ? l = l.focusOnMessage(r.messageId) : (null == n ? true : n.messageId) != null ? l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != i || null != a) && (l = l.loadFromCache(null != i, o)), null != s && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)), c.Z.commit(l)
}

function V(e) {
  let {
    channelId: t,
    isBefore: n,
    isAfter: r,
    jump: i,
    hasMoreBefore: a,
    hasMoreAfter: o,
    messages: s,
    isStale: l,
    truncate: u,
    avoidInitialScroll: d
  } = e, f = c.Z.getOrCreate(t);
  f = f.loadComplete({
    newMessages: s,
    isBefore: n,
    isAfter: r,
    jump: i,
    hasMoreBefore: a,
    hasMoreAfter: o,
    cached: l,
    hasFetched: true,
    avoidInitialScroll: d
  }), null != u && (n || r) && (!n || !r) && (f = f.truncate(n, r)), c.Z.commit(f)
}

function H(e) {
  let {
    channelId: t
  } = e, n = c.Z.getOrCreate(t);
  c.Z.commit(n.mutate({
    loadingMore: false,
    error: true
  }))
}

function Y(e) {
  let {
    message: t
  } = e;
  (null == t ? true : t.nonce) != null && L.add(t.nonce)
}

function W(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  if (null == n || !L.has(n)) returnfalse;
  let r = c.Z.getOrCreate(t),
    i = r.get(n);
  if (null == i) returnfalse;
  r = (r = r.remove(n)).merge([i]), L.delete(n), c.Z.commit(r)
}

function K(e) {
  let {
    channelId: t,
    message: n,
    isPushNotification: r
  } = e, i = c.Z.getOrCreate(t);
  if (r) {
    M.log("Inserting message tapped on from a push notification", n.id, n.channel_id), c.Z.commit(i.receivePushNotification(n));
    return
  }
  if (!i.ready) returnfalse;
  null != n.nonce && n.state !== D.yb.SENDING && L.has(n.nonce) && (i = i.remove(n.nonce), L.delete(n.nonce)), i = i.receiveMessage(n, true === I.Z.isAtBottom(t)), c.Z.commit(i)
}

function z(e) {
  let {
    channelId: t,
    messageId: n,
    reason: r
  } = e, i = c.Z.getOrCreate(t);
  if (null == i || !i.has(n)) returnfalse;
  let a = i.get(n, true);
  i = (null == a ? true : a.isPoll()) === true ? i.remove(n) : i.update(n, e => ((e = e.set("state", D.yb.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, b.pj)(e.flags, D.iLy.EPHEMERAL)) : null != r && (e = e.set("interactionError", null != r ? r : "")), e)), c.Z.commit(i)
}

function q(e) {
  let {
    id: t,
    channelId: n
  } = e, r = c.Z.getOrCreate(n);
  if (null == r || !r.has(t)) returnfalse;
  if (r.revealedMessageId === t) {
    let e = r.getAfter(t);
    r = null != e && e.blocked ? r.mutate({
      revealedMessageId: e.id
    }) : r.mutate({
      revealedMessageId: null
    })
  }
  r = r.remove(t), c.Z.commit(r), L.delete(t)
}

function X(e) {
  let {
    ids: t,
    channelId: n
  } = e, r = c.Z.getOrCreate(n);
  if (null == r) returnfalse;
  let i = r.removeMany(t);
  if (r === i) returnfalse;
  if (null != i.revealedMessageId && a().some(t, e => i.revealedMessageId === e)) {
    let e = i.getAfter(i.revealedMessageId);
    i = null != e && e.blocked ? i.mutate({
      revealedMessageId: e.id
    }) : i.mutate({
      revealedMessageId: null
    })
  }
  c.Z.commit(i), t.forEach(e => {
    L.delete(e)
  })
}

function Q(e) {
  let t = e.message.id,
    n = e.message.channel_id,
    r = c.Z.getOrCreate(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, t => (0, h.wi)(t, e.message)), c.Z.commit(r)
}

function J(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = c.Z.get(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, f.Cm), c.Z.commit(r)
}

function $(e) {
  let t = e.messageId,
    n = e.channelId,
    r = c.Z.get(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, t => t.set("interactionData", e.interactionData)), c.Z.commit(r)
}

function ee(e) {
  let {
    channelId: t
  } = e, n = c.Z.getOrCreate(t);
  n = n.loadComplete({
    newMessages: [],
    hasMoreAfter: false,
    hasMoreBefore: false
  }), c.Z.commit(n)
}

function et() {
  Chunk89892.Z.forEach(e => {
    let {
      channelId: t
    } = e;
    null == v.Z.getChannel(t) && c.Z.clear(t)
  })
}

function en() {
  let e = false;
  return Chunk89892.Z.forEach(t => {
    c.Z.commit(t.reset(t.map(t => (t.blocked !== N.Z.isBlockedForMessage(t) && (e = true, t = t.set("blocked", N.Z.isBlockedForMessage(t))), t.ignored !== N.Z.isIgnoredForMessage(t) && (e = true, t = t.set("ignored", N.Z.isIgnoredForMessage(t))), t))))
  }), module
}

function er(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = c.Z.getOrCreate(t);
  c.Z.commit(r.mutate({
    revealedMessageId: n
  }))
}

function ei(e) {}

function ea(e) {}

function eo(e) {
  let {
    type: t,
    channelId: n,
    messageId: r,
    userId: i,
    emoji: a,
    reactionType: o
  } = e, s = c.Z.get(n);
  if (null == s || !(0, g.sm)(e)) returnfalse;
  let l = O.default.getId() === i;
  s = s.update(r, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, l, e.colors, o) : n.removeReaction(a, l, o)), c.Z.commit(s)
}

function es(e) {
  let {
    channelId: t,
    messageId: n,
    reactions: r
  } = e, i = c.Z.get(t);
  if (null == i) returnfalse;
  i = i.update(n, e => {
    var t;
    return e.addReactionBatch(r, null == (t = w.default.getCurrentUser()) ? true : t.id)
  }), c.Z.commit(i)
}

function el(e) {
  let {
    type: t,
    messageData: n
  } = e, {
    message: r
  } = n, i = (0, u.hc)(n), a = r.channelId, o = c.Z.getOrCreate(a);
  if (!o.has(i)) returnfalse;
  o = o.update(i, e => {
    var n;
    return (null == (n = e.embeds) ? true : n.filter(_.K).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, b.pj)(e.flags, D.iLy.EPHEMERAL))), e
  }), c.Z.commit(o)
}

function ec(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = c.Z.get(t);
  if (null == r) returnfalse;
  r = r.update(n, e => e.set("reactions", [])), c.Z.commit(r)
}

function eu(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r
  } = e, i = c.Z.get(t);
  if (null == i) returnfalse;
  i = i.update(n, e => e.removeReactionsForEmoji(r)), c.Z.commit(i)
}

function ed() {
  Chunk89892.Z.forEach(e => {
    c.Z.clear(e.channelId)
  }), L.clear()
}

function ef(e) {
  for (let [t, n] of y.default.entries(e.messages)) {
    let e = c.Z.getOrCreate(t).addCachedMessages(n, true);
    c.Z.commit(e)
  }
}

function e_(e) {
  let t = c.Z.getOrCreate(e.channelId);
  (t.cached || !t.ready) && c.Z.commit(t.addCachedMessages(e.messages, e.stale))
}

function ep(e) {
  let {
    message: t
  } = e, n = w.default.getCurrentUser();
  null != t && null != t.author && null != n && t.author.id === n.id && (k = true)
}
class eh extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk796974.Z, Chunk984933.ZP, Chunk271383.ZP, Chunk430824.Z, Chunk160404.Z, Chunk706454.default, Chunk496675.Z, Chunk699516.Z, Chunk944486.Z, Chunk914010.Z, Chunk594174.default), this.syncWith([Chunk160404.Z], () => {})
  }
  getMessages(e) {
    if (p.Z.hasViewingRoles()) {
      let t = v.Z.getChannel(e),
        n = null == t ? true : t.getGuildId();
      if (p.Z.isViewingRoles(n) && !C.Z.can(D.Plq.VIEW_CHANNEL, t)) return new c.Z(e)
    }
    return c.Z.getOrCreate(e)
  }
  getMessage(e, t) {
    return c.Z.getOrCreate(e).get(t)
  }
  getLastEditableMessage(e) {
    let t = w.default.getCurrentUser();
    return a()(this.getMessages(e).toArray()).reverse().find(e => (0, m.Z)(e, null == t ? true : t.id))
  }
  getLastChatCommandMessage(e) {
    let t = w.default.getCurrentUser();
    return this.getMessages(e).toArray().reverse().find(e => {
      var n, r;
      return (null == (n = e.interaction) ? true : n.type) === l.B8.APPLICATION_COMMAND && (null == (r = e.interactionData) ? true : r.type) === l.yU.CHAT && e.interaction.user.id === (null == t ? true : t.id)
    })
  }
  getLastMessage(e) {
    return a()(this.getMessages(e).toArray()).reverse().get(0)
  }
  getLastNonCurrentUserMessage(e) {
    let t = w.default.getCurrentUser();
    return a()(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? true : t.id))
  }
  jumpedMessageId(e) {
    let t = c.Z.get(e);
    return null == t ? true : t.jumpTargetId
  }
  focusedMessageId(e) {
    let t = c.Z.get(e);
    return null == t ? true : t.focusTargetId
  }
  hasPresent(e) {
    let t = c.Z.get(e);
    return null != t && t.ready && t.hasPresent()
  }
  isReady(e) {
    return c.Z.getOrCreate(e).ready
  }
  whenReady(e, t) {
    this.addConditionalChangeListener(() => {
      if (this.isReady(e)) return setImmediate(t), false
    })
  }
  isLoadingMessages(e) {
    return c.Z.getOrCreate(e).loadingMore
  }
  hasCurrentUserSentMessage(e) {
    let t = w.default.getCurrentUser();
    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? true : t.id))
  }
  hasCurrentUserSentMessageSinceAppStart() {
    return k
  }
}
x(eh, "displayName", "MessageStore");
let em = new eh(Chunk570140.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
  CONNECTION_OPEN: j,
  OVERLAY_INITIALIZE: j,
  CACHE_LOADED: ef,
  LOAD_MESSAGES: G,
  LOAD_MESSAGES_SUCCESS: V,
  LOAD_MESSAGES_FAILURE: H,
  LOAD_MESSAGES_SUCCESS_CACHED: F,
  LOCAL_MESSAGES_LOADED: e_,
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
  TRUNCATE_MESSAGES: B,
  CLEAR_MESSAGES: Z,
  MESSAGE_CREATE: K,
  MESSAGE_SEND_FAILED: z,
  MESSAGE_SEND_FAILED_AUTOMOD: el,
  MESSAGE_EDIT_FAILED_AUTOMOD: el,
  MESSAGE_UPDATE: Q,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
  MESSAGE_DELETE: q,
  MESSAGE_DELETE_BULK: X,
  MESSAGE_REVEAL: er,
  THREAD_CREATE_LOCAL: ee,
  CHANNEL_DELETE: et,
  THREAD_DELETE: et,
  GUILD_DELETE: et,
  RELATIONSHIP_ADD: en,
  RELATIONSHIP_UPDATE: en,
  RELATIONSHIP_REMOVE: en,
  GUILD_MEMBERS_CHUNK_BATCH: ei,
  THREAD_MEMBER_LIST_UPDATE: ea,
  MESSAGE_REACTION_ADD: eo,
  MESSAGE_REACTION_ADD_MANY: es,
  MESSAGE_REACTION_REMOVE: eo,
  MESSAGE_REACTION_REMOVE_ALL: ec,
  MESSAGE_REACTION_REMOVE_EMOJI: eu,
  LOGOUT: ed,
  UPLOAD_START: Y,
  UPLOAD_FAIL: W,
  LOCAL_MESSAGE_CREATE: ep
})