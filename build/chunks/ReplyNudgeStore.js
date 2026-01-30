/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk217222 = require("./217222.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk469679 = require("./469679.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 3 * Chunk927813.A.Millis.DAY,
  p = false,
  g = {};

function _(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
    n = {};
  for (let [i, {
      timestamp: r,
      isActive: s
    }] of Object.entries(e)) null != r && t - r < h && s && (n[i] = {
    timestamp: r,
    isActive: s
  });
  return n
}

function O(e) {
  if (!(e in g)) returnfalse;
  g[e].isActive = false
}

function b() {
  let e = false !== a.LJ.getSetting() && f.T.getConfig({
    location: "ReplyNudgeStore"
  }).enabled;
  if (p === e) returnfalse;
  p = e
}

function M() {
  let e = false;
  for (let t of Object.keys(g)) c.Ay.isChannelMuted(null, t) && (delete g[t], e = true);
  return e
}
class v extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    g = _(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A, c.Ay, d.A), this.syncWith([o.A, l.A], b), this.syncWith([c.Ay], M)
  }
  getState() {
    return {
      nudgedChannels: _(g)
    }
  }
  getNudgeTimestamp(e) {
    var t, n;
    return p && null != (t = null == (n = g[e]) ? true : n.timestamp) ? t : null
  }
  isChannelNudged(e) {
    var t;
    return !!p && (null == (t = g[e]) ? true : t.isActive) === true
  }
}
E(v, "displayName", "ReplyNudgeStore"), E(v, "persistKey", "ReplyNudgeStore");
let C = new v(Chunk73153.h, {
  REPLY_NUDGE_SET: function(e) {
    var t;
    let {
      channelId: n,
      timestamp: i
    } = e;
    if (c.Ay.isChannelMuted(null, n) || (null == (t = g[n]) ? true : t.isActive) === true) returnfalse;
    g[n] = {
      timestamp: i,
      isActive: true
    }
  },
  REPLY_NUDGE_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    return O(t)
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    return O(t.channel_id)
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    return n === u.default.getId() && O(t)
  },
  CHANNEL_SELECT: function() {
    let e = d.A.getLastSelectedChannelId();
    return null != e && O(e)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return O(t)
  },
  LOGOUT: function() {
    g = {}, p = false
  }
})