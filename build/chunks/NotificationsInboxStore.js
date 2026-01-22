/** Chunk was on web.js **/
/** chunk id: 320697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eb
}), require("./114821.js"), require("./339614.js"), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./839272.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk323073 = require("./323073.js"),
  Chunk141468 = require("./141468.js"),
  Chunk187508 = require("./187508.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk607508 = require("./607508.js"),
  Chunk95701 = require("./95701.js"),
  Chunk383233 = require("./383233.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk711014 = require("./711014.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk851109 = require("./851109.js"),
  Chunk394953 = require("./394953.js"),
  Chunk28156 = require("./28156.js"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = {},
  D = null,
  x = [],
  L = new Chunk28156.A,
  j = false,
  M = false,
  k = false,
  U = false,
  G = Chunk661191.default.fromTimestamp(Date.now()),
  V = true,
  F = null,
  B = null,
  H = true;

function Y() {
  let e = y.Ay.getFlattenedGuildIds().flatMap(e => g.Ay.getSelectableChannelIds(e)),
    t = d.A.getAllActiveJoinedThreads(),
    n = e => !(!N.kvI.GUILD_TEXTUAL.has(e.type) || (0, l.UK)(e.id)) && ((0, _.fT)(e.type) ? (0, p.l)(e) === R.CP.ALL_MESSAGES && !f.A.isMuted(e.id) : O.Ay.allowAllMessages(e)),
    r = [];
  for (let t of e) {
    let e = m.A.getBasicChannel(t);
    null != e && n(e) && r.push(e)
  }
  for (let e in t)
    for (let i in t[e])
      for (let a in t[e][i]) {
        let e = m.A.getBasicChannel(a);
        null != e && n(e) && r.push(e)
      }
  return r.map(e => e.id).sort((e, t) => {
    let n = b.Ay.hasUnread(e);
    return n !== b.Ay.hasUnread(t) ? n ? false : 1 : v.default.compare(b.Ay.lastMessageId(t), b.Ay.lastMessageId(e))
  }).reduce((e, t) => (b.Ay.lastMessageTimestamp(t) > Date.now() - C.V$ ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
    notifyingChannelIds: [],
    staleChannelIds: []
  })
}

function W(e) {
  var t;
  if (!E.A.isReady(e)) return;
  let n = m.A.getBasicChannel(e),
    r = E.A.getMessages(e);
  if (r.hasPresent() && 0 !== r.length) return L.addChannelMessages({
    channel: n,
    channelMessages: r,
    userId: null == (t = A.default.getCurrentUser()) ? true : t.id
  }), r
}

function K() {
  if (null == D) {
    G = v.default.fromTimestamp(Date.now());
    return
  }
  for (let e of D.toSorted((e, t) => v.default.compare(b.Ay.lastMessageId(t), b.Ay.lastMessageId(e)))) {
    let t = P[e];
    if (t.loadState === C.Ve.UNLOADED && null != t.mostRecentMessageId) {
      G = t.mostRecentMessageId;
      return
    }
  }
  G = "0"
}

function z() {
  let {
    notifyingChannelIds: e,
    staleChannelIds: t
  } = Y();
  D = e, x = t, a()(null != D, "notifyingChannelIds should not be null");
  let n = D.filter(e => null == P[e]),
    r = Object.keys(P).filter(e => !(null == D ? true : D.includes(e)));
  if (0 !== D.length && 0 === n.length && 0 === r.length) returnfalse;
  for (let e of r) delete P[e];
  for (let e of n)
    if (P[e] = {
        loadState: C.Ve.UNLOADED,
        mostRecentMessageId: b.Ay.lastMessageId(e)
      }, E.A.isReady(e)) {
      let t = W(e);
      if (null != t) {
        var i, s;
        P[e].loadState = C.Ve.LOADED, P[e].mostRecentMessageId = null != (i = null == (s = t.last()) ? true : s.id) ? i : P[e].mostRecentMessageId
      }
    } L.updateChannelIds(D), K()
}

function q() {
  P = {}, D = null, x = [], L = new T.A, j = false, M = false, k = false, G = v.default.fromTimestamp(Date.now()), V = true, U = false, B = null, F = null
}

function X() {
  var e, t, n;
  for (let e of (z(), null != D ? D : [])) {
    let r = W(e);
    null != r && (P[e].loadState = C.Ve.LOADED, P[e].mostRecentMessageId = null != (t = null == (n = r.last()) ? true : n.id) ? t : null, K())
  }
  let r = null != (e = u.Ay.getSettingsFilteredMentions()) ? e : [];
  L.addMessages(r.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = m.A.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: C.yL.MENTION,
      message: e
    }
  }))
}

function Z() {
  q(), X()
}

function Q() {
  q()
}

function $(e) {
  if (e instanceof h.Ay) return e;
  let t = E.A.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, c.rh)(e)
}

function J(e) {
  var t, n, r;
  let {
    channelId: i,
    message: a
  } = e;
  if (null == D || (null == (t = a.author) ? true : t.id) === (null == (n = A.default.getCurrentUser()) ? true : n.id)) returnfalse;
  let s = D.includes(i);
  if ((0, l.UK)(i)) returnfalse;
  let o = $(a),
    c = o.mentioned;
  if (!s && !c) {
    if (!x.includes(i)) returnfalse;
    z()
  }
  if (!s && c && !(0, u.pK)(o)) returnfalse;
  L.addMessage({
    id: a.id,
    channelId: a.channel_id,
    guildId: null == (r = m.A.getBasicChannel(a.channel_id)) ? true : r.guild_id,
    kind: c ? C.yL.MENTION : C.yL.ALL_MESSAGES_CHANNEL,
    message: o
  })
}

function ee(e) {
  let {
    channelId: t
  } = e;
  if (!(null == D ? true : D.includes(t))) returnfalse;
  let n = W(t);
  if (null == n) returnfalse;
  let r = n.length >= C.EM || n.hasFetched && !n.hasMoreBefore;
  P[t].loadState !== C.Ve.LOADED && (P[t].loadState = r ? C.Ve.LOADED : C.Ve.LOADED_UNREAD), K()
}

function et(e) {
  let {
    messages: t
  } = e;
  if (0 === t.length) returnfalse;
  let n = u.Ay.getSettingsFilteredMentions();
  if (null == n || 0 === n.length) returnfalse;
  L.addMessages(n.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = m.A.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: C.yL.MENTION,
      message: e
    }
  }))
}

function en(e) {
  let {
    id: t
  } = e;
  return L.deleteMessages([t])
}

function er(e) {
  let {
    ids: t
  } = e;
  return L.deleteMessages(t)
}

function ei() {
  j = true
}

function ea(e) {
  let {
    preload: t,
    hasMoreToLoad: n,
    analyticsPayload: r
  } = e;
  j = false, t ? U = true : (null != n && (V = n), k = true), B = null != r ? r : null
}

function es(e) {
  var t;
  let {
    preload: n
  } = e;
  return null != (null == (t = (0, S.GE)({
    location: "NotificationsInboxStore.canLoadMore",
    autoTrackExposure: false
  })) ? true : t.notificationCenterVariant) && null != D && !j && !M && (!n || !U) && V
}

function eo() {
  j = false, B = null, M = true
}

function el(e) {
  let {
    messageId: t,
    channelId: n,
    isUnread: r
  } = e, i = (0, S.GE)({
    location: "handleInboxItemClick"
  }).notificationCenterVariant;
  F = r && i === S.U5.SIDEBAR ? {
    channelId: n,
    messageId: t
  } : null
}

function ec(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  (0, I.zo)({
    channelId: t,
    id: n
  }, F) && (F = null)
}

function eu() {
  M = false
}

function ed() {
  F = null
}

function ef(e) {
  let {
    channel: t
  } = e;
  if (O.Ay.allowNoMessages(t)) returnfalse;
  Z()
}

function ep(e) {
  var t;
  let {
    userId: n
  } = e;
  if (n !== (null == (t = A.default.getCurrentUser()) ? true : t.id)) returnfalse;
  Z()
}

function e_(e) {
  var t;
  let {
    id: n,
    addedMembers: r,
    removedMemberIds: i
  } = e, a = null == (t = A.default.getCurrentUser()) ? true : t.id;
  if (null == a) returnfalse;
  if (null == r ? true : r.some(e => e.userId === a)) {
    let e = m.A.getBasicChannel(n);
    return !(null == e || f.A.isMuted(n)) && (0, p.l)(e) !== R.CP.NO_MESSAGES && void Z()
  }
  return null != i && !!i.includes(a) && void Z()
}

function eh(e) {
  let {
    channel: t
  } = e;
  if (!L.getMessages().some(e => e.channelId === t.id)) returnfalse;
  Z()
}

function em(e) {
  let {
    guild: t
  } = e;
  if (!L.getMessages().some(e => e.guildId === t.id)) returnfalse;
  Z()
}

function eg(e) {
  let {
    navOnClick: t
  } = e;
  H = null == t || t
}
class eE extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, m.A, g.Ay, f.A, E.A, b.Ay, u.Ay, y.Ay, O.Ay, A.default)
  }
  canLoadMore(e) {
    let {
      preload: t
    } = e;
    return es({
      preload: t
    })
  }
  getInboxMessages() {
    return L.getMessages()
  }
  getNotifyingChannelIds() {
    return D
  }
  getChannelInfoMap() {
    return P
  }
  get oldestDisplayedMessageId() {
    return G
  }
  get hasMoreToLoad() {
    return V
  }
  get isLoading() {
    return j
  }
  get hasLoadedEver() {
    return k
  }
  get hasPreloaded() {
    return U
  }
  get isLoadingComplete() {
    return !j && !V
  }
  get selectedItemInfo() {
    return F
  }
  get currentRequestAnalyticsPayload() {
    return B
  }
  getDevOverrides() {
    return {
      navOnClick: H
    }
  }
}
w(eE, "displayName", "NotificationsInboxStore");
let eb = new eE(Chunk73153.h, {
  LOAD_RECENT_MENTIONS_SUCCESS: et,
  LOAD_MESSAGES_SUCCESS: ee,
  MESSAGE_CREATE: J,
  MESSAGE_DELETE: en,
  RECENT_MENTION_DELETE: en,
  MESSAGE_DELETE_BULK: er,
  CONNECTION_OPEN: Z,
  LOGOUT: Q,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Z,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Z,
  GUILD_CREATE: Z,
  USER_GUILD_SETTINGS_GUILD_UPDATE: Z,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: Z,
  CHANNEL_CREATE: ef,
  GUILD_DELETE: em,
  THREAD_DELETE: eh,
  CHANNEL_DELETE: eh,
  THREAD_MEMBER_UPDATE: ep,
  THREAD_MEMBERS_UPDATE: e_,
  NOTIFICATIONS_INBOX_OPEN: eu,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: ei,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ea,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: eo,
  NOTIFICATIONS_INBOX_ITEM_CLICK: el,
  NOTIFICATIONS_INBOX_ITEM_ACK: ec,
  NOTIFICATIONS_INBOX_CLOSE: ed,
  NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eg
})