/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk217222 = require("./217222.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk543465 = require("./543465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk469679 = require("./469679.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 3 * Chunk927813.A.Millis.DAY,
  p = false,
  E = {};

function g() {
  let e = false !== a.LJ.getSetting() && A.T.getConfig({
    location: "ReplyNudgeStore"
  }).enabled;
  if (p === e) returnfalse;
  p = e
}

function _() {
  let e = false;
  for (let t of Object.keys(E)) d.Ay.isChannelMuted(null, t) && (delete E[t], e = true);
  return e
}
class O extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    E = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
      for (let [i, r] of Object.entries(e)) null != r && t - r < h && (n[i] = r);
      return n
    }(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A, d.Ay), this.syncWith([o.A, l.A], g), this.syncWith([d.Ay], _)
  }
  getState() {
    return {
      nudgedChannels: E
    }
  }
  getNudgeTimestamp(e) {
    var t;
    return p && null != (t = E[e]) ? t : null
  }
  isChannelNudged(e) {
    return null != this.getNudgeTimestamp(e)
  }
}
f(O, "displayName", "ReplyNudgeStore"), f(O, "persistKey", "ReplyNudgeStore");
let b = new O(Chunk73153.h, {
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e;
    if (d.Ay.isChannelMuted(null, t) || t in E) returnfalse;
    E[t] = n
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    if (!(t.channel_id in E)) returnfalse;
    delete E[t.channel_id]
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    if (n !== u.default.getId() || !(t in E)) returnfalse;
    delete E[t]
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    if (!(t in E)) returnfalse;
    delete E[t]
  },
  LOGOUT: function() {
    E = {}, p = false
  }
})