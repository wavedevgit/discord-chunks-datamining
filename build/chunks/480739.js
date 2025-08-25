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

function a(e, t, n) {
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
    return (null == module ? true : module.startTimeMillis) != null && (null == module ? true : module.endTimeMillis) == null
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
    a(this, "seenIntervals", true), this.seenIntervals = []
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
    a(this, "trackedFeedItems", true), a(this, "_lastFlushTimeMillis", true), a(this, "_pausedFeedItemIds", true), a(this, "_paused", true), a(this, "_windowId", true), a(this, "_isReactNavigationFocused", true), a(this, "_id", true), a(this, "onInitialize", true), a(this, "onTerminate", true), a(this, "onFeedItemSeen", true), a(this, "onFeedItemUnseen", true), a(this, "initialize", () => {
      var e, t;
      o.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.Z.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.Z.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null == (e = (t = this).onInitialize) || e.call(t)
    }), a(this, "terminate", () => {
      var e, t;
      o.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.Z.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.Z.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null == (e = (t = this).onTerminate) || e.call(t), this.maybeFlushSeenItems(0)
    }), a(this, "handleFeedItemFlush", e => {
      let {
        id: t,
        force: n
      } = e;
      this._id === t && this.maybeFlushSeenItems(n)
    }), a(this, "handleFeedItemSeen", e => {
      var t, n;
      let r = e.id,
        i = e.timestampMillis,
        o = e.feedItemId;
      if (r !== this._id) return;
      if (this._paused) return void this._pausedFeedItemIds.add(o);
      let a = this.getTrackedFeedItem(o).maybeMarkSeen(i);
      null == (t = (n = this).onFeedItemSeen) || t.call(n, o, a)
    }), a(this, "handleFeedItemUnseen", e => {
      var t, n;
      let r = e.id,
        i = e.timestampMillis,
        o = e.feedItemId;
      if (r !== this._id) return;
      this._paused && this._pausedFeedItemIds.delete(o);
      let a = this.getTrackedFeedItem(o).maybeMarkUnseen(i);
      null == (t = (n = this).onFeedItemUnseen) || t.call(n, o, a), this.maybeFlushSeenItems()
    }), a(this, "getTrackedFeedItem", e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e])), a(this, "getVisibleFeedItemIds", () => new Set(Object.keys(this.trackedFeedItems).filter(e => {
      var t;
      return null == (t = this.trackedFeedItems[e]) ? true : t.isVisible()
    }))), a(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
    }), a(this, "clearPausedFeedItemIds", () => {
      this._pausedFeedItemIds = new Set, this._paused = false
    }), a(this, "pause", () => {
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
    }), a(this, "resume", () => {
      this._paused && (this._paused = false, this._pausedFeedItemIds.forEach(e => {
        this.handleFeedItemSeen({
          id: this._id,
          feedItemId: e,
          timestampMillis: Date.now(),
          type: "ANALYTICS_FEED_ITEM_SEEN"
        })
      }), this.clearPausedFeedItemIds())
    }), a(this, "handleReactNavigationFocus", e => {
      this._isReactNavigationFocused = e, this._isReactNavigationFocused ? this.resume() : this.pause()
    }), a(this, "handleWindowFocus", e => {
      this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
    }), this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = true, this._lastFlushTimeMillis = Date.now()
  }
}