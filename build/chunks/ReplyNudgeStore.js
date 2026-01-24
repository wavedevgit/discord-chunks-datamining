/** Chunk was on web.js **/
/** chunk id: 493507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk469679 = require("./469679.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 3 * Chunk927813.A.Millis.DAY,
  d = {};

function f() {
  return l.T.getConfig({
    location: "ReplyNudgeStore"
  }).enabled
}

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
    n = {};
  for (let [r, i] of Object.entries(e)) null != i && t - i < u && (n[r] = i);
  return n
}

function _(e) {
  let {
    channelId: t,
    timestamp: n
  } = e;
  if (t in d) returnfalse;
  d[t] = n
}

function h(e) {
  let {
    message: t
  } = e;
  if (!(t.channel_id in d)) returnfalse;
  delete d[t.channel_id]
}

function m(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  if (n !== s.default.getId() || !(t in d)) returnfalse;
  delete d[t]
}

function g(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  if (!(t in d)) returnfalse;
  delete d[t]
}

function E() {
  d = {}
}
class y extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    d = p(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(s.default)
  }
  getState() {
    return {
      nudgedChannels: d
    }
  }
  getNudgeTimestamp(e) {
    var t;
    return f() && null != (t = d[e]) ? t : null
  }
  isChannelNudged(e) {
    return null != this.getNudgeTimestamp(e)
  }
}
c(y, "displayName", "ReplyNudgeStore"), c(y, "persistKey", "ReplyNudgeStore");
let b = new y(Chunk73153.h, {
  REPLY_NUDGE_SET: _,
  MESSAGE_CREATE: h,
  MESSAGE_REACTION_ADD: m,
  CHANNEL_DELETE: g,
  LOGOUT: E
})