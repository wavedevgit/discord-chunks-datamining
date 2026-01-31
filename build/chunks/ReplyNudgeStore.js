/** Chunk was on 88332 **/
/** chunk id: 493507, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./638769.js"), require("./321073.js"), require("./134528.js"), require("./947204.js");
var n, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk217222 = require("./217222.js"),
  Chunk21119 = require("./21119.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk469679 = require("./469679.js"),
  Chunk575443 = require("./575443.js");

function N(e, i, t) {
  return i in e ? Object.defineProperty(e, i, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = t, e
}
let E = new Chunk626584.A("ReplyNudgeStore"),
  h = false,
  y = {},
  R = new Set;

function C(e, i) {
  let {
    maxNudgeAge: t,
    maxNudgeCount: n
  } = i, l = Date.now(), s = {}, a = Object.entries(e);
  a.sort((e, i) => i[1].timestamp - e[1].timestamp);
  let u = 0;
  for (let [e, {
      timestamp: i,
      isActive: r
    }] of a)
    if (null != i && l - i < m.Mk) {
      let a = r && l - i < t && u < n;
      s[e] = {
        timestamp: i,
        isActive: a
      }, a && u++
    } return E.info("Pruned ".concat(a.length - Object.keys(s).length, " expired nudges")), s
}

function p(e) {
  if (!(e in y) || !y[e].isActive) returnfalse;
  y[e].isActive = false
}

function v() {
  let e = [];
  for (let [i, {
      isActive: t
    }] of Object.entries(y)) t && e.push(i);
  return e
}

function O(e) {
  var i, t;
  let n = f.A.getChannel(e);
  if (null == n) return E.warn("getDMChannelAffinity: Unable to find channel", {
    channelId: e
  }), null;
  if ((null == n ? true : n.isDM()) !== true) return E.warn("getDMChannelAffinity: Channel is not a DM", {
    channelId: e
  }), null;
  let l = n.getRecipientId();
  return null != (i = null == (t = r.A.getUserAffinity(l)) ? true : t.dmProbability) ? i : null
}

function U() {
  let {
    displayNudges: e,
    maxNudgeAge: i,
    maxNudgeCount: t
  } = c.T.getConfig({
    location: "handleNudgeVisibilityChange"
  }), n = false !== A.LJ.getSetting() && e;
  if (h === n) returnfalse;
  (h = n) && (y = C(y, {
    maxNudgeAge: i,
    maxNudgeCount: t
  }), R = new Set(v()))
}

function S() {
  let e = false;
  for (let i of Object.keys(y)) o.Ay.isChannelMuted(null, i) && (delete y[i], e = true);
  return e
}
class D extends(n = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var i;
    y = null != (i = null == e ? true : e.nudgedChannels) ? i : {}, this.waitFor(u.A, g.default, f.A, M.A, r.A, o.Ay, d.A), this.syncWith([d.A, u.A], U), this.syncWith([o.Ay], S)
  }
  getState() {
    return {
      nudgedChannels: y
    }
  }
  getNudgeTimestamp(e) {
    if (!h) return null;
    let i = y[e];
    if (null == i) return null;
    if (i.isActive || R.has(e)) {
      var t;
      return null != (t = y[e].timestamp) ? t : null
    }
    return null
  }
  isChannelNudged(e) {
    var i;
    let {
      includeInvisible: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (!!h || !!t) && (null == (i = y[e]) ? true : i.isActive) === true
  }
}
N(D, "displayName", "ReplyNudgeStore"), N(D, "persistKey", "ReplyNudgeStore");
let L = new D(Chunk73153.h, {
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: i,
      timestamp: t
    } = e;
    if (o.Ay.isChannelMuted(null, i)) returnfalse;
    let {
      maxNudgeAge: n,
      maxNudgeCount: l
    } = c.T.getConfig({
      location: "handleReplyNudgeSet"
    });
    if (i in (y = C(y, {
        maxNudgeAge: n,
        maxNudgeCount: l
      }))) returnfalse;
    let s = v();
    if (s.length >= l) {
      let e = s.at(false),
        t = 1 / 0;
      for (let i of s) {
        let n = O(i);
        if (null == n) {
          E.warn("handleReplyNudgeSet: Nudge affinity is null", {
            nudgedChannelId: i
          });
          continue
        }
        n < t && (t = n, e = i)
      }
      let n = O(i);
      if (null == n) return E.warn("handleReplyNudgeSet: New nudge affinity is null", {
        channelId: i
      }), false;
      if (n < t) return E.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
        channelId: i,
        lowestAffinity: t,
        newNudgeAffinity: n
      }), false;
      E.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
        channelId: i,
        lowestAffinity: t,
        newNudgeAffinity: n
      }), delete y[e]
    }
    y[i] = {
      timestamp: t,
      isActive: true
    }, R.add(i)
  },
  REPLY_NUDGE_CLEAR: function(e) {
    let {
      channelId: i
    } = e;
    return p(i)
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: i
    } = e;
    return p(i.channel_id)
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: i,
      userId: t
    } = e;
    return t === g.default.getId() && p(i)
  },
  CHANNEL_SELECT: function() {
    let e = M.A.getLastSelectedChannelId();
    return null != e && p(e)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: i
      }
    } = e;
    return p(i)
  },
  LOGOUT: function() {
    y = {}, R = new Set, h = false
  }
})