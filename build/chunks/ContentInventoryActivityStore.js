/** Chunk was on web.js **/
/** chunk id: 574520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => b,
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
let g = new Set([Chunk681154.I.LISTENED_SESSION]),
  E = new Map;

function b(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function y(e) {
  return (0, _.I5)(e) ? null : (0, _.JM)(e) && e.author_type === s.t.USER ? u.A.getActivities(e.author_id).find(t => t.type === h.$pd.PLAYING && (0, f.P)(e) ? (0, p.fp)(e, t) : !!(t.type === h.$pd.LISTENING && (0, f.Tq)(e)) && (0, p.qb)(e, t)) : true
}

function O(e) {
  let t = new Set,
    n = new Set;
  for (let r of e) {
    let e = y(r.content);
    if (true !== e) {
      let i = b(r.content);
      n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function A(e) {
  let {
    feed: t
  } = e, {
    updatedKeys: n
  } = O(t.entries);
  return n.size > 0
}

function v() {
  E.clear()
}

function S() {
  let e = false,
    t = Array.from(E.keys()),
    n = new Set,
    r = new Set;
  for (let t of d.A.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: a
    } = O(n.size > 0 ? t.entries.filter(e => !n.has(b(e.content))) : t.entries);
    for (let e of i) n.add(e);
    for (let e of a) r.add(e);
    e = e || i.size > 0
  }
  for (let n of a().difference(t, [...r])) E.delete(n), e = true;
  return e
}
class I extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, u.A), this.syncWith([u.A], S)
  }
  getMatchingActivity(e) {
    return (0, _.I5)(e) ? null : E.get(b(e))
  }
  constructor(...e) {
    super(...e), m(this, "canRenderContent", e => !(0, _.I5)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
m(I, "displayName", "ContentInventoryActivityStore");
let T = new I(Chunk73153.h, {
  CONNECTION_OPEN: v,
  CONTENT_INVENTORY_SET_FEED: A
})