/** Chunk was on web.js **/
/** chunk id: 99753, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => O
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk83971 = require("./83971.js");

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

function h(e) {
  let {
    feedId: t,
    state: n
  } = e;
  u.set(t, n)
}

function m() {
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

function y() {
  f = !f
}
class b extends(i = Chunk311907.Ay.Store) {
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
    return (0, s.nU)(a, t)
  }
}
l(b, "displayName", "ContentInventoryStore");
let O = new b(Chunk73153.h, {
  CONNECTION_OPEN: m,
  CONTENT_INVENTORY_SET_FEED: _,
  CONTENT_INVENTORY_SET_FEED_STATE: h,
  CONTENT_INVENTORY_SET_FILTERS: E,
  CONTENT_INVENTORY_CLEAR_FEED: g,
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: y
})