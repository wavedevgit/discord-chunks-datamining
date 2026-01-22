/** Chunk was on web.js **/
/** chunk id: 268988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js");

function o(e, t, n) {
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
    o = new Set(a);
  return r.forEach(e => {
    e.messages.forEach(e => {
      let [t] = e, n = (0, s.rh)(t);
      !o.has(n.author.id) && o.size < l && (o.add(n.author.id), a.push(n.author.id), i = true)
    })
  }), i && c.set(n, a), i
}

function d() {
  c = new Map
}
let f = [];
class p extends(r = Chunk311907.Ay.Store) {
  getRecentMessageAuthorIds(e) {
    var t;
    return null != (t = c.get(e)) ? t : f
  }
}
o(p, "displayName", "SearchRecentMessageStore");
let _ = new p(Chunk73153.h, {
  SEARCH_MESSAGES_SUCCESS: u,
  SEARCH_RECENT_MESSAGES_CLEAR: d,
  CONNECTION_OPEN: d
})