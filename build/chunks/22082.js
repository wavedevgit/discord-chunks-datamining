/** Chunk was on 3849 **/
n.d(t, {
  Z: () => P
}), n(47120);
var i, r, l, o = n(442837),
  s = n(570140),
  a = n(45114),
  u = n(897473),
  d = n(581883),
  c = n(314897),
  h = n(592125),
  f = n(984933),
  p = n(271383),
  g = n(430824),
  v = n(306680),
  C = n(9156),
  E = n(70956),
  _ = n(709054),
  S = n(981631);
let m = new Set,
  O = {},
  I = {};

function y(e, t) {
  let n = O[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !C.ZP.isOptInEnabled(e) || (null === (i = h.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) || null != v.ZP.ackMessageId(t) || s.Z.wait(() => (0, a.In)(t, !0, !0, _.default.atPreviousMillisecond(t)))
  }
}

function b(e) {
  var t;
  if (null != O[e]) return;
  let n = f.ZP.getChannels(e)[f.sH].map(e => e.channel.id),
    i = null === (t = p.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i) return;
  O[e] = new Set;
  let r = new Date(i).getTime();
  0 !== n.length && (O[e] = new Set(n.filter(t => {
    let n = _.default.extractTimestamp(t);
    return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > d.Z.getGuildRecentsDismissedAt(e) && n > r && !C.ZP.isChannelOrParentOptedIn(e, t)
  })), I[e] = Date.now())
}

function N() {
  _.default.keys(O).forEach(e => {
    let t = O[e];
    O[e] = new Set([...t].filter(t => !C.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class T extends(i = o.ZP.Store) {
  initialize() {
    this.waitFor(f.ZP, c.default, p.ZP, C.ZP, v.ZP, d.Z), this.syncWith([C.ZP], N)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == O[e] && b(e), null != e && null !== (t = O[e]) && void 0 !== t ? t : m
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = g.Z.getGuild(e);
    return !!(null != i && i.hasFeature(S.oNc.COMMUNITY)) && (null != e && null == O[e] && b(e), (null === (n = O[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t))
  }
}
l = "NewChannelsStore", (r = "displayName") in T ? Object.defineProperty(T, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : T[r] = l;
let P = new T(s.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == O[t]) return !1;
    n.forEach(e => O[t].delete(e)), 0 === O[t].size && delete O[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == O[t] || I[t] < Date.now() - E.Z.Millis.HOUR ? (b(t), !0) : (null != n && y(t, n), !1))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === u.tI.VIEW_CHANNEL && (y(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (y(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete O[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (O[n.guild_id] = null !== (t = O[n.guild_id]) && void 0 !== t ? t : new Set, O[n.guild_id].add(n.id))
  }
})