/** Chunk was on web.js **/
/** chunk id: 306680, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ex: () => eR,
  ZP: () => t1
}), require("./388685.js"), require("./415506.js"), require("./539854.js"), require("./997841.js");
var i, Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317381 = require("./317381.js");
require("./15624.js");
var Chunk358221 = require("./358221.js"),
  Chunk702321 = require("./702321.js"),
  Chunk430198 = require("./430198.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk924301 = require("./924301.js"),
  Chunk777639 = require("./777639.js"),
  Chunk355298 = require("./355298.js"),
  Chunk869404 = require("./869404.js"),
  Chunk333984 = require("./333984.js"),
  Chunk572804 = require("./572804.js"),
  Chunk140155 = require("./140155.js"),
  Chunk398758 = require("./398758.js"),
  Chunk725319 = require("./725319.js"),
  Chunk344185 = require("./344185.js"),
  Chunk569471 = require("./569471.js"),
  Chunk195663 = require("./195663.js"),
  Chunk723170 = require("./723170.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131704 = require("./131704.js"),
  Chunk386438 = require("./386438.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk931619 = require("./931619.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk796974 = require("./796974.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk517100 = require("./517100.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk176505 = require("./176505.js"),
  Chunk765305 = require("./765305.js"),
  Chunk490897 = require("./490897.js"),
  Chunk124368 = require("./124368.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let es = new Chunk710845.Z("ReadStateStore"),
  el = 2;
__OVERLAY__ && (r = require("./237997.js").default);
let ec = Chunk981631.S7T.VIEW_CHANNEL | Chunk981631.S7T.READ_MESSAGE_HISTORY,
  eu = 100,
  ed = 1,
  ef = Chunk944486.Z.getChannelId(),
  e_ = null,
  ep = null,
  eh = false,
  em = [],
  eg = false,
  eE = null;
class eb {
  addWindowId(e, t) {
    null == this.channelWindowIds[e] && (this.channelWindowIds[e] = new Set), this.channelWindowIds[e].add(t)
  }
  hasWindowId(e, t) {
    return null != this.channelWindowIds[e] && this.channelWindowIds[e].has(t)
  }
  isChannelAckable(e) {
    return null != this.channelWindowIds[e] && this.channelWindowIds[e].size > 0
  }
  getAllWindowIds(e) {
    return null == this.channelWindowIds[e] ? [] : Array.from(this.channelWindowIds[e])
  }
  getAllChannelIdsForWindowId(e) {
    let t = new Set;
    for (let [n, r] of G.default.entries(this.channelWindowIds)) r.has(e) && t.add(n);
    return Array.from(t)
  }
  isAnyWindowFocused(e) {
    let t = this.channelWindowIds[e];
    if (null == t) returnfalse;
    for (let e of t)
      if ($.Z.isFocused(e)) returntrue;
    returnfalse
  }
  removeWindowId(e, t) {
    null != this.channelWindowIds[e] && (this.channelWindowIds[e].delete(t), 0 === this.channelWindowIds[e].size && delete this.channelWindowIds[e])
  }
  forEachChannel(e) {
    for (let [t, n] of G.default.entries(this.channelWindowIds)) e(t, n)
  }
  constructor() {
    eo(this, "channelWindowIds", {})
  }
}
let ey = new eb,
  eO = 30 * Chunk70956.Z.Millis.DAY;

function ev() {
  return Chunk709054.default.fromTimestamp(Date.now() - eO)
}
let eI = 0,
  eT = 0,
  eS = null;

function eA() {
  eI = Date.now() - 7 * Chunk70956.Z.Millis.DAY, eT = Date.now() - 3 * Chunk70956.Z.Millis.DAY, clearTimeout(eS), eS = setTimeout(() => {
    Chunk570140.Z.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, +Chunk70956.Z.Millis.HOUR)
}

function eC(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eN(e) {
  return {
    id: e.id,
    read_state_type: e.read_state_type,
    mention_count: e.badge_count,
    last_message_id: e.last_acked_id
  }
}

function eR(e, t) {
  let n = F.Z.getChannel(e.channel_id);
  return !(null == n || q.Z.isBlockedOrIgnoredForMessage(e)) && !!((0, T.ZP)({
    message: e,
    userId: t.id,
    suppressEveryone: Q.ZP.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: Q.ZP.isSuppressRolesEnabled(n.guild_id)
  }) || eP(n))
}

function eP(e) {
  return null != e && e.isPrivate() && !Q.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function eD(e) {
  if (0 === em.length) {
    eg = false, null == e || e();
    return
  }
  eg = true;
  let t = em.splice(0, eu);
  await ex(() => c.tn.post({
    url: ee.ANM.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: true,
    rejectWithError: false
  })), await (0, u.GR)(1e3 * ed), eD(e)
}
let ew = 3;
async function ex(e) {
  let t = B.default.getId();
  for (let n = 0; n < ew; n++) try {
    return await e()
  } catch (e) {
    if (es.error("", e), n + 1 < ew && (await (0, u.GR)((n + 1) * 2e3), await U.Z.awaitOnline(), t !== B.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function eL(e, t) {}

function eM(e) {
  if (eL(e, "shouldAutomaticallyAck called"), e.type !== ei.W.CHANNEL) return eL(e, "not channel read state"), false;
  let t = F.Z.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != _.ZP.getConnectedActivityLocation() && _.ZP.getActivityPanelMode() === et.Ez.PANEL && _.ZP.getFocusedLayout() === et.MI.NO_CHAT) return eL(e, "In activity"), false;
  if (W.Z.isIdle()) return eL(e, "Is idle"), false;
  if (!e.canTrackUnreads()) return eL(e, "Cannot track unreads"), false;
  if ((null == t ? true : t.isForumLikeChannel()) !== true) {
    let t = ey.isAnyWindowFocused(e.channelId),
      n = null != r && r.isInstanceFocused() && r.isPinned(ee.Odu.TEXT);
    if (!t && !n) returnfalse
  }
  if (n && !e._persisted) return eL(e, "unpersisted forum post"), true;
  if (!e.hasUnreadOrMentions()) return eL(e, "No unread or mentions"), false;
  if ((null == t ? true : t.isForumLikeChannel()) === true) return eL(e, "Forum-like channel"), false;
  if (!(n && !e._isJoinedThread) && !V.Z.isAtBottom(e.channelId)) return eL(e, "Not at bottom"), false;
  let i = p.Z.getLayout(e.channelId),
    a = p.Z.getChatOpen(e.channelId);
  if (!a && (i === ee.AEg.NO_CHAT || i === ee.AEg.FULL_SCREEN)) return eL(e, "Fullscreen video"), false;
  if (!ey.isChannelAckable(e.channelId)) return eL(e, "Not ackable"), false;
  let o = K.Z.getMessages(e.channelId);
  return null == o || !o.ready || o.loadingMore ? (eL(e, "Still loading messages"), false) : (0, C._E)() || a ? (eL(e, "Acked"), true) : (eL(e, "Chat not focused"), false)
}
class ej {
  static forEach(e) {
    for (let t of ej._readStates.values())
      for (let n of t.values())
        if (false === e(n)) break
  }
  static get(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
      i = null == (t = ej._readStates.get(r)) ? true : t.get(e);
    if (null == i) {
      i = new ej(e, r);
      let t = null != (n = ej._readStates.get(r)) ? n : new Map;
      t.set(e, i), ej._readStates.has(r) || ej._readStates.set(r, t)
    }
    return i
  }
  static getGuildSentinels(e) {
    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
      unreadsSentinel: 0
    }), this._guildReadStateSentinels[e]
  }
  static resetGuildSentinels() {
    this._guildReadStateSentinels = {}
  }
  static getIfExists(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return null == (t = ej._readStates.get(n)) ? true : t.get(e)
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of ej._mentionChannels) {
      let n = ej.getIfExists(exports);
      null != require && require.canHaveMentions() ? module.push(exports) : ej._mentionChannels.delete(exports)
    }
    return module
  }
  static getValue(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
      n = arguments.length > 2 ? arguments[2] : true,
      r = arguments.length > 3 ? arguments[3] : true,
      i = this.getIfExists(e, t);
    return null == i ? r : n(i)
  }
  static clear(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
      n = ej._readStates.get(t);
    if (null == n) returnfalse;
    let r = n.delete(e);
    return r && ej._mentionChannels.delete(e), r
  }
  static clearAll() {
    ej._readStates.clear(), ej._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: r,
      _isThread: i,
      _isActiveThread: a,
      _isJoinedThread: o,
      _persisted: s,
      loadedMessages: l,
      _lastMessageId: c,
      _lastMessageTimestamp: u,
      _ackMessageId: d,
      _ackMessageTimestamp: f,
      ackPinTimestamp: _,
      isManualAck: p,
      lastPinTimestamp: h,
      _oldestUnreadMessageId: m,
      oldestUnreadMessageIdStale: g,
      estimated: E,
      _mentionCount: b,
      flags: y,
      lastViewed: O
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: r,
      _isThread: i,
      _isActiveThread: a,
      _isJoinedThread: o,
      _persisted: s,
      loadedMessages: l,
      _lastMessageId: c,
      _lastMessageTimestamp: u,
      _ackMessageId: d,
      _ackMessageTimestamp: f,
      ackPinTimestamp: _,
      isManualAck: p,
      lastPinTimestamp: h,
      _oldestUnreadMessageId: m,
      oldestUnreadMessageIdStale: g,
      estimated: E,
      _mentionCount: b,
      flags: y,
      lastViewed: O
    };
    let v = {
      channelId: t,
      type: n,
      _guildId: r,
      _persisted: s,
      _lastMessageId: c,
      _lastMessageTimestamp: u,
      _ackMessageId: d,
      _ackMessageTimestamp: f,
      ackPinTimestamp: _,
      lastPinTimestamp: h,
      _mentionCount: b,
      flags: y
    };
    return null != O && O > 0 && (v.lastViewed = O), i && (v._isThread = i, v._isActiveThread = a, v._isJoinedThread = o), v
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: r,
      _isThread: i,
      _isActiveJoinedThread: a,
      _isActiveThread: o,
      _isJoinedThread: s,
      _persisted: l,
      loadedMessages: c,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: f,
      _ackMessageTimestamp: _,
      ackPinTimestamp: p,
      isManualAck: h,
      lastPinTimestamp: m,
      _oldestUnreadMessageId: g,
      oldestUnreadMessageIdStale: E,
      estimated: b,
      _unreadCount: y,
      _mentionCount: O,
      flags: v,
      lastViewed: I
    } = e;
    this.channelId = t, this.type = null != n ? n : ei.W.CHANNEL, this._guildId = r, this._isThread = null != i && i, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != o && o, this._isJoinedThread = null != s && s), this._persisted = false !== l, this.loadedMessages = null != c && c, this._lastMessageId = u, this._lastMessageTimestamp = d, this._ackMessageId = f, this._ackMessageTimestamp = _, this.ackPinTimestamp = p, this.isManualAck = null != h && h, this.lastPinTimestamp = m, this._oldestUnreadMessageId = g, this.oldestUnreadMessageIdStale = null != E && E, this.estimated = null != b && b, this._unreadCount = null != y ? y : 0, this._mentionCount = O, this.flags = v, this.lastViewed = I, ej._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ej._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    null != this._guildId && ej.getGuildSentinels(this._guildId).unreadsSentinel++
  }
  get oldestUnreadMessageId() {
    return this._oldestUnreadMessageId
  }
  set oldestUnreadMessageId(e) {
    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = false
  }
  get lastMessageId() {
    return this._lastMessageId
  }
  set lastMessageId(e) {
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? G.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? G.default.extractTimestamp(e) : 0
  }
  get unreadCount() {
    var e;
    return null != (e = this._unreadCount) ? module : 0
  }
  set unreadCount(e) {
    (true === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
  }
  get mentionCount() {
    return this._mentionCount
  }
  set mentionCount(e) {
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, ej._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ej._mentionChannels.add(this.channelId)
  }
  get isMentionLowImportance() {
    return null != this.flags && (4 & this.flags) == 4
  }
  set isMentionLowImportance(e) {
    if (e) {
      if (0 === this._mentionCount) {
        var t;
        this.flags = (null != (t = this.flags) ? t : 0) | 4
      }
    } else null != this.flags && 0 !== this.flags && (this.flags = false & this.flags)
  }
  guessAckMessageId() {
    let e = Chunk375954.Z.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || module.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      r = Chunk594174.default.getCurrentUser();
    return module.forEach(e => {
      if (n > 0 && e.author.id !== (null == r ? true : r.id)) --n;
      else if (0 === n) return t = e.id, false
    }, this, true), exports
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = Chunk592125.Z.getChannel(this.channelId);
    return this._guildId = null != module ? module.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== Chunk490897.W.CHANNEL) returnfalse;
    let e = Chunk592125.Z.getChannel(this.channelId);
    return null != module && module.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
      i = arguments.length > 2 ? arguments[2] : true;
    if (this.ackMessageId = null != (t = null != e ? e : this._ackMessageId) ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = false, this.unreadCount = 0, r && (this.mentionCount = 0), this.hasUnread()) {
      let e = J.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        i = false,
        a = false,
        o = null,
        s = K.Z.getMessages(this.channelId);
      s.forAll(n => {
        if (i) {
          var s;
          this.oldestUnreadMessageId = null != (s = this._oldestUnreadMessageId) ? s : n.id
        } else i = n.id === this._ackMessageId;
        G.default.extractTimestamp(n.id) > t ? (this.unreadCount++, r && eR(n, e) && this.mentionCount++, o = null != o ? o : n.id) : a = true
      }), this.estimated = !s.hasPresent() || !(i || a) && s.length === this.unreadCount, this.oldestUnreadMessageId = null != (n = this._oldestUnreadMessageId) ? n : o
    }
    null != i && (this.mentionCount = i)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (G.default.compare(this.ackMessageId, t) >= 0) return;
    let r = b.ZP.getGuildScheduledEventsForGuild(e),
      i = this.getAckTimestamp();
    if (isNaN(i)) return;
    let a = null != (n = this._ackMessageId) ? n : G.default.fromTimestamp(i),
      o = null,
      s = 0;
    r.forEach(e => {
      (0, b.Ld)(e) && (G.default.compare(e.id, o) > 0 && (o = e.id), G.default.compare(e.id, a) > 0 && s++)
    }), this.lastMessageId = o, this.mentionCount = s
  }
  canTrackUnreads() {
    if (this.type !== Chunk490897.W.CHANNEL) returntrue;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) returnfalse;
    let e = Chunk592125.Z.getBasicChannel(this.channelId);
    return null != module && ("basicPermissions" in module ? Chunk386438.Z.has(module.basicPermissions, Chunk981631.S7T.VIEW_CHANNEL) : !Chunk430198.Z.isChannelGated(this.guildId, this.channelId) || Chunk496675.Z.can(Chunk981631.Plq.VIEW_CHANNEL, module))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, Chunk869404.h3)(this.channelId, [Chunk355298.Z, Chunk333984.Z]) || !this._isThread && (0, Chunk398758.r1)(this._guildId) && (this._lastMessageTimestamp < eI || !Chunk9156.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, Chunk869404.h3)(this.channelId, [Chunk355298.Z, Chunk333984.Z]) || (0, Chunk398758.r1)(this._guildId) && this._lastMessageTimestamp < eI) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, r, i) {
    if (t && (this._lastMessageTimestamp < eI || !Q.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: false,
      isMentionLowImportance: false
    };
    if ("basicPermissions" in e) {
      if (!L.Z.has(e.basicPermissions, ee.S7T.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: false,
        isMentionLowImportance: false
      }
    } else if (m.Z.isChannelGated(this.guildId, this.channelId) && !z.Z.can(ee.Plq.VIEW_CHANNEL, e)) return {
      mentionCount: 0,
      unread: false,
      isMentionLowImportance: false
    };
    return r || i ? {
      mentionCount: this.mentionCount,
      unread: false,
      isMentionLowImportance: this.isMentionLowImportance
    } : {
      mentionCount: this.mentionCount,
      unread: this.getAckTimestamp() < this._lastMessageTimestamp,
      isMentionLowImportance: this.isMentionLowImportance
    }
  }
  hasUnread() {
    return this.getAckTimestamp() < this._lastMessageTimestamp
  }
  hasRecentlyVisitedAndRead() {
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eT && Chunk581883.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
  }
  isForumPostUnread() {
    return !!this._isActiveThread && this.hasUnread()
  }
  hasMentions() {
    return this.getMentionCount() > 0
  }
  getMentionCount() {
    return this.mentionCount
  }
  hasUnreadOrMentions() {
    return this.hasMentions() || this.hasUnread()
  }
  ackPins() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
    if (this.type !== Chunk490897.W.CHANNEL || !this.canTrackUnreads()) returnfalse;
    if (null == module) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) returnfalse;
      this._persisted = true, ex(() => Chunk544891.tn.post({
        url: Chunk981631.ANM.PINS_ACK(this.channelId),
        oldFormErrors: true,
        rejectWithError: true
      }))
    }
    let t = eC(module);
    return this.ackPinTimestamp = 0 !== exports ? exports : this.lastPinTimestamp, true
  }
  ack(e) {
    let {
      messageId: t,
      location: n,
      trackAnalytics: r,
      local: i = false,
      immediate: a = false,
      force: o = false,
      isExplicitUserAction: s = false
    } = e;
    if (!this._shouldAck(o, i, s) || !o && !this.canTrackUnreads()) returnfalse;
    let l = this.hasMentions();
    return this.estimated = false, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, this.isMentionLowImportance = false, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = false, this._persisted = true, eh && (this.ackedWhileCached = true), eJ(this.channelId), i ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === ei.W.CHANNEL ? this._ack(n, r) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, l || a ? 0 : 3e3)), this.outgoingAck = t), true)
  }
  takeSnapshot() {
    letChunk888369 = require("./888369.js"), t = this.guildId;
    return {
      unread: this.hasUnread(),
      mentionCount: this.mentionCount,
      guildUnread: null == exports ? null : module.hasUnread(exports),
      guildMentionCount: null == exports ? null : module.getMentionCount(exports),
      takenAt: Date.now()
    }
  }
  clearOutgoingAck() {
    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
  }
  _shouldAck(e, t, n) {
    var r;
    return !!e || !!n || !!t || !this.isManualAck && (this.type !== ei.W.CHANNEL || !!this.loadedMessages || !!(null == (r = F.Z.getChannel(this.channelId)) ? true : r.isForumLikeChannel()))
  }
  _ack(e, t) {
    let {
      outgoingAck: r
    } = this;
    if (null == r) return;
    let i = B.default.getId(),
      a = ep;
    this._persisted = true;
    let o = this.recalculateFlags(),
      s = o === this.flags ? true : o;
    ex(() => c.tn.post({
      url: ee.ANM.MESSAGE_ACK(this.channelId, r),
      body: {
        token: ep,
        last_viewed: this.lastViewed,
        flags: s
      },
      oldFormErrors: true,
      rejectWithError: true
    })).then(r => {
      null != r && (ep === a && i === B.default.getId() && (ep = r.body.token), f.Z.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.e("54076").then(n.bind(n, 189229)).then(t => {
        let {
          default: n
        } = t;
        n(this.channelId, null != e ? e : {})
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== Chunk490897.W.CHANNEL) return;
    let e = Chunk592125.Z.getChannel(this.channelId);
    if (null != module) return module.isThread() ? 2 : +(null != module.guild_id)
  }
  _nonChannelAck() {
    let e, {
      outgoingAck: t,
      channelId: n,
      type: r
    } = this;
    if (null != exports) {
      switch (r) {
        case Chunk490897.W.GUILD_HOME:
        case Chunk490897.W.GUILD_EVENT:
        case Chunk490897.W.GUILD_ONBOARDING_QUESTION:
          e = Chunk981631.ANM.GUILD_FEATURE_ACK(require, exports, r);
          break;
        case Chunk490897.W.NOTIFICATION_CENTER:
        case Chunk490897.W.MESSAGE_REQUESTS:
          e = Chunk981631.ANM.USER_NON_CHANNEL_ACK(exports, r);
          break;
        default:
          return
      }
      this._persisted = true, ex(() => Chunk544891.tn.post({
        url: module,
        body: {},
        oldFormErrors: true,
        rejectWithError: true
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      n = Chunk592125.Z.getBasicChannel(this.channelId);
    es.log("Deleting ReadState", this.channelId, this.type, {
      remote: exports,
      persisted: this._persisted,
      channelMissing: null == require,
      isOld: eq(this, ev()),
      validType: null != require && Chunk131704.AW.has(require.type),
      readableType: null != require && (0, Chunk131704.Em)(require.type),
      oldThreadCutoff: ev(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), exports && this._persisted && Chunk544891.tn.del({
      url: Chunk981631.ANM.CHANNEL_ACK(this.channelId),
      body: {
        version: el,
        read_state_type: this.type
      },
      oldFormErrors: true,
      rejectWithError: true
    }), null == (e = ej._readStates.get(this.type)) || module.delete(this.channelId), ej._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== H.Z.totalUnavailableGuilds) returnfalse;
    if (null != this.type && this.type !== ei.W.CHANNEL) return !eX(this);
    let t = F.Z.getBasicChannel(this.channelId);
    if (null == t)
      if (eq(this, e)) returntrue;
      else returnfalse;
    return !!x.AW.has(t.type) && (!(0, x.Em)(t.type) || !(0, x.hv)(t.type) && !(!(x.Ec.has(t.type) && ez(this, t, e)) && (!(this.mentionCount > 0) || z.Z.canBasicChannel(ec, t))))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = eW(this.guildId, this.channelId), this._ackMessageId = Chunk709054.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === Chunk490897.W.GUILD_EVENT || this.type === Chunk490897.W.GUILD_ONBOARDING_QUESTION) e = Chunk430824.Z.getGuild(this.channelId);
    else if ((0, Chunk176505.AB)(this.channelId)) e = Chunk430824.Z.getGuild(this.guildId);
    else {
      let t = Chunk592125.Z.getChannel(this.channelId);
      if (null != exports) {
        let n = exports.getGuildId();
        e = Chunk430824.Z.getGuild(require)
      }
    }
    return null != module ? isNaN(t = eK(module)) && (t = Chunk709054.default.extractTimestamp(this.channelId)) : t = Chunk709054.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = exports, exports
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? Chunk709054.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = true;
    let e = Chunk592125.Z.getChannel(this.channelId);
    if (null == module) return es.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), false;
    let t = this.guildId,
      n = null != exports && Chunk344185.Z.isActive(exports, module.parent_id, this.channelId),
      r = Chunk569471.Z.hasJoined(this.channelId);
    return (this._isActiveThread !== require || this._isJoinedThread !== r) && (this._isActiveThread = require, this._isJoinedThread = r, true)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - Chunk709054.DISCORD_EPOCH) / Chunk70956.Z.Millis.DAY);
    module !== this.lastViewed && (this.lastViewed = module, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: true,
      trackAnalytics: false
    }))
  }
  constructor(e, t = ei.W.CHANNEL) {
    eo(this, "channelId", true), eo(this, "type", ei.W.CHANNEL), eo(this, "_guildId", true), eo(this, "_isThread", true), eo(this, "_isActiveThread", true), eo(this, "_isJoinedThread", true), eo(this, "_isResourceChannel", true), eo(this, "_persisted", true), eo(this, "loadedMessages", true), eo(this, "_lastMessageId", true), eo(this, "_lastMessageTimestamp", true), eo(this, "_ackMessageId", true), eo(this, "_ackMessageTimestamp", true), eo(this, "isManualAck", true), eo(this, "ackPinTimestamp", true), eo(this, "lastPinTimestamp", true), eo(this, "_oldestUnreadMessageId", true), eo(this, "oldestUnreadMessageIdStale", true), eo(this, "estimated", true), eo(this, "_unreadCount", true), eo(this, "_mentionCount", true), eo(this, "flags", true), eo(this, "lastViewed", true), eo(this, "outgoingAck", true), eo(this, "outgoingAckTimer", null), eo(this, "ackMessageIdAtChannelSelect", null), eo(this, "ackedWhileCached", true), eo(this, "snapshot", true), this.channelId = e, this.type = t, this._guildId = null, this._isThread = false, this._isActiveThread = false, this._isJoinedThread = false, this._isResourceChannel = false, this._persisted = false, this.loadedMessages = false, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = false, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = false, this.estimated = false, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function ek(e) {
  e.forEach(e => {
    if ((0, x.Em)(e.type)) {
      let t = ej.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eC(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(en.zZ.IS_GUILD_RESOURCE_CHANNEL), x.Ec.has(e.type) && t.syncThreadSettings()
    }
  })
}

function eU(e) {
  e.forEach(e => {
    if ((0, x.Em)(e.type)) {
      var t;
      let n = ej.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eC(e.last_pin_timestamp), n._isResourceChannel = (0, j.yE)(null != (t = e.flags) ? t : 0, en.zZ.IS_GUILD_RESOURCE_CHANNEL), x.Ec.has(e.type) && n.syncThreadSettings()
    }
  })
}

function eG(e) {
  eV(e), eH(e), eF(e), eY(e)
}

function eB(e) {
  eZ(e)
}

function eZ(e) {
  let t = J.default.getCurrentUser();
  if (null == t) returnfalse;
  let n = ej.get(t.id, ei.W.NOTIFICATION_CENTER);
  e.forEach(e => {
    if (null == e.since || e.type !== ee.OGo.PENDING_INCOMING) return;
    let t = new Date(e.since).getTime();
    (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = G.default.fromTimestamp(t))
  })
}

function eF(e) {
  let t = 24;
  ej.get(e.id, ei.W.GUILD_HOME).lastMessageId = G.default.fromTimestamp(s()(Date.now()).subtract(t, "h").valueOf())
}

function eV(e) {
  var t;
  null == (t = e.threads) || t.forEach(t => {
    if (!x.AW.has(t.type)) return;
    let n = ej.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eC(t.lastPinTimestamp), n._isThread = true, n._isActiveThread = true, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = G.default.fromTimestamp(eW(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eW(e.id, t.id))
  })
}

function eH(e) {
  var t, n;
  if ((null == (t = e.guild_scheduled_events) ? true : t.length) === 0 && null == ej.getIfExists(e.id, ei.W.GUILD_EVENT)) return;
  let r = ej.get(e.id, ei.W.GUILD_EVENT);
  r._guildId = e.id;
  let i = 0,
    a = null,
    o = null != (n = r._ackMessageId) ? n : G.default.fromTimestamp(r.getAckTimestamp());
  e.guild_scheduled_events.forEach(e => {
    G.default.compare(e.id, a) > 0 && (a = e.id), G.default.compare(e.id, o) > 0 && i++
  }), r.lastMessageId = a, r.mentionCount = i
}

function eY(e) {
  let t = Y.Z.getGuild(e.id);
  if (null == t) return;
  let n = null == t ? true : t.latestOnboardingQuestionId;
  if (null == n) return;
  let r = ej.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
  r._guildId = t.id, r.lastMessageId = n
}

function eW(e, t) {
  var n, r, i;
  let a = F.Z.getChannel(t),
    o = Y.Z.getGuild(null != e ? e : null == a ? true : a.guild_id),
    s = (null == a ? true : a.isForumPost()) ? 0 : eK(o),
    l = (null != (i = null == (n = R.Z.joinTimestamp(t)) ? true : n.getTime()) ? i : 0) - 5e3;
  isNaN(l) && (l = false);
  let c = null == a || null == (r = a.threadMetadata) ? true : r.archiveTimestamp,
    u = null != c ? new Date(c).getTime() - 1 : 0;
  isNaN(u) && (u = 0);
  let d = Math.max(l, u);
  return d <= 0 && (d = G.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(s) ? d : Math.max(s, d)
}

function eK(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) {
      let t = e.joinedAt.getTime();
      if (!isNaN(t)) return t
    } else if ("string" == typeof e.joinedAt) {
      let t = new Date(e.joinedAt).getTime();
      if (!isNaN(t)) return t
    } else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function ez(e, t, n) {
  let r = e.guildId;
  return !(null != r && N.Z.isActive(r, t.parent_id, e.channelId)) && eq(e, n)
}

function eq(e, t) {
  return e.mentionCount > 0 || !(G.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && G.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && G.default.compare(e._lastMessageId, t) > 0)
}

function eX(e) {
  switch (e.type) {
    case ei.W.GUILD_HOME:
    case ei.W.GUILD_EVENT:
    case ei.W.GUILD_ONBOARDING_QUESTION:
      return null != Y.Z.getGuild(e.channelId);
    case ei.W.NOTIFICATION_CENTER:
      var t;
      return G.default.cast(null == (t = J.default.getCurrentUser()) ? true : t.id) === e.channelId;
    default:
      returntrue
  }
}

function eQ(e, t) {
  if (null == t) returnfalse;
  let n = ej.get(t);
  return !!eM(n) && n.ack({
    trackAnalytics: true,
    location: e
  })
}

function eJ(e) {
  if (null == e) return;
  let t = ej.get(e);
  if (t.type !== ei.W.CHANNEL) return;
  let n = F.Z.getChannel(t.channelId);
  if (null == n || !n.isForumPost() || null == n.parent_id) return;
  let r = n.parent_id,
    i = ej.get(r);
  N.Z.hasLoaded(n.guild_id) && G.default.keys(N.Z.getThreadsForParent(n.guild_id, r)).every(e => t0.hasOpenedThread(e) || 0 > G.default.compare(e, i.ackMessageId)) && i.ack({
    trackAnalytics: true,
    location: {
      section: ee.jXE.CHANNEL,
      object: ee.qAy.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS,
      objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
    }
  })
}

function e$(e) {
  var t;
  let {
    guilds: n,
    relationships: r,
    initialPrivateChannels: i,
    readState: a
  } = e;
  eA(), ep = null, eh || a.partial || ej.clearAll(), eh = false, a.entries.forEach(e => {
    var t, n;
    let r = null != (t = e.read_state_type) ? t : ei.W.CHANNEL;
    r !== ei.W.CHANNEL && (e = eN(e));
    let i = ej.get(e.id, r);
    i._persisted = true, i._mentionCount = null != (n = e.mention_count) ? n : 0, i.flags = e.flags, i.lastViewed = e.last_viewed;
    let a = F.Z.getBasicChannel(e.id);
    null != a && (0, x.Q5)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? i.ackMessageId = G.default.fromTimestamp(eW(a.guild_id, a.id)) : i.ackedWhileCached ? false === G.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id) : i.ackMessageId = e.last_message_id, i.ackedWhileCached = true, i.ackPinTimestamp = eC(e.last_pin_timestamp), ej._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && ej._mentionChannels.add(i.channelId)
  }), ej.resetGuildSentinels();
  let o = null == (t = J.default.getCurrentUser()) ? true : t.id;
  for (let e of (null != o && (ej.get(o, ei.W.NOTIFICATION_CENTER).lastMessageId = G.default.fromTimestamp(Date.now())), eB(r), ek(i), n)) ek("full_sync" === e.channels.op ? e.channels.items : e.channels.writes), null != e.channelTimestampUpdates && e3(e.channelTimestampUpdates), eG(e);
  e0(), eE = setTimeout(() => e2(a.entries), 10 * M.Z.Millis.SECOND)
}

function e0() {
  null != eE && clearTimeout(eE)
}
eo(ej, "_guildReadStateSentinels", {}), eo(ej, "_readStates", new Map), eo(ej, "_mentionChannels", new Set);
let e1 = (0, Chunk392711.throttle)(e => {
  e.delete()
}, 100);

function e2(e) {
  let t = ev();
  for (let r of e) {
    var n;
    let e = null != (n = r.read_state_type) ? n : ei.W.CHANNEL,
      i = ej.get(r.id, e);
    i.shouldDeleteReadState(t) && e1(i)
  }
}

function e3(e) {
  for (let t of e) {
    let e = ej.get(t.id);
    null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eC(t.last_pin_timestamp))
  }
}

function e4(e) {
  let {
    lazyPrivateChannels: t
  } = e;
  ek(t)
}

function e8(e) {
  let {
    readStates: t,
    selectedChannelId: n
  } = e;
  eA(), ep = null, ef = n, e_ = Z.ZP.getCurrentSidebarChannelId(ef), ej.clearAll(), t.forEach(e => {
    let t = ej.get(e.channelId);
    t.deserializeForOverlay(e), t.type === ei.W.CHANNEL && t.rebuildChannelState()
  })
}

function e5(e) {
  let {
    guild: t
  } = e, n = ev();
  ej.forEach(e => {
    e.guildId === t.id && e.shouldDeleteReadState(n) && e.delete(false)
  }), ek("full_sync" === t.channels.op ? t.channels.items : t.channels.writes), null != t.channelTimestampUpdates && e3(t.channelTimestampUpdates), eG(t)
}

function e6(e) {
  let {
    channelId: t,
    isAfter: n,
    messages: r
  } = e, i = ej.get(t);
  i.loadedMessages = true;
  let a = K.Z.getMessages(t);
  null != a && (r.length > 0 && 1 === G.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount || a.hasPresent() || a.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && a.has(i.ackMessageId, true) && (i.unreadCount += r.length, null == i.oldestUnreadMessageId && i.rebuildChannelState())), eU(r.map(e => e.thread).filter(k.lm))
}

function e7(e) {
  let {
    channelId: t
  } = e;
  ej.get(t).rebuildChannelState()
}

function e9(e) {
  let t, n, {
      channelId: i,
      message: a,
      isPushNotification: o
    } = e,
    s = ej.get(i),
    l = s.hasUnread(),
    c = null != s.lastMessageId && s.lastMessageId >= a.id;
  s.lastMessageId = a.id;
  let u = J.default.getCurrentUser(),
    d = F.Z.getBasicChannel(i);
  if (null != a.author && null != u && a.author.id === u.id && !ee.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type)) return null != s.outgoingAck && s.clearOutgoingAck(), tx({
    channelId: i,
    messageId: a.id,
    manual: false
  });
  let f = (0, y.D)();
  if ((null == f ? true : f.isReady()) === true) {
    let e = f.getCurrentRoute();
    if (p.Z.getChatOpen(s.channelId)) t = s.channelId;
    else if ((null == e ? true : e.name) === "channel") t = e.params.channelId;
    else if ((null == e ? true : e.name) === "guilds") {
      var _;
      t = null == (_ = e.params) ? true : _.channelId
    }
  } else null == f && (t = X.Z.getChannelId(), n = Z.ZP.getCurrentSidebarChannelId(t));
  let h = t === i || n === i;
  if (h && eM(s) && !o) return s.ack({
    messageId: a.id,
    trackAnalytics: true,
    location: {
      section: ee.jXE.CHANNEL,
      object: ee.qAy.ACK_INCOMING_MESSAGE,
      objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
    }
  });
  if (null != r && r.isInstanceFocused() && h && r.isInstanceLocked() && r.isPinned(ee.Odu.TEXT)) return s.ack({
    messageId: a.id,
    trackAnalytics: true,
    location: {
      section: ee.jXE.OVERLAY,
      object: ee.qAy.ACK_INCOMING_MESSAGE,
      objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
    }
  });
  if (null == s.oldestUnreadMessageId || s.oldestUnreadMessageIdStale ? s.oldestUnreadMessageId = a.id : l || (0, C.nV)() === i || (s.oldestUnreadMessageId = a.id), !c && s.unreadCount++, !(q.Z.isBlockedOrIgnoredForMessage(a) || a.type === ee.uaV.RECIPIENT_REMOVE && (null == d ? true : d.type) === ee.d4z.GROUP_DM)) {
    let {
      shouldMention: e,
      isMentionLowImportance: t
    } = te(a, u, s);
    e && (s.isMentionLowImportance = t, s.mentionCount++)
  }
}

function te(e, t, n) {
  if (null != t && (0, T.Hl)({
      rawMessage: e,
      userId: t.id,
      suppressEveryone: Q.ZP.isSuppressEveryoneEnabled(n.guildId),
      suppressRoles: Q.ZP.isSuppressRolesEnabled(n.guildId)
    })) return {
    shouldMention: true,
    isMentionLowImportance: false
  };
  let r = F.Z.getChannel(e.channel_id);
  if (eP(r)) return {
    shouldMention: true,
    isMentionLowImportance: false
  };
  if (Q.ZP.mentionOnAllMessages && null != r) {
    if (r.isThread()) {
      if ((0, D.J)(r) === ea.iN.ALL_MESSAGES) return {
        shouldMention: true,
        isMentionLowImportance: true
      }
    } else if (!r.isVocal() && !Q.ZP.isChannelMuted(r.guild_id, r.id) && Q.ZP.resolvedMessageNotifications(r) === ee.bL.ALL_MESSAGES) return {
      shouldMention: true,
      isMentionLowImportance: true
    }
  }
  return {
    shouldMention: false,
    isMentionLowImportance: false
  }
}

function tt(e) {
  let {
    channel: t
  } = e;
  if (!(0, x.Em)(t.type)) returnfalse;
  let n = ej.get(t.id);
  n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eC(t.lastPinTimestamp)
}

function tn(e) {
  let {
    channel: t
  } = e;
  tr(t), ti(t)
}

function tr(e) {
  if (!x.AW.has(e.type)) returnfalse;
  let t = ej.get(e.id);
  t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eC(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === B.default.getId() && (t.loadedMessages = true)
}

function ti(e) {
  let t = e.parent_id;
  ej.get(t).lastMessageId = e.id;
  let n = J.default.getCurrentUser();
  if (e.ownerId === (null == n ? true : n.id)) return ej.get(e.id)._persisted = true, tx({
    channelId: t,
    messageId: e.id,
    manual: false
  })
}

function ta(e) {
  let {
    channel: t
  } = e;
  return !!x.AW.has(t.type) && ej.get(t.id).syncThreadSettings()
}

function to(e) {
  let {
    id: t
  } = e;
  return ej.get(t).syncThreadSettings()
}

function ts(e) {
  return (0, P.s)(e) && ej.get(e.id).syncThreadSettings()
}

function tl(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    if (!x.AW.has(e.type)) return;
    let t = ej.get(e.id);
    if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eC(e.lastPinTimestamp), t._isThread = true, t._isActiveThread = true, t._isJoinedThread = R.Z.hasJoined(e.id), e.isForumPost()) {
      let t = ej.get(e.parent_id);
      0 > G.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
    }
  })
}

function tc(e) {
  let {
    threads: t
  } = e;
  eU(t)
}

function tu(e) {
  let {
    channelId: t
  } = e;
  return eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_RESORT_THREADS,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, t)
}

function td(e) {
  let {
    data: t
  } = e;
  t.forEach(e => {
    let {
      messages: t,
      threads: n
    } = e;
    t.forEach(e => {
      eU(e.map(e => {
        let {
          thread: t
        } = e;
        return t
      }).filter(k.lm))
    }), eU(n)
  })
}

function tf(e) {
  let t = J.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function t_(e) {
  let {
    guildScheduledEvent: t
  } = e, n = t.guild_id, r = ej.get(t.guild_id, ei.W.GUILD_EVENT);
  if (r.lastMessageId = t.id, tf(t)) return void tM({
    type: "GUILD_FEATURE_ACK",
    id: n,
    ackType: ei.W.GUILD_EVENT,
    ackedId: t.id,
    local: false
  });
  !Q.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++
}

function tp(e) {
  let {
    guildScheduledEvent: t
  } = e, n = t.guild_id;
  if (tf(t) || ![er.p1.CANCELED, er.p1.COMPLETED].includes(t.status)) returnfalse;
  ej.get(n, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
}

function th(e) {
  let {
    guildScheduledEvent: t
  } = e, n = t.guild_id;
  if (tf(t)) returnfalse;
  ej.get(t.guild_id, ei.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
}

function tm(e) {
  let t = J.default.getCurrentUser();
  if (null == t || null == e.relationship.since || e.relationship.type !== ee.OGo.PENDING_INCOMING && e.relationship.type !== ee.OGo.FRIEND) returnfalse;
  let n = ej.get(t.id, ei.W.NOTIFICATION_CENTER),
    r = e.relationship.type === ee.OGo.FRIEND,
    i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
  (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) < i && (n.lastMessageId = G.default.fromTimestamp(i), S.Z.active ? tk(t.id, ei.W.NOTIFICATION_CENTER, true, false) : r ? n.mentionCount-- : n.mentionCount++)
}

function tg(e) {
  let t = J.default.getCurrentUser();
  if (null == t || null == e.relationship.since || e.relationship.type !== ee.OGo.PENDING_INCOMING) returnfalse;
  let n = ej.get(t.id, ei.W.NOTIFICATION_CENTER),
    r = new Date(e.relationship.since).getTime();
  (null != n.ackMessageId ? G.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1))
}

function tE(e) {
  var t;
  let {
    item: n
  } = e, r = null == (t = J.default.getCurrentUser()) ? true : t.id;
  if (null == r) returnfalse;
  let i = ej.get(r, ei.W.NOTIFICATION_CENTER);
  if (i.lastMessageId = n.id, S.Z.active || 0) return void tk(r, ei.W.NOTIFICATION_CENTER, n.id, false);
  i.mentionCount++
}

function tb(e) {
  var t;
  let {
    ids: n,
    optimistic: r
  } = e;
  if (r || S.Z.active) returnfalse;
  let i = null == (t = J.default.getCurrentUser()) ? true : t.id;
  if (null == i) returnfalse;
  let a = ej.get(i, ei.W.NOTIFICATION_CENTER);
  n.forEach(e => {
    0 > G.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0))
  })
}

function ty(e) {
  let {
    guild: t
  } = e;
  return ej.clear(t.id, ei.W.GUILD_EVENT)
}

function tO(e) {
  let {
    guild: t
  } = e, n = t.latest_onboarding_question_id;
  if (null == n) return;
  let r = ej.get(t.id, ei.W.GUILD_ONBOARDING_QUESTION);
  r._guildId = t.id, r.lastMessageId = n
}

function tv(e) {
  let {
    channel: t
  } = e;
  return ej.clear(t.id)
}

function tI(e) {
  let {
    channelId: t
  } = e, n = Z.ZP.getCurrentSidebarChannelId(t), r = F.Z.getChannel(t);
  if (null != r) {
    var i;
    let e = ej.get(r.id);
    e.ackMessageIdAtChannelSelect = null != (i = e.ackMessageId) ? i : G.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
  }
  tA(ef), tA(e_);
  let a = false;
  return ef !== t && (a = tC(ef) || a, a = tC(e_) || a), (ef === t || (null == r ? true : r.type) != null && ee.TPd.GUILD_THREADS_ONLY.has(r.type)) && (a = eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_CHANNEL_SELECT_SAME_CHANNEL,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, t) || a), ef === t && (a = eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, n) || a), ef = t, e_ = n, a
}

function tT() {
  let e = Chunk433355.ZP.getCurrentSidebarChannelId(ef),
    t = false;
  return e_ !== module ? (t = tC(e_), e_ = module) : t = eQ({
    section: Chunk981631.jXE.CHANNEL,
    object: Chunk981631.qAy.ACK_CHANNEL_SECTION_STORE_UPDATE,
    objectType: Chunk981631.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, module) || exports, exports
}

function tS(e) {
  let {
    channelId: t
  } = e;
  if (null == t) return;
  let n = ej.get(t);
  if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
    isExplicitUserAction: true,
    trackAnalytics: true,
    location: {
      section: ee.jXE.CHANNEL,
      object: ee.qAy.ACK_VOICE_CHANNEL_SELECT,
      objectType: ee.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }
  })
}

function tA(e) {
  null != e && (ej.get(e).isManualAck = false)
}

function tC(e) {
  if (null == e) returnfalse;
  let t = ej.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, true)
}

function tN(e) {
  let t = false;
  return ey.forEachChannel((n, r) => {
    r.has(e.windowId) && (t = tR(n, e.focused) || t)
  }), t
}

function tR(e, t) {
  if (null == e) returnfalse;
  let n = ej.get(e);
  return t || n.hasUnread() || (n.oldestUnreadMessageIdStale = true), eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_WINDOW_FOCUS,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, e)
}

function tP(e) {
  let {
    channelId: t
  } = e;
  return eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_CHANNEL_SCROLL,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, t)
}

function tD(e) {
  let {
    channelId: t,
    messageId: n,
    immediate: r = false,
    force: i = false,
    context: a,
    location: o
  } = e, s = ej.get(t), l = s.ack({
    messageId: n,
    local: a !== ee.e3s,
    immediate: r,
    force: i,
    isExplicitUserAction: true,
    location: o,
    trackAnalytics: true
  });
  return null != n ? (s.rebuildChannelState(), true) : l
}

function tw(e) {
  let {
    channelId: t,
    timestamp: n
  } = e;
  return ej.get(t).ackPins(n)
}

function tx(e) {
  let {
    channelId: t,
    messageId: n,
    manual: r,
    newMentionCount: i
  } = e, a = ej.get(t);
  return r ? (a.rebuildChannelState(n, true, i), a.clearOutgoingAck(), true) : n !== a._ackMessageId && a.ack({
    messageId: n,
    local: true,
    trackAnalytics: false
  })
}

function tL(e) {
  let {
    channelId: t
  } = e;
  return ej.get(t).ack({
    messageId: true,
    local: true,
    immediate: true,
    force: true,
    isExplicitUserAction: true,
    trackAnalytics: false
  })
}

function tM(e) {
  let {
    id: t,
    ackType: n,
    ackedId: r,
    local: i
  } = e;
  return tk(t, n, r, i)
}

function tj(e) {
  var t;
  let {
    ackType: n,
    ackedId: r,
    local: i
  } = e, a = null == (t = J.default.getCurrentUser()) ? true : t.id;
  return null != a && tk(a, n, r, i)
}

function tk(e, t, n, r) {
  var i;
  let a = ej.get(e, t);
  return n !== a.ackMessageId && a.lastMessageId !== a.ackMessageId && (null != a.lastMessageId || 0 !== a.mentionCount) && (n = null != (i = null != n ? n : a.lastMessageId) ? i : G.default.fromTimestamp(a.getAckTimestamp()), a.ack({
    messageId: n,
    local: null == r || r,
    trackAnalytics: false
  }))
}

function tU(e) {
  let {
    channelId: t,
    lastPinTimestamp: n
  } = e, r = ej.get(t), i = eC(n);
  return r.lastPinTimestamp !== i && (r.lastPinTimestamp = i, true)
}

function tG(e) {
  let t = false;
  for (let n of e.channels) {
    let e = ej.get(n.id),
      r = eC(n.lastPinTimestamp);
    (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) && (t = true, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = r)
  }
  return t
}

function tB() {
  ep = null
}

function tZ(e) {
  let {
    readStates: t
  } = e;
  eh = true, eA(), t.forEach(e => {
    var t, n;
    let r = null != (t = e.type) ? t : ei.W.CHANNEL;
    e.type = r;
    let i = null != (n = ej._readStates.get(r)) ? n : new Map;
    i.set(e.channelId, (0, d.gh)(e, ej)), ej._readStates.has(r) || ej._readStates.set(r, i)
  })
}

function tF(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e
}

function tV(e, t, n) {
  e.forEach(e => {
    let {
      channelId: t,
      messageId: n,
      readStateType: r
    } = e;
    ej.get(t, r).ack({
      messageId: n,
      local: true,
      immediate: true,
      force: true,
      isExplicitUserAction: true,
      trackAnalytics: false
    })
  }), t === ee.e3s && (em.push(...e.map(e => ({
    channel_id: e.channelId,
    message_id: e.messageId,
    read_state_type: e.readStateType
  }))), eg || eD(n))
}

function tH(e) {
  let {
    channels: t,
    context: n,
    onFinished: r
  } = e;
  tV(t.filter(e => null != e.messageId && t0.hasUnreadOrMentions(e.channelId, e.readStateType)), n, r)
}

function tY(e) {
  let {
    channelId: t,
    windowId: n
  } = e;
  return !ey.hasWindowId(t, n) && (ey.addWindowId(t, n), eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ENABLE_AUTOMATIC_ACK,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, t))
}

function tW(e) {
  let {
    channelId: t,
    windowId: n
  } = e;
  return ey.removeWindowId(t, n), false
}

function tK(e) {
  let {
    channelId: t
  } = e;
  return tC(t)
}

function tz(e) {
  let {
    channelId: t,
    location: n
  } = e;
  return eQ(n, t)
}

function tq(e) {
  let {
    changesByChannelId: t
  } = e;
  for (let e in t) {
    var n, r;
    let i = t[e],
      a = ej.getIfExists(e);
    if (null != a)
      for (let e of [null == (n = i.new_messages) ? true : n[0]].concat(null != (r = i.modified_messages) ? r : []).filter(k.lm)) 1 === G.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id)
  }
}

function tX(e) {
  var t;
  let {
    ackedId: n
  } = e, r = null == (t = J.default.getCurrentUser()) ? true : t.id;
  if (null == r) returnfalse;
  let i = ej.get(r, ei.W.MESSAGE_REQUESTS);
  if (n === i.ackMessageId) returnfalse;
  i.ackMessageId = n, i.ack({
    messageId: n,
    isExplicitUserAction: true,
    trackAnalytics: false
  })
}

function tQ(e) {
  var t;
  let n = null == (t = J.default.getCurrentUser()) ? true : t.id;
  if (null == n) returnfalse;
  let r = ej.get(n, ei.W.MESSAGE_REQUESTS);
  if (null == r.ackMessageId) returnfalse;
  r.ackMessageId = true
}

function tJ(e) {
  let {
    state: t
  } = e;
  return t === ee.$7l.ACTIVE && eQ({
    section: ee.jXE.CHANNEL,
    object: ee.qAy.ACK_APP_FOREGROUND,
    objectType: ee.AnalyticsObjectTypes.ACK_AUTOMATIC
  }, X.Z.getChannelId())
}
class t$ extends(i = Chunk442837.ZP.Store) {
  initialize() {
    Chunk796974.Z, Chunk594174.default, Chunk430824.Z, Chunk486472.Z, Chunk592125.Z, Chunk944486.Z, Chunk375954.Z, Chunk496675.Z, Chunk358221.Z, Chunk344185.Z, Chunk569471.Z, Chunk433355.ZP, Chunk924301.ZP, Chunk353926.Z, Chunk430198.Z, Chunk9156.ZP, Chunk451478.Z, Chunk140155.Z, Chunk355298.Z, Chunk581883.Z, Chunk333984.Z, this.waitFor(Chunk344185.Z, Chunk314897.default, Chunk358221.Z, Chunk433355.ZP, Chunk592125.Z, Chunk796974.Z, Chunk317381.ZP, Chunk430198.Z, Chunk486472.Z, Chunk924301.ZP, Chunk430824.Z, Chunk517100.Z, Chunk569471.Z, Chunk375954.Z, Chunk140155.Z, Chunk496675.Z, Chunk699516.Z, Chunk944486.Z, Chunk9156.ZP, Chunk581883.Z, Chunk594174.default, Chunk451478.Z), this.syncWith([Chunk433355.ZP], tT)
  }
  getReadStatesByChannel() {
    var e;
    return null != (e = ej._readStates.get(Chunk490897.W.CHANNEL)) ? module : new Map
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    return ej.getIfExists(e, ei.W.NOTIFICATION_CENTER)
  }
  hasUnread(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), false)
  }
  hasUnreadOrMentions(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canBeUnread() && e.hasUnreadOrMentions(), false)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), false)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.isForumPostUnread(), false)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL,
      n = ej.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
    if ((0, h.Z)(e) && n > 0) return 1;
    return n
  }
  getIsMentionLowImportance(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return t === ei.W.CHANNEL && ej.getValue(e, t, e => e.isMentionLowImportance, false)
  }
  getGuildChannelUnreadState(e, t, n, r, i) {
    return ej.getValue(e.id, ei.W.CHANNEL, a => a.getGuildChannelUnreadState(e, t, n, r, i), {
      mentionCount: 0,
      unread: false,
      isMentionLowImportance: false
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), false)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return ej.getValue(e, ei.W.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e.estimated, false)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei.W.CHANNEL;
    return ej.getValue(e, t, e => e._persisted, false)
  }
  hasUnreadPins(e) {
    return ej.getValue(e, ei.W.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, false)
  }
  isNewForumThread(e, t, n) {
    let r = ej.get(t);
    if (true === ej.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= G.default.compare(e, r.ackMessageIdAtChannelSelect)) returnfalse;
    let i = eK(n);
    return G.default.extractTimestamp(e) > i
  }
  getAllReadStates(e) {
    let t = [];
    return ej.forEach(n => {
      switch (n.type) {
        case ei.W.GUILD_HOME:
        case ei.W.GUILD_EVENT:
        case ei.W.GUILD_ONBOARDING_QUESTION:
          null != Y.Z.getGuild(n.channelId) && t.push(n.serialize(e));
          break;
        case ei.W.NOTIFICATION_CENTER:
        case ei.W.MESSAGE_REQUESTS:
          var r;
          G.default.cast(null == (r = J.default.getCurrentUser()) ? true : r.id) === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return ej.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return ej.getMentionChannelIds()
  }
  getNonChannelAckId(e) {
    var t;
    let n = null == (t = J.default.getCurrentUser()) ? true : t.id;
    return null == n ? null : ej.get(n, e).ackMessageId
  }
  getSnapshot(e, t) {
    let n = ej.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
  getChannelIdsForWindowId(e) {
    return ey.getAllChannelIdsForWindowId(e)
  }
}
eo(t$, "displayName", "ReadStateStore");
let t0 = new t$(Chunk570140.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: tq,
    CONNECTION_OPEN: e$,
    CONNECTION_OPEN_SUPPLEMENTAL: e4,
    LOGOUT: e0,
    OVERLAY_INITIALIZE: e8,
    CACHE_LOADED: tZ,
    GUILD_CREATE: e5,
    LOAD_MESSAGES_SUCCESS: e6,
    MESSAGE_CREATE: e9,
    MESSAGE_DELETE: e7,
    MESSAGE_DELETE_BULK: e7,
    MESSAGE_ACK: tx,
    CHANNEL_ACK: tD,
    CHANNEL_LOCAL_ACK: tL,
    CHANNEL_PINS_ACK: tw,
    CHANNEL_PINS_UPDATE: tU,
    CHANNEL_SELECT: tI,
    VOICE_CHANNEL_SELECT: tS,
    CHANNEL_CREATE: tt,
    THREAD_CREATE: tn,
    THREAD_UPDATE: ta,
    THREAD_LIST_SYNC: tl,
    LOAD_THREADS_SUCCESS: tc,
    LOAD_ARCHIVED_THREADS_SUCCESS: tc,
    SEARCH_MESSAGES_SUCCESS: td,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: td,
    THREAD_MEMBER_UPDATE: to,
    THREAD_MEMBERS_UPDATE: ts,
    CHANNEL_DELETE: tv,
    THREAD_DELETE: tv,
    WINDOW_FOCUS: tN,
    UPDATE_CHANNEL_DIMENSIONS: tP,
    CURRENT_USER_UPDATE: tB,
    BULK_ACK: tH,
    ENABLE_AUTOMATIC_ACK: tY,
    DISABLE_AUTOMATIC_ACK: tW,
    GUILD_FEATURE_ACK: tM,
    GUILD_SCHEDULED_EVENT_CREATE: t_,
    GUILD_SCHEDULED_EVENT_UPDATE: tp,
    GUILD_SCHEDULED_EVENT_DELETE: th,
    GUILD_DELETE: ty,
    GUILD_UPDATE: tO,
    RESORT_THREADS: tu,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: tF,
    DECAY_READ_STATES: eA,
    NOTIFICATION_CENTER_ITEM_CREATE: tE,
    RELATIONSHIP_ADD: tm,
    RELATIONSHIP_REMOVE: tg,
    NOTIFICATION_CENTER_ITEMS_ACK: tb,
    USER_NON_CHANNEL_ACK: tj,
    PASSIVE_UPDATE_V2: tG,
    CLEAR_OLDEST_UNREAD_MESSAGE: tK,
    TRY_ACK: tz,
    MESSAGE_REQUEST_ACK: tX,
    MESSAGE_REQUEST_CLEAR_ACK: tQ,
    APP_STATE_UPDATE: tJ
  }),
  t1 = t0