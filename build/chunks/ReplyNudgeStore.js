/** Chunk was on web.js **/
/** chunk id: 493507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./638769.js"), require("./321073.js"), require("./134528.js"), require("./947204.js");
var r, Chunk311907 = require("./311907.js"),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Chunk626584.A("ReplyNudgeStore"),
  y = false,
  b = {},
  O = new Set;

function v(e, t) {
  let {
    maxNudgeAge: n,
    maxNudgeCount: r
  } = t, i = Date.now(), a = {}, o = Object.entries(e);
  o.sort((e, t) => t[1].timestamp - e[1].timestamp);
  let s = 0;
  for (let [e, {
      timestamp: t,
      isActive: l
    }] of o)
    if (null != t && i - t < m.Mk) {
      let o = l && i - t < n && s < r;
      a[e] = {
        timestamp: t,
        isActive: o
      }, o && s++
    } return E.info("Pruned ".concat(o.length - Object.keys(a).length, " expired nudges")), a
}

function A(e) {
  if (!(e in b) || !b[e].isActive) returnfalse;
  b[e].isActive = false
}

function I() {
  let e = [];
  for (let [t, {
      isActive: n
    }] of Object.entries(b)) n && e.push(t);
  return e
}

function S(e) {
  var t, n;
  let r = f.A.getChannel(e);
  if (null == r) return E.warn("getDMChannelAffinity: Unable to find channel", {
    channelId: e
  }), null;
  if ((null == r ? true : r.isDM()) !== true) return E.warn("getDMChannelAffinity: Channel is not a DM", {
    channelId: e
  }), null;
  let i = r.getRecipientId();
  return null != (t = null == (n = l.A.getUserAffinity(i)) ? true : n.dmProbability) ? t : null
}

function T(e) {
  let {
    channelId: t,
    timestamp: n
  } = e;
  if (_.Ay.isChannelMuted(null, t)) returnfalse;
  let {
    maxNudgeAge: r,
    maxNudgeCount: i
  } = h.T.getConfig({
    location: "handleReplyNudgeSet"
  });
  if (t in (b = v(b, {
      maxNudgeAge: r,
      maxNudgeCount: i
    }))) returnfalse;
  let a = I();
  if (a.length >= i) {
    let e = a.at(false),
      n = 1 / 0;
    for (let t of a) {
      let r = S(t);
      if (null == r) {
        E.warn("handleReplyNudgeSet: Nudge affinity is null", {
          nudgedChannelId: t
        });
        continue
      }
      r < n && (n = r, e = t)
    }
    let r = S(t);
    if (null == r) return E.warn("handleReplyNudgeSet: New nudge affinity is null", {
      channelId: t
    }), false;
    if (r < n) return E.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
      channelId: t,
      lowestAffinity: n,
      newNudgeAffinity: r
    }), false;
    E.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
      channelId: t,
      lowestAffinity: n,
      newNudgeAffinity: r
    }), delete b[e]
  }
  b[t] = {
    timestamp: n,
    isActive: true
  }, O.add(t)
}

function C(e) {
  let {
    channelId: t
  } = e;
  return A(t)
}

function N(e) {
  let {
    message: t
  } = e;
  return A(t.channel_id)
}

function w(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return n === d.default.getId() && A(t)
}

function R() {
  let e = p.A.getLastSelectedChannelId();
  return null != e && A(e)
}

function P(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return A(t)
}

function D() {
  let {
    displayNudges: e,
    maxNudgeAge: t,
    maxNudgeCount: n
  } = h.T.getConfig({
    location: "handleNudgeVisibilityChange"
  }), r = false !== c.LJ.getSetting() && e;
  if (y === r) returnfalse;
  (y = r) && (b = v(b, {
    maxNudgeAge: t,
    maxNudgeCount: n
  }), O = new Set(I()))
}

function L() {
  let e = false;
  for (let t of Object.keys(b)) _.Ay.isChannelMuted(null, t) && (delete b[t], e = true);
  return e
}

function x() {
  b = {}, O = new Set, y = false
}
class M extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    b = null != (t = null == e ? true : e.nudgedChannels) ? t : {}, this.waitFor(s.A, d.default, f.A, p.A, l.A, _.Ay, u.A), this.syncWith([u.A, s.A], D), this.syncWith([_.Ay], L)
  }
  getState() {
    return {
      nudgedChannels: b
    }
  }
  getNudgeTimestamp(e) {
    if (!y) return null;
    let t = b[e];
    if (null == t) return null;
    if (t.isActive || O.has(e)) {
      var n;
      return null != (n = b[e].timestamp) ? n : null
    }
    return null
  }
  isChannelNudged(e) {
    var t;
    let {
      includeInvisible: n = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (!!y || !!n) && (null == (t = b[e]) ? true : t.isActive) === true
  }
}
g(M, "displayName", "ReplyNudgeStore"), g(M, "persistKey", "ReplyNudgeStore");
let j = new M(Chunk73153.h, {
  REPLY_NUDGE_SET: T,
  REPLY_NUDGE_CLEAR: C,
  MESSAGE_CREATE: N,
  MESSAGE_REACTION_ADD: w,
  CHANNEL_SELECT: R,
  CHANNEL_DELETE: P,
  LOGOUT: x
})