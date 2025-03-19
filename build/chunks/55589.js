/** Chunk was on 60858 **/
let r, a, i;
t.d(n, {
  Z: () => S
}), t(47120), t(653041);
var o, l, c, s = t(913527),
  d = t.n(s),
  u = t(442837),
  _ = t(759174),
  b = t(570140),
  p = t(333023),
  f = t(355298),
  h = t(333984),
  m = t(131704),
  g = t(592125),
  v = t(430824),
  x = t(306680),
  C = t(9156),
  O = t(594174),
  y = t(709054);
let I = new _.h(e => {
  let {
    isRequest: n,
    isFavorite: t
  } = e;
  return n ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: n
  } = e;
  return -n
});

function j(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var n, t;
    let r = null !== (t = null !== (n = x.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
      a = e.isMessageRequestTimestamp;
    if (null != a) {
      let e = d()(a).valueOf(),
        n = y.default.fromTimestamp(e);
      return y.default.compare(r, n) > 0 ? r : n
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
  I.clear(), Object.values(g.Z.getMutablePrivateChannels()).forEach(e => {
    I.set(e.id, j(e))
  })
}

function w() {
  let e = g.Z.getMutablePrivateChannels();
  for (let n in e) I.set(n, j(e[n]))
}
let P = (r = [], a = [], i = [], () => {
  let e = I.values("FAVORITE"),
    n = I.values("DEFAULT");
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
    return [I.values("FAVORITE"), I.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return I.values().forEach(n => {
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
let S = new N(b.Z, {
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
      ((0, m.hv)(e.type) || I.has(e.id)) && I.set(e.id, j(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: n
    } = e;
    if (!(0, m.hv)(n.type) || n.id === p.V) return !1;
    I.set(n.id, j(n))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return I.delete(n.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      message: t
    } = e;
    if (!I.has(n)) return !1;
    let r = g.Z.getChannel(n);
    return null != r && I.set(n, j(r, t.id))
  },
  GUILD_CREATE: function(e) {
    let n = e.guild.id;
    return I.delete(n)
  },
  LOGOUT: function() {
    I.clear()
  }
})