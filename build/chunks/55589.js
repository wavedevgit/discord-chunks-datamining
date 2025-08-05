/** Chunk was on 82107 **/
let r, a, i;
t.d(n, {
  Z: () => k
}), t(388685), t(539854);
var o, l, c, s = t(913527),
  d = t.n(s),
  u = t(442837),
  _ = t(759174),
  p = t(570140),
  b = t(333023),
  f = t(355298),
  h = t(333984),
  m = t(131704),
  g = t(592125),
  v = t(430824),
  x = t(306680),
  C = t(9156),
  O = t(594174),
  I = t(709054);
let y = new _.h(e => {
  let {
    isRequest: n,
    isFavorite: t
  } = e;
  return n ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: n
  } = e;
  return -I.default.extractTimestamp(n)
});

function j(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var n, t;
    let r = null != (t = null != (n = x.ZP.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
      a = e.isMessageRequestTimestamp;
    if (null != a) {
      let e = d()(a).valueOf(),
        n = I.default.fromTimestamp(e);
      return I.default.compare(r, n) > 0 ? r : n
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: n,
    isFavorite: !1,
    isRequest: f.Z.isMessageRequest(e.id) || h.Z.isSpam(e.id)
  }
}

function E() {
  y.clear(), Object.values(g.Z.getMutablePrivateChannels()).forEach(e => {
    y.set(e.id, j(e))
  })
}

function w() {
  let e = g.Z.getMutablePrivateChannels();
  for (let n in e) y.set(n, j(e[n]))
}
let P = (r = [], a = [], i = [], () => {
  let e = y.values("FAVORITE"),
    n = y.values("DEFAULT");
  return (r !== e || a !== n) && (i = [], e.forEach(e => {
    let {
      channelId: n
    } = e;
    return i.push(n)
  }), r = e, n.forEach(e => {
    let {
      channelId: n
    } = e;
    return i.push(n)
  }), a = n), i
});
class N extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, v.Z, O.default, f.Z, C.ZP), this.syncWith([C.ZP, f.Z], E)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [y.values("FAVORITE"), y.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return y.values().forEach(n => {
      let {
        channelId: t,
        lastMessageId: r
      } = n;
      e[t] = r
    }), e
  }
}
c = "PrivateChannelSortStore", (l = "displayName") in N ? Object.defineProperty(N, l, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : N[l] = c;
let k = new N(p.Z, {
  CONNECTION_OPEN: E,
  CONNECTION_OPEN_SUPPLEMENTAL: E,
  OVERLAY_INITIALIZE: E,
  CACHE_LOADED: w,
  CACHE_LOADED_LAZY: w,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: n
    } = e;
    n.forEach(e => {
      ((0, m.hv)(e.type) || y.has(e.id)) && y.set(e.id, j(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: n
    } = e;
    if (!(0, m.hv)(n.type) || n.id === b.V) return !1;
    y.set(n.id, j(n))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return y.delete(n.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      message: t
    } = e;
    if (!y.has(n)) return !1;
    let r = g.Z.getChannel(n);
    return null != r && y.set(n, j(r, t.id))
  },
  GUILD_CREATE: function(e) {
    let n = e.guild.id;
    return y.delete(n)
  },
  LOGOUT: function() {
    y.clear()
  }
})