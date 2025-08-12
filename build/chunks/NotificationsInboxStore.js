/** Chunk was on web.js **/
/** chunk id: 787879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eE
}), require("./361932.js"), require("./187205.js"), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./387201.js");
var r, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk455199 = require("./455199.js"),
  Chunk601070 = require("./601070.js"),
  Chunk569471 = require("./569471.js"),
  Chunk723170 = require("./723170.js"),
  Chunk131704 = require("./131704.js"),
  Chunk23750 = require("./23750.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk821020 = require("./821020.js"),
  Chunk370774 = require("./370774.js"),
  Chunk810457 = require("./810457.js"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = {},
  w = null,
  D = [],
  L = new Chunk810457.Z,
  x = false,
  M = false,
  k = false,
  j = false,
  U = Chunk709054.default.fromTimestamp(Date.now()),
  G = true,
  B = null,
  Z = null,
  F = true;

function V() {
  let e = Chunk771845.ZP.getFlattenedGuildIds().flatMap(e => m.ZP.getSelectableChannelIds(e)),
    t = Chunk601070.Z.getAllActiveJoinedThreads(),
    n = e => !!N.TPd.GUILD_TEXTUAL.has(e.type) && ((0, _.Q5)(e.type) ? (0, f.J)(e) === C.iN.ALL_MESSAGES && !d.Z.isMuted(e.id) : y.ZP.allowAllMessages(e)),
    r = [];
  for (let t of module) {
    let e = Chunk592125.Z.getBasicChannel(exports);
    null != module && require(module) && r.push(module)
  }
  for (let e in exports)
    for (let i in exports[module])
      for (let o in exports[module][Chunk512722]) {
        let e = Chunk592125.Z.getBasicChannel(o);
        null != module && require(module) && r.push(module)
      }
  return r.map(e => e.id).sort((e, t) => {
    let n = E.ZP.hasUnread(e);
    return n !== E.ZP.hasUnread(t) ? n ? false : 1 : v.default.compare(E.ZP.lastMessageId(t), E.ZP.lastMessageId(e))
  }).reduce((e, t) => (E.ZP.lastMessageTimestamp(t) > Date.now() - A.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
    notifyingChannelIds: [],
    staleChannelIds: []
  })
}

function H(e) {
  var t;
  if (!g.Z.isReady(e)) return;
  let n = h.Z.getBasicChannel(e),
    r = g.Z.getMessages(e);
  if (r.hasPresent() && 0 !== r.length) return L.addChannelMessages({
    channel: n,
    channelMessages: r,
    userId: null == (t = O.default.getCurrentUser()) ? true : t.id
  }), r
}

function Y() {
  if (null == w) {
    U = Chunk709054.default.fromTimestamp(Date.now());
    return
  }
  for (let e of w.toSorted((e, t) => v.default.compare(E.ZP.lastMessageId(t), E.ZP.lastMessageId(e)))) {
    let t = P[module];
    if (exports.loadState === Chunk982183.a7.UNLOADED && null != exports.mostRecentMessageId) {
      U = exports.mostRecentMessageId;
      return
    }
  }
  U = "0"
}

function W() {
  let {
    notifyingChannelIds: e,
    staleChannelIds: t
  } = V();
  w = module, D = exports, o()(null != w, "notifyingChannelIds should not be null");
  let n = w.filter(e => null == P[e]),
    r = Object.keys(P).filter(e => !(null == w ? true : w.includes(e)));
  if (0 !== w.length && 0 === require.length && 0 === r.length) returnfalse;
  for (let e of r) delete P[module];
  for (let e of require)
    if (P[module] = {
        loadState: Chunk982183.a7.UNLOADED,
        mostRecentMessageId: Chunk306680.ZP.lastMessageId(module)
      }, Chunk375954.Z.isReady(module)) {
      let t = H(module);
      if (null != exports) {
        var i, a;
        P[module].loadState = Chunk982183.a7.LOADED, P[module].mostRecentMessageId = null != (a = null == (i = exports.last()) ? true : Chunk512722.id) ? Chunk442837 : P[module].mostRecentMessageId
      }
    } L.updateChannelIds(w), Y()
}

function K() {
  P = {}, w = null, D = [], L = new Chunk810457.Z, x = false, M = false, k = false, U = Chunk709054.default.fromTimestamp(Date.now()), G = true, j = false, Z = null, B = null
}

function z() {
  var e, t, n;
  for (let n of (W(), null != w ? w : [])) {
    let r = H(require);
    null != r && (P[require].loadState = Chunk982183.a7.LOADED, P[require].mostRecentMessageId = null != (t = null == (e = r.last()) ? true : module.id) ? exports : null, Y())
  }
  let r = null != (n = Chunk455199.ZP.getSettingsFilteredMentions()) ? require : [];
  L.addMessages(r.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = h.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: A.fL.MENTION,
      message: e
    }
  }))
}

function q() {
  K(), z()
}

function X() {
  K()
}

function Q(e) {
  if (e instanceof p.ZP) return e;
  let t = g.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, l.e5)(e)
}

function J(e) {
  var t, n, r;
  let {
    channelId: i,
    message: o
  } = e;
  if (null == w || (null == (t = o.author) ? true : t.id) === (null == (n = O.default.getCurrentUser()) ? true : n.id)) returnfalse;
  let a = w.includes(i),
    s = Q(o),
    l = s.mentioned;
  if (!a && !l) {
    if (!D.includes(i)) returnfalse;
    W()
  }
  if (!a && l && !(0, c.ln)(s)) returnfalse;
  L.addMessage({
    id: o.id,
    channelId: o.channel_id,
    guildId: null == (r = h.Z.getBasicChannel(o.channel_id)) ? true : r.guild_id,
    kind: l ? A.fL.MENTION : A.fL.ALL_MESSAGES_CHANNEL,
    message: s
  })
}

function $(e) {
  let {
    channelId: t
  } = e;
  if (!(null == w ? true : w.includes(t))) returnfalse;
  let n = H(t);
  if (null == n) returnfalse;
  let r = n.length >= A.AQ || n.hasFetched && !n.hasMoreBefore;
  P[t].loadState !== A.a7.LOADED && (P[t].loadState = r ? A.a7.LOADED : A.a7.LOADED_UNREAD), Y()
}

function ee(e) {
  let {
    messages: t
  } = e;
  if (0 === t.length) returnfalse;
  let n = c.ZP.getSettingsFilteredMentions();
  if (null == n || 0 === n.length) returnfalse;
  L.addMessages(n.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = h.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: A.fL.MENTION,
      message: e
    }
  }))
}

function et(e) {
  let {
    id: t
  } = e;
  return L.deleteMessages([t])
}

function en(e) {
  let {
    ids: t
  } = e;
  return L.deleteMessages(t)
}

function er() {
  x = true
}

function ei(e) {
  let {
    preload: t,
    hasMoreToLoad: n,
    analyticsPayload: r
  } = e;
  x = false, t ? j = true : (null != n && (G = n), k = true), Z = null != r ? r : null
}

function eo(e) {
  var t;
  let {
    preload: n
  } = e;
  return null != (null == (t = (0, I.Ag)({
    location: "NotificationsInboxStore.canLoadMore",
    autoTrackExposure: false
  })) ? true : t.notificationCenterVariant) && null != w && !x && !M && (!n || !j) && G
}

function ea() {
  x = false, Z = null, M = true
}

function es(e) {
  let {
    messageId: t,
    channelId: n,
    isUnread: r
  } = e, i = (0, I.Ag)({
    location: "handleInboxItemClick"
  }).notificationCenterVariant;
  B = r && i === I.jP.SIDEBAR ? {
    channelId: n,
    messageId: t
  } : null
}

function el(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  (0, T.Tj)({
    channelId: t,
    id: n
  }, B) && (B = null)
}

function ec() {
  M = false
}

function eu() {
  B = null
}

function ed(e) {
  let {
    channel: t
  } = e;
  if (y.ZP.allowNoMessages(t)) returnfalse;
  q()
}

function ef(e) {
  var t;
  let {
    userId: n
  } = e;
  if (n !== (null == (t = O.default.getCurrentUser()) ? true : t.id)) returnfalse;
  q()
}

function e_(e) {
  var t;
  let {
    id: n,
    addedMembers: r,
    removedMemberIds: i
  } = e, o = null == (t = O.default.getCurrentUser()) ? true : t.id;
  if (null == o) returnfalse;
  if (null == r ? true : r.some(e => e.userId === o)) {
    let e = h.Z.getBasicChannel(n);
    return !(null == e || d.Z.isMuted(n)) && (0, f.J)(e) !== C.iN.NO_MESSAGES && void q()
  }
  return null != i && !!i.includes(o) && void q()
}

function ep(e) {
  let {
    channel: t
  } = e;
  if (!L.getMessages().some(e => e.channelId === t.id)) returnfalse;
  q()
}

function eh(e) {
  let {
    guild: t
  } = e;
  if (!L.getMessages().some(e => e.guildId === t.id)) returnfalse;
  q()
}

function em(e) {
  let {
    navOnClick: t
  } = e;
  F = null == t || t
}
class eg extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk771845.ZP, Chunk984933.ZP, Chunk592125.Z, Chunk306680.ZP, Chunk601070.Z, Chunk569471.Z, Chunk9156.ZP, Chunk375954.Z, Chunk455199.ZP)
  }
  canLoadMore(e) {
    let {
      preload: t
    } = e;
    return eo({
      preload: t
    })
  }
  getInboxMessages() {
    return L.getMessages()
  }
  getNotifyingChannelIds() {
    return w
  }
  getChannelInfoMap() {
    return P
  }
  get oldestDisplayedMessageId() {
    return U
  }
  get hasMoreToLoad() {
    return G
  }
  get isLoading() {
    return x
  }
  get hasLoadedEver() {
    return k
  }
  get hasPreloaded() {
    return j
  }
  get isLoadingComplete() {
    return !x && !G
  }
  get selectedItemInfo() {
    return B
  }
  get currentRequestAnalyticsPayload() {
    return Z
  }
  getDevOverrides() {
    return {
      navOnClick: F
    }
  }
}
R(eg, "displayName", "NotificationsInboxStore");
let eE = new eg(Chunk570140.Z, {
  LOAD_RECENT_MENTIONS_SUCCESS: ee,
  LOAD_MESSAGES_SUCCESS: $,
  MESSAGE_CREATE: J,
  MESSAGE_DELETE: et,
  RECENT_MENTION_DELETE: et,
  MESSAGE_DELETE_BULK: en,
  CONNECTION_OPEN: q,
  LOGOUT: X,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: q,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: q,
  GUILD_CREATE: q,
  USER_GUILD_SETTINGS_GUILD_UPDATE: q,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: q,
  CHANNEL_CREATE: ed,
  GUILD_DELETE: eh,
  THREAD_DELETE: ep,
  CHANNEL_DELETE: ep,
  THREAD_MEMBER_UPDATE: ef,
  THREAD_MEMBERS_UPDATE: e_,
  NOTIFICATIONS_INBOX_OPEN: ec,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: er,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ei,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: ea,
  NOTIFICATIONS_INBOX_ITEM_CLICK: es,
  NOTIFICATIONS_INBOX_ITEM_ACK: el,
  NOTIFICATIONS_INBOX_CLOSE: eu,
  NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: em
})