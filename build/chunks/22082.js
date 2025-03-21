/** Chunk was on 62117 **/
n.d(t, {
  Z: () => L
}), n(47120);
var i, s, l, r = n(442837),
  a = n(570140),
  d = n(45114),
  o = n(897473),
  h = n(581883),
  u = n(314897),
  c = n(592125),
  g = n(984933),
  C = n(271383),
  p = n(430824),
  v = n(306680),
  f = n(9156),
  I = n(70956),
  S = n(709054),
  y = n(981631);
let E = new Set,
  _ = {},
  w = {};

function m(e, t) {
  let n = _[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !f.ZP.isOptInEnabled(e) || (null === (i = c.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) || null != v.ZP.ackMessageId(t) || a.Z.wait(() => (0, d.In)(t, !0, !0, S.default.atPreviousMillisecond(t)))
  }
}

function b(e) {
  var t;
  if (null != _[e]) return;
  let n = g.ZP.getChannels(e)[g.sH].map(e => e.channel.id),
    i = null === (t = C.ZP.getMember(e, u.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i) return;
  _[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (_[e] = new Set(n.filter(t => {
    let n = S.default.extractTimestamp(t);
    return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - I.Z.Millis.WEEK && n > h.Z.getGuildRecentsDismissedAt(e) && n > s && !f.ZP.isChannelOrParentOptedIn(e, t)
  })), w[e] = Date.now())
}

function N() {
  S.default.keys(_).forEach(e => {
    let t = _[e];
    _[e] = new Set([...t].filter(t => !f.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class O extends(i = r.ZP.Store) {
  initialize() {
    this.waitFor(g.ZP, u.default, C.ZP, f.ZP, v.ZP, h.Z), this.syncWith([f.ZP], N)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == _[e] && b(e), null != e && null !== (t = _[e]) && void 0 !== t ? t : E
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = p.Z.getGuild(e);
    return !!(null != i && i.hasFeature(y.oNc.COMMUNITY)) && (null != e && null == _[e] && b(e), (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t))
  }
}
l = "NewChannelsStore", (s = "displayName") in O ? Object.defineProperty(O, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : O[s] = l;
let L = new O(a.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == _[t]) return !1;
    n.forEach(e => _[t].delete(e)), 0 === _[t].size && delete _[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == _[t] || w[t] < Date.now() - I.Z.Millis.HOUR ? (b(t), !0) : (null != n && m(t, n), !1))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === o.tI.VIEW_CHANNEL && (m(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (m(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete _[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (_[n.guild_id] = null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set, _[n.guild_id].add(n.id))
  }
})