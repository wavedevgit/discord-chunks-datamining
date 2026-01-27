/** Chunk was on web.js **/
/** chunk id: 613999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $l: () => l,
  Ay: () => f,
  O_: () => u,
  xx: () => c
}), require("./321073.js"), require("./896048.js");
var Chunk543531 = require("./543531.js"),
  Chunk407689 = require("./407689.js"),
  Chunk853742 = require("./853742.js"),
  Chunk759735 = require("./759735.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  return "".concat(i.mG.FORUM_CHANNEL, "_").concat(e)
}

function c(e, t, n) {
  (0, r.wR)(l(e), t, n)
}

function u(e, t, n) {
  (0, r.zK)(l(e), t, n)
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
  0 !== s.length && (0, a.Z_)({
    guildId: t,
    channelId: n,
    sessionId: r,
    postIds: s,
    additionalTimes: l
  })
}
class f extends Chunk407689.id {
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
    }), this.guildId = e, this.channelId = t, this.sessionId = (0, o.cr)(t)
  }
}