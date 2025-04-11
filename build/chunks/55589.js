/** Chunk was on 94400 **/
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
  I = n(355298),
  f = n(333984),
  S = n(131704),
  g = n(592125),
  y = n(430824),
  h = n(306680),
  O = n(9156),
  N = n(594174),
  T = n(709054);
let A = new _.h(e => {
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

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let r = null != (n = null != (t = h.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
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
    isRequest: I.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
  }
}

function b() {
  A.clear(), Object.values(g.Z.getMutablePrivateChannels()).forEach(e => {
    A.set(e.id, m(e))
  })
}

function C() {
  let e = g.Z.getMutablePrivateChannels();
  for (let t in e) A.set(t, m(e[t]))
}
let L = (r = [], i = [], l = [], () => {
  let e = A.values("FAVORITE"),
    t = A.values("DEFAULT");
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
class D extends(a = d.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, y.Z, N.default, I.Z, O.ZP), this.syncWith([O.ZP, I.Z], b)
  }
  getPrivateChannelIds() {
    return L()
  }
  getSortedChannels() {
    return [A.values("FAVORITE"), A.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return A.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), e
  }
}
o = "PrivateChannelSortStore", (s = "displayName") in D ? Object.defineProperty(D, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : D[s] = o;
let R = new D(E.Z, {
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
      ((0, S.hv)(e.type) || A.has(e.id)) && A.set(e.id, m(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, S.hv)(t.type) || t.id === p.V) return !1;
    A.set(t.id, m(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return A.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!A.has(t)) return !1;
    let r = g.Z.getChannel(t);
    return null != r && A.set(t, m(r, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return A.delete(t)
  },
  LOGOUT: function() {
    A.clear()
  }
})