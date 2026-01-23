/** Chunk was on 21968 **/
/** chunk id: 604870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => f
}), require("./321073.js"), require("./896048.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk633334 = require("./633334.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  let t = (0, a.bG)([d.A], () => d.A.getGuild(e));
  l()(null != t, "guild must be present to be editing its integration settings");
  let n = (0, a.bG)([u.A], () => u.A.getHighestRole(t)),
    r = (0, a.yK)([o.Ay], () => o.Ay.getMembers(e), [e]),
    f = (0, a.cf)([p.default], () => p.default.getUsers()),
    j = (0, a.bG)([c.A], () => c.A.getSortedRoles(e), [e]),
    O = i.useMemo(() => {
      let e = [];
      for (let n of r) {
        let i = f[n.userId];
        if (null == i || i.bot) continue;
        let r = i.id !== t.ownerId && !m.$3({
          permission: b.xBc.ADMINISTRATOR,
          user: i,
          context: t
        }) && u.A.canManageUser(b.xBc.USE_APPLICATION_COMMANDS, i, t);
        e.push({
          id: i.id,
          canManage: r,
          nick: n.nick,
          username: i.username
        })
      }
      return e
    }, [t, r, f]),
    y = e => {
      var t;
      return e.managed && (null == (t = e.tags) ? true : t.bot_id) != null
    },
    A = i.useMemo(() => {
      let e = [];
      for (let i of j) {
        if (y(i)) continue;
        let r = !(0, s._m)(i, b.xBc.ADMINISTRATOR) && u.A.isRoleHigher(t, n, i),
          l = {
            id: i.id,
            name: i.name,
            canManage: r
          };
        (0, s.Oy)(i) ? e.unshift(l): e.push(l)
      }
      return e
    }, [j, t, n]),
    [v, _] = i.useState(""),
    N = i.useMemo(() => {
      var t;
      let n = (t = v).startsWith("@") ? t.substr(1) : t,
        i = v.startsWith("@") ? A.filter(t => t.id === e) : A;
      return {
        members: (0, g.I)(O, h, n),
        roles: (0, g.I)(i, x, n)
      }
    }, [e, O, v, A]);
  return {
    query: v,
    results: N,
    setQuery: _,
    unfilteredCount: N.members.length + N.roles.length
  }
}

function h(e) {
  let t = [e.username];
  return (null == e ? true : e.nick) != null && t.push(e.nick), {
    id: e.id,
    names: t
  }
}

function x(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}