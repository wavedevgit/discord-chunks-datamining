/** Chunk was on web.js **/
/** chunk id: 493507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 3 * require("./927813.js").A.Millis.DAY,
  c = {};

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now(),
    n = {};
  for (let [r, i] of Object.entries(e)) null != i && t - i < l && (n[r] = i);
  return n
}

function d(e) {
  let {
    channelId: t,
    timestamp: n
  } = e;
  if (t in c) returnfalse;
  c[t] = n
}

function f(e) {
  let {
    message: t
  } = e;
  delete c[t.channel_id]
}

function p(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  if (n !== s.default.getId()) returnfalse;
  delete c[t]
}

function _(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  delete c[t]
}

function h() {
  c = {}
}
class m extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    c = u(null != (t = null == e ? true : e.nudgedChannels) ? t : {}), this.waitFor(s.default)
  }
  getState() {
    return {
      nudgedChannels: c
    }
  }
  getNudgeTimestamp(e) {
    var t;
    return null != (t = c[e]) ? t : null
  }
  isChannelNudged(e) {
    return null != this.getNudgeTimestamp(e)
  }
}
o(m, "displayName", "ReplyNudgeStore"), o(m, "persistKey", "ReplyNudgeStore");
let g = new m(Chunk73153.h, {
  REPLY_NUDGE_SET: d,
  MESSAGE_CREATE: f,
  MESSAGE_REACTION_ADD: p,
  CHANNEL_DELETE: _,
  LOGOUT: h
})