/** Chunk was on 1272 **/
/** chunk id: 719801, original params: e,t,n (module,exports,require) **/
require("./388685.js"), require("./539854.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js");
let c = new Map,
  u = new Map;

function d() {
  c = new Map, u = new Map
}
let p = [],
  f = [];
class h extends(r = Chunk442837.ZP.Store) {
  getRecentMessageAuthorIds(e) {
    var t;
    return null != (t = c.get(e)) ? t : p
  }
  getRecentMessageChannelIds(e) {
    var t;
    return null != (t = u.get(e)) ? t : f
  }
}
l = "SearchRecentMessageStore", (i = "displayName") in h ? Object.defineProperty(h, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = l, new h(Chunk570140.Z, {
  SEARCH_MESSAGES_SUCCESS: function(e) {
    var t, n;
    let {
      guildId: r,
      data: i
    } = e;
    if (null == r) returnfalse;
    let l = false,
      a = false,
      o = [...null != (t = c.get(r)) ? t : []],
      d = new Set(o),
      p = [...null != (n = u.get(r)) ? n : []],
      f = new Set(p);
    return i.forEach(e => {
      e.messages.forEach(e => {
        let [t] = e, n = (0, s.e5)(t);
        !d.has(n.author.id) && d.size < 15 && (d.add(n.author.id), o.push(n.author.id), l = true), !f.has(n.channel_id) && f.size < 15 && (f.add(n.channel_id), p.push(n.channel_id), a = true)
      })
    }), l && c.set(r, o), a && u.set(r, p), l || a
  },
  SEARCH_RECENT_MESSAGES_CLEAR: d,
  CONNECTION_OPEN: d
})