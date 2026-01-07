/** Chunk was on web.js **/
/** chunk id: 480739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => c,
  cs: () => u,
  zQ: () => f
}), require("./539854.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 6e4,
  l = 3e3;
var c = function(e) {
    return e.FORUM_CHANNEL = "forum_channel", e
  }({}),
  u = function(e) {
    return e[e.IMMEDIATE = 0] = "IMMEDIATE", e[e.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", e[e.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY", e
  }({});
class d {
  maybeMarkSeen(e) {
    let t = this.seenIntervals[this.seenIntervals.length - 1];
    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
      startTimeMillis: e
    }), true)
  }
  maybeMarkUnseen(e) {
    let t = this.seenIntervals[this.seenIntervals.length - 1];
    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, true)
  }
  isVisible() {
    let e = this.seenIntervals[this.seenIntervals.length - 1];
    return (null == e ? true : e.startTimeMillis) != null && (null == e ? true : e.endTimeMillis) == null
  }
  computeSeenTimeDestructive(e) {
    let t = 0,
      n = [];
    for (let r of this.seenIntervals) {
      if (null != r.endTimeMillis) {
        t += r.endTimeMillis - r.startTimeMillis;
        continue
      }
      if (e) {
        let e = Date.now();
        t += e - r.startTimeMillis, n.push({
          startTimeMillis: e
        });
        continue
      }
      n.push(r)
    }
    return i()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
  }
  constructor() {
    o(this, "seenIntervals", true), this.seenIntervals = []
  }
}
class f {
  maybeFlushSeenItems(e) {
    if (null == e && Date.now() - this._lastFlushTimeMillis < s || 1 === e && Date.now() - this._lastFlushTimeMillis < l) return Promise.resolve();
    let t = this.createFlushSeenItemsFunction(e);
    return null == t ? Promise.resolve() : new Promise((this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? async e => {
      await t(), e()
    }: e => {
      setTimeout(async () => {
        await t(), e()
      }, 100)
    })
  }
  constructor({
    id: e,
    windowId: t,
    isPaused: n
  }) {
    o(this, "trackedFeedItems", true), o(this, "_lastFlushTimeMillis", true), o(this, "_pausedFeedItemIds", true), o(this, "_paused", true), o(this, "_windowId", true), o(this, "_isReactNavigationFocused", true), o(this, "_id", true), o(this, "onInitialize", true), o(this, "onTerminate", true), o(this, "onFeedItemSeen", true), o(this, "onFeedItemUnseen", true), o(this, "initialize", () => {
      var e, t;
      a.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), a.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), a.Z.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), a.Z.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), a.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null == (e = (t = this).onInitialize) || e.call(t)
    }), o(this, "terminate", () => {
      var e, t;
      a.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), a.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), a.Z.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), a.Z.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), a.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null == (e = (t = this).onTerminate) || e.call(t), this.maybeFlushSeenItems(0)
    }), o(this, "handleFeedItemFlush", e => {
      let {
        id: t,
        force: n
      } = e;
      this._id === t && this.maybeFlushSeenItems(n)
    }), o(this, "handleFeedItemSeen", e => {
      var t, n;
      let r = e.id,
        i = e.timestampMillis,
        a = e.feedItemId;
      if (r !== this._id) return;
      if (this._paused) return void this._pausedFeedItemIds.add(a);
      let o = this.getTrackedFeedItem(a).maybeMarkSeen(i);
      null == (t = (n = this).onFeedItemSeen) || t.call(n, a, o)
    }), o(this, "handleFeedItemUnseen", e => {
      var t, n;
      let r = e.id,
        i = e.timestampMillis,
        a = e.feedItemId;
      if (r !== this._id) return;
      this._paused && this._pausedFeedItemIds.delete(a);
      let o = this.getTrackedFeedItem(a).maybeMarkUnseen(i);
      null == (t = (n = this).onFeedItemUnseen) || t.call(n, a, o), this.maybeFlushSeenItems()
    }), o(this, "getTrackedFeedItem", e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e])), o(this, "getVisibleFeedItemIds", () => new Set(Object.keys(this.trackedFeedItems).filter(e => {
      var t;
      return null == (t = this.trackedFeedItems[e]) ? true : t.isVisible()
    }))), o(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
    }), o(this, "clearPausedFeedItemIds", () => {
      this._pausedFeedItemIds = new Set, this._paused = false
    }), o(this, "pause", () => {
      if (this._paused) return;
      let e = this.getVisibleFeedItemIds();
      e.forEach(e => {
        this.handleFeedItemUnseen({
          id: this._id,
          feedItemId: e,
          timestampMillis: Date.now(),
          type: "ANALYTICS_FEED_ITEM_UNSEEN"
        })
      }), this._paused = true, this._pausedFeedItemIds = e
    }), o(this, "resume", () => {
      this._paused && (this._paused = false, this._pausedFeedItemIds.forEach(e => {
        this.handleFeedItemSeen({
          id: this._id,
          feedItemId: e,
          timestampMillis: Date.now(),
          type: "ANALYTICS_FEED_ITEM_SEEN"
        })
      }), this.clearPausedFeedItemIds())
    }), o(this, "handleReactNavigationFocus", e => {
      this._isReactNavigationFocused = e, this._isReactNavigationFocused ? this.resume() : this.pause()
    }), o(this, "handleWindowFocus", e => {
      this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
    }), this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = true, this._lastFlushTimeMillis = Date.now()
  }
}