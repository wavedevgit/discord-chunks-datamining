/** Chunk was on 67564 **/
/** chunk id: 131677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk583613 = require("./583613.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk645959 = require("./645959.js");
let h = [],
  f = new Set;

function g() {
  let e = p.A.getPrivateChannelIds().filter(e => u.Ay.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, o.in)(e, h) && (h = e, f = new Set(e), true)
}

function m() {
  return g()
}

function b(e) {
  let {
    channelId: t
  } = e, n = c.A.getChannel(t);
  return null != n && !!(0, a.Gw)(n.type) && g()
}
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, c.A, d.A, u.Ay)
  }
  getUnreadPrivateChannelIds() {
    return h
  }
}(l = "displayName") in A ? Object.defineProperty(A, l, {
  value: "PrivateChannelReadStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[l] = "PrivateChannelReadStateStore";
let y = new A(Chunk73153.h, {
  CONNECTION_OPEN: m,
  OVERLAY_INITIALIZE: m,
  MESSAGE_CREATE: b,
  MESSAGE_ACK: b,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = c.A.getChannel(t);
    return null != n && !!(0, a.Gw)(n.type) && g()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return !!f.has(t) && g()
  },
  WINDOW_FOCUS: function() {
    let e = c.A.getChannel(d.A.getChannelId());
    return null != e && !!(0, a.Gw)(e.type) && g()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = c.A.getChannel(t);
    return null != n && !!(0, a.Gw)(n.type) && g()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = false;
    for (let {
        id: e
      }
      of t) {
      let t = c.A.getChannel(e);
      null != t && (0, a.Gw)(t.type) && (n = true)
    }
    return !!n && g()
  }
})