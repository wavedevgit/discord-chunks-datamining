/** Chunk was on 29709 **/
/** chunk id: 605591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => u
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk442837 = require("./442837.js"),
  Chunk643327 = require("./643327.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function u() {
  return (0, Chunk442837.Wu)([Chunk643327.Z, Chunk594174.default, Chunk158776.Z, Chunk699516.Z], () => {
    let e = Chunk643327.Z.getGroups(),
      t = [];
    for (let n of module) {
      let e = [];
      for (let t of require.userIds) {
        let n = Chunk594174.default.getUser(exports);
        if (null == require || !Chunk699516.Z.isFriend(exports)) continue;
        let r = Chunk158776.Z.getActivities(exports),
          i = Chunk699516.Z.getNickname(exports);
        module.push({
          user: require,
          activities: Chunk442837,
          nickname: Chunk643327
        })
      }
      module.sort((e, t) => {
        var n, r;
        let i = l.Z.getStatus(e.user.id),
          s = l.Z.getStatus(t.user.id),
          o = i === a.Skl.ONLINE || i === a.Skl.IDLE || i === a.Skl.DND,
          u = s === a.Skl.ONLINE || s === a.Skl.IDLE || s === a.Skl.DND;
        if (o !== u) return u ? 1 : false;
        let c = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
          d = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
        return c.localeCompare(d)
      }), exports.push({
        id: require.id,
        name: require.name,
        users: module
      })
    }
    return exports
  })
}