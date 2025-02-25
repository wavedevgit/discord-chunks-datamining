/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Z: () => y
}), n(47120);
var i, o = n(442837),
  a = n(570140),
  s = n(180335);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new Map,
  u = new Map,
  d = new Map,
  f = !1;

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
  if (!c.has(t)) return !1;
  p(e => e.delete(t))
}

function E(e) {
  let {
    filters: t
  } = e;
  r = t
}

function v() {
  f = !f
}
class b extends(i = o.ZP.Store) {
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
    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
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
    let o = i.entries.reduce((e, t) => t.content.author_id === n ? [...e, t.content] : [...e], []);
    return (0, s.vu)(o, t)
  }
}
l(b, "displayName", "ContentInventoryStore");
let y = new b(a.Z, {
  CONNECTION_OPEN: m,
  CONTENT_INVENTORY_SET_FEED: _,
  CONTENT_INVENTORY_SET_FEED_STATE: h,
  CONTENT_INVENTORY_SET_FILTERS: E,
  CONTENT_INVENTORY_CLEAR_FEED: g,
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: v
})