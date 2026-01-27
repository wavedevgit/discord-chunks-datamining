/** Chunk was on web.js **/
/** chunk id: 574520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => y,
  A: () => T
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk6161 = require("./6161.js"),
  Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk290863 = require("./290863.js"),
  Chunk99753 = require("./99753.js"),
  Chunk20805 = require("./20805.js"),
  Chunk83971 = require("./83971.js"),
  Chunk583846 = require("./583846.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = new Set([Chunk681154.ContentInventoryEntryType.LISTENED_SESSION]),
  E = new Map;

function y(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function b(e) {
  return (0, _.I5)(e) ? null : (0, _.JM)(e) && e.author_type === o.ContentInventoryAuthorType.USER ? u.A.getActivities(e.author_id).find(t => t.type === h.$pd.PLAYING && (0, f.P)(e) ? (0, p.fp)(e, t) : !!(t.type === h.$pd.LISTENING && (0, f.Tq)(e)) && (0, p.qb)(e, t)) : true
}

function O(e) {
  let t = new Set,
    n = new Set;
  for (let r of e) {
    let e = b(r.content);
    if (true !== e) {
      let i = y(r.content);
      n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function v(e) {
  let {
    feed: t
  } = e, {
    updatedKeys: n
  } = O(t.entries);
  return n.size > 0
}

function A() {
  E.clear()
}

function I() {
  let e = false,
    t = Array.from(E.keys()),
    n = new Set,
    r = new Set;
  for (let t of d.A.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: a
    } = O(n.size > 0 ? t.entries.filter(e => !n.has(y(e.content))) : t.entries);
    for (let e of i) n.add(e);
    for (let e of a) r.add(e);
    e = e || i.size > 0
  }
  for (let n of a().difference(t, [...r])) E.delete(n), e = true;
  return e
}
class S extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, u.A), this.syncWith([u.A], I)
  }
  getMatchingActivity(e) {
    return (0, _.I5)(e) ? null : E.get(y(e))
  }
  constructor(...e) {
    super(...e), m(this, "canRenderContent", e => !(0, _.I5)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
m(S, "displayName", "ContentInventoryActivityStore");
let T = new S(Chunk73153.h, {
  CONNECTION_OPEN: A,
  CONTENT_INVENTORY_SET_FEED: v
})