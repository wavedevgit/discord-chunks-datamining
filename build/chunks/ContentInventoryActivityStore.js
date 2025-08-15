/** Chunk was on web.js **/
/** chunk id: 719247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => m,
  Z: () => I
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk158776 = require("./158776.js"),
  Chunk146282 = require("./146282.js"),
  Chunk107866 = require("./107866.js"),
  Chunk561308 = require("./561308.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Set([Chunk876215.s.LISTENED_SESSION]),
  h = new Map;

function m(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function g(e) {
  return (0, d.C)(e, c.Z)
}

function E(e) {
  let t = new Set,
    n = new Set;
  for (let r of e) {
    let e = g(r.content);
    if (true !== e) {
      let i = m(r.content);
      n.add(i), e !== h.get(i) && (t.add(i), h.set(i, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function b(e) {
  let {
    feed: t
  } = e, {
    updatedKeys: n
  } = E(t.entries);
  return n.size > 0
}

function y() {
  h.clear()
}

function O() {
  let e = false,
    t = Array.from(h.keys()),
    n = new Set,
    r = new Set;
  for (let t of Chunk146282.Z.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: a
    } = E(require.size > 0 ? exports.entries.filter(e => !n.has(m(e.content))) : exports.entries);
    for (let e of Chunk392711) require.add(module);
    for (let e of a) r.add(module);
    e = module || Chunk392711.size > 0
  }
  for (let n of a().difference(exports, [...r])) h.delete(require), e = true;
  return module
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk146282.Z, Chunk158776.Z), this.syncWith([Chunk158776.Z], O)
  }
  getMatchingActivity(e) {
    return (0, f.n2)(e) ? null : h.get(m(e))
  }
  constructor(...e) {
    super(...e), _(this, "canRenderContent", e => !(0, f.n2)(e) && (!p.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
_(v, "displayName", "ContentInventoryActivityStore");
let I = new v(Chunk570140.Z, {
  CONNECTION_OPEN: y,
  CONTENT_INVENTORY_SET_FEED: b
})