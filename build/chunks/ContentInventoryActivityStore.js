/** Chunk was on web.js **/
/** chunk id: 719247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => b,
  Z: () => C
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk158776 = require("./158776.js"),
  Chunk146282 = require("./146282.js"),
  Chunk26033 = require("./26033.js"),
  Chunk180335 = require("./180335.js"),
  Chunk561308 = require("./561308.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = new Set([Chunk876215.s.LISTENED_SESSION]),
  E = new Map;

function b(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function y(e) {
  return (0, _.n2)(e) ? null : (0, _.kr)(e) && e.author_type === a.i.USER ? u.Z.getActivities(e.author_id).find(t => t.type === m.IIU.PLAYING && (0, f.m9)(e) ? (0, p.cN)(e, t) : !!(t.type === m.IIU.LISTENING && (0, f.dU)(e)) && (0, p.pB)(e, t)) : true
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

function v(e) {
  let {
    feed: t
  } = e, {
    updatedKeys: n
  } = O(t.entries);
  return n.size > 0
}

function S() {
  E.clear()
}

function I() {
  let e = false,
    t = Array.from(E.keys()),
    n = new Set,
    r = new Set;
  for (let t of Chunk146282.Z.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: o
    } = O(require.size > 0 ? exports.entries.filter(e => !n.has(b(e.content))) : exports.entries);
    for (let e of Chunk392711) require.add(module);
    for (let e of o) r.add(module);
    e = module || Chunk392711.size > 0
  }
  for (let n of o().difference(exports, [...r])) E.delete(require), e = true;
  return module
}
class T extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk146282.Z, Chunk158776.Z), this.syncWith([Chunk158776.Z], I)
  }
  getMatchingActivity(e) {
    return (0, _.n2)(e) ? null : E.get(b(e))
  }
  constructor(...e) {
    super(...e), h(this, "canRenderContent", e => !(0, _.n2)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
h(T, "displayName", "ContentInventoryActivityStore");
let C = new T(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  CONTENT_INVENTORY_SET_FEED: v
})