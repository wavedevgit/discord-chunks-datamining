/** Chunk was on 38388 **/
/** chunk id: 358652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  f = new Set;

function g() {
  let e = Chunk55589.Z.getPrivateChannelIds().filter(e => u.ZP.getMentionCount(e) > 0);
  return module.length > 20 && (module.length = 20), !(0, Chunk251625.EF)(module, h) && (h = module, f = new Set(module), true)
}

function m() {
  return g()
}

function b(e) {
  let {
    channelId: t
  } = e, n = c.Z.getChannel(t);
  return null != n && !!(0, a.hv)(n.type) && g()
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk55589.Z, Chunk592125.Z, Chunk944486.Z, Chunk306680.ZP)
  }
  getUnreadPrivateChannelIds() {
    return h
  }
}(i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: "PrivateChannelReadStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[i] = "PrivateChannelReadStateStore";
let y = new _(Chunk570140.Z, {
  CONNECTION_OPEN: m,
  OVERLAY_INITIALIZE: m,
  MESSAGE_CREATE: b,
  MESSAGE_ACK: b,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = c.Z.getChannel(t);
    return null != n && !!(0, a.hv)(n.type) && g()
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
    let e = Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId());
    return null != module && !!(0, Chunk131704.hv)(module.type) && g()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = c.Z.getChannel(t);
    return null != n && !!(0, a.hv)(n.type) && g()
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
      null != t && (0, a.hv)(t.type) && (n = true)
    }
    return !!n && g()
  }
})