/** Chunk was on 47888 **/
let i, r, a;
n.d(t, {
  Z: () => N
}), n(388685), n(539854);
var o, l, s, c = n(913527),
  d = n.n(c),
  u = n(442837),
  _ = n(759174),
  b = n(570140),
  p = n(333023),
  E = n(355298),
  f = n(333984),
  g = n(131704),
  I = n(592125),
  h = n(430824),
  S = n(306680),
  A = n(9156),
  O = n(594174),
  y = n(709054);
let m = new _.h(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let i = null != (n = null != (t = S.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
      r = e.isMessageRequestTimestamp;
    if (null != r) {
      let e = d()(r).valueOf(),
        t = y.default.fromTimestamp(e);
      return y.default.compare(i, t) > 0 ? i : t
    }
    return i
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: !1,
    isRequest: E.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
  }
}

function C() {
  m.clear(), Object.values(I.Z.getMutablePrivateChannels()).forEach(e => {
    m.set(e.id, v(e))
  })
}

function L() {
  let e = I.Z.getMutablePrivateChannels();
  for (let t in e) m.set(t, v(e[t]))
}
let T = (i = [], r = [], a = [], () => {
  let e = m.values("FAVORITE"),
    t = m.values("DEFAULT");
  return (i !== e || r !== t) && (a = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), i = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), r = t), a
});
class P extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, h.Z, O.default, E.Z, A.ZP), this.syncWith([A.ZP, E.Z], C)
  }
  getPrivateChannelIds() {
    return T()
  }
  getSortedChannels() {
    return [m.values("FAVORITE"), m.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return m.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: i
      } = t;
      e[n] = i
    }), e
  }
}
s = "PrivateChannelSortStore", (l = "displayName") in P ? Object.defineProperty(P, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : P[l] = s;
let N = new P(b.Z, {
  CONNECTION_OPEN: C,
  CONNECTION_OPEN_SUPPLEMENTAL: C,
  OVERLAY_INITIALIZE: C,
  CACHE_LOADED: L,
  CACHE_LOADED_LAZY: L,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, g.hv)(e.type) || m.has(e.id)) && m.set(e.id, v(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, g.hv)(t.type) || t.id === p.V) return !1;
    m.set(t.id, v(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return m.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!m.has(t)) return !1;
    let i = I.Z.getChannel(t);
    return null != i && m.set(t, v(i, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return m.delete(t)
  },
  LOGOUT: function() {
    m.clear()
  }
})