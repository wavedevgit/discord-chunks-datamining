/** Chunk was on web.js **/
/** chunk id: 146282, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk180335 = require("./180335.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Map,
  u = new Map,
  d = new Map,
  f = false;

function p(e) {
  e(c), c = new Map(c)
}

function _(e) {
  let {
    feedId: t,
    feed: n
  } = e;
  p(e => e.set(t, n)), d.set(t, new Date)
}

function m(e) {
  let {
    feedId: t,
    state: n
  } = e;
  u.set(t, n)
}

function h() {
  c = new Map
}

function g(e) {
  let {
    feedId: t
  } = e;
  if (!c.has(t)) returnfalse;
  p(e => e.delete(t))
}

function E(e) {
  let {
    filters: t
  } = e;
  r = t
}

function b() {
  f = !f
}
class y extends(i = Chunk442837.ZP.Store) {
  getFeeds() {
    return c
  }
  getFeed(e) {
    return c.get(e)
  }
  getFeedState(e) {
    return u.get(e)
  }
  getLastFeedFetchDate(e) {
    return d.get(e)
  }
  getFilters() {
    return r
  }
  getFeedRequestId(e) {
    var t;
    return null == (t = this.getFeed(e)) ? true : t.request_id
  }
  getDebugImpressionCappingDisabled() {
    return f
  }
  getMatchingInboxEntry(e) {
    let {
      activity: t,
      userId: n,
      feedId: r
    } = e, i = this.getFeed(r);
    if (null == i || null == t) return;
    let a = i.entries.reduce((e, t) => t.content.author_id === n ? [...e, t.content] : [...e], []);
    return (0, s.vu)(a, t)
  }
}
l(y, "displayName", "ContentInventoryStore");
let O = new y(Chunk570140.Z, {
  CONNECTION_OPEN: h,
  CONTENT_INVENTORY_SET_FEED: _,
  CONTENT_INVENTORY_SET_FEED_STATE: m,
  CONTENT_INVENTORY_SET_FILTERS: E,
  CONTENT_INVENTORY_CLEAR_FEED: g,
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: b
})