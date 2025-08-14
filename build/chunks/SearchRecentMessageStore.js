/** Chunk was on 1272 **/
/** chunk id: 719801, original params: e,t,n (module,exports,require) **/
require("./388685.js"), require("./539854.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js");
let s = new Map,
  c = new Map;

function u() {
  s = new Map, c = new Map
}
let d = [],
  p = [];
class f extends(r = Chunk442837.ZP.Store) {
  getRecentMessageAuthorIds(e) {
    var t;
    return null != (t = s.get(e)) ? t : d
  }
  getRecentMessageChannelIds(e) {
    var t;
    return null != (t = c.get(e)) ? t : p
  }
}(i = "displayName") in f ? Object.defineProperty(f, i, {
  value: "SearchRecentMessageStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = "SearchRecentMessageStore", new f(Chunk570140.Z, {
  SEARCH_MESSAGES_SUCCESS: function(e) {
    var t, n;
    let {
      guildId: r,
      data: i
    } = e;
    if (null == r) returnfalse;
    let l = false,
      a = false,
      u = [...null != (t = s.get(r)) ? t : []],
      d = new Set(u),
      p = [...null != (n = c.get(r)) ? n : []],
      f = new Set(p);
    return i.forEach(e => {
      e.messages.forEach(e => {
        let [t] = e, n = (0, o.e5)(t);
        !d.has(n.author.id) && d.size < 15 && (d.add(n.author.id), u.push(n.author.id), l = true), !f.has(n.channel_id) && f.size < 15 && (f.add(n.channel_id), p.push(n.channel_id), a = true)
      })
    }), l && s.set(r, u), a && c.set(r, p), l || a
  },
  SEARCH_RECENT_MESSAGES_CLEAR: u,
  CONNECTION_OPEN: u
})