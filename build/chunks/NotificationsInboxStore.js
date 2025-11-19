/** Chunk was on web.js **/
/** chunk id: 787879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eb
}), require("./361932.js"), require("./187205.js"), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./387201.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk622822 = require("./622822.js"),
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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let D = {},
  w = null,
  L = [],
  x = new Chunk810457.Z,
  M = false,
  j = false,
  k = false,
  U = false,
  G = Chunk709054.default.fromTimestamp(Date.now()),
  B = true,
  Z = null,
  F = null,
  V = true;

function H() {
  let e = Chunk771845.ZP.getFlattenedGuildIds().flatMap(e => g.ZP.getSelectableChannelIds(e)),
    t = Chunk601070.Z.getAllActiveJoinedThreads(),
    n = e => !(!N.TPd.GUILD_TEXTUAL.has(e.type) || (0, l.zd)(e.id)) && ((0, p.Q5)(e.type) ? (0, _.J)(e) === R.iN.ALL_MESSAGES && !f.Z.isMuted(e.id) : O.ZP.allowAllMessages(e)),
    r = [];
  for (let t of module) {
    let e = Chunk592125.Z.getBasicChannel(exports);
    null != module && require(module) && r.push(module)
  }
  for (let e in exports)
    for (let i in exports[module])
      for (let a in exports[module][Chunk512722]) {
        let e = Chunk592125.Z.getBasicChannel(a);
        null != module && require(module) && r.push(module)
      }
  return r.map(e => e.id).sort((e, t) => {
    let n = b.ZP.hasUnread(e);
    return n !== b.ZP.hasUnread(t) ? n ? false : 1 : I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e))
  }).reduce((e, t) => (b.ZP.lastMessageTimestamp(t) > Date.now() - C.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
    notifyingChannelIds: [],
    staleChannelIds: []
  })
}

function Y(e) {
  var t;
  if (!E.Z.isReady(e)) return;
  let n = m.Z.getBasicChannel(e),
    r = E.Z.getMessages(e);
  if (r.hasPresent() && 0 !== r.length) return x.addChannelMessages({
    channel: n,
    channelMessages: r,
    userId: null == (t = v.default.getCurrentUser()) ? true : t.id
  }), r
}

function W() {
  if (null == w) {
    G = Chunk709054.default.fromTimestamp(Date.now());
    return
  }
  for (let e of w.toSorted((e, t) => I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e)))) {
    let t = D[module];
    if (exports.loadState === Chunk982183.a7.UNLOADED && null != exports.mostRecentMessageId) {
      G = exports.mostRecentMessageId;
      return
    }
  }
  G = "0"
}

function K() {
  let {
    notifyingChannelIds: e,
    staleChannelIds: t
  } = H();
  w = module, L = exports, a()(null != w, "notifyingChannelIds should not be null");
  let n = w.filter(e => null == D[e]),
    r = Object.keys(D).filter(e => !(null == w ? true : w.includes(e)));
  if (0 !== w.length && 0 === require.length && 0 === r.length) returnfalse;
  for (let e of r) delete D[module];
  for (let e of require)
    if (D[module] = {
        loadState: Chunk982183.a7.UNLOADED,
        mostRecentMessageId: Chunk306680.ZP.lastMessageId(module)
      }, Chunk375954.Z.isReady(module)) {
      let t = Y(module);
      if (null != exports) {
        var i, o;
        D[module].loadState = Chunk982183.a7.LOADED, D[module].mostRecentMessageId = null != (o = null == (i = exports.last()) ? true : Chunk512722.id) ? Chunk442837 : D[module].mostRecentMessageId
      }
    } x.updateChannelIds(w), W()
}

function z() {
  D = {}, w = null, L = [], x = new Chunk810457.Z, M = false, j = false, k = false, G = Chunk709054.default.fromTimestamp(Date.now()), B = true, U = false, F = null, Z = null
}

function q() {
  var e, t, n;
  for (let n of (K(), null != w ? w : [])) {
    let r = Y(require);
    null != r && (D[require].loadState = Chunk982183.a7.LOADED, D[require].mostRecentMessageId = null != (t = null == (e = r.last()) ? true : module.id) ? exports : null, W())
  }
  let r = null != (n = Chunk455199.ZP.getSettingsFilteredMentions()) ? require : [];
  x.addMessages(r.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = m.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: C.fL.MENTION,
      message: e
    }
  }))
}

function X() {
  z(), q()
}

function Q() {
  z()
}

function J(e) {
  if (e instanceof h.ZP) return e;
  let t = E.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, c.e5)(e)
}

function $(e) {
  var t, n, r;
  let {
    channelId: i,
    message: a
  } = e;
  if (null == w || (null == (t = a.author) ? true : t.id) === (null == (n = v.default.getCurrentUser()) ? true : n.id)) returnfalse;
  let o = w.includes(i);
  if ((0, l.zd)(i)) returnfalse;
  let s = J(a),
    c = s.mentioned;
  if (!o && !c) {
    if (!L.includes(i)) returnfalse;
    K()
  }
  if (!o && c && !(0, u.ln)(s)) returnfalse;
  x.addMessage({
    id: a.id,
    channelId: a.channel_id,
    guildId: null == (r = m.Z.getBasicChannel(a.channel_id)) ? true : r.guild_id,
    kind: c ? C.fL.MENTION : C.fL.ALL_MESSAGES_CHANNEL,
    message: s
  })
}

function ee(e) {
  let {
    channelId: t
  } = e;
  if (!(null == w ? true : w.includes(t))) returnfalse;
  let n = Y(t);
  if (null == n) returnfalse;
  let r = n.length >= C.AQ || n.hasFetched && !n.hasMoreBefore;
  D[t].loadState !== C.a7.LOADED && (D[t].loadState = r ? C.a7.LOADED : C.a7.LOADED_UNREAD), W()
}

function et(e) {
  let {
    messages: t
  } = e;
  if (0 === t.length) returnfalse;
  let n = u.ZP.getSettingsFilteredMentions();
  if (null == n || 0 === n.length) returnfalse;
  x.addMessages(n.map(e => {
    var t;
    return {
      id: e.id,
      channelId: e.channel_id,
      guildId: null == (t = m.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
      kind: C.fL.MENTION,
      message: e
    }
  }))
}

function en(e) {
  let {
    id: t
  } = e;
  return x.deleteMessages([t])
}

function er(e) {
  let {
    ids: t
  } = e;
  return x.deleteMessages(t)
}

function ei() {
  M = true
}

function ea(e) {
  let {
    preload: t,
    hasMoreToLoad: n,
    analyticsPayload: r
  } = e;
  M = false, t ? U = true : (null != n && (B = n), k = true), F = null != r ? r : null
}

function eo(e) {
  var t;
  let {
    preload: n
  } = e;
  return null != (null == (t = (0, T.Ag)({
    location: "NotificationsInboxStore.canLoadMore",
    autoTrackExposure: false
  })) ? true : t.notificationCenterVariant) && null != w && !M && !j && (!n || !U) && B
}

function es() {
  M = false, F = null, j = true
}

function el(e) {
  let {
    messageId: t,
    channelId: n,
    isUnread: r
  } = e, i = (0, T.Ag)({
    location: "handleInboxItemClick"
  }).notificationCenterVariant;
  Z = r && i === T.jP.SIDEBAR ? {
    channelId: n,
    messageId: t
  } : null
}

function ec(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  (0, S.Tj)({
    channelId: t,
    id: n
  }, Z) && (Z = null)
}

function eu() {
  j = false
}

function ed() {
  Z = null
}

function ef(e) {
  let {
    channel: t
  } = e;
  if (O.ZP.allowNoMessages(t)) returnfalse;
  X()
}

function e_(e) {
  var t;
  let {
    userId: n
  } = e;
  if (n !== (null == (t = v.default.getCurrentUser()) ? true : t.id)) returnfalse;
  X()
}

function ep(e) {
  var t;
  let {
    id: n,
    addedMembers: r,
    removedMemberIds: i
  } = e, a = null == (t = v.default.getCurrentUser()) ? true : t.id;
  if (null == a) returnfalse;
  if (null == r ? true : r.some(e => e.userId === a)) {
    let e = m.Z.getBasicChannel(n);
    return !(null == e || f.Z.isMuted(n)) && (0, _.J)(e) !== R.iN.NO_MESSAGES && void X()
  }
  return null != i && !!i.includes(a) && void X()
}

function eh(e) {
  let {
    channel: t
  } = e;
  if (!x.getMessages().some(e => e.channelId === t.id)) returnfalse;
  X()
}

function em(e) {
  let {
    guild: t
  } = e;
  if (!x.getMessages().some(e => e.guildId === t.id)) returnfalse;
  X()
}

function eg(e) {
  let {
    navOnClick: t
  } = e;
  V = null == t || t
}
class eE extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk601070.Z, Chunk592125.Z, Chunk984933.ZP, Chunk569471.Z, Chunk375954.Z, Chunk306680.ZP, Chunk455199.ZP, Chunk771845.ZP, Chunk9156.ZP, Chunk594174.default)
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
    return x.getMessages()
  }
  getNotifyingChannelIds() {
    return w
  }
  getChannelInfoMap() {
    return D
  }
  get oldestDisplayedMessageId() {
    return G
  }
  get hasMoreToLoad() {
    return B
  }
  get isLoading() {
    return M
  }
  get hasLoadedEver() {
    return k
  }
  get hasPreloaded() {
    return U
  }
  get isLoadingComplete() {
    return !M && !B
  }
  get selectedItemInfo() {
    return Z
  }
  get currentRequestAnalyticsPayload() {
    return F
  }
  getDevOverrides() {
    return {
      navOnClick: V
    }
  }
}
P(eE, "displayName", "NotificationsInboxStore");
let eb = new eE(Chunk570140.Z, {
  LOAD_RECENT_MENTIONS_SUCCESS: et,
  LOAD_MESSAGES_SUCCESS: ee,
  MESSAGE_CREATE: $,
  MESSAGE_DELETE: en,
  RECENT_MENTION_DELETE: en,
  MESSAGE_DELETE_BULK: er,
  CONNECTION_OPEN: X,
  LOGOUT: Q,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: X,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: X,
  GUILD_CREATE: X,
  USER_GUILD_SETTINGS_GUILD_UPDATE: X,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: X,
  CHANNEL_CREATE: ef,
  GUILD_DELETE: em,
  THREAD_DELETE: eh,
  CHANNEL_DELETE: eh,
  THREAD_MEMBER_UPDATE: e_,
  THREAD_MEMBERS_UPDATE: ep,
  NOTIFICATIONS_INBOX_OPEN: eu,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: ei,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ea,
  NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: es,
  NOTIFICATIONS_INBOX_ITEM_CLICK: el,
  NOTIFICATIONS_INBOX_ITEM_ACK: ec,
  NOTIFICATIONS_INBOX_CLOSE: ed,
  NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eg
})