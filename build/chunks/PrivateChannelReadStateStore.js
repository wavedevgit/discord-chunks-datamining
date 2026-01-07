/** Chunk was on 67000 **/
/** chunk id: 358652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk251625 = require("./251625.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js");
let h = [],
  p = new Set;

function g() {
  let e = f.Z.getPrivateChannelIds().filter(e => u.ZP.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, s.EF)(e, h) && (h = e, p = new Set(e), true)
}

function b() {
  return g()
}

function m(e) {
  let {
    channelId: t
  } = e, n = c.Z.getChannel(t);
  return null != n && !!(0, o.hv)(n.type) && g()
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, c.Z, d.Z, u.ZP)
  }
  getUnreadPrivateChannelIds() {
    return h
  }
}(i = "displayName") in y ? Object.defineProperty(y, i, {
  value: "PrivateChannelReadStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[i] = "PrivateChannelReadStateStore";
let O = new y(Chunk570140.Z, {
  CONNECTION_OPEN: b,
  OVERLAY_INITIALIZE: b,
  MESSAGE_CREATE: m,
  MESSAGE_ACK: m,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = c.Z.getChannel(t);
    return null != n && !!(0, o.hv)(n.type) && g()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return !!p.has(t) && g()
  },
  WINDOW_FOCUS: function() {
    let e = c.Z.getChannel(d.Z.getChannelId());
    return null != e && !!(0, o.hv)(e.type) && g()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = c.Z.getChannel(t);
    return null != n && !!(0, o.hv)(n.type) && g()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = false;
    for (let {
        id: e
      }
      of t) {
      let t = c.Z.getChannel(e);
      null != t && (0, o.hv)(t.type) && (n = true)
    }
    return !!n && g()
  }
})