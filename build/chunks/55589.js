/** Chunk was on 83957 **/
let r, i, l;
n.d(t, {
  Z: () => R
}), n(388685), n(539854);
var a, s, o, u = n(913527),
  c = n.n(u),
  d = n(442837),
  _ = n(759174),
  E = n(570140),
  p = n(333023),
  f = n(355298),
  I = n(333984),
  g = n(131704),
  h = n(592125),
  S = n(430824),
  y = n(306680),
  O = n(9156),
  N = n(594174),
  T = n(709054);
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

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let r = null != (n = null != (t = y.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = c()(i).valueOf(),
        t = T.default.fromTimestamp(e);
      return T.default.compare(r, t) > 0 ? r : t
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: !1,
    isRequest: f.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id)
  }
}

function b() {
  m.clear(), Object.values(h.Z.getMutablePrivateChannels()).forEach(e => {
    m.set(e.id, A(e))
  })
}

function C() {
  let e = h.Z.getMutablePrivateChannels();
  for (let t in e) m.set(t, A(e[t]))
}
let D = (r = [], i = [], l = [], () => {
  let e = m.values("FAVORITE"),
    t = m.values("DEFAULT");
  return (r !== e || i !== t) && (l = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), r = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), i = t), l
});
class L extends(a = d.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, S.Z, N.default, f.Z, O.ZP), this.syncWith([O.ZP, f.Z], b)
  }
  getPrivateChannelIds() {
    return D()
  }
  getSortedChannels() {
    return [m.values("FAVORITE"), m.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return m.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), e
  }
}
o = "PrivateChannelSortStore", (s = "displayName") in L ? Object.defineProperty(L, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : L[s] = o;
let R = new L(E.Z, {
  CONNECTION_OPEN: b,
  CONNECTION_OPEN_SUPPLEMENTAL: b,
  OVERLAY_INITIALIZE: b,
  CACHE_LOADED: C,
  CACHE_LOADED_LAZY: C,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, g.hv)(e.type) || m.has(e.id)) && m.set(e.id, A(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, g.hv)(t.type) || t.id === p.V) return !1;
    m.set(t.id, A(t))
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
    let r = h.Z.getChannel(t);
    return null != r && m.set(t, A(r, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return m.delete(t)
  },
  LOGOUT: function() {
    m.clear()
  }
})