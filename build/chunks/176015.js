/** Chunk was on web.js **/
/** chunk id: 176015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");
class s {
  static fromMessage(e, t, n, r) {
    let [i, a] = s.deriveMemberUsers(e, n);
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
    var n, s, o, l;
    let c = new Set([null == (s = t.author) ? true : s.id, null == (o = t.interaction) ? true : o.user.id, ...null != (n = null == (l = t.mentions) ? true : l.map(e => e.id)) ? n : []]),
      u = [],
      d = [];
    for (let t of c) {
      if (null == t) continue;
      let n = i.default.getUser(t),
        s = r.Ay.getTrueMember(null != e ? e : a.dJq, t);
      null != n && d.push(n), null != s && u.push(s)
    }
    return [u, d]
  }
}