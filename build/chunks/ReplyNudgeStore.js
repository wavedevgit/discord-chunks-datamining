/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk217222 = require("./217222.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk469679 = require("./469679.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 3 * Chunk927813.A.Millis.DAY,
  h = false,
  p = {};

function E() {
  let e = false !== a.LJ.getSetting() && c.T.getConfig({
    location: "ReplyNudgeStore"
  }).enabled;
  if (h === e) returnfalse;
  h = e
}
class g extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    p = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
      for (let [i, r] of Object.entries(e)) null != r && t - r < f && (n[i] = r);
      return n
    }(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A), this.syncWith([o.A, l.A], E)
  }
  getState() {
    return {
      nudgedChannels: p
    }
  }
  getNudgeTimestamp(e) {
    var t;
    return h && null != (t = p[e]) ? t : null
  }
  isChannelNudged(e) {
    return null != this.getNudgeTimestamp(e)
  }
}
A(g, "displayName", "ReplyNudgeStore"), A(g, "persistKey", "ReplyNudgeStore");
let _ = new g(Chunk73153.h, {
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e;
    if (t in p) returnfalse;
    p[t] = n
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    if (!(t.channel_id in p)) returnfalse;
    delete p[t.channel_id]
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    if (n !== u.default.getId() || !(t in p)) returnfalse;
    delete p[t]
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    if (!(t in p)) returnfalse;
    delete p[t]
  },
  LOGOUT: function() {
    p = {}, h = false
  }
})