/** Chunk was on 53494 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r, i, o, l = n(442837),
  a = n(570140),
  s = n(131704),
  c = n(251625),
  u = n(592125),
  d = n(306680),
  p = n(944486),
  h = n(55589);
let f = [],
  g = new Set;

function m() {
  let e = h.Z.getPrivateChannelIds().filter(e => d.ZP.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, c.EF)(e, f) && (f = e, g = new Set(e), !0)
}

function b() {
  return m()
}

function v(e) {
  let {
    channelId: t
  } = e, n = u.Z.getChannel(t);
  return !!(null != n && (0, s.hv)(n.type)) && m()
}
class y extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, u.Z, p.Z, d.ZP)
  }
  getUnreadPrivateChannelIds() {
    return f
  }
}
o = "PrivateChannelReadStateStore", (i = "displayName") in y ? Object.defineProperty(y, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : y[i] = o;
let _ = new y(a.Z, {
  CONNECTION_OPEN: b,
  OVERLAY_INITIALIZE: b,
  MESSAGE_CREATE: v,
  MESSAGE_ACK: v,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = u.Z.getChannel(t);
    return !!(null != n && (0, s.hv)(n.type)) && m()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return !!g.has(t) && m()
  },
  WINDOW_FOCUS: function() {
    let e = u.Z.getChannel(p.Z.getChannelId());
    return !!(null != e && (0, s.hv)(e.type)) && m()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = u.Z.getChannel(t);
    return !!(null != n && (0, s.hv)(n.type)) && m()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = u.Z.getChannel(e);
      null != t && (0, s.hv)(t.type) && (n = !0)
    }
    return !!n && m()
  }
})