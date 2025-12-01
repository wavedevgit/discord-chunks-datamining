/** Chunk was on web.js **/
/** chunk id: 719801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 15,
  c = new Map;

function u(e) {
  var t;
  let {
    guildId: n,
    data: r
  } = e;
  if (null == n) returnfalse;
  let i = false,
    a = [...null != (t = c.get(n)) ? t : []],
    s = new Set(a);
  return r.forEach(e => {
    e.messages.forEach(e => {
      let [t] = e, n = (0, o.e5)(t);
      !s.has(n.author.id) && s.size < l && (s.add(n.author.id), a.push(n.author.id), i = true)
    })
  }), i && c.set(n, a), i
}

function d() {
  c = new Map
}
let f = [];
class p extends(r = Chunk442837.ZP.Store) {
  getRecentMessageAuthorIds(e) {
    var t;
    return null != (t = c.get(e)) ? t : f
  }
}
s(p, "displayName", "SearchRecentMessageStore");
let _ = new p(Chunk570140.Z, {
  SEARCH_MESSAGES_SUCCESS: u,
  SEARCH_RECENT_MESSAGES_CLEAR: d,
  CONNECTION_OPEN: d
})