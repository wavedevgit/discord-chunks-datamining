/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk469679 = require("./469679.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 3 * Chunk927813.A.Millis.DAY,
  c = {};
class A extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    c = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
      for (let [i, r] of Object.entries(e)) null != r && t - r < d && (n[i] = r);
      return n
    }(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(l.default)
  }
  getState() {
    return {
      nudgedChannels: c
    }
  }
  getNudgeTimestamp(e) {
    var t;
    return o.T.getConfig({
      location: "ReplyNudgeStore"
    }).enabled && null != (t = c[e]) ? t : null
  }
  isChannelNudged(e) {
    return null != this.getNudgeTimestamp(e)
  }
}
u(A, "displayName", "ReplyNudgeStore"), u(A, "persistKey", "ReplyNudgeStore");
let f = new A(Chunk73153.h, {
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e;
    if (t in c) returnfalse;
    c[t] = n
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    if (!(t.channel_id in c)) returnfalse;
    delete c[t.channel_id]
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    if (n !== l.default.getId() || !(t in c)) returnfalse;
    delete c[t]
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    if (!(t in c)) returnfalse;
    delete c[t]
  },
  LOGOUT: function() {
    c = {}
  }
})