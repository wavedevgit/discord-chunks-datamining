/** Chunk was on web.js **/
/** chunk id: 985518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => u,
  UP: () => l,
  ZP: () => f,
  rj: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk929991 = require("./929991.js"),
  Chunk480739 = require("./480739.js"),
  Chunk228392 = require("./228392.js"),
  Chunk6496 = require("./6496.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
}

function c(e, t, n) {
  (0, r.a8)(l(e), t, n)
}

function u(e, t, n) {
  (0, r.FL)(l(e), t, n)
}

function d(e) {
  let {
    guildId: t,
    channelId: n,
    sessionId: r,
    trackedFeedItems: i,
    isForcedFlush: o
  } = e, s = [], l = [];
  for (let e of Object.keys(i)) {
    let t = i[e].computeSeenTimeDestructive(o);
    t > 0 && (s.push(e), l.push(t))
  }
  0 !== s.length && (0, a.qs)({
    guildId: t,
    channelId: n,
    sessionId: r,
    postIds: s,
    additionalTimes: l
  })
}
class f extends Chunk480739.zQ {
  constructor({
    guildId: e,
    channelId: t,
    windowId: n,
    isPaused: r
  }) {
    super({
      windowId: n,
      isPaused: r,
      id: l(t)
    }), s(this, "guildId", true), s(this, "channelId", true), s(this, "sessionId", true), s(this, "createFlushSeenItemsFunction", e => {
      let t = this.trackedFeedItems,
        n = this.channelId,
        r = {
          guildId: this.guildId,
          channelId: n,
          sessionId: this.sessionId,
          trackedFeedItems: t,
          isForcedFlush: null != e
        };
      return () => d(r)
    }), this.guildId = e, this.channelId = t, this.sessionId = (0, o.WW)(t)
  }
}