/** Chunk was on 87791 **/
let r, i, o;
n.d(t, {
  Z: () => T
}), n(47120), n(653041);
var l, a, s, c = n(913527),
  u = n.n(c),
  d = n(442837),
  p = n(759174),
  f = n(570140),
  h = n(333023),
  m = n(355298),
  _ = n(333984),
  b = n(131704),
  g = n(592125),
  E = n(430824),
  v = n(306680),
  O = n(9156),
  y = n(594174),
  C = n(709054);
let x = new p.h(e => {
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

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let r = null !== (n = null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = u()(i).valueOf(),
        t = C.default.fromTimestamp(e);
      return C.default.compare(r, t) > 0 ? r : t
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: !1,
    isRequest: m.Z.isMessageRequest(e.id) || _.Z.isSpam(e.id)
  }
}

function N() {
  x.clear(), Object.values(g.Z.getMutablePrivateChannels()).forEach(e => {
    x.set(e.id, S(e))
  })
}

function I() {
  let e = g.Z.getMutablePrivateChannels();
  for (let t in e) x.set(t, S(e[t]))
}
let P = (r = [], i = [], o = [], () => {
  let e = x.values("FAVORITE"),
    t = x.values("DEFAULT");
  return (r !== e || i !== t) && (o = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return o.push(t)
  }), r = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return o.push(t)
  }), i = t), o
});
class j extends(l = d.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, E.Z, y.default, m.Z, O.ZP), this.syncWith([O.ZP, m.Z], N)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [x.values("FAVORITE"), x.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return x.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), e
  }
}
s = "PrivateChannelSortStore", (a = "displayName") in j ? Object.defineProperty(j, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : j[a] = s;
let T = new j(f.Z, {
  CONNECTION_OPEN: N,
  CONNECTION_OPEN_SUPPLEMENTAL: N,
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED: I,
  CACHE_LOADED_LAZY: I,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, b.hv)(e.type) || x.has(e.id)) && x.set(e.id, S(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, b.hv)(t.type) || t.id === h.V) return !1;
    x.set(t.id, S(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return x.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!x.has(t)) return !1;
    let r = g.Z.getChannel(t);
    return null != r && x.set(t, S(r, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return x.delete(t)
  },
  LOGOUT: function() {
    x.clear()
  }
})