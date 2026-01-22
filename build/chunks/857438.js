/** Chunk was on 46636 **/
/** chunk id: 857438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var Chunk311907 = require("./311907.js"),
  Chunk870391 = require("./870391.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function u() {
  return (0, r.yK)([i.A, o.default, l.A, s.A], () => {
    let e = i.A.getGroups(),
      t = [];
    for (let n of e) {
      let e = [];
      for (let t of n.userIds) {
        let n = o.default.getUser(t);
        if (null == n || !s.A.isFriend(t)) continue;
        let r = l.A.getActivities(t),
          i = s.A.getNickname(t);
        e.push({
          user: n,
          activities: r,
          nickname: i
        })
      }
      e.sort((e, t) => {
        var n, r;
        let i = l.A.getStatus(e.user.id),
          s = l.A.getStatus(t.user.id),
          o = i === a.clD.ONLINE || i === a.clD.IDLE || i === a.clD.DND,
          u = s === a.clD.ONLINE || s === a.clD.IDLE || s === a.clD.DND;
        if (o !== u) return u ? 1 : false;
        let c = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
          d = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
        return c.localeCompare(d)
      }), t.push({
        id: n.id,
        name: n.name,
        users: e
      })
    }
    return t
  })
}