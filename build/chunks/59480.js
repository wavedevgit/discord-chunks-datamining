/** Chunk was on web.js **/
/** chunk id: 59480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
class o {
  static fromMessage(e, t, n, r) {
    let [i, a] = o.deriveMemberUsers(e, n);
    return {
      id: n.id,
      channelId: t,
      message: n,
      members: i,
      users: a,
      connectionId: r
    }
  }
  static deriveMemberUsers(e, t) {
    var n, o, s, l;
    let c = new Set([null == (n = t.author) ? true : n.id, null == (o = t.interaction) ? true : o.user.id, ...null != (l = null == (s = t.mentions) ? true : s.map(e => e.id)) ? l : []]),
      u = [],
      d = [];
    for (let t of c) {
      if (null == t) continue;
      let n = i.default.getUser(t),
        o = r.ZP.getTrueMember(null != e ? e : a.lds, t);
      null != n && d.push(n), null != o && u.push(o)
    }
    return [u, d]
  }
}