/** Chunk was on 90389 **/
let o, r, i;
n.d(t, {
  Z: () => P
}), n(47120), n(653041);
var a, s, _, d = n(913527),
  l = n.n(d),
  c = n(442837),
  u = n(759174),
  b = n(570140),
  p = n(333023),
  h = n(355298),
  g = n(333984),
  f = n(131704),
  v = n(592125),
  C = n(430824),
  O = n(306680),
  m = n(9156),
  E = n(594174),
  w = n(709054);
let S = new u.h(e => {
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

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let o = null !== (n = null !== (t = O.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      r = e.isMessageRequestTimestamp;
    if (null != r) {
      let e = l()(r).valueOf(),
        t = w.default.fromTimestamp(e);
      return w.default.compare(o, t) > 0 ? o : t
    }
    return o
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: !1,
    isRequest: h.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id)
  }
}

function T() {
  S.clear(), Object.values(v.Z.getMutablePrivateChannels()).forEach(e => {
    S.set(e.id, y(e))
  })
}

function R() {
  let e = v.Z.getMutablePrivateChannels();
  for (let t in e) S.set(t, y(e[t]))
}
let A = (o = [], r = [], i = [], () => {
  let e = S.values("FAVORITE"),
    t = S.values("DEFAULT");
  return (o !== e || r !== t) && (i = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), o = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), r = t), i
});
class I extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(v.Z, C.Z, E.default, h.Z, m.ZP), this.syncWith([m.ZP, h.Z], T)
  }
  getPrivateChannelIds() {
    return A()
  }
  getSortedChannels() {
    return [S.values("FAVORITE"), S.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return S.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: o
      } = t;
      e[n] = o
    }), e
  }
}
_ = "PrivateChannelSortStore", (s = "displayName") in I ? Object.defineProperty(I, s, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[s] = _;
let P = new I(b.Z, {
  CONNECTION_OPEN: T,
  CONNECTION_OPEN_SUPPLEMENTAL: T,
  OVERLAY_INITIALIZE: T,
  CACHE_LOADED: R,
  CACHE_LOADED_LAZY: R,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, f.hv)(e.type) || S.has(e.id)) && S.set(e.id, y(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, f.hv)(t.type) || t.id === p.V) return !1;
    S.set(t.id, y(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return S.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!S.has(t)) return !1;
    let o = v.Z.getChannel(t);
    return null != o && S.set(t, y(o, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return S.delete(t)
  },
  LOGOUT: function() {
    S.clear()
  }
})