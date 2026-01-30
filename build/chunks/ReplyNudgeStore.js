/** Chunk was on 88332 **/
/** chunk id: 493507, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./638769.js"), require("./896048.js"), require("./134528.js"), require("./947204.js");
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
  Chunk469679 = require("./469679.js");

function m(e, i, t) {
  return i in e ? Object.defineProperty(e, i, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = t, e
}
let N = new Chunk626584.A("ReplyNudgeStore"),
  E = false,
  y = {};

function h(e, i) {
  let {
    maxNudgeAge: t,
    maxNudgeCount: n
  } = i, l = Date.now(), s = {}, a = Object.entries(e);
  for (let [e, {
      timestamp: i,
      isActive: u
    }] of(a.sort((e, i) => i[1].timestamp - e[1].timestamp), a))
    if (null != i && l - i < t && u && (s[e] = {
        timestamp: i,
        isActive: u
      }, Object.keys(s).length >= n)) break;
  return N.info("Pruned ".concat(a.length - Object.keys(s).length, " expired nudges")), s
}

function C(e) {
  if (!(e in y)) returnfalse;
  y[e].isActive = false
}

function R(e) {
  var i, t;
  let n = f.A.getChannel(e);
  if (null == n) return N.warn("getDMChannelAffinity: Unable to find channel", {
    channelId: e
  }), null;
  if ((null == n ? true : n.isDM()) !== true) return N.warn("getDMChannelAffinity: Channel is not a DM", {
    channelId: e
  }), null;
  let l = n.getRecipientId();
  return null != (i = null == (t = r.A.getUserAffinity(l)) ? true : t.dmProbability) ? i : null
}

function p() {
  let {
    displayNudges: e,
    maxNudgeAge: i,
    maxNudgeCount: t
  } = c.T.getConfig({
    location: "handleNudgeVisibilityChange"
  }), n = false !== d.LJ.getSetting() && e;
  if (E === n) returnfalse;
  (E = n) && (y = h(y, {
    maxNudgeAge: i,
    maxNudgeCount: t
  }))
}

function v() {
  let e = false;
  for (let i of Object.keys(y)) o.Ay.isChannelMuted(null, i) && (delete y[i], e = true);
  return e
}
class O extends(n = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var i;
    y = null != (i = null == e ? true : e.nudgedChannels) ? i : {}, this.waitFor(u.A, g.default, f.A, M.A, r.A, o.Ay, A.A), this.syncWith([A.A, u.A], p), this.syncWith([o.Ay], v)
  }
  getState() {
    return {
      nudgedChannels: y
    }
  }
  getNudgeTimestamp(e) {
    var i, t;
    return E && null != (i = null == (t = y[e]) ? true : t.timestamp) ? i : null
  }
  isChannelNudged(e) {
    var i;
    let {
      includeInvisible: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (!!E || !!t) && (null == (i = y[e]) ? true : i.isActive) === true
  }
}
m(O, "displayName", "ReplyNudgeStore"), m(O, "persistKey", "ReplyNudgeStore");
let U = new O(Chunk73153.h, {
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
    if (i in (y = h(y, {
        maxNudgeAge: n,
        maxNudgeCount: l
      }))) returnfalse;
    if (Object.keys(y).length >= l) {
      let e = Object.keys(y),
        t = e.at(false),
        n = 1 / 0;
      for (let i of e) {
        let e = R(i);
        if (null == e) {
          N.warn("handleReplyNudgeSet: Nudge affinity is null", {
            nudgedChannelId: i
          });
          continue
        }
        e < n && (n = e, t = i)
      }
      let l = R(i);
      if (null == l) return N.warn("handleReplyNudgeSet: New nudge affinity is null", {
        channelId: i
      }), false;
      if (l < n) return N.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
        channelId: i,
        lowestAffinity: n,
        newNudgeAffinity: l
      }), false;
      N.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
        channelId: i,
        lowestAffinity: n,
        newNudgeAffinity: l
      }), delete y[t]
    }
    y[i] = {
      timestamp: t,
      isActive: true
    }
  },
  REPLY_NUDGE_CLEAR: function(e) {
    let {
      channelId: i
    } = e;
    return C(i)
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: i
    } = e;
    return C(i.channel_id)
  },
  MESSAGE_REACTION_ADD: function(e) {
    let {
      channelId: i,
      userId: t
    } = e;
    return t === g.default.getId() && C(i)
  },
  CHANNEL_SELECT: function() {
    let e = M.A.getLastSelectedChannelId();
    return null != e && C(e)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: i
      }
    } = e;
    return C(i)
  },
  LOGOUT: function() {
    y = {}, E = false
  }
})