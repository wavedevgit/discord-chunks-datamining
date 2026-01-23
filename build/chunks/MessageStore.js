/** Chunk was on web.js **/
/** chunk id: 320501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => em
}), require("./896048.js"), require("./938796.js"), require("./321073.js"), require("./264879.js"), require("./142703.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk128265 = require("./128265.js"),
  Chunk884384 = require("./884384.js"),
  Chunk626584 = require("./626584.js"),
  Chunk390248 = require("./390248.js"),
  Chunk459403 = require("./459403.js"),
  Chunk164956 = require("./164956.js"),
  Chunk141468 = require("./141468.js"),
  Chunk697470 = require("./697470.js"),
  E = (require("./763754.js"), require("./815807.js")),
  Chunk773669 = require("./773669.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk72314 = require("./72314.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = new Set,
  j = new Chunk626584.A("MessageStore"),
  M = false;

function k() {
  u.A.forEach(e => {
    u.A.commit(e.mutate({
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
    let n = u.A.get(e);
    if (null == n) continue;
    let r = false;
    if (!(n.cached || !r)) {
      j.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(r));
      continue
    }
    n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
  }
}

function G() {
  returntrue
}

function V(e) {
  let {
    channelId: t,
    truncateBottom: n,
    truncateTop: r
  } = e;
  j.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
  let i = u.A.getOrCreate(t);
  i = i.truncate(n, r), u.A.commit(i)
}

function F(e) {
  let {
    channelId: t
  } = e;
  j.log("Clearing messages for ".concat(t)), u.A.clear(t), L.clear()
}

function B(e) {
  let {
    channelId: t,
    jump: n,
    focus: r,
    before: i,
    after: a,
    limit: s,
    truncate: o
  } = e, l = u.A.getOrCreate(t);
  (null == n ? true : n.present) ? l = l.jumpToPresent(s): (null == r ? true : r.messageId) != null ? l = l.focusOnMessage(r.messageId) : (null == n ? true : n.messageId) != null ? l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != i || null != a) && (l = l.loadFromCache(null != i, s)), null != o && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)), u.A.commit(l)
}

function H(e) {
  let {
    channelId: t,
    isBefore: n,
    isAfter: r,
    jump: i,
    hasMoreBefore: a,
    hasMoreAfter: s,
    messages: o,
    isStale: l,
    truncate: c,
    avoidInitialScroll: d
  } = e, f = u.A.getOrCreate(t);
  f = f.loadComplete({
    newMessages: o,
    isBefore: n,
    isAfter: r,
    jump: i,
    hasMoreBefore: a,
    hasMoreAfter: s,
    cached: l,
    hasFetched: true,
    avoidInitialScroll: d
  }), null != c && (n || r) && (!n || !r) && (f = f.truncate(n, r)), u.A.commit(f)
}

function Y(e) {
  let {
    channelId: t
  } = e, n = u.A.getOrCreate(t);
  u.A.commit(n.mutate({
    loadingMore: false,
    error: true
  }))
}

function W(e) {
  let {
    message: t
  } = e;
  (null == t ? true : t.nonce) != null && L.add(t.nonce)
}

function K(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  if (null == n || !L.has(n)) returnfalse;
  let r = u.A.getOrCreate(t),
    i = r.get(n);
  if (null == i) returnfalse;
  r = (r = r.remove(n)).merge([i]), L.delete(n), u.A.commit(r)
}

function z(e) {
  let {
    channelId: t,
    message: n,
    isPushNotification: r
  } = e, i = u.A.getOrCreate(t);
  if (r) {
    j.log("Inserting message tapped on from a push notification", n.id, n.channel_id), u.A.commit(i.receivePushNotification(n));
    return
  }
  if (!i.ready) returnfalse;
  null != n.nonce && n.state !== D.cmJ.SENDING && L.has(n.nonce) && (i = i.remove(n.nonce), L.delete(n.nonce)), i = i.receiveMessage(n, true === A.A.isAtBottom(t)), u.A.commit(i)
}

function q(e) {
  let {
    channelId: t,
    messageId: n,
    reason: r
  } = e, i = u.A.getOrCreate(t);
  if (null == i || !i.has(n)) returnfalse;
  let a = i.get(n, true);
  i = (null == a ? true : a.isPoll()) === true ? i.remove(n) : i.update(n, e => ((e = e.set("state", D.cmJ.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, s.UI)(e.flags, D.pr7.EPHEMERAL)) : null != r && (e = e.set("interactionError", null != r ? r : "")), e)), u.A.commit(i)
}

function Z(e) {
  let {
    id: t,
    channelId: n
  } = e, r = u.A.getOrCreate(n);
  if (null == r || !r.has(t)) returnfalse;
  if (r.revealedMessageId === t) {
    let e = r.getAfter(t);
    r = null != e && e.blocked ? r.mutate({
      revealedMessageId: e.id
    }) : r.mutate({
      revealedMessageId: null
    })
  }
  r = r.remove(t), u.A.commit(r), L.delete(t)
}

function X(e) {
  let {
    ids: t,
    channelId: n
  } = e, r = u.A.getOrCreate(n);
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
  u.A.commit(i), t.forEach(e => {
    L.delete(e)
  })
}

function Q(e) {
  let t = e.message.id,
    n = e.message.channel_id,
    r = u.A.getOrCreate(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, t => (0, m.IU)(t, e.message)), u.A.commit(r)
}

function J(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = u.A.get(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, p.Td), u.A.commit(r)
}

function $(e) {
  let t = e.messageId,
    n = e.channelId,
    r = u.A.get(n);
  if (null == r || !r.has(t)) returnfalse;
  r = r.update(t, t => t.set("interactionData", e.interactionData)), u.A.commit(r)
}

function ee(e) {
  let {
    channelId: t
  } = e, n = u.A.getOrCreate(t);
  n = n.loadComplete({
    newMessages: [],
    hasMoreAfter: false,
    hasMoreBefore: false
  }), u.A.commit(n)
}

function et() {
  u.A.forEach(e => {
    let {
      channelId: t
    } = e;
    null == v.A.getChannel(t) && u.A.clear(t)
  })
}

function en() {
  let e = false;
  return u.A.forEach(t => {
    u.A.commit(t.reset(t.map(t => (t.blocked !== N.A.isBlockedForMessage(t) && (e = true, t = t.set("blocked", N.A.isBlockedForMessage(t))), t.ignored !== N.A.isIgnoredForMessage(t) && (e = true, t = t.set("ignored", N.A.isIgnoredForMessage(t))), t))))
  }), e
}

function er(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = u.A.getOrCreate(t);
  u.A.commit(r.mutate({
    revealedMessageId: n
  }))
}

function ei(e) {}

function ea(e) {}

function es(e) {
  let {
    type: t,
    channelId: n,
    messageId: r,
    userId: i,
    emoji: a,
    reactionType: s
  } = e, o = u.A.get(n);
  if (null == o || !(0, E.vp)(e)) returnfalse;
  let l = O.default.getId() === i;
  o = o.update(r, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s)), u.A.commit(o)
}

function eo(e) {
  let {
    channelId: t,
    messageId: n,
    reactions: r
  } = e, i = u.A.get(t);
  if (null == i) returnfalse;
  i = i.update(n, e => {
    var t;
    return e.addReactionBatch(r, null == (t = P.default.getCurrentUser()) ? true : t.id)
  }), u.A.commit(i)
}

function el(e) {
  let {
    type: t,
    messageData: n
  } = e, {
    message: r
  } = n, i = (0, d.cR)(n), a = r.channelId, o = u.A.getOrCreate(a);
  if (!o.has(i)) returnfalse;
  o = o.update(i, e => {
    var n;
    return (null == (n = e.embeds) ? true : n.filter(_._).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, D.pr7.EPHEMERAL))), e
  }), u.A.commit(o)
}

function ec(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = u.A.get(t);
  if (null == r) returnfalse;
  r = r.update(n, e => e.set("reactions", [])), u.A.commit(r)
}

function eu(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r
  } = e, i = u.A.get(t);
  if (null == i) returnfalse;
  i = i.update(n, e => e.removeReactionsForEmoji(r)), u.A.commit(i)
}

function ed() {
  u.A.forEach(e => {
    u.A.clear(e.channelId)
  }), L.clear()
}

function ef(e) {
  for (let [t, n] of b.default.entries(e.messages)) {
    let e = u.A.getOrCreate(t).addCachedMessages(n, true);
    u.A.commit(e)
  }
}

function ep(e) {
  let t = u.A.getOrCreate(e.channelId);
  (t.cached || !t.ready) && u.A.commit(t.addCachedMessages(e.messages, e.stale))
}

function e_(e) {
  let {
    message: t
  } = e, n = P.default.getCurrentUser();
  null != t && null != t.author && null != n && t.author.id === n.id && (M = true)
}
class eh extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(O.default, v.A, A.A, I.Ay, S.Ay, T.A, h.A, y.default, C.A, N.A, w.A, R.A, P.default), this.syncWith([h.A], () => {})
  }
  getMessages(e) {
    if (h.A.hasViewingRoles()) {
      let t = v.A.getChannel(e),
        n = null == t ? true : t.getGuildId();
      if (h.A.isViewingRoles(n) && !C.A.can(D.xBc.VIEW_CHANNEL, t)) return new u.A(e)
    }
    return u.A.getOrCreate(e)
  }
  getMessage(e, t) {
    return u.A.getOrCreate(e).get(t)
  }
  getLastEditableMessage(e) {
    let t = P.default.getCurrentUser();
    return a()(this.getMessages(e).toArray()).reverse().find(e => (0, g.A)(e, null == t ? true : t.id))
  }
  getLastChatCommandMessage(e) {
    let t = P.default.getCurrentUser();
    return this.getMessages(e).toArray().reverse().find(e => {
      var n, r;
      return (null == (n = e.interaction) ? true : n.type) === c.G4.APPLICATION_COMMAND && (null == (r = e.interactionData) ? true : r.type) === c.kc.CHAT && e.interaction.user.id === (null == t ? true : t.id)
    })
  }
  getLastMessage(e) {
    return a()(this.getMessages(e).toArray()).reverse().get(0)
  }
  getLastNonCurrentUserMessage(e) {
    let t = P.default.getCurrentUser();
    return a()(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? true : t.id))
  }
  jumpedMessageId(e) {
    let t = u.A.get(e);
    return null == t ? true : t.jumpTargetId
  }
  focusedMessageId(e) {
    let t = u.A.get(e);
    return null == t ? true : t.focusTargetId
  }
  hasPresent(e) {
    let t = u.A.get(e);
    return null != t && t.ready && t.hasPresent()
  }
  isReady(e) {
    return u.A.getOrCreate(e).ready
  }
  whenReady(e, t) {
    this.addConditionalChangeListener(() => {
      if (this.isReady(e)) return setImmediate(t), false
    })
  }
  isLoadingMessages(e) {
    return u.A.getOrCreate(e).loadingMore
  }
  hasCurrentUserSentMessage(e) {
    let t = P.default.getCurrentUser();
    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? true : t.id))
  }
  hasCurrentUserSentMessageSinceAppStart() {
    return M
  }
}
x(eh, "displayName", "MessageStore");
let em = new eh(Chunk73153.h, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
  CONNECTION_OPEN: k,
  OVERLAY_INITIALIZE: k,
  CACHE_LOADED: ef,
  LOAD_MESSAGES: G,
  LOAD_MESSAGES_SUCCESS: H,
  LOAD_MESSAGES_FAILURE: Y,
  LOAD_MESSAGES_SUCCESS_CACHED: B,
  LOCAL_MESSAGES_LOADED: ep,
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
  TRUNCATE_MESSAGES: V,
  CLEAR_MESSAGES: F,
  MESSAGE_CREATE: z,
  MESSAGE_SEND_FAILED: q,
  MESSAGE_SEND_FAILED_AUTOMOD: el,
  MESSAGE_EDIT_FAILED_AUTOMOD: el,
  MESSAGE_UPDATE: Q,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
  MESSAGE_DELETE: Z,
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
  MESSAGE_REACTION_ADD: es,
  MESSAGE_REACTION_ADD_MANY: eo,
  MESSAGE_REACTION_REMOVE: es,
  MESSAGE_REACTION_REMOVE_ALL: ec,
  MESSAGE_REACTION_REMOVE_EMOJI: eu,
  LOGOUT: ed,
  UPLOAD_START: W,
  UPLOAD_FAIL: K,
  LOCAL_MESSAGE_CREATE: e_
})